import { MouseEvent, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Grid, Typography } from '@mui/material';
import { MainTitle } from "../../ui";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setActivePattern } from "../../store";
import { TabContainer } from "./TabContainer";

export const PatternContent = () => {

  const { scenario, exercise } = useAppSelector(state => state.exercise);
  const { pattern } = useAppSelector(state => state.pattern);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleCancel = (event: MouseEvent<HTMLAnchorElement>) => {
    dispatch(setActivePattern(undefined));
  }

  useEffect(() => {

    if (!exercise) {
      navigate('/new', { replace: true });
    }

  }, [exercise])

  return (
    <>
      <MainTitle>
        <Typography component={'span'} variant="body2">EJERCICIO - </Typography>
        <Typography component={'span'} variant="body2" sx={{ textTransform: 'uppercase', fontWeight: '700' }}> {scenario} - {pattern?.displayName} </Typography>
      </MainTitle>
      <Box sx={{ flexGrow: 1, padding: '2rem', width: '100%', }}>
        <Box sx={{ bgcolor: 'tertiary.main', borderRadius: '10px', padding: '.2rem' }}>
          <Grid container spacing={0} sx={{ paddingX: '.8rem', paddingTop: '.8rem' }}>
            <Box sx={{
              borderRadius: '10px',
              minHeight: 'calc(100vh - 180px)',
              width: '100%',
            }}>
              <TabContainer />
            </Box>
          </Grid>
          <Grid container spacing={0} sx={{ padding: '.8rem', justifyContent: 'right' }}>
            <Link to="/new" onClick={handleCancel}>
              <Button fullWidth variant="contained" color='danger' sx={{ display: 'inline-block' }}>CANCELAR</Button>
            </Link>
          </Grid>
        </Box>
      </Box>
    </>
  )
}
