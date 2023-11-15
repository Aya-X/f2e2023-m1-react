import Container from '@mui/material/Container';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Claims() {
  return (
    <Container
      id="claims"
      sx={{
        maxWidth: '1184px',
        mb: { xs: '32px', md: '64px' },
      }}
      maxWidth={false}
    >
      <Box sx={{ display: { md: 'flex' } }}>
        <Box sx={{ width: { md: '25%' } }}>
          <Typography
            variant="h1"
            component="h2"
            sx={{ mb: '8px', color: 'lime5.main', fontWeight: 700 }}
          >
            候選主張
          </Typography>

          <Typography
            variant="h4"
            component="h3"
            sx={{ mb: '16px', color: 'lime5.main', fontWeight: 700 }}
          >
            Candidate Claims
          </Typography>
        </Box>

        <Box sx={{ width: { md: '75%' }, color: 'gray5.main' }}>
          <Typography sx={{ mb: '32px' }}>
            我黑新星堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的
            GDP 經濟帶來巨大效益。
          </Typography>
          <Typography>
            因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
