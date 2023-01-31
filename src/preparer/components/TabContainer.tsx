import { Box } from '@mui/material';
import { ReactNode, useState } from 'react';
import { Nav, NavDropdown, Tab } from 'react-bootstrap';

interface TabContainerProps {
  children?: ReactNode;
}

export const TabContainer = ({ children }: TabContainerProps) => {

  const [lastTab, setLastTab] = useState<string>(localStorage.getItem('lastTab') || 'general');

  const handleViewChange = (event: any) => {
    localStorage.setItem('lastTab', event);
    setLastTab(event);
  }

  return (
    <Tab.Container
      id="tab-container"
      activeKey={lastTab}
      defaultActiveKey={'general'}
      onSelect={handleViewChange}
    >
      <Box className={['scrollable'].join(' ')} sx={{ overflowX: 'auto', overflowY: 'hidden' }}>
        <Nav
          variant="tabs"
          style={{
            borderBottom: 'none',
            minHeight: 'min-content',
            minWidth: 'max-content'
          }}>
          <Nav.Item>
            <Nav.Link
              eventKey={`general`}
              style={{
                backgroundColor: 'rgba(60, 108, 124, 0.3)',
                border: '1px solid rgba(25, 53, 64, .5)',
                borderBottom: 'none',
                color: 'white',
              }}
              className={[].join(' ')}
            >
              ÁREA_DE_TRABAJO
            </Nav.Link>
          </Nav.Item>
          <NavDropdown
            title="XXXX"
            style={{
              backgroundColor: 'rgba(60, 108, 124, 0.3)',
              border: '1px solid rgba(25, 53, 64, .5)',
              borderBottom: 'none',
              borderLeft: 'none',
              borderTopLeftRadius: '.375rem',
              borderTopRightRadius: '.375rem',
              color: 'white',
            }}
          >
            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          {
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
              <Nav.Item key={`nav-${index}`}>
                <Nav.Link
                  eventKey={`home-${index}`}
                  style={{
                    backgroundColor: 'rgba(60, 108, 124, 0.3)',
                    border: '1px solid rgba(25, 53, 64, .5)',
                    borderBottom: 'none',
                    borderLeft: 'none',
                    color: 'white',
                  }}
                  className={[].join(' ')}
                >
                  Home-{index}
                </Nav.Link>
              </Nav.Item>
            ))
          }
        </Nav>
      </Box>
      <Tab.Content
        style={{
          backgroundColor: 'rgb(60, 108, 124)',
          border: '1px solid rgba(25, 53, 64, .5)',
          borderBottomLeftRadius: '10px',
          borderBottomRightRadius: '10px',
          color: 'white',
          minHeight: 'calc(100vh - 230px)',
        }}
      >
        <Tab.Pane eventKey={lastTab} title="Home" style={{ padding: '1rem' }}>
          <h1>{lastTab.toUpperCase()}</h1>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  )
}
