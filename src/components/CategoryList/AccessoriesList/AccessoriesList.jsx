import { DropdownItem } from 'components/Dropdown/DropdownItem/DropdownItem';
import { DropdownList } from 'components/Dropdown/DropdownList/DropdownList';
import React from 'react';

export const AccessoriesList = () => {
  return (
    <>
      <DropdownList className="accessories-list sub-menu">
        <DropdownItem>Щітки</DropdownItem>
        <DropdownItem>Ганчірки</DropdownItem>
      </DropdownList>
    </>
  );
};
