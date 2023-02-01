import { NavDropdown } from "react-bootstrap"
import { Typography } from '@mui/material';
import { DataModule } from "../../interfaces";

interface NavItemDropdownItemProps {
  eventKey: string;
  title: string;
  module: DataModule
  handleTabChange: (module: DataModule) => void;
}

export const NavItemDropdownItem = ({ eventKey, title, module, handleTabChange, ...rest }: NavItemDropdownItemProps) => {
  return (
    <NavDropdown.Item eventKey={eventKey} onClick={() => handleTabChange(module)}>
      <Typography variant='body2' component={'span'}>{title}</Typography>
    </NavDropdown.Item>
  )
}
