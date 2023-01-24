import { Link } from 'react-router-dom'
import { Button, Grid } from '@mui/material'
import { DataPattern } from '../../interfaces'

interface PatternListItemProps {
  pattern: DataPattern
}

export const PatternListItem = ({ pattern }: PatternListItemProps) => {
  return (
    <Grid item xs={3}>
      <Link to={`/new/patterns/${pattern.name}`}>
        <Button
          fullWidth
          variant="contained"
          color="warning"
          sx={{
            display: 'inline-block',
            fontSize: 'smaller',
            fontWeight: 700,
            lineHeight: '15px'
          }}
        >
          {pattern.displayName}
        </Button>
      </Link>
    </Grid>
  )
}