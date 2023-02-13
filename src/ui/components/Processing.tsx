import { Grid, Typography } from '@mui/material';

export const Processing = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: {
          xs: 'calc(100vh - 404px)',
          sm: 'calc(100vh - 404px)',
          md: 'calc(100vh - 230px)',
          lg: 'calc(100vh - 230px)',
        },
        backgroundColor: 'secondary.main',
        // backgroundColor: 'white',
        padding: 4,
        borderRadius: '10px',
      }}
    >
      <Grid
        container
        direction='column'
        alignItems={'center'}
      >
        <Grid item sx={{ '&.MuiGrid-item': { paddingY: '10px' } }}>
          <Typography variant='h6'>Procesando, por favor espere...</Typography>
        </Grid>
        <Grid item sx={{ '&.MuiGrid-item': { paddingY: '10px' } }}>
        </Grid>
      </Grid>
    </Grid>
  )
}
