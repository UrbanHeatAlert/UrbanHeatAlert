document.addEventListener("DOMContentLoaded", function () {

  const btnVerMas = document.querySelector(".btn_Ver_mas");
  if (btnVerMas) {
    btnVerMas.addEventListener("click", function () {
      alert("Más información.");
    });
  }

  const btnInformacion = document.querySelector(".btn_Informacion");
  if (btnInformacion) {
    btnInformacion.addEventListener("click", function () {
      alert("Urban Heat Alert ofrece información actualizada para proteger tu salud.");
    });
  }

  const btnMapa = document.querySelector(".btn_Mapa");
  if (btnMapa) {
    btnMapa.addEventListener("click", function () {
      window.location.href = "alertas.html";
    });
  }

  const menuHamburguesa = document.querySelector('.menu-hamburguesa');
  const navLinks = document.querySelector('.nav-links');


  if (menuHamburguesa && navLinks) {

      menuHamburguesa.addEventListener('click', () => {

          navLinks.classList.toggle('active');
      });
  }
});
