import { CircularProgress, Grid, Typography } from '@mui/material';

export const Loading = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: 'calc(100vh - 10px)',
        minWidth: 'calc(100vw - 10px)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        width: 'calc(100vw - 10px)',
        zIndex: 1000
      }}
    >
      <Grid
        container
        direction='row'
        justifyContent='center'
      >
        <Typography
          variant="h6"
          component="h1"
          sx={{
            my: 4
          }}
        >
          Procesando, por favor espere...
        </Typography>
      </Grid>

      <Grid
        container
        direction='row'
        justifyContent='center'
      >
        <CircularProgress color='warning' />
      </Grid>
      
    </Grid>
  )
}

