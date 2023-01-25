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
        minHeight: 'calc(100vh - 105px)',
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
