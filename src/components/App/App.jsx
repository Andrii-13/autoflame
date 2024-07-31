import { Route, Routes } from 'react-router-dom';
import { Autochemistry } from 'pages/Autochemistry/Autochemistry';
import { Autocosmetics } from 'pages/Autocosmetics/Autocosmetics';
import { AdhesivesSealants } from 'pages/AdhesivesSealants/AdhesivesSealants';
import { Tools } from 'pages/Tools/Tools';
import { Accessories } from 'pages/Accessories/Accessories';
import Home from 'pages/Home/Home';
import Catalog from 'pages/Catalog/Catalog';
import Contacts from 'pages/Contacts/Contacts';
import { Layout } from 'components/Layout/Layout';
import { SubMenu } from 'components/CategoryList/SubMenu/SubMenu';
import { ProductItemInfo } from 'components/ProductItemInfo/ProductItemInfo';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="autochemistry" element={<Autochemistry />} />
          <Route
            path="autochemistry/fuel_system"
            element={
              <SubMenu
                title="Препарати для паливної системи"
                categoryFirstIndex="autochemistry"
                categorySecondIndex="fuel"
              />
            }
          />
          <Route
            path="autochemistry/fuel_system/gasoline"
            element={
              <SubMenu
                title="Препарати для бензинових двигунів"
                categoryFirstIndex="autochemistry"
                categorySecondIndex="fuel"
                categoryThirdIndex="gasoline"
              />
            }
          />
          <Route
            path="autochemistry/fuel_system/gasoline/additive"
            element={
              <SubMenu
                title="Присадки для бензинових двигунів"
                categoryFirstIndex="autochemistry"
                categorySecondIndex="fuel"
                categoryThirdIndex="gasoline"
                categoryFourthIndex="additive"
              />
            }
          />
          <Route
            path="autochemistry/fuel_system/gasoline/cleaner"
            element={
              <SubMenu
                title="Присадки для бензинових двигунів"
                categoryFirstIndex="autochemistry"
                categorySecondIndex="fuel"
                categoryThirdIndex="gasoline"
                categoryFourthIndex="cleaner"
              />
            }
          />
          <Route
            path="autochemistry/fuel_system/diesel"
            element={
              <SubMenu
                title="Препарати для дизельних двигунів"
                categoryFirstIndex="autochemistry"
                categorySecondIndex="fuel"
                categoryThirdIndex="diesel"
              />
            }
          />
          <Route
            path="autochemistry/fuel_system/diesel/additive"
            element={
              <SubMenu
                title="Присадки для дизельних двигунів"
                categoryFirstIndex="autochemistry"
                categorySecondIndex="fuel"
                categoryThirdIndex="diesel"
                categoryFourthIndex="additive"
              />
            }
          />
          <Route
            path="autochemistry/fuel_system/diesel/cleaner"
            element={
              <SubMenu
                title="Очисники для дизельних двигунів"
                categoryFirstIndex="autochemistry"
                categorySecondIndex="fuel"
                categoryThirdIndex="diesel"
                categoryFourthIndex="cleaner"
              />
            }
          />
          <Route
            path="autochemistry/fuel_system/diesel/winter"
            element={
              <SubMenu
                title="Препарати для дизельних двигунів в зимовий сезон"
                categoryFirstIndex="autochemistry"
                categorySecondIndex="fuel"
                categoryThirdIndex="diesel"
                categoryFourthIndex="winter"
              />
            }
          />
          <Route path="autocosmetics" element={<Autocosmetics />} />
          <Route path="adhesives_sealants" element={<AdhesivesSealants />} />
          <Route path="accessories" element={<Accessories />} />
          <Route path="tools" element={<Tools />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="product/:article" element={<ProductItemInfo />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};
