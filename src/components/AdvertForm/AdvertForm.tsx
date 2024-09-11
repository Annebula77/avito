import {
  Button,
  Card,
  CardContent,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import CurrencyRubleRoundedIcon from '@mui/icons-material/CurrencyRubleRounded';
import styled from 'styled-components';
import { media } from '../../styling/breakpoints';

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

const AdvertForm = () => {
  return (
    <Card sx={{ minWidth: 240, maxWidth: 900, padding: '40px' }}>
      <CardContent>
        <Typography variant="h2" align="center" sx={{ marginBottom: '40px' }}>
          Добавить объявление
        </Typography>
        <StyledForm>
          <TextField
            fullWidth
            error
            required
            id="image-input"
            label="Ссылка на изображение"
            defaultValue="/filling.webp"
            variant="standard"
          />
          <TextField
            fullWidth
            error
            required
            id="name-input"
            label="Наименование"
            placeholder="крутая вещь"
            variant="standard"
          />
          <TextField
            fullWidth
            error
            required
            id="description-input"
            label="Описание"
            placeholder="и вот почему"
            multiline
            maxRows={10}
            variant="standard"
          />
          <TextField
            fullWidth
            error
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
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ marginTop: '40px' }}
          >
            Создать
          </Button>
        </StyledForm>
      </CardContent>
    </Card>
  );
};

export default AdvertForm;
