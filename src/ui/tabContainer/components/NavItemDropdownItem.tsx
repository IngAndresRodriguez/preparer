import { NavDropdown } from "react-bootstrap"
import { Typography } from '@mui/material';

interface NavItemDropdownItemProps {
  className?: string;
  eventKey: string;
  title: string;
  handleTabChange: <T>(module: T) => void;
  [key: string]: any;
}

export const NavItemDropdownItem = ({ className, eventKey, title, data, handleTabChange, ...rest }: NavItemDropdownItemProps) => {
  return (
    <NavDropdown.Item
      eventKey={eventKey}
      onClick={() => handleTabChange(data)}
      className={[className].join(' ')}
    >
      <Typography variant='body2' component={'span'}>{title}</Typography>
    </NavDropdown.Item>
  )
}
