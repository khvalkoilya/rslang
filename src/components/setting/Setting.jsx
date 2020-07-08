import React from 'react';
import PropTypes from 'prop-types';

import SettingItem from '../settingItem/SettingItem';
import {
  CLASSIFICATION_SETTING_ITEMS,
  HELP_SETTING_ITEMS,
  COMMON_SETTING_ITEMS,
} from '../../variables/settingItems';

const Setting = ({ settings }) => (
  <div className="card">
    <div className="card-wrapper">
      <h3 className="setting__header">Настройки</h3>
      <form>
        { console.log(settings) }
        <div className="common_settings">
          {
            COMMON_SETTING_ITEMS.map((el) => (
              <SettingItem id={el.id} key={`${el.id}${el.name}`} name={el.name} text={el.text} type={el.type} />))
          }
        </div>
        <div className="help_settings">
          <h4>Помощь</h4>
          <div className="help_settings_labels_wrapper">
            {
              HELP_SETTING_ITEMS.map((el) => (
                <SettingItem id={el.id} key={`${el.id}${el.name}`} text={el.text} name={el.name} type={el.type} />))
            }
          </div>
        </div>
        <div className="classfication_settings">
          <h4>Классификация трудных слов</h4>
          {
            CLASSIFICATION_SETTING_ITEMS.map((el) => (
              <SettingItem id={el.id} key={`${el.id}${el.name}`} text={el.text} name={el.name} type={el.type} />))
          }
        </div>
        <div className="setting_button">
          <button className="submit_settings" type="submit">Сохранить</button>
        </div>
      </form>
    </div>
  </div>
);

Setting.propTypes = {
  settings: PropTypes.shape({
    wordsPedDay: PropTypes.number,
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
    }),
  }),
};

Setting.defaultProps = {
  settings: {
    wordsPedDay: 20,
    optional: {
      hasTranslation: true,
      hasMeaning: true,
      hasExample: true,
      hasTranscription: true,
      hasImage: true,
      hasDelete: true,
      hasDifficult: true,
      hasAutoSpeech: true,
      hasAutoTranslation: true,
      hasShowingAnswer: true,
      hasInterval: true,
    },
  },
};

export default Setting;

/* eslint-disable */
// {
//   COMMON_SETTING_ITEMS[1].map((el) => (
//     <SettingItem id={el.id} key={`${el.id}${el.name}`} state={el.state} name={el.text} />))
// }
/* eslint-disable */
