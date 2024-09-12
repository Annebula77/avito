import { type AdvertisementModel } from '../../models/advertismentSchema';
import { useState } from 'react';
import { useUpdateAdvertisementMutation } from '../../store/queries/advertisementsApi';
import { validateAdvertForm } from '../../utils/functions/validateAdvertForm';

export interface AdvertComponentProps {
  advert: AdvertisementModel;
}
const useAdvertComponent = ({ advert }: AdvertComponentProps) => {
  const [open, setOpen] = useState(false);
  const [localAdvert, setLocalAdvert] = useState(advert);
  const [updateAdvertisement] = useUpdateAdvertisementMutation();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>(
    'error'
  );
  const [errorMessages, setErrorMessages] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    setErrorMessages(prevErrors => ({
      ...prevErrors,
      [id.replace('-input', '')]: '',
    }));

    setLocalAdvert(prevState => ({
      ...prevState,
      [id.replace('-input', '')]: id === 'price-input' ? Number(value) : value,
    }));
  };

  const handleBlur = async (
    field: keyof AdvertisementModel,
    value: string | number
  ) => {
    const enrichedAdvert = { ...localAdvert, [field]: value };

    const { valid, errors } = validateAdvertForm(enrichedAdvert);

    if (!valid) {
      setErrorMessages(prevErrors => ({
        ...prevErrors,
        [field]: errors[field as keyof typeof errors] || '',
      }));
      setSnackbarMessage('Проверьте корректность данных');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    setErrorMessages(prevErrors => ({
      ...prevErrors,
      [field]: '',
    }));

    try {
      await updateAdvertisement({ id: advert.id, [field]: value }).unwrap();
      setSnackbarMessage('Поле успешно обновлено');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      let errorMessage = 'Ошибка при обновлении';

      if (error.data && error.data.message) {
        errorMessage = error.data.message;
      }

      if (error.data && Array.isArray(error.data.errors)) {
        errorMessage = error.data.errors
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .map((err: any) => err.message)
          .join(', ');
      }

      setSnackbarMessage(errorMessage);
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCloseSnackbar = () => setOpenSnackbar(false);

  const handleImageSubmit = (newImageUrl: string) => {
    handleBlur('imageUrl', newImageUrl);
    setLocalAdvert(prevAdvert => ({
      ...prevAdvert,
      imageUrl: newImageUrl,
    }));
    setOpen(false);
  };
  return {
    open,
    openSnackbar,
    snackbarMessage,
    snackbarSeverity,
    localAdvert,
    errorMessages,
    handleChange,
    handleBlur,
    handleOpen,
    handleClose,
    handleCloseSnackbar,
    handleImageSubmit,
  };
};

export default useAdvertComponent;
