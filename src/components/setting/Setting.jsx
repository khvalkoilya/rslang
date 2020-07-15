import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import SettingItem from '../settingItem/SettingItem';
import ApplicationData from '../context/Context';
import {
  getWordsAgainAndNew, createWord, putSettingUser,
} from '../../utilsApi/utilsApi';
import {
  CLASSIFICATION_SETTING_ITEMS,
  HELP_SETTING_ITEMS,
  COMMON_SETTING_ITEMS,
} from '../../variables/settingItems';
import WORD_OPTIONAL_DEFAULT from '../../variables/defaultOptionalWord';

const Setting = ({ settings }) => {
  const [newSetting, setNewSetting] = useState({ ...settings });
  const {
    setSettings, setPage, userId, setWords, setWordsNew, setWordsAgain, setDoneCards, words,
  } = useContext(ApplicationData);
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
  const spliceArray = () => {
    setWords(words.splice(0, newSetting.wordsPerDay));
    setSettings(newSetting);
    putSettingUser(userId, newSetting);
    setPage('train');
  };

  const updateSettings = async () => {
    const wordsAgainAndNew = await getWordsAgainAndNew(
      userId,
      newSetting.optional.group,
      newSetting.wordsPerDay,
    );
    const wordsNew = wordsAgainAndNew[0].paginatedResults;
    wordsNew.forEach((e) => {
      const { _id } = e;
      e.id = _id;
    });
    const newWords = wordsNew.filter((e) => (e.userWord === undefined));
    const againWords = wordsNew.filter((e) => (e.userWord !== undefined));
    const arrCreateWords = [];
    newWords.forEach((e) => {
      e.userWord = WORD_OPTIONAL_DEFAULT;
      arrCreateWords.push(createWord(userId, e.id));
    });
    setSettings(newSetting);
    setWordsNew(newWords);
    setWordsAgain(againWords);
    setWords(againWords.concat(newWords));
    setPage('train');
    await putSettingUser(userId, newSetting);
    await Promise.all[arrCreateWords];
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
  const settingError = document.getElementById('setting_error');
  return (
    <div className="card">
      <div className="card-wrapper">
        <h3 className="setting__header">Настройки</h3>
        <div className="setting_error" id="setting_error" />
        <form onSubmit={(event) => event.preventDefault()}>
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
                value={settings.optional.group}
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
            <button
              className="submit_settings"
              type="submit"
              onClick={() => {
                if (newSetting.optional.hasMeaning === false
                  && newSetting.optional.hasTranslation === false
                  && newSetting.optional.hasExample === false) {
                  settingError.innerText = 'Одно из перечисленных значений должно быть активно: Значение, Перевод, Использование.';
                } else if (newSetting.optional.group > 5) {
                  settingError.innerText = 'Введите корректное значение: Уровень сложности';
                } else if (settings.wordsPerDay < newSetting.wordsPerDay) {
                  updateSettings();
                } else if (settings.optional.group !== newSetting.optional.group) {
                  updateSettings();
                  setDoneCards(0);
                } else if (settings.wordsPerDay > newSetting.wordsPerDay) {
                  spliceArray();
                } else {
                  setSettings(newSetting);
                  putSettingUser(userId, newSetting);
                  setPage('train');
                }
              }}
            >
              Сохранить
            </button>
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
      group: PropTypes.number,
    }),
  }).isRequired,
};

export default Setting;
