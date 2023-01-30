import { MouseEvent, SyntheticEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Grid, Typography } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import { Tabs, Tab, Nav, NavDropdown } from "react-bootstrap";
import { MainTitle } from "../../ui";
import { PatternTabContent } from "./PatternTabContent";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setActivePattern } from "../../store";

const a11yProps = (index: number) => {
  return {
    id: `data-tab-${index}`,
    'aria-controls': `data-tabpanel-${index}`,
  };
}

export const PatternContent = () => {

  const { scenario, exercise } = useAppSelector(state => state.exercise);
  const { pattern } = useAppSelector(state => state.pattern);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [value, setValue] = useState<string>('home');

  // const handleChange = (event: SyntheticEvent, newValue: number) => {
  //   setValue(newValue);
  // };

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
        <Box sx={{ bgcolor: 'var(--color-64A7BE)', borderRadius: '10px', padding: '.7rem', }}>
          <Grid container spacing={1} >
            <Box sx={{ flexGrow: 1, padding: '1rem', width: '100%', }}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: 'divider',
                  borderRadius: '10px',
                  borderTopRightRadius: '10px',
                  minHeight: 'calc(100vh - 200px)',
                  color: 'white',
                }}
              >
                <Tab.Container
                  id="tabs-container"
                  activeKey={value}
                  defaultActiveKey={'home'}
                  onSelect={(key: any) => setValue(key)}
                >
                  <Nav variant="tabs"  navbarScroll={true} >
                    <Nav.Item>
                      <Nav.Link eventKey="home" style={{ backgroundColor: 'rgba(60, 108, 124, 0.3)', color: 'white' }}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="home-2" style={{ backgroundColor: 'rgba(60, 108, 124, 0.3)', color: 'white' }}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="home-3" style={{ backgroundColor: 'rgba(60, 108, 124, 0.3)', color: 'white' }}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="home-4" style={{ backgroundColor: 'rgba(60, 108, 124, 0.3)', color: 'white' }}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="home-5" style={{ backgroundColor: 'rgba(60, 108, 124, 0.3)', color: 'white' }}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="home-6" style={{ backgroundColor: 'rgba(60, 108, 124, 0.3)', color: 'white' }}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="home-7" style={{ backgroundColor: 'rgba(60, 108, 124, 0.3)', color: 'white' }}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="home-8" style={{ backgroundColor: 'rgba(60, 108, 124, 0.3)', color: 'white' }}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="home-9" style={{ backgroundColor: 'rgba(60, 108, 124, 0.3)', color: 'white' }}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="home-10" style={{ backgroundColor: 'rgba(60, 108, 124, 0.3)', color: 'white' }}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="home-11" style={{ backgroundColor: 'rgba(60, 108, 124, 0.3)', color: 'white' }}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="home-12" style={{ backgroundColor: 'rgba(60, 108, 124, 0.3)', color: 'white' }}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="home-13" style={{ backgroundColor: 'rgba(60, 108, 124, 0.3)', color: 'white' }}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="home-14" style={{ backgroundColor: 'rgba(60, 108, 124, 0.3)', color: 'white' }}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="home-15" style={{ backgroundColor: 'rgba(60, 108, 124, 0.3)', color: 'white' }}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="home-16" style={{ backgroundColor: 'rgba(60, 108, 124, 0.3)', color: 'white' }}>Home</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="home-17" style={{ backgroundColor: 'rgba(60, 108, 124, 0.3)', color: 'white' }}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="home-18" style={{ backgroundColor: 'rgba(60, 108, 124, 0.3)', color: 'white' }}>Home</Nav.Link>
                    </Nav.Item> */}
                    <NavDropdown title="Dropdown">
                      <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                      <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Tab.Content
                    style={{
                      backgroundColor: 'var(--color-3C6C7C)',
                      borderBottomLeftRadius: '10px',
                      borderBottomRightRadius: '10px',
                      color: 'white',
                      minHeight: 'calc(100vh - 240px)',
                    }}
                  >
                    <Tab.Pane eventKey={value} title="Home" style={{ padding: '1rem' }}>
                      <h1>{value.toUpperCase()}</h1>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>

              </Box>

            </Box>
          </Grid>
          <Grid container spacing={1} sx={{ padding: '.8rem', justifyContent: 'right' }}>
            <Link to="/new" onClick={handleCancel}>
              <Button fullWidth variant="contained" color='danger' sx={{ display: 'inline-block' }}>CANCELAR</Button>
            </Link>
          </Grid>
        </Box>
      </Box>
    </>
  )
}
