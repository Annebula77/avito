import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate, Outlet } from 'react-router-dom'; // React Router 6
import { HeaderBox, Logo, Main } from '../../styling/stylesToReuse';


const drawerWidth = 260;


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function NavBoard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleListClick = (path: string) => {
    navigate(path);
    handleDrawerClose();
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <MuiAppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <HeaderBox>
            <Logo>marketme</Logo>
            <Typography variant="h2" align='left' color="primary.light">
              Петр Петров
            </Typography>
          </HeaderBox>
        </Toolbar>
      </MuiAppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            marginTop: '70px',
            borderTopRightRadius: '20px',
          },
        }}
        variant='temporary'
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} color='primary' >
            {theme.direction === 'ltr' ? <ChevronLeftIcon fontSize='large' /> : <ChevronRightIcon fontSize='large' />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleListClick('/')}>
              <ListItemIcon>
                <ArticleOutlinedIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary="Объявления" sx={{ color: 'primary.dark' }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleListClick('/orders')} >
              <ListItemIcon>
                <ShoppingCartOutlinedIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary="Заказы" sx={{ color: 'primary.dark' }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Main>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
}
