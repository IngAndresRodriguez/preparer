import { Outlet, useLocation } from 'react-router-dom';
import { Box, Grid, styled, Paper } from '@mui/material';
import { Main } from '../../ui';
import { Indicators, Modules } from '../views';
import { Footer, Header } from '../components';

export const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  backgroundColor: 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const PreparerLayout = () => {

  const { pathname } = useLocation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Header />
        <Grid item xs={12}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
              <Main sx={{ width: { xs: '100%', sm: '40%', md: '30%', lg: '25%' } }}>
                {(() => {
                  switch (pathname) {
                    case '/':
                      return (<Indicators />);
                    default:
                      return (<Modules />);
                  }
                })()}
              </Main>
              <Main sx={{ width: { xs: '100%', sm: '60%', md: '70%', lg: '75%' } }}>
                <Outlet />
              </Main>
            </Grid>
          </Box>
        </Grid>
        <Footer />
      </Grid>
    </Box>
  )
}
