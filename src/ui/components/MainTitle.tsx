import { Box } from '@mui/material';

interface MainTitleProps {
  children?: JSX.Element | JSX.Element[];
  title?: string;
}

export const MainTitle = ({ title, children }: MainTitleProps) => {
  return (
    <Box className='main-title'>{children ? children : title}</Box>
  )
}
