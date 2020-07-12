import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SettingItem from '../settingItem/SettingItem';
import {
  CLASSIFICATION_SETTING_ITEMS,
  HELP_SETTING_ITEMS,
  COMMON_SETTING_ITEMS,
} from '../../variables/settingItems';

const Setting = ({ settings }) => {
  const [newSetting, setNewSetting] = useState({ ...settings });
  const changeOptionalSetting = (el) => {
    const initialValue = newSetting.optional[el];
    setNewSetting({
      ...newSetting,
      optional: {
        ...newSetting.optional,
        [el]: !initialValue,
      },
    });
  };
  const changeNumericalValue = (el) => {
    if (el === 'wordsPerDay') {
      setNewSetting({
        ...newSetting,
        [el]: +(document.querySelector(`#${el}`).value),
      });
    } else {
      setNewSetting({
        ...newSetting,
        optional: {
          ...newSetting.optional,
          [el]: +(document.querySelector(`#${el}`).value),
        },
      });
    }
  };
  return (
    <div className="card">
      <div className="card-wrapper">
        <h3 className="setting__header">Настройки</h3>
        <form>
          {console.log(settings)}
          {console.log(newSetting)}
          <div className="common_settings">
            {
              <SettingItem
                onChangeValue={changeNumericalValue}
                id={COMMON_SETTING_ITEMS[0].id}
                key={`${COMMON_SETTING_ITEMS[0].id}${COMMON_SETTING_ITEMS[0].name}`}
                name={COMMON_SETTING_ITEMS[0].name}
                text={COMMON_SETTING_ITEMS[0].text}
                type={COMMON_SETTING_ITEMS[0].type}
                value={settings.wordsPerDay}
                pattern={COMMON_SETTING_ITEMS[0].regExp}
                maxLeng={COMMON_SETTING_ITEMS[0].maxLeng}
              />
            }
            {
              <SettingItem
                onChangeValue={changeNumericalValue}
                id={COMMON_SETTING_ITEMS[1].id}
                key={`${COMMON_SETTING_ITEMS[1].id}${COMMON_SETTING_ITEMS[1].name}`}
                name={COMMON_SETTING_ITEMS[1].name}
                text={COMMON_SETTING_ITEMS[1].text}
                type={COMMON_SETTING_ITEMS[1].type}
                value={settings.optional.hasHard}
                pattern={COMMON_SETTING_ITEMS[1].regExp}
                maxLeng={COMMON_SETTING_ITEMS[1].maxLeng}
              />
            }
          </div>
          <div className="help_settings">
            <h4>Помощь</h4>
            <div className="help_settings_labels_wrapper">
              {
            HELP_SETTING_ITEMS.map((el) => (
              <SettingItem
                onClick={changeOptionalSetting}
                id={el.id}
                key={`${el.id}${el.name}`}
                text={el.text}
                name={el.name}
                type={el.type}
                checked={newSetting.optional[el.name]}
              />
            ))
          }
            </div>
          </div>
          <div className="classfication_settings">
            <h4>Классификация трудных слов</h4>
            {
          CLASSIFICATION_SETTING_ITEMS.map((el) => (
            <SettingItem
              onClick={changeOptionalSetting}
              id={el.id}
              key={`${el.id}${el.name}`}
              text={el.text}
              name={el.name}
              type={el.type}
              checked={newSetting.optional[el.name]}
            />
          ))
          }
          </div>
          <div className="setting_button">
            <button className="submit_settings" type="submit" onClick={() => {}}>Сохранить</button>
          </div>
        </form>
      </div>
    </div>
  );
};

Setting.propTypes = {
  settings: PropTypes.shape({
    wordsPerDay: PropTypes.number,
    optional: PropTypes.shape({
      hasTranslation: PropTypes.bool,
      hasMeaning: PropTypes.bool,
      hasExample: PropTypes.bool,
      hasTranscription: PropTypes.bool,
      hasImage: PropTypes.bool,
      hasDelete: PropTypes.bool,
      hasDifficult: PropTypes.bool,
      hasAutoSpeech: PropTypes.bool,
      hasAutoTranslation: PropTypes.bool,
      hasShowingAnswer: PropTypes.bool,
      hasInterval: PropTypes.bool,
      hasHard: PropTypes.number,
    }),
  }).isRequired,
};

export default Setting;
