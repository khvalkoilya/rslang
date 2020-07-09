const changeSlide = (setDoneCards, swiper, setAddSlide) => {
  setDoneCards(swiper.activeIndex + 1);
  swiper.slideNext();
  if (swiper.activeIndex % 18 === 0 && swiper.activeIndex < 36) {
    setAddSlide(true);
  }
};

export default changeSlide;
