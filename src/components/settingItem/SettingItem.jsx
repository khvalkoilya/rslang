import React from 'react';
import PropTypes from 'prop-types';

const SettingItemText = ({ name, id, state }) => (
  <label htmlFor={id}>
    {name}
    <input id={id} type="text" value={state} />
  </label>
);

const SettingItemCheckbox = ({ name, state, id }) => (
  <label htmlFor={id}>
    {name}
    {state ? <input id={id} type="checkbox" checked /> : <input id={id} type="checkbox" />}
  </label>
);

SettingItemText.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  state: PropTypes.number.isRequired,
};

SettingItemCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  state: PropTypes.bool.isRequired,
};

export { SettingItemText, SettingItemCheckbox };
