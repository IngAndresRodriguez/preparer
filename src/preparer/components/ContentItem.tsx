import { Module } from '../../interfaces'
import { NavItemDropdown, NavItemDropdownItem, NavItemLink } from '../../ui';

interface ContentItemProps {
  module: Module
  handleTabChange: <T>(data?: T) => void;
}

export const ContentItem = ({ module, handleTabChange, ...rest }: ContentItemProps) => {

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
