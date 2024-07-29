import { DropdownItem } from 'components/Dropdown/DropdownItem/DropdownItem';
import { DropdownList } from 'components/Dropdown/DropdownList/DropdownList';
import { SubMenuTitleWrap } from 'components/Dropdown/SubMenuTitleWrap/SubMenuTitleWrap';
import React from 'react';
import { GoTriangleRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

export const AutochemistryList = () => {
  return (
    <>
      <DropdownList className="autochemistry-list sub-menu">
        <DropdownItem>
          <Link to="/autochemistry/fuel_system">
            <SubMenuTitleWrap>
              <span>Паливна система</span>
              <GoTriangleRight />
            </SubMenuTitleWrap>
          </Link>
          <DropdownList className="sub-sub-menu">
            <DropdownItem>
              <Link to="/autochemistry/fuel_system/gasoline">
                <SubMenuTitleWrap>
                  <span>Бензин</span>
                  <GoTriangleRight />
                </SubMenuTitleWrap>
              </Link>
              <DropdownList className="sub-sub-sub-menu">
                <DropdownItem>
                  <Link to="/autochemistry/fuel_system/gasoline/additive">
                    <SubMenuTitleWrap>
                      <span>Присадки</span>
                    </SubMenuTitleWrap>
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/autochemistry/fuel_system/gasoline/cleaner">
                    <SubMenuTitleWrap>
                      <span>Очисники</span>
                    </SubMenuTitleWrap>
                  </Link>
                </DropdownItem>
              </DropdownList>
            </DropdownItem>
            <DropdownItem>
              <Link to="/autochemistry/fuel_system/diesel">
                <SubMenuTitleWrap>
                  <span>Дизель</span>
                  <GoTriangleRight />
                </SubMenuTitleWrap>
              </Link>
              <DropdownList className="sub-sub-sub-menu">
                <DropdownItem>
                  <Link to="/autochemistry/fuel_system/diesel/additive">
                    <SubMenuTitleWrap>
                      <span>Присадки</span>
                    </SubMenuTitleWrap>
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/autochemistry/fuel_system/diesel/cleaner">
                    <SubMenuTitleWrap>
                      <span>Очисники</span>
                    </SubMenuTitleWrap>
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/autochemistry/fuel_system/diesel/winter">
                    <SubMenuTitleWrap>
                      <span>"Зима"</span>
                    </SubMenuTitleWrap>
                  </Link>
                </DropdownItem>
              </DropdownList>
            </DropdownItem>
          </DropdownList>
        </DropdownItem>
        <DropdownItem>
          <SubMenuTitleWrap>
            <span>Система змащення</span>
            <GoTriangleRight />
          </SubMenuTitleWrap>
          <DropdownList className="sub-sub-menu">
            <DropdownItem>Промивки</DropdownItem>
            <DropdownItem>Присадки</DropdownItem>
            <DropdownItem>Герметики</DropdownItem>
          </DropdownList>
        </DropdownItem>
        <DropdownItem>
          <SubMenuTitleWrap>
            <span>Система охолодження</span>
            <GoTriangleRight />
          </SubMenuTitleWrap>
          <DropdownList className="sub-sub-menu">
            <DropdownItem>Промивки</DropdownItem>
            <DropdownItem>Герметики</DropdownItem>
          </DropdownList>
        </DropdownItem>
        <DropdownItem>Змащувальні препарати</DropdownItem>
        <DropdownItem>Кондиціонери металу</DropdownItem>
        <DropdownItem>
          <SubMenuTitleWrap>
            <span>Технічні рідини і спеціальні препарати</span>
            <GoTriangleRight />
          </SubMenuTitleWrap>
          <DropdownList className="sub-sub-menu">
            <DropdownItem>Кузов</DropdownItem>
            <DropdownItem>Колеса</DropdownItem>
            <DropdownItem>Кондиціонер</DropdownItem>
            <DropdownItem>Гідропідсилювач руля</DropdownItem>
          </DropdownList>
        </DropdownItem>
      </DropdownList>
    </>
  );
};
