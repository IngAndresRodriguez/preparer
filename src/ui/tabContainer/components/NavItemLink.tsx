import { Nav } from "react-bootstrap"

interface NavItemLinkProps {
  className?: string;
  title: string;
  eventKey: string;
  handleTabChange: <T>(data?: T) => void;
  [key: string]: any;
}

export const NavItemLink = ({ className, title, eventKey, data, handleTabChange, ...rest }: NavItemLinkProps) => {
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
        className={[className].join(' ')}
        onClick={() => handleTabChange(data)}
      >
        {title}
      </Nav.Link>
    </Nav.Item>
  )
}
