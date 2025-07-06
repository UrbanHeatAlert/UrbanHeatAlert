document.addEventListener("DOMContentLoaded", function () {
  const edad = parseInt(localStorage.getItem("edad"));
  const contenedor = document.getElementById("recomendaciones-personalizadas");
  const placeholder = document.querySelector(".texto-placeholder");

  if (!edad || !contenedor) return;
  
  let recomendaciones = [];

  if (edad >= 18 && edad < 60) {
    recomendaciones = [
      { 
        titulo: "Hidratación Portátil", 
        texto: "En días de calor, lleva siempre contigo una botella de agua para mantenerte hidratado.", 
        imagen: "assets/images/botella_agua.avif" 
      },
      { 
        titulo: "Vestimenta Inteligente", 
        texto: "Usa ropa de colores claros, holgada y de tejidos naturales como el algodón para mantenerte fresco.", 
        imagen: "assets/images/ropa_clara.webp" 
      }
    ];
    
  } else if (edad >= 60) {
    recomendaciones = [
      { 
        titulo: "Evita la Soledad", 
        texto: "En días especialmente calurosos, evita salir solo y mantén el contacto con familiares o amigos.", 
        imagen: "assets/images/solitario.jpg" 
      },
      { 
        titulo: "Atención Médica", 
        texto: "Consulta a tu médico inmediatamente si sientes fatiga extrema, mareos o dolor de cabeza por el calor.", 
        imagen: "assets/images/medico.avif" 
      }
    ];
  }

  if (recomendaciones.length > 0) {
    if (placeholder) {
      placeholder.remove();
    }
    
    recomendaciones.forEach(rec => {
      const tarjeta = document.createElement("div");
      tarjeta.className = "tarjeta";

      tarjeta.innerHTML = `
        <img src="${rec.imagen}" alt="${rec.titulo}">
        <div class="tarjeta-contenido">
          <h3 class="tarjeta-titulo">${rec.titulo}</h3>
          <p class="tarjeta-texto">${rec.texto}</p>
          <div class="calificacion">
            <button onclick="calificar(this, true)" aria-label="Calificar '${rec.titulo}' como útil">Útil</button>
            <button onclick="calificar(this, false)" aria-label="Calificar '${rec.titulo}' como no útil">No útil</button>
          </div>
        </div>
      `;
      contenedor.appendChild(tarjeta);
    });
  }
});

function calificar(btn, esUtil) {
  const tarjeta = btn.closest('.tarjeta');
  const tituloConsejo = tarjeta.querySelector('.tarjeta-titulo').innerText;
  
  const calificaciones = JSON.parse(localStorage.getItem('calificaciones')) || [];

  calificaciones.push({
    consejo: tituloConsejo,
    util: esUtil,
    timestamp: new Date().toISOString()
  });

  localStorage.setItem('calificaciones', JSON.stringify(calificaciones));

  const botones = tarjeta.querySelectorAll('.calificacion button');
  botones.forEach(b => b.disabled = true);
  
  alert("¡Gracias por tu valoración!");
}