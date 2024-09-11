import { useState } from 'react';
import { type AdvertisementModel } from '../../models/advertismentSchema';
import { validateAdvertForm } from '../../utils/functions/validateAdvertForm';
import { useCreateAdvertisementMutation } from '../../store/queries/advertisementsApi';

export interface AdvertFormProps {
  onSubmit: () => void;
}

const useAdvertFrom = ({ onSubmit }: AdvertFormProps) => {
  const initialState: Partial<AdvertisementModel> = {
    id: '',
    name: '',
    description: '',
    price: 0,
    imageUrl: '',
  };

  const [advert, setAdvert] = useState(initialState);
  const [errorMessages, setErrorMessages] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [createAdvertisement, { isLoading }] = useCreateAdvertisementMutation();
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>(
    'error'
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    setErrorMessages(prevErrors => ({
      ...prevErrors,
      [id.replace('-input', '')]: '',
    }));

    setAdvert(prevState => ({
      ...prevState,
      [id.replace('-input', '')]: id === 'price-input' ? Number(value) : value,
    }));
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enrichedAdvert: AdvertisementModel = {
      ...advert,
      id: advert.id || Date.now().toString(),
      views: advert.views ?? 0,
      likes: advert.likes ?? 0,
      createdAt: advert.createdAt || new Date().toISOString(),
      name: advert.name || '',
      description: advert.description || '',
      price: advert.price || 0,
      imageUrl: advert.imageUrl || '',
    };

    const { valid, errors } = validateAdvertForm(enrichedAdvert);

    setErrorMessages(prev => ({
      ...prev,
      ...errors,
    }));

    if (!valid) {
      setSnackbarMessage('Проверьте корректность данных');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    try {
      await createAdvertisement(enrichedAdvert).unwrap();
      setSnackbarMessage('Объявление успешно создано');
      setSnackbarSeverity('success');
    } catch (error) {
      setSnackbarMessage(`'Ошибка при создании объявления', ${error}`);
      setSnackbarSeverity('error');
    }

    setOpenSnackbar(true);
    onSubmit();
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  return {
    handleSubmit,
    errorMessages,
    handleChange,
    isLoading,
    openSnackbar,
    handleCloseSnackbar,
    snackbarSeverity,
    snackbarMessage,
  };
};

export default useAdvertFrom;
