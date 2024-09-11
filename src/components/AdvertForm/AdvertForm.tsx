import {
  Alert,
  Button,
  Card,
  CardContent,
  InputAdornment,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import CurrencyRubleRoundedIcon from '@mui/icons-material/CurrencyRubleRounded';
import styled from 'styled-components';
import { media } from '../../styling/breakpoints';
import useAdvertFrom, { type AdvertFormProps } from './useAdvertForm';

const StyledForm = styled.form`
  margin: 0;
  padding: 0;
  width: 100%;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  ${media.md`
    min-width: 400px;
  `}

  ${media.md`
    min-width: 600px;
  `}
`;

const AdvertForm: React.FC<AdvertFormProps> = ({ onSubmit }) => {
  const {
    handleSubmit,
    errorMessages,
    handleChange,
    isLoading,
    openSnackbar,
    handleCloseSnackbar,
    snackbarSeverity,
    snackbarMessage,
  } = useAdvertFrom({ onSubmit });

  return (
    <Card sx={{ minWidth: 240, maxWidth: 900, padding: '40px' }}>
      <CardContent>
        <Typography variant="h2" align="center" sx={{ marginBottom: '40px' }}>
          Добавить объявление
        </Typography>
        <StyledForm onSubmit={handleSubmit}>
          <TextField
            fullWidth
            error={!!errorMessages.imageUrl}
            helperText={errorMessages.imageUrl}
            required
            id="imageUrl-input"
            label="Ссылка на изображение"
            defaultValue="/filling.webp"
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            error={!!errorMessages.name}
            helperText={errorMessages.name}
            required
            id="name-input"
            label="Наименование"
            placeholder="крутая вещь"
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            error={!!errorMessages.description}
            helperText={errorMessages.description}
            required
            id="description-input"
            label="Описание"
            placeholder="и вот почему"
            multiline
            maxRows={10}
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            error={!!errorMessages.price}
            helperText={errorMessages.price}
            required
            id="price-input"
            label="Цена"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <CurrencyRubleRoundedIcon />
                  </InputAdornment>
                ),
              },
            }}
            variant="standard"
            placeholder="Много денег"
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ marginTop: '40px' }}
            disabled={isLoading}
          >
            {isLoading ? 'Создание...' : 'Создать'}
          </Button>
        </StyledForm>
      </CardContent>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default AdvertForm;
