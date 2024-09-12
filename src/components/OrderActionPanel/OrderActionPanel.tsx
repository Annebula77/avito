import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import CurrencyRubleRoundedIcon from '@mui/icons-material/CurrencyRubleRounded';
import styled from 'styled-components';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { useState } from 'react';

const ActionContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

const SortingTypeContainer = styled.div`
  margin: 0;
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 1px solid rgba(229, 229, 229, 1);
  border-radius: 40px;
`;

interface OrderActionPanelProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSortChange?: (field: 'total', order: 'asc' | 'desc') => void;
  currentStatus: number;
}

const OrderActionPanel: React.FC<OrderActionPanelProps> = ({
  onChange,
  onSortChange,
  currentStatus,
}) => {
  const [activeSort, setActiveSort] = useState<'asc' | 'desc' | null>(null);

  const handleSortClick = (order: 'asc' | 'desc') => {
    setActiveSort(order);
    onSortChange?.('total', order);
  };

  return (
    <Card
      sx={{
        minWidth: '240px',
        maxWidth: '900px',
        padding: '0 20px',
        width: 'fit-content',
      }}
    >
      <CardContent sx={{ padding: '20px' }}>
        <FormControl>
          <FormLabel id="status-buttons-group-label">Статус</FormLabel>
          <RadioGroup
            aria-labelledby="status-buttons-group-label"
            name="status-buttons-group"
            onChange={onChange}
            value={currentStatus}
          >
            <FormControlLabel
              value={-1}
              control={<Radio />}
              label="Все статусы"
            />
            <FormControlLabel
              value={0}
              control={<Radio />}
              label="Заказ создан"
            />
            <FormControlLabel
              value={1}
              control={<Radio />}
              label="Заказ в работе"
            />
            <FormControlLabel
              value={2}
              control={<Radio />}
              label="Заказ готов к выдаче"
            />
            <FormControlLabel
              value={3}
              control={<Radio />}
              label="Заказ выполнен"
            />
            <FormControlLabel
              value={4}
              control={<Radio />}
              label="Оформлен возврат на заказ"
            />
          </RadioGroup>
        </FormControl>
        <SortingTypeContainer>
          <ActionContainer>
            <Button
              type="button"
              variant={activeSort === 'desc' ? 'contained' : 'outlined'}
              onClick={() => handleSortClick('desc')}
            >
              <CurrencyRubleRoundedIcon sx={{ color: 'rgba(76, 81, 74, 1)' }} />
              <ArrowDownwardRoundedIcon />
            </Button>
          </ActionContainer>
          <ActionContainer>
            <Button
              type="button"
              variant={activeSort === 'asc' ? 'contained' : 'outlined'}
              onClick={() => handleSortClick('asc')}
            >
              <CurrencyRubleRoundedIcon sx={{ color: 'rgba(76, 81, 74, 1)' }} />
              <ArrowUpwardRoundedIcon />
            </Button>
          </ActionContainer>
        </SortingTypeContainer>
      </CardContent>
    </Card>
  );
};

export default OrderActionPanel;
