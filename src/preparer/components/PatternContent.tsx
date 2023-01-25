import { MouseEvent, SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Grid, Tab, Tabs } from "@mui/material"
import { MainTitle } from "../../ui";
import { PatternTabContent } from "./PatternTabContent";
import { useAppDispatch } from "../../hooks";
import { setActivePattern } from "../../store";

const a11yProps = (index: number) => {
  return {
    id: `data-tab-${index}`,
    'aria-controls': `data-tabpanel-${index}`,
  };
}

export const PatternContent = () => {

  const dispatch = useAppDispatch();
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleCancel = (event: MouseEvent<HTMLAnchorElement>) => {
    dispatch(setActivePattern(undefined));
  }

  return (
    <>
      <MainTitle title="EJERCICIO" />
      <Box sx={{ flexGrow: 1, padding: '2rem', width: '100%', }}>
        <Box sx={{ bgcolor: 'var(--color-64A7BE)', borderRadius: '10px', padding: '.7rem', }}>
          <Grid container spacing={1} >
            <Box sx={{ flexGrow: 1, padding: '1rem', width: '100%', }}>
              <Box
                sx={{
                  bgcolor: 'var(--color-3C6C7C)',
                  borderBottom: 1,
                  borderColor: 'divider',
                  borderTopLeftRadius: '10px',
                  borderTopRightRadius: '10px',
                  color: 'white',
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                >
                  <Tab sx={{ color: 'white !important' }} label="ÁREA DE TRABAJO" {...a11yProps(0)} />
                </Tabs>
              </Box>
              <PatternTabContent value={value} index={0} >
                MAP
              </PatternTabContent>
            </Box>
          </Grid>
          <Grid container spacing={1} sx={{ padding: '.8rem', justifyContent: 'right' }}>
            <Link to="/new/patterns" onClick={handleCancel}>
              <Button fullWidth variant="contained" color='danger' sx={{ display: 'inline-block' }}>CANCELAR</Button>
            </Link>
          </Grid>
        </Box>
      </Box>
    </>
  )
}
