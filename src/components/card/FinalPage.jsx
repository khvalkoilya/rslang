import React, { useContext } from 'react';

import ApplicationData from '../context/Context';

const FinalPage = () => {
  const {
    statistic, words, wordsAgain, setWords, setDoneCards, setPage,
  } = useContext(ApplicationData);

  const nowStat = statistic.optional.sN;
  const trueAnswers = (nowStat.qR - nowStat.qE) / nowStat.qR;
  return (
    <div className="card card__final-page">
      <div className="card-wrapper ">
        <div className="card__final-page__title">Серия завершена!</div>
        <div className="card__final-page__cards">
          <div>Карточек завершено:</div>
          <div>{words.length}</div>
        </div>
        <div className="card__final-page__true">
          <div>Процент правильных ответов:</div>
          <div>
            <span>{Math.round(trueAnswers * 100)}</span>
            <span>%</span>
          </div>
        </div>
        <div className="card__final-page__new">
          <div>Новых слов:</div>
          <div>{nowStat.nW}</div>
        </div>
        <div className="card__final-page__length">
          <div>Самая длинная серия правильных ответов:</div>
          <div>{nowStat.sOfcA}</div>
        </div>
        <button
          type="button"
          className={`card__button card__final-page__button ${wordsAgain.length ? '' : 'card__button-disable'}`}
          onClick={() => {
            if (wordsAgain.length) {
              setWords(wordsAgain);
              setDoneCards(0);
              setPage('train');
            }
          }}
        >
          {wordsAgain.length ? 'Ещё раз' : 'На сегодня хватит!'}
        </button>
      </div>
    </div>
    // onclick
    // setWords(wordsAgain)
    // setDoneCards(0)
    // setPage('train')
  );
};

export default FinalPage;
