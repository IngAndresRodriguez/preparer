import { MouseEvent, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Grid } from '@mui/material'
import { Pattern } from '../../interfaces'
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setActivePattern, startUpdateExercise } from '../../store';

interface PatternListItemProps {
  pattern: Pattern
}

export const PatternListItem = ({ pattern }: PatternListItemProps) => {

  const { scenario } = useAppSelector(state => state.exercise);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleActivePattern = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!scenario) {
      return;
    }

    await dispatch(startUpdateExercise({ idScenario: scenario, exercise: { pattern: pattern.id.toString() } }));
    dispatch(setActivePattern({ ...pattern }));

    navigate('/new/pattern', { replace: true });

  }

  return (
    <Grid item xs={12} md={6} lg={3}>
      <Button
        fullWidth
        variant="contained"
        color="warning"
        sx={{
          display: 'inline-block',
          fontSize: '11px',
          fontWeight: 800,
          lineHeight: 1.8,
          textShadow: '0px 4px 4px rgb(0 0 0 / 25%)'
        }}
        onClick={handleActivePattern}
      >
        {pattern.displayName}
      </Button>
    </Grid>
  )
}