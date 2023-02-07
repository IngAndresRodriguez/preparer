import { ReactNode } from 'react';
import { Nav } from 'react-bootstrap';

interface NavTabProps {
  children?: ReactNode;
}

export const NavTab = ({ children }: NavTabProps) => {
  return (
    <Nav
      variant="tabs"
      style={{
        borderBottom: 'none',
        minHeight: '35px',
        minWidth: 'max-content'
      }}>
      {children}
    </Nav>
  )
}
