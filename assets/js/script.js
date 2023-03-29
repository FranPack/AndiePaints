// glightbox
const glightbox = GLightbox({
  touchNavigation: true,
  touchFollowAxis: true,
  zoomable: false,
  loop: true,
});



var navheight = $("#navigation").height()
// console.log(navheight)
$(window).scroll(function() {
    if ($(this).scrollTop() > navheight){  
        $('body').addClass("sticky");
    }
    else{
        $('body').removeClass("sticky");
    }
});

var banner = new Swiper(".hero-swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
})

var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 5000,
    },
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});
// Form Validation
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()