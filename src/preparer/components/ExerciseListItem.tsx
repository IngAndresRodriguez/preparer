import { Button, ButtonBase, Checkbox, Divider, FormControlLabel, Grid, Paper, Typography, styled } from '@mui/material';
import { PreparerExercise } from '../../interfaces';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  backgroundColor: theme.palette.secondary.main,
  border: `1px solid ${theme.palette.tertiary.main}`,
  borderRadius: '10px',
  color: theme.palette.text.primary,
  padding: theme.spacing(2),
}));

interface ExerciseListItemProps {
  exercise: PreparerExercise
}

export const ExerciseListItem = ({ exercise }: ExerciseListItemProps) => {

  const { synopsis, displayName, idScenario, status } = exercise;

  return (
    <Grid item xs={12} sx={{ paddingRight: '1em' }}>
      <Item>
        <Grid container spacing={2}
          sx={{
            marginTop: 0,
            width: '100%',
            marginLeft: 0
          }}
        >
          <Grid item xs={12} sm={12} md={9} lg={10} container
            sx={{
              '&.MuiGrid-item': {
                paddingLeft: 0,
                paddingTop: 0,
                padding: '10px',
              }
            }}
          >
            <Grid item container direction="column" spacing={2}>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked sx={{
                        color: 'inherit',
                        '&.Mui-checked': {
                          color: 'inherit'
                        }
                      }}
                    />}
                  label={
                    <Typography sx={{ fontWeight: '700' }} component='span'>{displayName && displayName.toUpperCase()} - {idScenario}</Typography>
                  }
                />
                <Typography sx={{ fontSize: '100%' }} >{[1, 1, 1, 1, 1, 1, 1, 1].map(_ => synopsis).join(' ')}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={2} container
            sx={{
              alignContent: 'space-around',
              '&.MuiGrid-item': {
                padding: '10px',
              },
              borderLeft: {
                xs: 'none',
                md: '1px solid'
              },
              borderTop: {
                xs: '1px solid',
                md: 'none'
              }
            }}
          >
            <Grid item container direction="column" spacing={2}
              sx={{
                padding: '10px',
              }}
            >
              <Grid item>
                <Button fullWidth variant="contained" sx={{ borderRadius: '10px', fontSize: 'smaller' }} color='ready' >{status}</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Item>
    </Grid>
  )
}

