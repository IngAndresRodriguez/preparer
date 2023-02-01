import { NavDropdown } from "react-bootstrap"
import { Typography } from '@mui/material';

interface NavItemDropdownItemProps {
  eventKey: string;
  title: string;
}

export const NavItemDropdownItem = ({ eventKey, title, ...rest }: NavItemDropdownItemProps) => {
  return (
    <NavDropdown.Item eventKey={eventKey}>
      <Typography variant='body2' component={'span'}>{title}</Typography>
    </NavDropdown.Item>
  )
}
