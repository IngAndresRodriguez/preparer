import { createContext } from 'react';
import { Typography } from '@mui/material';
import { Tab } from 'react-bootstrap';
import { TabContainerContextProps, TabContainerProps } from '../interfaces';
import { useTabContainer } from '../hooks/useTabContainer';

export const TabContainerContext = createContext({} as TabContainerContextProps);
const { Provider } = TabContainerContext;

export const TabContainer = ({ children, onChange, className, style, value, initialValues, ...rest }: TabContainerProps) => {

  const { lastTab, handleChangeActiveTab, handleActiveDefault } = useTabContainer({ onChange, value, initialValues });

  return (
    <Provider value={{
      lastTab,
      handleChangeActiveTab
    }}>
      <Tab.Container
        id="tab-container"
        activeKey={lastTab}
        onSelect={handleChangeActiveTab}
      >
        {
          children && (typeof children === 'function')
            ? children({
              lastTab,
              handleChangeActiveTab,
              handleActiveDefault
            })
            : children
        }

        <Tab.Content
          style={{
            backgroundColor: 'rgb(60, 108, 124)',
            border: '1px solid rgba(25, 53, 64, .5)',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
            color: 'white',
            minHeight: 'calc(100vh - 335px)',
          }}
        >
          <Tab.Pane eventKey={lastTab} title="Home" style={{ padding: '1rem' }}>
            <Typography variant='body2' component={'span'}>{lastTab.toUpperCase()}</Typography>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Provider>

  )
}
