import { Button, Grid } from "@mui/material"
import { DataModule } from "../../interfaces"

interface ModuleListItemProps {
  module: DataModule
}

export const ModuleListItem = ({ module }: ModuleListItemProps) => {
  return (
    <Grid item xs={12}>
      <Button
        fullWidth
        variant="contained"
        color="warning"
        sx={{
          fontSize: 'smaller',
          fontWeight: 700,
          lineHeight: '15px',
          padding: '.375rem .75rem'
        }}
      >
        {module.displayName}
      </Button>
    </Grid>
  )
}