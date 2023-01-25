import { Button, Grid } from "@mui/material"
import { DataModule } from "../../interfaces"
import { useAppSelector } from '../../hooks';

interface ModuleListItemProps {
  module: DataModule
}

export const ModuleListItem = ({ module }: ModuleListItemProps) => {

  const { pattern } = useAppSelector(state => state.pattern);
  const { moduleId, displayName } = module;

  return (
    <Grid item xs={12} sx={{ paddingRight: '1em' }}>
      <Button
        fullWidth
        variant="contained"
        color={pattern && pattern.modules.includes(moduleId) ? 'warning' : 'default'}
        sx={{
          display: 'inline-block',
          fontSize: { xs: '8px', lg: '10px' },
          fontWeight: 700,
          lineHeight: 1.8,
          textShadow: '0px 4px 4px rgb(0 0 0 / 25%)'
        }}
      >
        {displayName}
      </Button>
    </Grid>
  )
}