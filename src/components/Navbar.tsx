import { useState } from 'react';

import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import useScrollTrigger from '@mui/material/useScrollTrigger';

import LinkNavLogo from './LinkNavLogo';
import PrimaryButton from './PrimaryButton';
import ImgIcon from './ImgIcon';

import ImgMenu from '../assets/Icon-List.svg';
import ImgFB from '../assets/Icon-FacebookLogo.svg';
import ImgIG from '../assets/Icon-InstagramLogo.svg';
import ImgYT from '../assets/Icon-YoutubeLogo.svg';
import ImgHandCoins from '../assets/Icon-HandCoins.svg';

const drawerWidth = '60%';

const navItems = [
  { title: '候選主張', href: '#claims' },
  { title: '最新活動', href: '#events' },
  { title: '政策議題', href: '#issues' },
  { title: '服務信箱', href: '#service' },
];
// end of navItems[{title, href}]

const iconItems = [
  {
    element: <ImgIcon src={ImgFB} alt="FB" />,
    title: 'Facebook',
    href: 'https://www.facebook.com/hexschool/',
    index: 0,
  },
  {
    element: <ImgIcon src={ImgIG} alt="IG" />,
    title: 'Instagram',
    href: 'https://www.instagram.com/hexschool/',
    index: 1,
  },
  {
    element: <ImgIcon src={ImgYT} alt="YT" />,
    title: 'YouTube',
    href: 'https://www.youtube.com/channel/UC-b2nGm0xLzic38Byti0VjA/about/',
    index: 2,
  },
];
// end of iconItems[{element, title, href, index}]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        padding: '2rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        textAlign: 'center',
      }}
    >
      <LinkNavLogo />

      <Box sx={{ textAlign: 'left' }}>
        <PrimaryButton size="small">
          <ImgIcon src={ImgHandCoins} alt="MENU" isSmall />
          <Typography
            sx={{
              fontSize: '1rem',
            }}
          >
            小額捐款
          </Typography>
        </PrimaryButton>

        <List
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            p: 0,
            my: '1rem',
          }}
        >
          {navItems.map((item) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton sx={{ p: 0 }}>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />

        <List
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            p: 0,
            my: '1rem',
          }}
        >
          {iconItems.map((item) => (
            <ListItem key={item.href} disablePadding>
              <Button
                key={item.index}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                sx={{
                  p: 0,
                  m: 0,
                  minWidth: 'fit-content',
                  color: 'gray6.main',
                }}
              >
                {item.element}

                <Typography
                  sx={{
                    ml: '0.25rem',
                    fontSize: '1rem',
                  }}
                >
                  {item.title}
                </Typography>
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
  // end of drawer

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        id="nav"
        component="nav"
        elevation={trigger ? 4 : 0}
        sx={{
          bgcolor: 'gray1.main',
          color: 'gray5.main',

          '& .MuiToolbar-root': {
            height: '80px',
          },
        }}
      >
        <Container sx={{ maxWidth: '1184px' }} maxWidth={false} disableGutters>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <LinkNavLogo />

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                display: { sm: 'none' },
                mr: 2,
                p: 0,
                color: 'transparent',
                backgroundColor: 'transparent',
              }}
            >
              <ImgIcon src={ImgMenu} alt="MENU" />
            </IconButton>

            <Box
              sx={{
                display: { xs: 'none', sm: 'inline-flex' },
                gap: 2,
              }}
            >
              <Button
                href="#donations"
                sx={{ p: 0, color: 'gray6.main', borderRadius: '16px' }}
              >
                <PrimaryButton size="small">
                  <ImgIcon src={ImgHandCoins} alt="MENU" isSmall />
                  <Typography
                    sx={{
                      display: { xs: 'none', md: 'inline-flex' },
                      fontSize: '1rem',
                    }}
                  >
                    小額捐款
                  </Typography>
                </PrimaryButton>
              </Button>

              {navItems.map((item) => (
                <Button
                  variant="text"
                  key={item.title}
                  href={item.href}
                  sx={{
                    color: 'gray6.main',

                    '@media (min-width: 600px)': {
                      display: 'none',
                    },

                    '@media (min-width: 640px)': {
                      display: 'inline-flex',
                    },
                  }}
                >
                  {item.title}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'inline-flex' }, gap: 2 }}>
              {iconItems.map((item) => (
                <Button
                  key={item.index}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  sx={{ p: 0, m: 0, minWidth: 'fit-content' }}
                >
                  {item.element}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <nav>
        <Drawer
          anchor="right"
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            // Better open performance on mobile.
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            background: 'rgba(255, 255, 255, 0.30)',
            backdropFilter: 'blur(4px)',

            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
