import { Outlet } from 'react-router-dom';
import Footer from '../global/Footer';
import Header from '../global/Header';
import { GoToTop } from 'go-to-top-react';
import ScrollToTop from '../global/ScrollToTop';

const MainLayout = () => {
  return (
    <ScrollToTop>
      <div className="px-2 bg-orange">
        <p className="container mx-auto text-white sm:px-4 font-semibold text-center text-lg py-4 ">
          We will be good citizens for a better tomorrow, for a better world.
        </p>
      </div>
      <Header />
      <Outlet />
      <Footer />
      <GoToTop />
    </ScrollToTop>
  );
};

export default MainLayout;
