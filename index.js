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



// Obtener los elementos de los enlaces del menú
const navLinks = document.querySelectorAll('nav ul li a');

// Obtener las secciones
const sections = document.querySelectorAll('section');

// Función para cambiar el color del enlace activo
function changeActiveLink() {
  // Obtener la posición actual de desplazamiento
  const scrollPosition = window.pageYOffset;

  // Recorrer todas las secciones
  sections.forEach((section, index) => {
    // Obtener la posición superior e inferior de la sección
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    // Verificar si la posición actual de desplazamiento está dentro de la sección
    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      // Agregar la clase activa al enlace correspondiente
      navLinks.forEach((link) => {
        link.classList.remove('active');
      });
      navLinks[index].classList.add('active');
    }
  });
}

// Evento de desplazamiento
window.addEventListener('scroll', changeActiveLink);