import React, { useEffect, MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Grid, Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setActiveModule, setActiveModules, setActivePattern, startLoadingPatterns } from '../../store';
import { Module, TABS } from '../../interfaces';
import { MainTitle, NavItemLink, NavTab, TabContainer } from '../../ui';
import { ContentItem } from '../components';

export const Content = () => {

  const { scenario, exercise } = useAppSelector(state => state.exercise);
  const { patternId, pattern } = useAppSelector(state => state.pattern);
  const { module, activeModules } = useAppSelector(state => state.module);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleCancel = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    dispatch(setActivePattern(undefined));
    dispatch(setActiveModules(undefined));

    navigate('/new', { replace: true });
  }

  const handleTabChange = (module?: Module): void => {
    dispatch(setActiveModule(module));
  }

  useEffect(() => {

    if (!exercise) {
      navigate('/new', { replace: true });
    }

  }, [exercise])

  useEffect(() => {

    if (!patternId) {
      navigate('/new', { replace: true });
    }

  }, [patternId])

  return (
    <>
      <MainTitle>
        <Typography component={'span'} variant="body2">EJERCICIO - </Typography>
        <Typography component={'span'} variant="body2" sx={{ textTransform: 'uppercase', fontWeight: '700' }}> {scenario} - {pattern?.displayName} </Typography>
      </MainTitle>
      <Box sx={{ flexGrow: 1, padding: '2rem', width: '100%' }} className="animate__animated animate__fadeIn animate__faster">
        <Box sx={{ bgcolor: 'tertiary.main', borderRadius: '10px', padding: '.2rem' }}>
          <Grid container spacing={0} sx={{ paddingX: '.8rem', paddingTop: '.8rem' }}>
            <Box sx={{
              borderRadius: '10px',
              minHeight: {
                xs: 'calc(100vh - 379px)',
                sm: 'calc(100vh - 379px)',
                md: 'calc(100vh - 295px)',
                lg: 'calc(100vh - 295px)',
              },
              width: '100%',
            }}>
              <TabContainer initialValues={{ activeTab: TABS.TAB_GENERAL }}>
                {
                  (args) => (
                    <Box className={['scrollable'].join(' ')} sx={{ overflowX: 'auto', overflowY: 'hidden' }}>
                      <NavTab>
                        <NavItemLink
                          className={[!module && 'active'].join(' ')}
                          title="ÁREA_DE_TRABAJO"
                          eventKey={TABS.TAB_GENERAL}
                          handleTabChange={handleTabChange}
                        />
                        {
                          activeModules.map((module) => (
                            <ContentItem
                              key={module._id}
                              module={module}
                              handleTabChange={handleTabChange}
                            />
                          ))
                        }
                      </NavTab>
                    </Box>
                  )
                }
              </TabContainer>
            </Box>
          </Grid>
          <Grid container spacing={0} sx={{ padding: '.8rem', justifyContent: 'right' }}>
            <Button onClick={handleCancel} variant="contained" color='danger' sx={{ display: 'inline-block' }}>CANCELAR</Button>
          </Grid>
        </Box>
      </Box>
    </>
  )
}