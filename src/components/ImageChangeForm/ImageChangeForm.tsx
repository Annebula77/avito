import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from '@mui/material';
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

const ImageChangeForm = () => {
  return (
    <Card
      sx={{
        minWidth: 200,
        maxWidth: 900,
        padding: { md: '20px 80px', xs: '20px' },
      }}
    >
      <CardContent>
        <Typography variant="h2" align="center" sx={{ marginBottom: '40px' }}>
          Изменить изображение
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
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ marginTop: '40px' }}
          >
            изменить
          </Button>
        </StyledForm>
      </CardContent>
    </Card>
  );
};

export default ImageChangeForm;
