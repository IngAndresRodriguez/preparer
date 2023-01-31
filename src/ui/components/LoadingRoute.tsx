import { Grid, CircularProgress, Typography } from '@mui/material';

export const LoadingRoute = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: 'calc(100vh - 21.5px)',
        backgroundColor: 'primary.main',
        padding: 4,
        borderRadius: '10px',
      }}
    >
      <Grid container direction='column' alignItems={'center'}>
        <Grid item sx={{ '&.MuiGrid-item': { paddingY: '10px' } }}>
          <Typography variant='h5'>Cargando, por favor espere...</Typography>
        </Grid>
        <Grid item sx={{ '&.MuiGrid-item': { paddingY: '10px' } }}>
          <CircularProgress color='inherit' />
        </Grid>
      </Grid>
    </Grid>
  )
}
