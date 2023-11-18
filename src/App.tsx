import { ThemeProvider, createTheme } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';

import Fab from '@mui/material/Fab';

import Navbar from './components/Navbar';
import ScrollTop from './components/ScrollTop';
import Hero from './components/Hero';
import Claims from './components/Claims';
import Events from './components/Events';
import Issues from './components/Issues';
import Donations from './components/Donations';
import Services from './components/Services';
import Footer from './components/Footer';

import ImgIcon from './components/ImgIcon';
import IconSupernova from './assets/Supernova.svg';

declare module '@mui/material/styles' {
  // 能夠在 palette 中找到這個屬性
  interface Palette {
    lime1: Palette['primary'];
    lime2: Palette['primary'];
    lime3: Palette['primary'];
    lime4: Palette['primary'];
    lime5: Palette['primary'];
    gray1: Palette['primary'];
    gray2: Palette['primary'];
    gray3: Palette['primary'];
    gray4: Palette['primary'];
    gray5: Palette['primary'];
    gray6: Palette['primary'];
  }

  // 能用使用 createTheme 來設定這個屬性
  interface PaletteOptions {
    lime1?: PaletteOptions['primary'];
    lime2?: PaletteOptions['primary'];
    lime3?: PaletteOptions['primary'];
    lime4?: PaletteOptions['primary'];
    lime5?: PaletteOptions['primary'];
    gray1?: PaletteOptions['primary'];
    gray2?: PaletteOptions['primary'];
    gray3?: PaletteOptions['primary'];
    gray4?: PaletteOptions['primary'];
    gray5?: PaletteOptions['primary'];
    gray6?: PaletteOptions['primary'];
  }

  interface ThemeComponents {
    variants: {
      small: React.CSSProperties;
      large: React.CSSProperties;
    };
  }

  interface Components {
    PrimaryButton: ThemeComponents;
  }

  interface ComponentsOptions {
    [key: string]: ThemeComponents;
    // PrimaryButton?: ThemeComponents;
  }
}

const theme = createTheme({
  palette: {
    lime1: {
      main: '#FBFFE1',
      contrastText: '#444444',
    },
    lime2: {
      main: '#EEFFA9',
      contrastText: '#444444',
    },
    lime3: {
      main: '#D1FA31',
      contrastText: '#444444',
    },
    lime4: {
      main: '#BBE217',
      contrastText: '#444444',
    },
    lime5: {
      main: '#A8C400',
      contrastText: '#FFFFFF',
    },
    gray1: {
      main: '#FFFFFF',
      contrastText: '#E2E2E2',
    },
    gray2: {
      main: '#E2E2E2',
      contrastText: '#8C8C8C',
    },
    gray3: {
      main: '#C6C6C6',
      contrastText: '#FFFFFF',
    },
    gray4: {
      main: '#8C8C8C',
      contrastText: '#FFFFFF',
    },
    gray5: {
      main: '#444444',
      contrastText: '#FFFFFF',
    },
    gray6: {
      main: '#000000',
      contrastText: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Noto Sans TC, sans-serif',
    fontSize: 16,
    // lineHeight: 1.75,
    fontWeightRegular: 500,
    h1: {
      fontSize: '3rem',
      lineHeight: 1.5,
      fontWeightRegular: 700,
    },
    h2: {
      fontSize: '1.75rem',
      lineHeight: 1.5,
      fontWeightRegular: 700,
    },
    h3: {
      fontSize: '1.5rem',
      lineHeight: 1.5,
      fontWeightRegular: 700,
    },
    h4: {
      fontSize: '1.25rem',
      lineHeight: 1.5,
      fontWeightRegular: 500,
    },
  },
  components: {
    PrimaryButton: {
      variants: {
        small: {
          padding: '0.5rem 1rem',
          color: '#000000',
          backgroundColor: '#D1FA31',
          borderRadius: '3rem',
        },

        large: {
          width: '100%',
          padding: '1rem 2rem',
          color: '#000000',
          backgroundColor: '#D1FA31',
          borderRadius: '1rem',
        },
      },
    },
  },
});

const inputGlobalStyles = (
  <GlobalStyles
    styles={{
      body: {
        lineHeight: 1.75,
        color: theme.palette.gray5.main,
        overflowX: 'hidden',
      },

      '*::-webkit-scrollbar': {
        width: '0.75rem',
      },
      '*::-webkit-scrollbar-track': {
        WebkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.lime5.main,
        // outline: '1px solid slategrey',
      },

      '*::selection': {
        color: theme.palette.lime3.main,
        backgroundColor: theme.palette.gray5.main,
      },
    }}
  />
);

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {inputGlobalStyles}

      <Navbar />

      <Hero />

      <Claims />

      <Events />

      <Issues />

      <Donations />

      <Services />

      <Footer />

      <ScrollTop>
        <Fab
          sx={{
            bgcolor: () => theme.palette.gray5.main,
            // color: () => theme.palette.gray1.main,
          }}
          size="small"
          aria-label="scroll back to top"
        >
          {/* <KeyboardArrowUpIcon /> */}
          {/* <p>UP</p> */}
          <ImgIcon src={IconSupernova} alt={IconSupernova} />
        </Fab>
      </ScrollTop>
    </ThemeProvider>
  );
}

export default App;
