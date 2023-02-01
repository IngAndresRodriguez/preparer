import { ReactNode } from 'react';
import { NavDropdown } from "react-bootstrap"

interface NavItemDropdownProps {
  children: ReactNode,
  title: string;
}

export const NavItemDropdown = ({ children, title, ...rest }: NavItemDropdownProps) => {
  return (
    <NavDropdown
      title={title}
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
      {children}
    </NavDropdown>
  )
}
