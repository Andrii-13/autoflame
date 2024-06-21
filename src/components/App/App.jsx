import { Catalog, Contacts, Home } from 'pages';
import { Footer, Header } from 'components';
import { Route, Routes } from 'react-router-dom';
import { Content } from 'components/Content/Content';

export const App = () => {
  return (
    <>
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Content>
      <Footer />
    </>
  );
};
