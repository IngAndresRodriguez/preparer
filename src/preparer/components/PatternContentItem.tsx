import { DataModule } from '../../interfaces'
import { NavItemDropdown, NavItemDropdownItem, NavItemLink } from '../../ui';

interface PatternContentItemProps {
  module: DataModule
}

export const PatternContentItem = ({ module, ...rest }: PatternContentItemProps) => {

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
              eventKey={`tab-${_id}`}
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
    />
  )
}
