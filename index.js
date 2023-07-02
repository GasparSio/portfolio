const container = document.getElementById('container');

container.addEventListener('wheel', (event) => {
  event.preventDefault();
  const deltaY = event.deltaY;
  const scrollAmount = Math.abs(deltaY) > 100 ? 0.3 : 0.1; // Ajusta la velocidad de desplazamiento aquí
  container.scrollTo({
    top: container.scrollTop + deltaY * scrollAmount,
    behavior: 'smooth'
  });
});


window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');
  let currentSection = '';

  sections.forEach(function(section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute('id');
      }
  });

  navLinks.forEach(function(navLink) {
      navLink.classList.remove('active');
      if (navLink.getAttribute('href').substring(1) === currentSection) {
          navLink.classList.add('active');
      }
  });
});