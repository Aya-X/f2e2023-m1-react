import { styled } from '@mui/material/styles';

import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import PrimaryButton from './PrimaryButton';
import ImgIcon from './ImgIcon';

import ImgHeroBlack from '../assets/Black-01.svg';
import ImgArrowRight from '../assets/Icon-ArrowRight.svg';
import ImgVote from '../assets/Icon-vote.svg';
import ImgNumber from '../assets/Icon-Number.svg';

const HiddenText = styled('span')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'inline',
  },
}));

const ImgHero = styled('img')({
  position: 'absolute',
  right: '-16px',
  bottom: '-16px',
  width: '361px',
  height: '407px',
  objectFit: 'cover',

  '@media (max-width: 900px)': {
    top: '-47vh',
    left: '25%',
    right: '0',
    bottom: '0',
    width: '305px',
    height: '344px',
  },

  '@media (max-width: 600px)': {
    top: '-47vh',
    left: '32px',
    right: '0',
    bottom: '0',
    width: '305px',
    height: '344px',
  },
});

export default function Hero() {
  const HeroText = (
    <>
      <ImgIcon src={ImgVote} alt="ImgVote" />
      立委請支持
      <ImgIcon src={ImgNumber} alt="ImgNumber" />
      黑新星
      <ImgIcon src={ImgVote} alt="ImgVote" />
    </>
  );

  return (
    <Container
      sx={{
        maxWidth: '1184px',
        padding: { xs: '0' },
        mb: { xs: '32px', md: '64px' },
      }}
      maxWidth={false}
    >
      <Toolbar id="back-to-top-anchor" sx={{ mt: '12px' }} />

      <Box
        id="hero"
        sx={{
          position: 'relative',
          height: { xs: '240px', md: 'calc(100vh - 80px)' },
          mt: { xs: 'calc(43vh + 80px)', md: 0 },
          px: { xs: 0, md: 2 },
          color: 'gray1.main',
          bgcolor: 'gray2.main',
          borderRadius: '1rem',
        }}
      >
        <ImgHero src={ImgHeroBlack} alt="IMG-HERO" />
        <Box
          sx={{
            position: 'absolute',
            right: { xs: '53%', md: '16%' },
            bottom: { xs: '41vh', md: '16px' },
          }}
        >
          <PrimaryButton size="small">
            候選人簡介
            <ImgIcon src={ImgArrowRight} alt="ArrowRight" isSmall />
          </PrimaryButton>
        </Box>

        <Typography
          variant="h3"
          component="h3"
          sx={{
            position: 'absolute',
            left: { xs: '16px' },
            bottom: { xs: '39%' },
            display: { xs: 'inline-flex', md: 'none' },
            gap: 1,
            alignItems: 'center',
            padding: { xs: '0.25rem 1rem', md: '0.5rem 2rem' },
            color: 'lime3.main',
            backgroundColor: 'gray6.main',
            borderRadius: '3rem',
          }}
        >
          {HeroText}
        </Typography>

        <Typography
          variant="h1"
          component="h3"
          sx={{
            position: 'absolute',
            left: { xs: '-20px' },
            bottom: { xs: '41%' },
            display: { xs: 'none', md: 'inline-flex' },
            gap: 1,
            alignItems: 'center',
            padding: { xs: '0.25rem 1rem', md: '0.5rem 2rem' },
            color: 'lime3.main',
            backgroundColor: 'gray6.main',
            borderRadius: '3rem',
            fontWeight: 700,
          }}
        >
          {HeroText}
        </Typography>

        <Typography
          variant="h1"
          component="h2"
          sx={{
            pl: 4,
            textAlign: 'center',
            fontWeight: 700,
            fontSize: { xs: '80px', md: '260px' },
            lineHeight: { xs: '120px', md: '320px' },
            letterSpacing: { xs: '.25rem', md: '.8125rem' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'flex-start', md: 'center' },
              justifyContent: 'space-between',
              height: { md: 'calc(100vh - 80px)' },
            }}
          >
            <span>喵喵權益</span>
            {/* <br /> */}
            <span>
              我帶頭<HiddenText>。</HiddenText>
            </span>
          </Box>
        </Typography>
      </Box>
    </Container>
  );
}
