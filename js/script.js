let navbar = document.querySelector('.header .navbar');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
};


document.querySelector('#info-btn').onclick = () =>{
   contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () =>{
   contactInfo.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}

var swiperHome = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000, 
    disableOnInteraction: false, // Permite que la transición automática continúe después de interactuar
  },
  effect: "fade", // Usamos el efecto de desvanecimiento
  fadeEffect: {
    crossFade: true, // Transición cruzada suave
  },
  speed: 1000, // Velocidad de transición más suave
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiperReviews = new Swiper(".reviews-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  breakpoints: {
     640: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     991: {
       slidesPerView: 3,
     },
  },
  autoplay: {
    delay: 4000,
  },
  effect: "slide", // Efecto de deslizamiento
  speed: 600, // Transición más suave
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    init: function () {
      console.log("Slider Reviews Inicializado");
    }
  }
});

var swiperBlogs = new Swiper(".blogs-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  breakpoints: {
     640: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     991: {
       slidesPerView: 3,
     },
  },
  autoplay: {
    delay: 5000,
  },
  effect: "slide", // Transición suave de deslizamiento
  speed: 800, // Velocidad de transición suave
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiperLogo = new Swiper(".logo-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  breakpoints: {
     450: {
        slidesPerView: 2,
      },
     640: {
       slidesPerView: 3,
     },
     768: {
       slidesPerView: 4,
     },
     1000: {
       slidesPerView: 5,
     },
  },
  autoplay: {
    delay: 5000,
  },
  effect: "slide", // Efecto de deslizamiento suave
  speed: 800, // Velocidad de transición suave
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    init: function () {
      console.log("Logo Slider Inicializado");
    }
  }
});
window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;  // Posición del scroll
  const parallax = document.querySelector('.projects-container');
  
  // Modificar la posición de la imagen de fondo para crear el efecto parallax
  parallax.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;  // Puedes ajustar el valor 0.5 para mayor o menor velocidad de parallax
});

function openPopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.style.display = 'flex';
  setTimeout(() => {
     popup.style.opacity = '1';
  }, 50);
}

function closePopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.style.opacity = '0';
  setTimeout(() => {
     popup.style.display = 'none';
  }, 300);
}



