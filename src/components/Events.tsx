import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import PrimaryContainer from './PrimaryContainer';
import PrimaryButton from './PrimaryButton';
import ImgIcon from './ImgIcon';

import ImgArrowRight from '../assets/Icon-ArrowRight.svg';
import ImgEvent1 from '../assets/Event-pic-01.svg';
import ImgEvent2 from '../assets/Event-pic-02.svg';
import ImgEvent3 from '../assets/Event-pic-03.svg';

const ImgCard = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  objectFit: 'cover',

  border: '2px solid',
  borderColor: theme.palette.lime2.main,
  borderRadius: '16px',

  filter: `drop-shadow(12px 12px ${theme.palette.lime2.main})`,

  [theme.breakpoints.up('sm')]: {
    height: '184.48px',
  },
  [theme.breakpoints.up('md')]: {
    height: '100%',
  },
}));

const eventItems = [
  {
    imgSrc: ImgEvent1,
    title: '參與台北寵物論壇，爭取貓咪友善環境',
    content:
      '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。',
    time: '12.26.2023',
  },
  {
    imgSrc: ImgEvent2,
    title: '掃街模式開啟！帶著你的貓耳，和我一起走！',
    content:
      '街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。',
    time: '12.24.2023',
  },
  {
    imgSrc: ImgEvent3,
    title: '收容所模特兒大比拼！',
    content:
      '今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！',
    time: '12.20.2023',
  },
];
// end of eventItems[{imgSrc, title, content, time}]

export default function Events() {
  return (
    <PrimaryContainer elementId="events">
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
        <Box sx={{ width: { md: '25%' } }}>
          <Typography
            variant="h1"
            component="h2"
            sx={{ mb: '8px', color: 'lime5.main', fontWeight: 700 }}
          >
            最新活動
          </Typography>

          <Typography
            variant="h4"
            component="h2"
            sx={{ mb: '16px', color: 'lime5.main', fontWeight: 700 }}
          >
            Latest Events
          </Typography>
        </Box>
        {/* end of title */}

        <List
          sx={{
            width: { xs: '100%', md: '75%' },
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
          }}
          disablePadding
        >
          {eventItems.map((item) => (
            <ListItem
              key={item.imgSrc}
              disablePadding
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: '32px',
                color: 'gray5.main',
              }}
            >
              <Box
                sx={{
                  width: { xs: '100%', md: '33.33%' },
                }}
              >
                <ImgCard src={item.imgSrc} alt="ImgEvent1" />
              </Box>

              <Box
                sx={{
                  width: { xs: '100%', md: '66%' },
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',

                  height: { xs: 'auto', md: '100%' },
                }}
              >
                <Typography
                  variant="h2"
                  component="h3"
                  color="lime5.main"
                  sx={{
                    fontWeight: 700,

                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 1,
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    flexGrow: 1,

                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                  }}
                >
                  {item.content}
                </Typography>

                <Box
                  sx={{
                    mt: '12px',

                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography component="time" color="lime5.main">
                    {item.time}
                  </Typography>

                  <PrimaryButton size="small">
                    延伸閱讀
                    <ImgIcon src={ImgArrowRight} alt="ArrowRight" isSmall />
                  </PrimaryButton>
                </Box>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </PrimaryContainer>
  );
}
