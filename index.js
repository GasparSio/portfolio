// Arrow animation when scroll
// const arrowContainer = document.querySelector('.arrow');
// const container = document.getElementById('container');

// let isScrolling = false;

// container.addEventListener('wheel', function () {
//   const containerScrollTop = container.scrollTop || document.documentElement.scrollTop;

//   if (containerScrollTop > 0) {
//     arrowContainer.style.display = 'block';

//     // Si no se está ya ejecutando el temporizador, configúralo
//     if (!isScrolling) {
//       isScrolling = true;

//       // Oculta la flecha después de 1 segundo
//       setTimeout(function () {
//         arrowContainer.style.display = 'none';
//         isScrolling = false;
//       }, 1000);
//     }
//   }
// });



const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });











