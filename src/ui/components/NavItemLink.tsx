import { Nav } from "react-bootstrap"
import { DataModule } from "../../interfaces";

interface NavItemLinkProps {
  title: string;
  eventKey: string;
  module?: DataModule
  handleTabChange: (module?: DataModule) => void;
}

export const NavItemLink = ({ title, eventKey, module, handleTabChange, ...rest }: NavItemLinkProps) => {
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
        onClick={() => handleTabChange(module)}
      >
        {title}
      </Nav.Link>
    </Nav.Item>
  )
}
