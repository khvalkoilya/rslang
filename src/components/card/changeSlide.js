const changeSlide = (setDoneCards, swiper) => {
  setDoneCards(swiper.activeIndex + 1);
  swiper.slideNext();
};

export default changeSlide;
