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
import {
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
  SortingTypeContainer,
  ActionContainer,
  SortingContainer,
} from './actionPanelStyles';

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
  const [activeSort, setActiveSort] = useState<'asc' | 'desc' | null>(null);
  const [activeField, setActiveField] = useState<
    'price' | 'likes' | 'views' | null
  >(null);

  const handleSortClick = (
    field: 'price' | 'likes' | 'views',
    order: 'asc' | 'desc'
  ) => {
    setActiveField(field);
    setActiveSort(order);
    onSortChange?.(field, order);
  };

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
              sx={{ width: '120px' }}
              slotProps={{
                root: {
                  sx: {
                    padding: '0px 20px',
                  },
                },
              }}
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
                variant={
                  activeSort === 'desc' && activeField === 'likes'
                    ? 'contained'
                    : 'outlined'
                }
                onClick={() => handleSortClick('likes', 'desc')}
              >
                <FavoriteRoundedIcon sx={{ color: 'rgba(255, 75, 107, 1)' }} />
                <ArrowDownwardRoundedIcon />
              </Button>
            </ActionContainer>
            <ActionContainer>
              <Button
                variant={
                  activeSort === 'asc' && activeField === 'likes'
                    ? 'contained'
                    : 'outlined'
                }
                type="button"
                onClick={() => handleSortClick('likes', 'asc')}
              >
                <FavoriteRoundedIcon sx={{ color: 'rgba(255, 75, 107, 1)' }} />
                <ArrowUpwardRoundedIcon />
              </Button>
            </ActionContainer>
            <ActionContainer>
              <Button
                type="button"
                variant={
                  activeSort === 'desc' && activeField === 'views'
                    ? 'contained'
                    : 'outlined'
                }
                onClick={() => handleSortClick('views', 'desc')}
              >
                <StackedBarChartRoundedIcon />
                <ArrowDownwardRoundedIcon />
              </Button>
            </ActionContainer>
            <ActionContainer>
              <Button
                variant={
                  activeSort === 'asc' && activeField === 'views'
                    ? 'contained'
                    : 'outlined'
                }
                type="button"
                onClick={() => handleSortClick('views', 'asc')}
              >
                <StackedBarChartRoundedIcon />
                <ArrowUpwardRoundedIcon />
              </Button>
            </ActionContainer>
            <ActionContainer>
              <Button
                type="button"
                variant={
                  activeSort === 'desc' && activeField === 'price'
                    ? 'contained'
                    : 'outlined'
                }
                onClick={() => handleSortClick('price', 'desc')}
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
                variant={
                  activeSort === 'asc' && activeField === 'price'
                    ? 'contained'
                    : 'outlined'
                }
                onClick={() => handleSortClick('price', 'asc')}
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
