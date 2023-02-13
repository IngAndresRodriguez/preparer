import { ChangeEvent } from 'react';
import { Checkbox, FormControlLabel, Grid, Paper, Typography, styled } from '@mui/material';
import Chip from '@mui/material/Chip/Chip';
import { Exercise } from '../../interfaces';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  backgroundColor: theme.palette.secondary.main,
  border: `1px solid ${theme.palette.tertiary.main}`,
  borderRadius: '10px',
  color: theme.palette.text.primary,
  padding: theme.spacing(2),
}));

interface ExerciseListItemProps {
  exercise: Exercise;
  handleChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean, exercise: Exercise) => void;
}

export const ExerciseListItem = ({ exercise, handleChange }: ExerciseListItemProps) => {

  const { synopsis, displayName, idScenario, status } = exercise;

  return (
    <Grid item xs={12} sx={{ paddingRight: '1em' }}>
      <Item>
        <Grid container spacing={2}
          sx={{
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
          }}
        >
          <Grid item xs={12} sm={12} md={9} lg={10} container
            sx={{
              maxHeight: { xs: '100px' },
              '&.MuiGrid-item': {
                padding: '10px',
                paddingLeft: 0,
                paddingTop: 0,
              }
            }}
          >
            <Grid item container wrap="nowrap" direction="column" spacing={2}>
              <Grid item >
                <FormControlLabel
                  control={
                    <Checkbox
                      value={false}
                      sx={{
                        color: 'inherit',
                        '&.Mui-checked': {
                          color: 'inherit'
                        }
                      }}
                      onChange={(event: ChangeEvent<HTMLInputElement>, checked: boolean) => handleChange(event, checked, exercise)}
                    />
                  }
                  label={
                    <Typography
                      sx={{ fontWeight: '700' }}
                      component='span'
                    >
                      {displayName && displayName.toUpperCase()} - {idScenario}
                    </Typography>
                  }
                />
                <Typography
                  sx={{
                    fontSize: '100%',
                    overflow: { xs: 'hidden', lg: 'revert' },
                    textOverflow: { xs: 'ellipsis', lg: 'revert' },
                    whiteSpace: { xs: 'nowrap', lg: 'revert' }
                  }}
                >
                  {synopsis}
                </Typography>
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
                <Chip label={status} color="ready" sx={{ borderRadius: '10px', fontSize: 'smaller', width: '100%' }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Item>
    </Grid>
  )
}