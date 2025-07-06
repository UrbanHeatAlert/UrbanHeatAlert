document.addEventListener("DOMContentLoaded", () => {
  const accordionHeaders = document.querySelectorAll(".acordeon-encabezado");

  accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      
      const currentlyActiveHeader = document.querySelector(".acordeon-encabezado.active");
      if (currentlyActiveHeader && currentlyActiveHeader !== header) {
        currentlyActiveHeader.classList.remove("active");
        currentlyActiveHeader.nextElementSibling.style.maxHeight = null;
      }
      
      header.classList.toggle("active");
      
      if (header.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = null;
      }
    });
  });
});