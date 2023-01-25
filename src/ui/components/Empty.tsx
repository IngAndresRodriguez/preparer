import { Grid, Typography, Button } from '@mui/material';
import drone from '../../assets/drone.svg';
import { Link } from 'react-router-dom';

interface EmptyProps {
  title: string;
  showButton?: boolean;
}

export const Empty = ({ title, showButton = false }: EmptyProps) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: 'calc(100vh - 100px)',
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
              <Link to="/new/patterns">
                <Button variant="contained" color='default' sx={{ display: 'inline-block' }}>NUEVO</Button>
              </Link>
            </Grid>
          )
        }
      </Grid>
    </Grid>
  )
}
