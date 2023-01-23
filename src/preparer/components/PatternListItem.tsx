import { Button, Grid } from '@mui/material'
import { DataPattern } from '../../interfaces'

interface PatternListItemProps {
  pattern: DataPattern
}

export const PatternListItem = ({ pattern }: PatternListItemProps) => {
  return (
    <Grid item xs={3}>
      <Button
        href={`/new/patterns/${pattern.name}`}
        fullWidth
        variant="contained"
        color="warning"
        sx={{
          fontSize: 'smaller',
          fontWeight: 700,
          lineHeight: '15px'
        }}
      >
        {pattern.displayName}
      </Button>
    </Grid>
  )
}