import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../card/Card';
import UserProgressBar from '../progressBar/ProgressBar';
import ApplicationData from '../context/Context';

SwiperCore.use([Navigation, A11y]);

const RenderBlockWithCards = ({ words }) => {
  const [swiper, setSwiper] = useState();
  const [arrData, setArrData] = useState(words);
  const { settings, doneCards, setDoneCards } = useContext(ApplicationData);
  useEffect(() => {
    setArrData(words);
  }, [words]);
  return (
    <Swiper
      spaceBetween={30}
      allowTouchMove={false}
      navigation
      onSwiper={(obj) => {
        setSwiper(obj);
        obj.slideTo(doneCards);
        document.querySelector('.swiper-button-next').classList.add('swiper-button-disabled');
        if (doneCards === 0) {
          document.querySelector('.swiper-slide-active > div > div > span  > input').focus();
        }
      }}
      onSlidePrevTransitionEnd={() => {
        document.querySelector('.swiper-button-prev').classList.add('swiper-button-disabled');
        document.querySelector('.swiper-button-next').classList.remove('swiper-button-disabled');
      }}
      onSlideNextTransitionEnd={() => {
        document.querySelector('.swiper-button-prev').classList.remove('swiper-button-disabled');
        document.querySelector('.swiper-button-next').classList.add('swiper-button-disabled');
        document.querySelector('.swiper-slide-active > div > div > span  > input').focus();
      }}
    >
      {arrData.map((e) => (
        <SwiperSlide key={`${e.id}`}>
          <Card
            word={e}
            swiper={swiper}
            settings={settings.optional}
            setDoneCards={setDoneCards}
          />
        </SwiperSlide>
      ))}
      <UserProgressBar doneCards={doneCards} maxCards={words.length} />
    </Swiper>
  );
};
RenderBlockWithCards.propTypes = {
  words: PropTypes.arrayOf(PropTypes.object),
};

RenderBlockWithCards.defaultProps = {
  words: undefined,
};

export default RenderBlockWithCards;
