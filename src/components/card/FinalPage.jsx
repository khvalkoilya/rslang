import React from 'react';

const FinalPage = () => (
  <div className="card__final-page">

    <div className="card__final-page__title">Тренировка завершена!</div>
    <div className="card__final-page__cards">
      Карточек завершено:
      <span>20</span>
    </div>
    <div className="card__final-page__true">
      Процент правильных ответов:
      <span>75</span>
      %
    </div>
    <div className="card__final-page__new">
      Новых слов:
      <span>30</span>
    </div>
    <div className="card__final-page">
      Самая длинная серия правильных ответов:
      <span>10</span>
    </div>
  </div>

);

export default FinalPage;
