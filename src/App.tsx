import { ThemeProvider, createTheme } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
// import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Fab from '@mui/material/Fab';

import Navbar from './components/Navbar';
import ScrollTop from './components/ScrollTop';

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
      },
    }}
  />
);

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      {inputGlobalStyles}

      <Navbar />

      <Container sx={{ maxWidth: '1184px' }} maxWidth={false}>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar id="back-to-top-anchor" />

          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus
            quibusdam, aliquam dolore excepturi quae.
          </Typography>
        </Box>

        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>

      <ScrollTop>
        <Fab
          sx={{
            bgcolor: () => theme.palette.lime5.main,
            // color: () => theme.palette.gray1.main,
          }}
          size="small"
          aria-label="scroll back to top"
        >
          {/* <KeyboardArrowUpIcon /> */}
          <p>UP</p>
        </Fab>
      </ScrollTop>
    </ThemeProvider>
  );
}

export default App;
