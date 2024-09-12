import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from '@mui/material';
import styled from 'styled-components';
import { media } from '../../styling/breakpoints';
import { useState } from 'react';

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
interface ImageChangeFormProps {
  onSubmit: (imageUrl: string) => void;
  initialImageUrl: string;
}

const ImageChangeForm: React.FC<ImageChangeFormProps> = ({
  onSubmit,
  initialImageUrl,
}) => {
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!imageUrl || imageUrl.trim() === '') {
      setErrorMessage('Ссылка на изображение не может быть пустой');
      return;
    }
    onSubmit(imageUrl);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(event.target.value);
    setErrorMessage('');
  };

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
        <StyledForm onSubmit={handleSubmit}>
          <TextField
            fullWidth
            error={!!errorMessage}
            helperText={errorMessage}
            required
            id="image-input"
            label="Ссылка на изображение"
            value={imageUrl}
            onChange={handleChange}
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
