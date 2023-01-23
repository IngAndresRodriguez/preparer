import { Outlet, useLocation } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import { Main } from '../../ui';
import { Indicators, Modules } from '../views';

export const PreparerLayout = () => {

  const { pathname } = useLocation();

  return (
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
  )
}
