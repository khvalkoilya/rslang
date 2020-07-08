import React from 'react';
import PropTypes from 'prop-types';

const SettingItem = ({ name, id, type }) => (
  <label htmlFor={id} className={type === 'checkbox' ? 'setting_custom_checkbox' : ''}>
    {
      type === 'checkbox' ? (
        <>
          {' '}
          <input id={id} type="checkbox" />
          <span>{name}</span>
        </>
      )
        : (
          <>
            {' '}
            <span>{name}</span>
            {' '}
            <input className="setting_input_text" id={id} type="text" />
          </>
        )
    }
  </label>
);
/* eslint-disable */
// const SettingItemCheckbox = ({ name, state, id }) => (
//   <label className="setting_custom_checkbox" htmlFor={id}>
//     {state ? <input id={id} type="checkbox" checked /> : <input id={id} type="checkbox" />}
//     <span>{name}</span>
//   </label>
// );

// SettingItemCheckbox.propTypes = {
//   name: PropTypes.string.isRequired,
//   id: PropTypes.number.isRequired,
//   state: PropTypes.bool.isRequired,
// };
/* eslint-disable */
SettingItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  type:PropTypes.string.isRequired,
};

export default SettingItem;
