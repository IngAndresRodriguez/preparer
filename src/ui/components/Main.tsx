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
  minHeight: 'calc(100vh - 135px)',
}));

export const Main = ({ sx, children, ...rest }: MainProps) => {
  return (
    <Grid item sx={{ ...sx }} {...rest}>
      <CustomBox>
        {children}
      </CustomBox>
    </Grid>
  )
}
