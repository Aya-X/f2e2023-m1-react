import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function App(): JSX.Element {
  return (
    <>
      <CssBaseline />

      <Container sx={{ maxWidth: '1184px' }} maxWidth={false}>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </>
  );
}

export default App;
