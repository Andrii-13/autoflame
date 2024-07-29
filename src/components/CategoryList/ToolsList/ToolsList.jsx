import { DropdownItem } from 'components/Dropdown/DropdownItem/DropdownItem';
import { DropdownList } from 'components/Dropdown/DropdownList/DropdownList';
import React from 'react';

export const ToolsList = () => {
  return (
    <>
      <DropdownList className="tools-list sub-menu">
        <DropdownItem>Набори</DropdownItem>
      </DropdownList>
    </>
  );
};
