import { Grid, Box } from '@mui/material';
import { SxProps, Theme, styled } from '@mui/material/styles';

interface MainProps {
  sx?: SxProps<Theme>;
  children: JSX.Element | JSX.Element[];
}

const CustomBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  ...theme.typography.body2,
  padding: theme.spacing(0),
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  height: 'calc(100vh - 22.5px)',
}));

export const Main = ({ sx, children }: MainProps) => {
  return (
    <Grid item sx={{ ...sx }}>
      <CustomBox>
        {children}
      </CustomBox>
    </Grid>
  )
}
