import {
  Box,
  Button,
  Card,
  CardContent,
  InputAdornment,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import StackedBarChartRoundedIcon from '@mui/icons-material/StackedBarChartRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import CurrencyRubleRoundedIcon from '@mui/icons-material/CurrencyRubleRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import { type AdvertisementModel } from '../../models/advertismentSchema';
import styled from 'styled-components';
import { media } from '../../styling/breakpoints';
import { ReactionWrapper, StyledSpan } from '../../styling/stylesToReuse';
import { formatDate } from '../../utils/functions/formatDate';
import { useState } from 'react';
import ImageChangeForm from '../ImageChangeForm/ImageChangeForm';
import { formatPrice } from '../../utils/functions/formatPrice';

const StyledFigure = styled.figure`
  margin: 0 0 20px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;

    ${media.md` 
      width: 400px;
      height: 400px;
    `}
  }

  ${media.md` 
  flex-direction: row;
  justify-content: space-between;
    `}
`;

const StyledFigureCaption = styled.figcaption`
  margin: 0 0 auto auto;
  padding: 0;
  display: flex;
  max-width: fit-content;
  flex-direction: column;
  align-items: flex-start;

  gap: 30px;

  ${media.md` 
   
    align-items: flex-end;
    `}
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 10px;
`;

const ActionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
`;

const StyledButton = styled.button`
  display: flex;
  margin: 0;
  padding: 0;
  background-color: none;
  outline: none;
  border: none;
  cursor: pointer;
  transition: opacity 0.4s ease;
  &:hover {
    opacity: 0.6;
  }
`;
interface AdvertComponentProps {
  advert: AdvertisementModel;
}
const AdvertComponent: React.FC<AdvertComponentProps> = ({ advert }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card
      sx={{
        width: '100%',
        marginTop: '60px',
        maxWidth: '1300px',
        padding: '20px 40px 40px',
      }}
    >
      <CardContent>
        <StyledFigure>
          <Tooltip title="Загрузить новое изображение" placement="top">
            <StyledButton onClick={handleOpen}>
              <img
                src={advert.imageUrl}
                alt={advert.name}
                loading="lazy"
                decoding="async"
              />
            </StyledButton>
          </Tooltip>
          <StyledFigureCaption>
            <Typography variant="h4">
              <StyledSpan color="primary">Создан: </StyledSpan>
              {formatDate(advert.createdAt)}
            </Typography>
            <Tooltip title="Изменить наименование" placement="top">
              <TextField
                fullWidth
                error
                id="name-input"
                value={advert.name}
                variant="standard"
                slotProps={{
                  input: {
                    sx: {
                      fontFamily: 'Jost',
                      fontSize: { xs: '24px', md: '36px' },
                      fontStyle: 'normal',
                      fontWeight: 600,
                      lineHeight: 'normal',
                      color: 'rgba(76, 81, 74, 1)',
                      overflow: { xs: 'hidden' },
                      whiteSpace: { xs: 'nowrap' },
                      textOverflow: { xs: 'ellipsis' },
                    },
                  },
                }}
              />
            </Tooltip>
            <Tooltip title="Изменить стоимость" placement="top">
              <PriceWrapper>
                <Typography
                  variant="h2"
                  sx={{ color: 'rgba(255, 75, 107, 1)' }}
                >
                  Цена:
                </Typography>
                <TextField
                  fullWidth
                  error
                  id="price-input"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <CurrencyRubleRoundedIcon />
                        </InputAdornment>
                      ),
                      sx: {
                        fontFamily: 'Jost',
                        fontSize: { xs: '18px', md: '24px' },
                        fontStyle: 'normal',
                        fontWeight: 600,
                        lineHeight: 'normal',
                        color: 'primary.main',
                      },
                    },
                  }}
                  variant="standard"
                  value={formatPrice(advert.price)}
                />
              </PriceWrapper>
            </Tooltip>
            <ActionWrapper>
              <ReactionWrapper>
                <StackedBarChartRoundedIcon color="primary" />
                <Typography variant="h4">{advert.views}</Typography>
              </ReactionWrapper>
              <ReactionWrapper>
                <FavoriteRoundedIcon sx={{ color: 'rgba(255, 75, 107, 1)' }} />
                <Typography variant="h4">{advert.likes}</Typography>
              </ReactionWrapper>
              <Tooltip title="Список заказов с товаром" placement="top">
                <Button
                  type="button"
                  variant="contained"
                  aria-label="Список заказов с этим товаром"
                  // eslint-disable-next-line prettier/prettier
                  onClick={() => { }}
                  sx={{
                    padding: '16px 40px',
                  }}
                  onMouseDown={(
                    event: React.SyntheticEvent<HTMLButtonElement>
                  ) => {
                    event.stopPropagation();
                    event.preventDefault();
                  }}
                >
                  <LocalMallRoundedIcon />
                </Button>
              </Tooltip>
            </ActionWrapper>
          </StyledFigureCaption>
        </StyledFigure>
        <Tooltip title="Изменить описание товара" placement="top">
          <TextField
            fullWidth
            error
            id="description-input"
            multiline
            maxRows={10}
            variant="outlined"
            value={advert.description}
            slotProps={{
              input: {
                sx: {
                  fontFamily: 'Jost',
                  fontSize: { xs: '16px', md: '24px' },
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal',
                  color: 'rgba(76, 81, 74, 1)',
                  padding: '10px 40px 20px',
                },
              },
            }}
          />
        </Tooltip>
      </CardContent>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-change-image"
        aria-describedby="modal-change-image"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box>
          <ImageChangeForm />
        </Box>
      </Modal>
    </Card>
  );
};

export default AdvertComponent;
