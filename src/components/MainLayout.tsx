import { Outlet } from 'react-router-dom';
import Footer from './HomePage/Footer';
import Header from './HomePage/Header';

const MainLayout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default MainLayout;
