import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  InputAdornment,
  Modal,
  Snackbar,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import StackedBarChartRoundedIcon from '@mui/icons-material/StackedBarChartRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import CurrencyRubleRoundedIcon from '@mui/icons-material/CurrencyRubleRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import { ReactionWrapper, StyledSpan } from '../../styling/stylesToReuse';
import { formatDate } from '../../utils/functions/formatDate';
import ImageChangeForm from '../ImageChangeForm/ImageChangeForm';

import {
  ActionWrapper,
  PriceWrapper,
  StyledButton,
  StyledFigure,
  StyledFigureCaption,
} from './AdvertComponentStyles';
import useAdvertComponent, {
  type AdvertComponentProps,
} from './useAdvertComponent';

const AdvertComponent: React.FC<AdvertComponentProps> = ({ advert }) => {
  const {
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
  } = useAdvertComponent({ advert });

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
                src={localAdvert.imageUrl}
                alt={localAdvert.name}
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
                error={!!errorMessages.name}
                helperText={errorMessages.name}
                id="name-input"
                value={localAdvert.name}
                onChange={handleChange}
                onBlur={() => handleBlur('name', localAdvert.name)}
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
                  error={!!errorMessages.price}
                  helperText={errorMessages.price}
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
                  value={localAdvert.price}
                  variant="standard"
                  onChange={handleChange}
                  onBlur={() => handleBlur('price', localAdvert.price)}
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
            error={!!errorMessages.description}
            helperText={errorMessages.description}
            id="description-input"
            multiline
            maxRows={10}
            variant="outlined"
            value={localAdvert.description}
            onChange={handleChange}
            onBlur={() => handleBlur('description', localAdvert.description)}
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
          <ImageChangeForm
            initialImageUrl={localAdvert.imageUrl}
            onSubmit={handleImageSubmit}
          />
        </Box>
      </Modal>
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

export default AdvertComponent;
