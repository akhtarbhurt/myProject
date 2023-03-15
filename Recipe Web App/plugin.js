// Slider javascript 

var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    spaceBetween: 50,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });