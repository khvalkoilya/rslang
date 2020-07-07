import React from 'react';
import PropTypes from 'prop-types';

const SettingItemText = ({ name, id, state }) => (
  <label htmlFor={id}>
    {name}
    <input className="setting_input_text" id={id} type="text" value={state} />
  </label>
);

const SettingItemCheckbox = ({ name, state, id }) => (
  <label className="setting_custom_checkbox" htmlFor={id}>
    {state ? <input id={id} type="checkbox" checked /> : <input id={id} type="checkbox" />}
    <span>{name}</span>
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
