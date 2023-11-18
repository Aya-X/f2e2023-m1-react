import { styled } from '@mui/material/styles';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import ImgIcon from './ImgIcon';

import ImgLogo from '../assets/logo-02.svg';
import IconMap from '../assets/Icon-MapPin.svg';
import IconPhone from '../assets/Icon-Phone.svg';
import IconEnvelope from '../assets/Icon-Envelope.svg';

import ImgFB from '../assets/Icon-w-FacebookLogo.svg';
import ImgIG from '../assets/Icon-w-InstagramLogo.svg';
import ImgYT from '../assets/Icon-w-YoutubeLogo.svg';

const FooterStyled = styled('footer')(({ theme }) => ({
  padding: '32px 16px',
  backgroundColor: theme.palette.gray6.main,
  color: theme.palette.gray1.main,

  [theme.breakpoints.up('md')]: {
    padding: '32px 64px',
  },
}));

const navItems = [
  { title: '首頁', href: '#' },
  { title: '最新活動', href: '#events' },
  { title: '政策議題', href: '#issues' },
  { title: '小額捐款', href: '#donations' },
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

const contactItems = [
  { title: '新星區閃耀大道 88 號  喵喵大樓 3 樓', icon: IconMap },
  { title: '(02) 888-5678', icon: IconPhone },
  { title: 'supernova.black@gmail.com', icon: IconEnvelope },
];
// end of contactItems[{title, icon}]

export default function Footer(): JSX.Element {
  return (
    <FooterStyled>
      <Container sx={{ maxWidth: '1184px' }} maxWidth={false} disableGutters>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'start',
            pb: '32px',
          }}
        >
          <Box>
            <Button sx={{ p: 0, mb: { xs: '16px', sm: 0 } }}>
              <img src={ImgLogo} alt="logo" />
            </Button>

            <List
              sx={{
                display: { xs: 'flex', sm: 'none' },
                gap: '1rem',
                p: 0,
                mb: '1rem',
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
                      color: 'gray1.main',

                      '&:hover': {
                        color: 'lime3.main',
                      },

                      '& path': {
                        fill: 'lime3.main',
                      },
                    }}
                  >
                    {item.element}
                  </Button>
                </ListItem>
              ))}
            </List>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: '32px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: { xs: '8px', sm: '16px' },
              }}
            >
              <Typography color="lime3.main">快速連結</Typography>

              <List
                disablePadding
                sx={{
                  display: 'flex',
                  flexDirection: { md: 'column' },
                  gap: '8px',
                }}
              >
                {navItems.map((item) => (
                  <ListItem key={item.title} disablePadding>
                    <ListItemButton href={item.href} sx={{ p: 0 }}>
                      <ListItemText
                        primary={item.title}
                        sx={{
                          '& .MuiTypography-root:hover': {
                            color: 'lime3.main',
                          },
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Typography color="lime3.main">與我們聯繫</Typography>

              <List disablePadding>
                {contactItems.map((item) => (
                  <ListItem key={item.title} disablePadding>
                    <ListItemButton sx={{ p: 0, display: 'flex', gap: '8px' }}>
                      <ImgIcon src={item.icon} alt={item.title} isSmall />

                      <ListItemText
                        primary={item.title}
                        sx={{
                          '& .MuiTypography-root:hover': {
                            color: 'lime3.main',
                          },
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Box>

        <Typography sx={{ textAlign: 'center', fontWeight: 400 }}>
          <small>&copy; 2023 黑新星 Supernova Black 版權所有。</small>
        </Typography>
      </Container>
    </FooterStyled>
  );
}
