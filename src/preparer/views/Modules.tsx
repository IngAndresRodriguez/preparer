import { Box } from '@mui/material';
import { MainTitle } from '../../ui';
import { ModuleList } from '../';

export const Modules = () => {
  return (
    <>
      <MainTitle title="MODULOS DISPONIBLES" />
      <Box sx={{ flexGrow: 1 }}>
        <ModuleList />
      </Box>
    </>
  )
}
