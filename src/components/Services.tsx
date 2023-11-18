import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {
  FormControl,
  FormControlState,
  useFormControlContext,
} from '@mui/base/FormControl';
import { Input, inputClasses } from '@mui/base/Input';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';

import PrimaryContainer from './PrimaryContainer';
import PrimaryButton from './PrimaryButton';
import ImgBlack from '../assets/Black-02.svg';

const lime = {
  50: '#FBFFE1',
  100: '#EEFFA9',
  200: '#D1FA31',
  400: '#BBE217',
  600: '#A8C400',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Textarea = styled(BaseTextareaAutosize)(
  ({ theme }) => `
  width: 94%;
  padding: 16px;
  border-radius: 8px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${
    theme.palette.mode === 'dark' ? grey[900] : grey[50]
  };

  &:hover {
    border-color: ${lime[400]};
  }

  &:focus {
    border-color: ${lime[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === 'dark' ? lime[600] : lime[200]
    };
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);

const StyledInput = styled(Input)(
  ({ theme }) => `
  display: flex;
  position: relative;

  .${inputClasses.input} {
    width: 100%;
    padding: 16px;

    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${
      theme.palette.mode === 'dark' ? grey[900] : grey[50]
    };

    &:hover {
      border-color: ${lime[400]};
    }

    &:focus {
      outline: 0;
      border-color: ${lime[400]};
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === 'dark' ? lime[600] : lime[200]
      };
    }
  }

  &.filled .${inputClasses.input} {
    box-shadow: 0 0 2px 2px rgba(125, 200, 0, 0.25);
  }
`,
);

const OkMark = styled('span')`
  position: absolute;
  margin-left: 51%;
  margin-top: -40px;
  color: rgb(125 200 0 / 1);
`;

const Label = styled(
  ({
    children,
    className,
  }: {
    children?: React.ReactNode;
    className?: string;
  }) => {
    const formControlContext = useFormControlContext();
    const [dirty, setDirty] = useState(false);

    useEffect(() => {
      if (formControlContext?.filled) {
        setDirty(true);
      }
    }, [formControlContext]);

    if (formControlContext === undefined) {
      return <p>{children}</p>;
    }

    const { error, required, filled } = formControlContext;
    const showRequiredError = dirty && required && !filled;

    return (
      <p
        className={`${className}${
          error || showRequiredError ? ' invalid' : ''
        }`}
      >
        {/* <p
        className={clsx(className, error || showRequiredError ? 'invalid' : '')}
      > */}
        {children}
        {required ? ' *' : ''}
      </p>
    );
  },
)`
  margin-bottom: 8px;
  color: #000000;

  &.invalid {
    color: red;
  }
`;

const ImgBack = styled('img')(({ theme }) => ({
  width: '0',
  height: '0',
  objectFit: 'cover',

  position: 'absolute',
  left: '23%',
  bottom: '0',
  zIndex: -1,

  [theme.breakpoints.up('md')]: {
    width: '297px',
    height: '337px',
  },
}));

type FormControlFunctionChildPropsType = {
  title: string;
};

function FormControlFunctionChild(props: FormControlFunctionChildPropsType) {
  const { title } = props;

  return (
    <FormControl defaultValue="">
      {({ filled, focused }: FormControlState) => (
        <>
          <Label>{title}</Label>

          <StyledInput className={filled ? 'filled' : ''} />
          {filled && !focused && <OkMark>✔</OkMark>}
        </>
      )}
    </FormControl>
  );
}

export default function Services(): JSX.Element {
  return (
    <PrimaryContainer elementId="service">
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          gap: '32px',
        }}
      >
        <Box
          sx={{
            width: { md: '44%' },
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
              服務信箱
            </Typography>

            <Typography
              variant="h4"
              component="h3"
              sx={{ mb: '16px', color: 'lime5.main', fontWeight: 700 }}
            >
              Service Mail
            </Typography>
          </Box>

          <Typography
            variant="h2"
            component="p"
            sx={{
              mb: '16px',
              color: 'gray6.main',
              fontWeight: 700,
            }}
          >
            您的聲音，我們的行動！
          </Typography>

          <Typography
            component="p"
            sx={{
              mb: '16px',
            }}
          >
            親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！
          </Typography>
        </Box>

        <ImgBack src={ImgBlack} alt="ImgBlack" />

        <Box
          sx={{
            width: { md: '56%' },
            p: '32px',
            backgroundColor: 'lime1.main',
            borderRadius: '16px',
          }}
        >
          <Box sx={{ mb: '16px', width: '100%' }}>
            <FormControlFunctionChild title="姓名" />
            <FormControlFunctionChild title="Email" />
            <FormControlFunctionChild title="電話 / 手機" />
          </Box>
          <Label>對我們的建議</Label>
          <Textarea
            sx={{ mb: '48px' }}
            aria-label="minimum height"
            minRows={3}
            placeholder=""
          />
          <PrimaryButton size="large">確認送出</PrimaryButton>
        </Box>
      </Box>
    </PrimaryContainer>
  );
}
