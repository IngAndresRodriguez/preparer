import { MouseEvent } from 'react';
import { Grid, Typography, Button } from '@mui/material';
import drone from '../../assets/drone.svg';

interface EmptyProps {
  title: string;
  showButton?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Empty = ({ title, showButton = false, onClick }: EmptyProps) => {
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
        // border: (theme) => `1px solid ${theme.palette.tertiary.main}`,
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
          <img width={100} src={drone} alt="Drone" />
        </Grid>
        <Grid item sx={{ '&.MuiGrid-item': { paddingY: '10px' } }}>
          <Typography variant='h6'>{title}</Typography>
        </Grid>
        {
          (showButton) && (
            <Grid item sx={{ '&.MuiGrid-item': { paddingY: '10px' } }}>
              <Button onClick={onClick} variant="contained" color='default' sx={{ display: 'inline-block' }}>NUEVO</Button>
            </Grid>
          )
        }
      </Grid>
    </Grid>
  )
}
