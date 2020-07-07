import React from 'react';
import PropTypes from 'prop-types';

import { SettingItemText, SettingItemCheckbox } from '../settingItem/SettingItem';
import {
  CLASSIFICATION_SETTING_ITEMS,
  HELP_SETTING_ITEMS,
  COMMON_SETTING_ITEMS,
} from '../../variables/settingItems';

const Setting = ({ settings }) => (
  <div className="card">
    <div className="card-wrapper">
      <form>
        { console.log(settings) }
        <div className="common_settings">
          {
            COMMON_SETTING_ITEMS[0].map((el) => (
              <SettingItemText id={el.id} key={`${el.id}${el.name}`} state={el.state} name={el.text} />))
          }
          {
            COMMON_SETTING_ITEMS[1].map((el) => (
              <SettingItemCheckbox id={el.id} key={`${el.id}${el.name}`} state={el.state} name={el.text} />))
          }
        </div>
        <div className="help_settings">
          {
            HELP_SETTING_ITEMS.map((el) => (
              <SettingItemCheckbox id={el.id} key={`${el.id}${el.name}`} state={el.state} name={el.text} />))
          }
        </div>
        <div className="classfication_settings">
          {
            CLASSIFICATION_SETTING_ITEMS.map((el) => (
              <SettingItemCheckbox id={el.id} key={`${el.id}${el.name}`} state={el.state} name={el.text} />))
          }
        </div>
        <button type="submit">Save</button>
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
