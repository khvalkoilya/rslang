import React, { useContext } from 'react';
import ApplicationData from '../context/Context';

const Footer = () => {
  const { page, setPage } = useContext(ApplicationData);

  return (
    <div className="footerWrapper">
      <button
        type="button"
        onClick={() => setPage('aboutUs')}
        className={`menu-item ${page === 'aboutUs' ? 'menu-item-active' : ''}`}
      >
        О нас
      </button>
      <a
        href="https://github.com/khvalkoilya/rslang"
        className="footer-github"
      >
        <div className="footer-github__icon" />
      </a>
    </div>

  );
};
export default Footer;
