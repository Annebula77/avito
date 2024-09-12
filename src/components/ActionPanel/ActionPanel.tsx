import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import StackedBarChartRoundedIcon from '@mui/icons-material/StackedBarChartRounded';
import CurrencyRubleRoundedIcon from '@mui/icons-material/CurrencyRubleRounded';
import styled from 'styled-components';
import {
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

const SortingContainer = styled.article`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

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
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

interface ActionPanelProps {
  advertisementCount: number;
  handleFilterChange: (event: SelectChangeEvent) => void;
  newAdsClicked: () => void;
  onSearchChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSortChange?: (
    field: 'price' | 'likes' | 'views',
    order: 'asc' | 'desc'
  ) => void;
}

const ActionPanel: React.FC<ActionPanelProps> = ({
  advertisementCount = 10,
  newAdsClicked,
  handleFilterChange,
  onSearchChange,
  onSortChange,
}) => {
  const [selectedCount, setSelectedCount] = useState(advertisementCount);

  useEffect(() => {
    if (advertisementCount) {
      setSelectedCount(advertisementCount);
    }
  }, [advertisementCount]);

  const handleSelectChange = (event: SelectChangeEvent) => {
    setSelectedCount(Number(event.target.value));
    if (handleFilterChange) {
      handleFilterChange(event);
    }
  };

  return (
    <Card
      sx={{
        minWidth: '240px',
        maxWidth: '900px',
        padding: '0 20px',
      }}
    >
      <CardContent>
        <SortingTypeContainer>
          <TextField
            id="searchField"
            onChange={onSearchChange}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchRoundedIcon />
                  </InputAdornment>
                ),
              },
            }}
            variant="outlined"
            placeholder="Поиск по названию"
          />
          <Tooltip
            title="Выберите количество объявлений на странице"
            placement="top"
          >
            <Select
              id="ads-on-page-select"
              value={selectedCount.toString()}
              onChange={handleSelectChange}
              sx={{ width: '70px' }}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
          </Tooltip>
          <Button
            variant="contained"
            sx={{ padding: '16px 16px' }}
            onClick={newAdsClicked}
          >
            Новое объявление
          </Button>
        </SortingTypeContainer>
        <SortingContainer>
          <Typography variant="h5" sx={{ marginRight: '20px' }}>
            Сортировать по:
          </Typography>
          <SortingTypeContainer>
            <ActionContainer>
              <Button
                type="button"
                onClick={() => onSortChange?.('likes', 'desc')}
              >
                <FavoriteRoundedIcon sx={{ color: 'rgba(255, 75, 107, 1)' }} />
                <ArrowDownwardRoundedIcon />
              </Button>
            </ActionContainer>
            <ActionContainer>
              <Button
                type="button"
                onClick={() => onSortChange?.('likes', 'asc')}
              >
                <FavoriteRoundedIcon sx={{ color: 'rgba(255, 75, 107, 1)' }} />
                <ArrowUpwardRoundedIcon />
              </Button>
            </ActionContainer>
            <ActionContainer>
              <Button
                type="button"
                onClick={() => onSortChange?.('views', 'desc')}
              >
                <StackedBarChartRoundedIcon />
                <ArrowDownwardRoundedIcon />
              </Button>
            </ActionContainer>
            <ActionContainer>
              <Button
                type="button"
                onClick={() => onSortChange?.('views', 'asc')}
              >
                <StackedBarChartRoundedIcon />
                <ArrowUpwardRoundedIcon />
              </Button>
            </ActionContainer>
            <ActionContainer>
              <Button
                type="button"
                onClick={() => onSortChange?.('price', 'desc')}
              >
                <CurrencyRubleRoundedIcon
                  sx={{ color: 'rgba(76, 81, 74, 1)' }}
                />
                <ArrowDownwardRoundedIcon />
              </Button>
            </ActionContainer>
            <ActionContainer>
              <Button
                type="button"
                onClick={() => onSortChange?.('price', 'asc')}
              >
                <CurrencyRubleRoundedIcon
                  sx={{ color: 'rgba(76, 81, 74, 1)' }}
                />
                <ArrowUpwardRoundedIcon />
              </Button>
            </ActionContainer>
          </SortingTypeContainer>
        </SortingContainer>
      </CardContent>
    </Card>
  );
};

export default ActionPanel;
