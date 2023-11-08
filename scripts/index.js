const slider = document.querySelector('.swiper')

let mySwiper = new Swiper(slider, {
    direction: 'horizontal',
    spaceBetween: 10,
    loop: false,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});