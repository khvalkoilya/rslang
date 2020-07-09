import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../card/Card';
import UserProgressBar from '../progressBar/ProgressBar';
import DEFAULT_SETTINGS from '../../variables/defaultSettings';
import { getWordsData } from '../../utilsApi/utilsApi';

SwiperCore.use([Navigation, A11y]);

const RenderBlockWithCards = ({ words }) => {
  const [swiper, setSwiper] = useState();
  const [addSlide, setAddSlide] = useState(false);
  const [arrData, setArrData] = useState(words);
  const [doneCards, setDoneCards] = useState(0);
  useEffect(() => {
    const fn = async () => {
      const WORDS = await getWordsData(arrData[0].group, arrData[0].page + 1);
      setArrData(arrData.concat(WORDS));
      setAddSlide(false);
    };
    if (addSlide) {
      fn();
    }
  }, [addSlide]);
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
        document.querySelector('.swiper-button-next').classList.add('swiper-button-disabled');
        document.querySelector('.swiper-slide-active > div > div > span  > input').focus();
      }}
      onSlidePrevTransitionEnd={() => {
        document.querySelector('.swiper-button-prev').classList.add('swiper-button-disabled');
        document.querySelector('.swiper-button-next').classList.remove('swiper-button-disabled');
        document.querySelector('.swiper-button-prev').blur();
      }}
      onSlideNextTransitionEnd={() => {
        document.querySelector('.swiper-button-prev').classList.remove('swiper-button-disabled');
        document.querySelector('.swiper-button-next').classList.add('swiper-button-disabled');
        document.querySelector('.swiper-slide-active > div > div > span  > input').focus();
      }}
    >
      {arrData.map((e) => (
        <SwiperSlide key={e.id}>
          <Card
            word={e}
            swiper={swiper}
            settings={DEFAULT_SETTINGS.optional}
            setAddSlide={setAddSlide}
            setDoneCards={setDoneCards}
          />
        </SwiperSlide>
      ))}
      <UserProgressBar doneCards={doneCards} maxCards={40} />
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
