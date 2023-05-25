import React from 'react';

import logo from '../images/logo.svg';
import { pageLinks, socialLinks } from '../data';
import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageLinks
          pageLinks={pageLinks}
          parentClass="nav-links"
          childClass="nav-link"
        />

        <SocialLinks
          socialLinks={socialLinks}
          parentClass="nav-icons"
          childClass="nav-icon"
        />
      </div>
    </nav>
  );
};

export default Navbar;
