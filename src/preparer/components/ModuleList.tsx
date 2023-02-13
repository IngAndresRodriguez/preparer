import { Grid, Box } from '@mui/material';
import { useAppSelector } from "../../hooks";
import { Empty, Processing } from "../../ui";
import { ModuleListItem } from "./ModuleListItem";
import { sortingFunction } from '../../helpers';

export const ModuleList = () => {

  const { loading, modules } = useAppSelector(state => state.module);

  if (loading === 'pending') {
    return (<Processing />);
  }

  if (modules.length === 0) {
    return (<Empty title='No hay modulos disponibles' />);
  }

  const sortedModules = sortingFunction([...modules], 'order');

  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: {
          xs: 'calc(100vh - 379px)',
          sm: 'calc(100vh - 379px)',
          md: 'calc(100vh - 205px)',
          lg: 'calc(100vh - 205px)',
        },
        paddingTop: { xs: 2, sm: 2, md: 0, lg: 0 }
      }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid
        container
        spacing={1}
        className='scrollable'
        sx={{
          maxHeight: {
            xs: 'calc(78vh - 80px)',
            sm: 'calc(78vh - 80px)',
            md: 'calc(99vh - 80px)',
            lg: 'calc(99vh - 80px)'
          },
          marginLeft: 0
        }}
      >
        {
          sortedModules.map(module => (
            <ModuleListItem key={module._id} module={module} />
          ))
        }
      </Grid>
    </Box>
  )
}