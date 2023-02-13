import { MouseEvent, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Grid, Typography } from '@mui/material';
import { MainTitle, NavItemLink, NavTab, TabContainer } from "../../ui";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setActiveModule, setActiveModules, setActivePattern } from "../../store";
import { PatternContentItem } from "./PatternContentItem";
import { DataModule, TABS } from "../../interfaces";

export const PatternContent = () => {

  const { scenario, exercise } = useAppSelector(state => state.exercise);
  const { pattern } = useAppSelector(state => state.pattern);
  const { module, activeModules } = useAppSelector(state => state.module);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleCancel = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    dispatch(setActivePattern(undefined));
    dispatch(setActiveModules(undefined));

    navigate('/new', { replace: true });
  }

  const handleTabChange = (module?: DataModule): void => {
    dispatch(setActiveModule(module));
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
            <Box sx={{ borderRadius: '10px', minHeight: 'calc(100vh - 180px)', width: '100%', }}>
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
                            <PatternContentItem
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
