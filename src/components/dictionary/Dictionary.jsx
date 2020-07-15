import React, { useState } from 'react';

import LearnedWords from './components/learnedWords/LearnedWords';
import DifficultWords from './components/difficultWords/DifficultWords';
import DeleteWords from './components/deleteWords/DeleteWords';

const Dictionary = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const getCurrentTab = () => {
    if (currentTab === 0) {
      return (
        <LearnedWords />
      );
    }
    if (currentTab === 1) {
      return (
        <DifficultWords />
      );
    }
    if (currentTab === 2) {
      return (
        <DeleteWords />
      );
    }
    return (
      <>
      </>
    );
  };
  return (
    <div className="dictionary">
      <div className="tabsDictionary" id="tabsDictionary">
        <button
          className={`btnDictionary ${currentTab === 0 ? 'active' : ''}`}
          type="button"
          onClick={() => setCurrentTab(0)}
        >
          Изучаемые

        </button>
        <button
          className={`btnDictionary ${currentTab === 1 ? 'active' : ''}`}
          type="button"
          onClick={() => setCurrentTab(1)}
        >
          Сложные

        </button>
        <button
          className={`btnDictionary ${currentTab === 2 ? 'active' : ''}`}
          type="button"
          onClick={() => setCurrentTab(2)}
        >
          Удаленные

        </button>
      </div>
      <div className="cardsBlock">
        {getCurrentTab()}
      </div>
    </div>
  );
};

export default Dictionary;
