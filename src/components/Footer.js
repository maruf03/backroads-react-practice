import React from 'react';
import { pageLinks, socialLinks } from '../data';
import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks
        pageLinks={pageLinks}
        parentClass="footer-links"
        childClass="footer-link"
      />
      <SocialLinks
        socialLinks={socialLinks}
        parentClass="footer-icons"
        childClass="footer-icon"
      />
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
