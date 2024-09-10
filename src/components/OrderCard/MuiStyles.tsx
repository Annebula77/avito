import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
interface ExpandMoreProps extends IconButtonProps {
  expand?: boolean;
}

export const ExpandMore = styled((props: ExpandMoreProps) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(1),
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: '80px',
  transition: theme.transitions.create(
    ['border-color', 'background-color', 'box-shadow', 'opacity'],
    {
      duration: theme.transitions.duration.short,
    }
  ),
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    borderColor: theme.palette.primary.main,
    opacity: 0.6,
  },
}));

export const RotatingIcon = styled(ExpandMoreIcon)<{ expand: boolean }>(
  ({ expand }) => ({
    transition: 'transform 0.3s ease',
    transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
  })
);

export const NoHoverIconButton = styled(IconButton)(() => ({
  '&:hover': {
    backgroundColor: 'transparent',
  },
}));
