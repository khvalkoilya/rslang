import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/Card';
import Registration from '../registration/Registration';

const Main = ({ page }) => (
  <main className="main">
    {page === 'train' && <Card />}
    {page === 'vocabulary' && <div>settings</div>}
    {page === 'games' && <div>Games</div>}
    {page === 'statistics' && <div>statistics</div>}
    {page === 'settings' && <input type="text" />}
    {page === 'logOut' && <div>logOut</div>}
    {page === 'signIn' && <Registration state={page} />}
    {page === 'registration' && <Registration state={page} />}
  </main>
);

Main.propTypes = {
  page: PropTypes.string.isRequired,
};
export default Main;
