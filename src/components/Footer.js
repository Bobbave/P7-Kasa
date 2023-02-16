import React from 'react';
import Logo from '../assets/logo_white.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <img src={Logo} alt="Logo de Kasa" />
        <p>
          <i className="fa-regular fa-copyright"></i>
          2020 Kasa. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;