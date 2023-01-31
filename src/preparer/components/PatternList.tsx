import { Grid } from '@mui/material';
import { PatternListItem } from './PatternListItem';
import { useAppSelector } from '../../hooks';
import { Empty, Processing } from '../../ui';
import { sortingFunction } from '../../helpers';

export const PatternList = () => {

  const { loading, patterns } = useAppSelector(state => state.pattern);

  if (loading === 'pending') {
    return (<Processing />);
  }

  if (patterns.length === 0) {
    return (<Empty title='No hay patrones disponibles' />);
  }

  const sortedPatterns = sortingFunction([...patterns], 'id');

  return (
    <Grid className="animate__animated animate__fadeIn animate__faster" container spacing={1}>
      {
        sortedPatterns.map(pattern => pattern.isActive && (
          <PatternListItem key={pattern._id} pattern={pattern} />
        ))
      }
    </Grid>
  )
}