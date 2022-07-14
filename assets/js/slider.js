var swiper = new Swiper(".mySwiper", {
	effect: "flip",
	speed: 700,
	slideShdows: false,
	grabCursor: true,
	loop: true,
	pagination: {
	  el: ".swiper-pagination",
	},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
  });