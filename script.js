function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/images/menu.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/images/close.svg";
    }
}


document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const slides = document.querySelectorAll(".slide");
  let position = 0;

  function calculateSlideWidth() {
    return slides[0].getBoundingClientRect().width;
  }

  function animateCarousel() {
    const slideWidth = calculateSlideWidth();
    position -= slideWidth;
    carousel.style.transform = `translateX(${position}px)`;
    carousel.style.transition = "transform 1s ease-in-out";

    if (position <= -slideWidth * slides.length) {
      setTimeout(() => {
        carousel.style.transition = "none";
        carousel.style.transform = "translateX(0)";
        position = 0;
      }, 1000);
    }
  }

  let touchStartX = 0;
  let touchEndX = 0;

  carousel.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
  });

  carousel.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].clientX;
    const slideWidth = calculateSlideWidth();
    const swipeThreshold = slideWidth * 0.2;

    if (touchStartX - touchEndX > swipeThreshold) {
      animateCarousel();
    }
  });

  setInterval(animateCarousel, 3000);
});



  
  
 
  document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll(".nav-link");

    menuLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // Impede o comportamento padrão do link

        const targetId = link.getAttribute("href"); // Obtém o ID da seção de destino a partir do atributo href
        const targetSection = document.querySelector(targetId); // Seleciona a seção de destino usando o ID

        if (targetSection) {
          const headerOffset = 70; // Ajuste o deslocamento do cabeçalho do site, se necessário
          const elementPosition = targetSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollBy({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      });
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".my-carousel");
    const carouselItems = document.querySelectorAll(".my-carousel-item");
    const prevButton = document.querySelector(".my-prev-button");
    const nextButton = document.querySelector(".my-next-button");
    const itemWidth = carouselItems[0].offsetWidth;
    const slidesToShow = 3;
    let position = 0;
  
    function updateCarousel() {
      carousel.style.transform = `translateX(${position}px)`;
    }
  
    prevButton.addEventListener("click", function () {
      const maxPosition = 0;
      if (position < maxPosition) {
        position += itemWidth;
        updateCarousel();
      }
    });
  
    nextButton.addEventListener("click", function () {
      const minPosition = -(itemWidth * (carouselItems.length - slidesToShow));
      if (position > minPosition) {
        position -= itemWidth;
        updateCarousel();
      }
    });
  
    // para mobile
    function adjustCarouselForMobile() {
      if (window.innerWidth <= 767) {
        position = 0; // Volta para o início do carrossel em mobile
        updateCarousel();
      }
    }
  
    // 
    window.addEventListener("load", adjustCarouselForMobile);
    window.addEventListener("resize", adjustCarouselForMobile);
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  