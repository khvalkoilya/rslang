import React, { useContext } from 'react';
import ChangePage from '../context/Context';

const Footer = () => {
  const { page, setPage } = useContext(ChangePage);

  return (
    <div className="footerWrapper">
      <button
        type="button"
        onClick={() => setPage('aboutAs')}
        className={`menu-item ${page === 'aboutAs' ? 'menu-item-active' : ''}`}
      >
        About us
      </button>
    </div>

  );
};
export default Footer;
