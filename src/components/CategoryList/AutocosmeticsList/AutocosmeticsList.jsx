import { DropdownItem } from 'components/Dropdown/DropdownItem/DropdownItem';
import { DropdownList } from 'components/Dropdown/DropdownList/DropdownList';
import { SubMenuTitleWrap } from 'components/Dropdown/SubMenuTitleWrap/SubMenuTitleWrap';
import React from 'react';
import { GoTriangleRight } from 'react-icons/go';

export const AutocosmeticsList = () => {
  return (
    <>
      <DropdownList className="autocosmetics-list sub-menu">
        <DropdownItem>
          <SubMenuTitleWrap>
            <span>Кузов</span>
            <GoTriangleRight />
          </SubMenuTitleWrap>
          <DropdownList className="sub-sub-menu">
            <DropdownItem>Шампуні</DropdownItem>
            <DropdownItem>Поліролі</DropdownItem>
            <DropdownItem>Очисники</DropdownItem>
            <DropdownItem>Антигравій</DropdownItem>
          </DropdownList>
        </DropdownItem>
        <DropdownItem>Скло</DropdownItem>
        <DropdownItem>Пластик</DropdownItem>
        <DropdownItem>Шкіра</DropdownItem>
        <DropdownItem>Тканина</DropdownItem>
        <DropdownItem>Резина</DropdownItem>
        <DropdownItem>Двигун, кондиціонер, нейтралізатори запахів</DropdownItem>
      </DropdownList>
    </>
  );
};
