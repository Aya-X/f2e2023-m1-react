import Container from '@mui/material/Container';

type PrimaryContainerPropsType = {
  elementId: string;
  children: React.ReactNode;
};

export default function PrimaryContainer(props: PrimaryContainerPropsType) {
  const { elementId, children } = props;

  return (
    <Container
      id={elementId}
      sx={{
        maxWidth: '1184px',
        mb: { xs: '32px', md: '64px' },
      }}
      maxWidth={false}
    >
      {children}
    </Container>
  );
}
