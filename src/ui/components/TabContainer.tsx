import { Typography } from '@mui/material';
import { ReactNode, useState } from 'react';
import { Tab } from 'react-bootstrap';
import { TABS } from '../../interfaces';

interface TabContainerProps {
  children: ReactNode;
}

export const TabContainer = ({ children, ...rest }: TabContainerProps) => {

  const [lastTab, setLastTab] = useState<string>(localStorage.getItem('lastTab') || TABS.TAB_GENERAL);

  return (
    <Tab.Container
      id="tab-container"
      activeKey={lastTab}
      onSelect={(event: any) => {
        localStorage.setItem('lastTab', event);
        setLastTab(event);
      }}
    >
      {children}
      <Tab.Content
        style={{
          backgroundColor: 'rgb(60, 108, 124)',
          border: '1px solid rgba(25, 53, 64, .5)',
          borderBottomLeftRadius: '10px',
          borderBottomRightRadius: '10px',
          color: 'white',
          minHeight: 'calc(100vh - 220px)',
        }}
      >
        <Tab.Pane eventKey={lastTab} title="Home" style={{ padding: '1rem' }}>
          <Typography variant='body2' component={'span'}>{lastTab.toUpperCase()}</Typography>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  )
}
