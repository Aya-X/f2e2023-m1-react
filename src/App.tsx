import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Fab from '@mui/material/Fab';

import ScrollTop from './components/ScrollTop';

function App(): JSX.Element {
  return (
    <>
      <CssBaseline />

      <Container sx={{ maxWidth: '1184px' }} maxWidth={false}>
          <Toolbar id="back-to-top-anchor" />
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>

      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          {/* <KeyboardArrowUpIcon /> */}
          <p>UP</p>
        </Fab>
      </ScrollTop>
    </>
  );
}

export default App;
