import { ImgHTMLAttributes } from 'react';

import { styled } from '@mui/material/styles';

interface ImgIconProps extends ImgHTMLAttributes<HTMLImageElement> {
  isSmall?: boolean;
}

const ImgIcon = styled('img')<ImgIconProps>(({ isSmall }) => ({
  width: isSmall ? '24px' : '32px',
  height: isSmall ? '24px' : '32px',
  objectFit: 'cover',
  transition: 'all .3s',

  '&:hover': {
    opacity: 0.7,
    transform: 'translateY(-4px)',
  },
}));

export default ImgIcon;
