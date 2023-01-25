import { MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid } from '@mui/material'
import { DataPattern } from '../../interfaces'
import { useAppDispatch } from '../../hooks';
import { setActivePattern } from '../../store';

interface PatternListItemProps {
  pattern: DataPattern
}

export const PatternListItem = ({ pattern }: PatternListItemProps) => {

  const dispatch = useAppDispatch();

  const handleActivePattern = (event: MouseEvent<HTMLAnchorElement>) => {
    dispatch(setActivePattern({ ...pattern }));
  }

  return (
    <Grid item xs={12} md={6} lg={3}>
      <Link to={`/new/patterns/${pattern.name}`} onClick={handleActivePattern}>
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
        >
          {pattern.displayName}
        </Button>
      </Link>
    </Grid>
  )
}