import { MouseEvent } from "react";
import { Button, Grid } from "@mui/material"
import { Module } from "../../interfaces"
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setActiveModules } from "../../store";

interface ModuleListItemProps {
  module: Module
}

export const ModuleListItem = ({ module }: ModuleListItemProps) => {

  const { pattern } = useAppSelector(state => state.pattern);
  const dispatch = useAppDispatch();

  const { moduleId, displayName } = module;

  const handleActiveModule = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    dispatch(setActiveModules({ ...module }));
  }

  return (
    <Grid item xs={12} sx={{ paddingRight: '1em' }}>
      <Button
        fullWidth
        variant="contained"
        color={pattern && pattern.modules.includes(moduleId) ? 'warning' : 'default'}
        disabled={pattern && pattern.modules.includes(moduleId) ? false : true}
        sx={{
          display: 'inline-block',
          fontSize: { xs: '8px', lg: '10px' },
          fontWeight: 700,
          lineHeight: 1.8,
          textShadow: '0px 4px 4px rgb(0 0 0 / 25%)',
          '&.Mui-disabled': {
            color: 'black',
            backgroundColor: 'default.main',
            opacity: .65
          }
        }}
        onClick={handleActiveModule}
      >
        {displayName}
      </Button>
    </Grid>
  )
}