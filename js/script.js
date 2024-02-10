let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__list');
let menuLinks = menu.querySelectorAll('.header__link');



burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__list--active');
});

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  });
});


document.querySelectorAll('.tabs-nav__btn').forEach(function (tabsBtn) {

  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.tabs-nav__btn').forEach(function (btn) {
      btn.classList.remove('tabs-nav__btn--active')
    });
    e.currentTarget.classList.add('tabs-nav__btn--active');
    document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('tabs-item--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});


const container = document.querySelector(".container")
const swiper = new Swiper('.hero__swiper', {
  // Default parameters

  speed: 300,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true
  }

})


$(".accordion").accordion({
  active: "false",
  heightStyle: "content",
  widthStyle: "content",
  collapsible: true,
});


let search = document.querySelector('.header__search__btn');
let search__form = document.querySelector('.header__search__form');
let search__input = search__form.querySelector('.header__search__input');
let search__close = search__form.querySelector('.header__search__close');



search.addEventListener('click', function () {
  search__form.classList.toggle('header__search__form--active');
});

search__close.addEventListener('click', function () {
  search__form.classList.remove('header__search__form--active');
});
