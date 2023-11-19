import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

import ImgLogo from '../assets/logo-01.png';

const NavLogo = styled('h1')({
  backgroundImage: `url(${ImgLogo})`,
  backgroundRepeat: 'no-repeat',

  width: '186.269px',
  height: '48px',

  textIndent: '101%',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
});

export default function LinkNavLogo() {
  return (
    <Button
      href="#"
      title="SUPERNOVA-BLACK"
      sx={{ display: 'inline-flex', height: '48px', p: 0 }}
    >
      <NavLogo>SUPERNOVA-BLACK</NavLogo>
    </Button>
  );
}
