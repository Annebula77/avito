import { Typography } from '@mui/material';

const getStatusText = (status: number): string => {
  switch (status) {
    case 0:
      return 'Заказ создан';
    case 1:
      return 'Заказ в работе';
    case 2:
      return 'Заказ готов к выдаче';
    case 3:
      return 'Заказ выполнен';
    case 4:
      return 'Оформлен возврат на заказ';
    default:
      return 'Неизвестный статус заказа';
  }
};
const getStatusColor = (status: number): string => {
  switch (status) {
    case 0:
      return 'gray';
    case 1:
      return 'blue';
    case 2:
      return 'orange';
    case 3:
      return 'green';
    case 4:
      return 'red';
    default:
      return 'black';
  }
};

const StatusComponent = ({ status }: { status: number }) => {
  return (
    <Typography variant="h5" sx={{ color: getStatusColor(status) }}>
      {getStatusText(status)}
    </Typography>
  );
};

export default StatusComponent;
