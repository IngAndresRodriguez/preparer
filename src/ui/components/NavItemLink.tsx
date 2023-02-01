import { Nav } from "react-bootstrap"

interface NavItemLinkProps {
  title: string;
  eventKey: string;
}

export const NavItemLink = ({ title, eventKey, ...rest }: NavItemLinkProps) => {
  return (
    <Nav.Item>
      <Nav.Link
        eventKey={eventKey}
        style={{
          backgroundColor: 'rgba(60, 108, 124, 0.3)',
          border: '1px solid rgba(25, 53, 64, .5)',
          borderBottom: 'none',
          color: 'white',
        }}
        className={[].join(' ')}
      >
        {title}
      </Nav.Link>
    </Nav.Item>
  )
}
