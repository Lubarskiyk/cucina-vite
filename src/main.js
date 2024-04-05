(() => {
  const burger = {
    BurgerBtn: document.querySelector('#header-burger'),
    burger: document.querySelectorAll('.header, .header-menu, .header-burger'),
    body: document.querySelector('body'),
  };

  burger.BurgerBtn.addEventListener('click', togleBurger);
  function togleBurger() {
    for (let i = 0; i < burger.burger.length; i++) {
      burger.burger[i].classList.toggle('is-open-menu');
    }
  }
})();

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],

  direction: 'vertical',
  slidesPerView: 2,
  slidesPerGroup: 1,
  watchSlidesProgress: true,
  slideVisibleClass: 'my-class-visible',
  spaceBetween: 40,

  navigation: {
    disabledClass: 'bay-button-disabled',
    nextEl: '.bay-button-next',
    prevEl: '.bay-button-prev',
  },
});
