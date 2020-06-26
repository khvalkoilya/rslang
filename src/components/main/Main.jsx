import React from 'react';
import PropTypes from 'prop-types';
import Registration from '../registration/Registration';

const Main = ({ page }) => (
  <main className="main">
    {page === 'games' && <div>Games</div>}
    {page === 'settings' && <input type="text" />}
    {page === 'statistics' && <div>statistics</div>}
    {page === 'logOut' && <div>logOut</div>}
    {page === 'signIn' && <div>signIn</div>}
    {page === 'registration' && <Registration />}
    {page === 'train' && <div>train</div>}
    {page === 'vocabulary' && <div>settings</div>}
  </main>
);

Main.propTypes = {
  page: PropTypes.string.isRequired,
};
export default Main;
