import { styled, Theme } from '@mui/material/styles';

import Button, { ButtonProps } from '@mui/material/Button';

interface PrimaryButtonProps extends ButtonProps {
  size: 'small' | 'large';
}
const getSizeStyles = (theme: Theme | undefined, size: 'small' | 'large') => {
  switch (size) {
    case 'small':
      return theme?.components?.PrimaryButton.variants.small || {};
    case 'large':
      return theme?.components?.PrimaryButton.variants.large || {};
    default:
      return {};
  }
};

const PrimaryButton = styled(Button)<PrimaryButtonProps>(({ theme, size }) => ({
  ...getSizeStyles(theme, size),

  display: 'inline-flex',
  gap: '8px',
  alignItems: 'center',

  '&:hover': {
    backgroundColor: theme.palette.lime4.main,
  },
}));

export default PrimaryButton;
