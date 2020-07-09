import React from 'react';
import PropTypes from 'prop-types';

const SettingItem = ({
  name, id, type, text, onClick, checked, onChangeValue, value,
}) => (
  <label htmlFor={`${id}_${name}`} className={type === 'checkbox' ? 'setting_custom_checkbox' : ''}>
    {
      type === 'checkbox' ? (
        <>
          {' '}
          <input
            id={`${id}_${name}`}
            onChange={() => onClick(name)}
            type="checkbox"
            checked={checked}
          />
          <span>{text}</span>
        </>
      )
        : (
          <>
            {' '}
            <span>{text}</span>
            {' '}
            <input
              className="setting_input_text"
              id={name}
              title="ytdghfdgh"
              type="text"
              pattern="[0-9]{2}"
              onChange={() => onChangeValue(name)}
              defaultValue={value}
            />
          </>
        )
    }
  </label>
);

SettingItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onClick: PropTypes.func,
  onChangeValue: PropTypes.func,
  value: PropTypes.number,
};

SettingItem.defaultProps = {
  checked: false,
  onClick: undefined,
  onChangeValue: undefined,
  value: 0,
};

export default SettingItem;
