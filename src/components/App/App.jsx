import { Catalog, Contacts, Home } from 'pages';
import { Footer, Header } from 'components';
import { Route, Routes } from 'react-router-dom';
import { Content } from 'components/Content/Content';
import { Autochemistry } from 'pages/Autochemistry/Autochemistry';
import { Autocosmetics } from 'pages/Autocosmetics/Autocosmetics';
import { AdhesivesSealants } from 'pages/AdhesivesSealants/AdhesivesSealants';
import { Tools } from 'pages/Tools/Tools';

export const App = () => {
  return (
    <>
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/autochemistry" element={<Autochemistry />} />
          <Route path="/autocosmetics" element={<Autocosmetics />} />
          <Route path="/adhesives_sealants" element={<AdhesivesSealants />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Content>
      <Footer />
    </>
  );
};
