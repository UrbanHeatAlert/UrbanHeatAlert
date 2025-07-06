document.addEventListener('DOMContentLoaded', () => {
  const menuHamburguesa = document.querySelector('.menu-hamburguesa');
  const navLinks = document.querySelector('.nav-links');

  if (menuHamburguesa && navLinks) {
    menuHamburguesa.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});