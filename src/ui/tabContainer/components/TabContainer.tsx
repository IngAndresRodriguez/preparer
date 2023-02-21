import { createContext } from 'react';
import { Typography } from '@mui/material';
import { Tab } from 'react-bootstrap';
import { TabContainerContextProps, TabContainerProps } from '../interfaces';
import { useTabContainer } from '../hooks/useTabContainer';
// import { MyDurationInput } from '../../inputs';
// import { Form, Formik } from 'formik';

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
            minHeight: 'calc(100vh - 220px)',
          }}
        >
          <Tab.Pane eventKey={lastTab} title="Home" style={{ padding: '1rem' }}>
            <Typography variant='body2' component={'span'}>{lastTab.toUpperCase()}</Typography>

            {/* <h1>Subscribe!</h1>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                acceptedTerms: false, // added for our checkbox
                jobType: '', // added for our select
              }}
              // validationSchema={}  
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              <Form>
                <MyDurationInput label="First Name"
             name="firstName"
             type="text"
             placeholder="Jane" />

                <button type="submit">Submit</button>
              </Form>
            </Formik> */}

          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Provider>

  )
}
