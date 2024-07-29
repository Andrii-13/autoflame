import { DropdownItem } from 'components/Dropdown/DropdownItem/DropdownItem';
import { DropdownList } from 'components/Dropdown/DropdownList/DropdownList';
import React from 'react';

export const AdhesivesList = () => {
  return (
    <>
      <DropdownList className="adhesives-list sub-menu">
        <DropdownItem>Епоксі-адгезіви</DropdownItem>
        <DropdownItem>Акрилові клеї</DropdownItem>
        <DropdownItem>Силіконові герметики</DropdownItem>
        <DropdownItem>Цианокрилатні клеї</DropdownItem>
        <DropdownItem>Анаеробні фіксатори</DropdownItem>
        <DropdownItem>Еластичні клеї</DropdownItem>
        <DropdownItem>Ремонтні препарати</DropdownItem>
      </DropdownList>
    </>
  );
};
