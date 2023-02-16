import React from 'react';
import {Outlet} from 'react-router-dom';
import NavBar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className='body'>
      <div className="body_layout">
        <NavBar />
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;