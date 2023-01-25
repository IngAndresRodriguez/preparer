import { Box } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export const PatternTabContent = ({ children, value, index, ...rest }: TabPanelProps) => {
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
  )
}
