import { DataModule } from '../../interfaces'
import { NavItemDropdown, NavItemDropdownItem, NavItemLink } from '../../ui';

interface PatternContentItemProps {
  module: DataModule
  handleTabChange: <T>(data?: T) => void;
}

export const PatternContentItem = ({ module, handleTabChange, ...rest }: PatternContentItemProps) => {

  const { _id, tabs } = module;
  const { displayName, tabsPatterns } = tabs;

  if (tabsPatterns.length > 0) {
    return (
      <NavItemDropdown title={displayName}>
        {
          tabsPatterns.map(({ _id, displayName: title }) => (
            <NavItemDropdownItem
              key={_id}
              title={title}
              data={module}
              eventKey={`tab-${_id}`}
              handleTabChange={handleTabChange}
            />
          ))
        }
      </NavItemDropdown>
    )
  }

  return (
    <NavItemLink
      title={displayName}
      eventKey={`tab-${_id}`}
      data={module}
      className={''}
      handleTabChange={handleTabChange} />
  )
}
