import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import PrimaryContainer from './PrimaryContainer';

import ImgMoonStars from '../assets/Donations-MoonStars.svg';
import ImgPlanet from '../assets/Donations-Planet.svg';
import ImgSun from '../assets/Donations-Sun.svg';
import ImgShootingStar from '../assets/Donations-ShootingStar.svg';

const ImgCard = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  height: '64px',
  objectFit: 'cover',

  [theme.breakpoints.up('md')]: {
    width: '128px',
    height: '128px',
  },
}));

type DonationItemType = {
  imgSrc: string;
  title: string;
  price: string | number;
  people: number;
};

const donationItems: DonationItemType[] = [
  {
    imgSrc: ImgMoonStars,
    title: '喵衛星',
    price: 600,
    people: 2000,
  },
  {
    imgSrc: ImgPlanet,
    title: '喵行星',
    price: 6000,
    people: 2000,
  },
  {
    imgSrc: ImgSun,
    title: '喵恆星',
    price: 60000,
    people: 2000,
  },
  {
    imgSrc: ImgShootingStar,
    title: '喵慧星',
    price: '自訂贊助金額',
    people: 2000,
  },
];
// end of donationItems[{imgSrc, title, price, people}]

export default function Donations(): JSX.Element {
  return (
    <PrimaryContainer elementId="donations">
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          gap: '32px',
        }}
      >
        <Box
          sx={{
            width: { md: '41%' },
            display: 'flex',
            flexDirection: 'column',
            height: { md: 'calc(100vh - 80px)' },
          }}
        >
          <Box sx={{ mb: '32px' }}>
            <Typography
              variant="h1"
              component="h2"
              sx={{ mb: '8px', color: 'lime5.main', fontWeight: 700 }}
            >
              小額捐款
            </Typography>

            <Typography
              variant="h4"
              component="h3"
              sx={{ mb: '16px', color: 'lime5.main', fontWeight: 700 }}
            >
              Small Donations
            </Typography>
          </Box>

          <Typography
            variant="h2"
            component="p"
            sx={{
              mb: '16px',
              flexGrow: { md: 1 },
              color: 'gray6.main',
              fontWeight: 700,
            }}
          >
            您的每筆捐款，
            <br />
            是每隻毛孩未來的大大動力！
          </Typography>

          <Box
            sx={{
              backgroundColor: 'gray6.main',
              padding: '16px 32px',
              borderRadius: '16px',
            }}
          >
            <Typography
              variant="h4"
              component="p"
              sx={{ color: 'lime3.main', fontWeight: 500 }}
            >
              目前贊助總金額
            </Typography>

            <Typography
              variant="h1"
              component="p"
              sx={{ color: 'lime3.main', fontWeight: 700 }}
            >
              987,655,873
            </Typography>
          </Box>
        </Box>

        <Box sx={{ width: { md: '58%' } }}>
          <List
            disablePadding
            sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            {donationItems.map((item) => (
              <ListItem key={item.title} disablePadding>
                <ListItemButton
                  sx={{
                    display: 'flex',
                    justifyContent: 'between',
                    borderRadius: '16px',
                    border: '2px solid',
                    borderColor: 'lime5.main',

                    '&:hover': {
                      backgroundColor: 'gray6.main',

                      '& h3': {
                        color: 'lime3.main',
                      },
                      '& img': {
                        filter: 'brightness(0) invert(1)',
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: '83%',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                      <Typography
                        variant="h2"
                        component="h3"
                        sx={{
                          color: 'gray6.main',
                          fontWeight: 700,

                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: 1,
                          textOverflow: 'ellipsis',
                          overflow: 'hidden',

                          '&:hover': {
                            color: 'lime3.main',
                          },
                        }}
                      >
                        {item.title}｜
                      </Typography>
                      <Typography
                        component="p"
                        sx={{ color: 'gray3.main', fontWeight: 500, pr: '8px' }}
                      >
                        NT$
                      </Typography>
                      <Typography
                        variant="h2"
                        component="h3"
                        sx={{
                          color: 'gray6.main',
                          fontWeight: 700,

                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: 1,
                          textOverflow: 'ellipsis',
                          overflow: 'hidden',

                          '&:hover': {
                            color: 'lime3.main',
                          },
                        }}
                      >
                        {item.price}
                      </Typography>
                    </Box>

                    <Typography
                      component="p"
                      sx={{
                        width: 'fit-content',
                        padding: '8px 16px',
                        color: 'gray6.main',
                        backgroundColor: 'lime2.main',
                        borderRadius: '8px',
                      }}
                    >
                      已有 {item.people} 人贊助
                    </Typography>
                  </Box>

                  <ImgCard src={item.imgSrc} alt="ImgMoonStars" />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </PrimaryContainer>
  );
}
