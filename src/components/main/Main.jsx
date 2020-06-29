import React from 'react';
import PropTypes from 'prop-types';
import Registration from '../registration/Registration';

const Main = ({ page }) => (
  <main className="main">
    {page === 'games' && <div>Games</div>}
    {page === 'settings' && <input type="text" />}
    {page === 'statistics' && <div>statistics</div>}
    {page === 'logOut' && <div>logOut</div>}
    {page === 'signIn' && <Registration state={page} />}
    {page === 'registration' && <Registration state={page} />}
    {page === 'train' && <div>train</div>}
    {page === 'vocabulary' && <div>settings</div>}
  </main>
);

Main.propTypes = {
  page: PropTypes.string.isRequired,
};
export default Main;
