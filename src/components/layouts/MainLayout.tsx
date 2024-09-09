import { Outlet } from 'react-router-dom';
import Footer from '../global/Footer';
import Header from '../global/Header';
import { GoToTop } from 'go-to-top-react';
import ScrollToTop from '../global/ScrollToTop';

const MainLayout = () => {
  return (
    <ScrollToTop>
      <p className="text-white font-semibold text-center text-lg py-4 bg-orange">
        We will be good citizens for a better tomorrow, for a better world.
      </p>
      <Header />
      <Outlet />
      <Footer />
      <GoToTop />
    </ScrollToTop>
  );
};

export default MainLayout;
