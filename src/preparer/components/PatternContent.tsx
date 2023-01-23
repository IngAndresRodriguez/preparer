import { SyntheticEvent, useState } from "react";
import { Box, Button, Grid, Tab, Tabs, Typography } from "@mui/material"
import { MainTitle } from "../../ui";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel({ children, value, index, ...rest }: TabPanelProps) {

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`data-tabpanel-${index}`}
      aria-labelledby={`data-tab-${index}`}
      {...rest}
    >
      {value === index && (
        <Box
          sx={{
            backgroundColor: 'var(--color-3C6C7C)',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
            color: 'white',
            minHeight: 'calc(100vh - 250px)',
            padding: 3,
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

const a11yProps = (index: number) => {
  return {
    id: `data-tab-${index}`,
    'aria-controls': `data-tabpanel-${index}`,
  };
}

export const PatternContent = () => {

  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
              <TabPanel value={value} index={0} >
                MAP
              </TabPanel>
            </Box>
          </Grid>
          <Grid container spacing={1} sx={{ padding: '.8rem', justifyContent: 'right' }}>
            <Button href="/new/patterns" variant='contained' color='danger'>CANCELAR</Button>
          </Grid>
        </Box>
      </Box>
    </>
  )
}
