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
            <DropdownItem>
              <Link to="/autochemistry/fuel_system/diesel/additive">
                <SubMenuTitleWrap>
                  <span>Промивки</span>
                </SubMenuTitleWrap>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/autochemistry/fuel_system/diesel/additive">
                <SubMenuTitleWrap>
                  <span>Присадки</span>
                </SubMenuTitleWrap>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/autochemistry/fuel_system/diesel/additive">
                <SubMenuTitleWrap>
                  <span>Герметики</span>
                </SubMenuTitleWrap>
              </Link>
            </DropdownItem>
          </DropdownList>
        </DropdownItem>
        <DropdownItem>
          <Link to="/autochemistry/fuel_system">
            <SubMenuTitleWrap>
              <span>Система охолодження</span>
              <GoTriangleRight />
            </SubMenuTitleWrap>
          </Link>
          <DropdownList className="sub-sub-menu">
            <DropdownItem>
              <Link to="/autochemistry/fuel_system/gasoline">
                <SubMenuTitleWrap>
                  <span>Промивки</span>
                </SubMenuTitleWrap>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/autochemistry/fuel_system/gasoline">
                <SubMenuTitleWrap>
                  <span>Герметики</span>
                </SubMenuTitleWrap>
              </Link>
            </DropdownItem>
          </DropdownList>
        </DropdownItem>
        <DropdownItem>
          <SubMenuTitleWrap>
            <span>Змащувальні препарати</span>
          </SubMenuTitleWrap>
        </DropdownItem>
        <DropdownItem>
          <SubMenuTitleWrap>
            <span>Кондиціонери металу</span>
          </SubMenuTitleWrap>
        </DropdownItem>
        <DropdownItem>
          <SubMenuTitleWrap>
            <span>Технічні рідини і спеціальні препарати</span>
            <GoTriangleRight />
          </SubMenuTitleWrap>
          <DropdownList className="sub-sub-menu">
            <DropdownItem>
              <Link to="/autochemistry/fuel_system/gasoline">
                <SubMenuTitleWrap>
                  <span>Кузов</span>
                </SubMenuTitleWrap>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/autochemistry/fuel_system/gasoline">
                <SubMenuTitleWrap>
                  <span>Колеса</span>
                </SubMenuTitleWrap>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/autochemistry/fuel_system/gasoline">
                <SubMenuTitleWrap>
                  <span>Кондиціонер</span>
                </SubMenuTitleWrap>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/autochemistry/fuel_system/gasoline">
                <SubMenuTitleWrap>
                  <span>Гідропідсилювач руля</span>
                </SubMenuTitleWrap>
              </Link>
            </DropdownItem>
          </DropdownList>
        </DropdownItem>
      </DropdownList>
    </>
  );
};
