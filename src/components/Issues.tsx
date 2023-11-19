import { useState } from 'react';
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import PrimaryContainer from './PrimaryContainer';

import ImgBackground from '../assets/Tab-Background.svg';
import ImgBank from '../assets/Issue-PiggyBank.svg';
import ImgAidKit from '../assets/Issue-FirstAidKit.svg';
import ImgHandshake from '../assets/Issue-Handshake.svg';
import ImgPark from '../assets/Issue-Park.svg';
import ImgStore from '../assets/Issue-Storefront.svg';
import ImgPaw from '../assets/Issue-PawPrint.svg';
import ImgBuildings from '../assets/Issue-Buildings.svg';
import ImgBowlFood from '../assets/Issue-BowlFood.svg';
import ImgVideo from '../assets/Issue-Video.svg';

const ImgTab = styled('img')({
  width: '128px',
  height: '128px',
  objectFit: 'cover',
  margin: '0 auto',
});

const tabItems = [
  {
    label: '寵物醫療保障方案',
    title: '為毛孩子謀福利！推動寵物醫療保障方案',
    subItems: [
      {
        title: '設立寵物醫療基金',
        content: '每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用。',
        imgSrc: ImgBank,
      },
      {
        title: '提供醫療補助',
        content:
          '每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力。',
        imgSrc: ImgAidKit,
      },
      {
        title: '合作動物醫院',
        content: '目前已有和超過 200 家動物醫院進行初步的合作討論。',
        imgSrc: ImgHandshake,
      },
    ],
  },
  {
    label: '寵物休閒與娛樂場所',
    title: '打造休閒天堂！推廣寵物休閒與娛樂場所',
    subItems: [
      {
        title: '建立寵物公園',
        content:
          '每年撥款新台幣 5 億元，用於在各大都市建立專屬的寵物公園。根據初步規劃，預計在第一年內，將在全國範圍內建立至少 10 座寵物公園。',
        imgSrc: ImgPark,
      },
      {
        title: '推廣寵物友善商家',
        content:
          '鼓勵商家提供寵物友善的環境，並為參與的商家提供稅收優惠。預計在政策實施後的首年，將有超過 500 家商家加入此計畫。',
        imgSrc: ImgStore,
      },
      {
        title: '舉辦寵物活動和工作坊',
        content:
          '與各大寵物社團和組織合作，每年舉辦至少 5 場大型的寵物活動，包括寵物才藝比賽、飼養知識工作坊等。',
        imgSrc: ImgPaw,
      },
    ],
  },
  {
    label: '推廣寵物飼養教育',
    title: '推廣寵物飼養教育，讓愛更加專業',
    subItems: [
      {
        title: '建立寵物飼養教育中心',
        content:
          '每年撥款新台幣 3 億元，用於在全國各地建立專業的寵物飼養教育中心。預計在第一年內，在全國至少 5 大城市設立教育中心。',
        imgSrc: ImgBuildings,
      },
      {
        title: '推廣寵物飼養課程',
        content:
          '與學校、社區組織和寵物社團合作，推出一系列免費的寵物飼養課程。預計每年將有超過 10,000 名市民受益。',
        imgSrc: ImgBowlFood,
      },
      {
        title: '製作教育資料',
        content:
          '出版寵物飼養手冊、影片和線上課程，讓所有有意飼養寵物的家庭都能輕鬆取得正確的知識',
        imgSrc: ImgVideo,
      },
    ],
  },
];
// end of tabItems[]

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index } = props;
  // const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      // {...other}
    >
      {value === index && (
        <Box sx={{ p: '32px', backgroundColor: 'lime1.main' }}>{children}</Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Issues() {
  const [value, setValue] = useState(1);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    // #NOTE: Avoid ts error
    // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    // console.log(event);
    setValue(newValue);
  };

  return (
    <PrimaryContainer elementId="issues">
      <Typography
        variant="h1"
        component="h2"
        sx={{ mb: '8px', color: 'lime5.main', fontWeight: 700 }}
      >
        政策議題
      </Typography>

      <Typography
        variant="h4"
        component="h3"
        sx={{ mb: '32px', color: 'lime5.main', fontWeight: 700 }}
      >
        Policy Issues
      </Typography>
      {/* end of title */}

      <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
          variant="fullWidth"
          indicatorColor="primary"
          sx={{
            '& .MuiTabs-indicator': { display: 'none' },
          }}
        >
          {tabItems.map((item, index) => (
            <Tab
              label={item.label}
              key={item.label}
              id={a11yProps(index).id}
              aria-controls={a11yProps(index)['aria-controls']}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: 'lime1.main',
                  color: 'gray6.main',
                  fontWeight: 500,
                },
                '&:hover': {
                  backgroundColor: 'lime3.main',
                },

                py: '16px',
                width: '33%',
                backgroundColor: 'lime4.main',
                borderRadius: '1rem 1rem 0 0',
              }}
            />
          ))}
        </Tabs>

        {tabItems.map((item, index) => (
          <CustomTabPanel key={item.title} value={value} index={index}>
            <Typography
              variant="h2"
              component="h4"
              sx={{ mb: '48px', fontWeight: 700, textAlign: 'center' }}
              color="lime5.main"
            >
              {item.title}
            </Typography>

            <List
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: '32px',
              }}
            >
              {item.subItems.map((subItem) => (
                <ListItem
                  key={subItem.title}
                  sx={{
                    width: { xs: '100%', md: '33.33%' },
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',

                    textAlign: 'center',
                    color: 'gray6.main',

                    backgroundImage: `url(${ImgBackground})`,
                    backgroundSize: '240px 110px',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                    }}
                  >
                    <ImgTab src={subItem.imgSrc} alt={subItem.title} />

                    <Typography
                      variant="h2"
                      component="h5"
                      sx={{
                        fontWeight: 700,
                      }}
                      color="gray6.main"
                    >
                      {subItem.title}
                    </Typography>
                    <Typography>{subItem.content}</Typography>
                  </Box>
                </ListItem>
              ))}
            </List>
          </CustomTabPanel>
        ))}
      </Box>
    </PrimaryContainer>
  );
}
