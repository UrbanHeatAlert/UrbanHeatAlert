document.addEventListener('DOMContentLoaded', () => {
  const cargarDatosActuales = () => {
    const obtenerDato = (clave) => localStorage.getItem(clave) || '';

    document.getElementById('nombre-completo').value = obtenerDato('fullName');
    document.getElementById('edad').value = obtenerDato('edad');
    document.getElementById('telefono').value = obtenerDato('telefono');
    document.getElementById('ubicacion').value = obtenerDato('ubicacion');
    document.getElementById('email').value = obtenerDato('email');
  };

  cargarDatosActuales();
});

function guardarCambios() {
  const nombre = document.getElementById('nombre-completo').value;
  const edad = document.getElementById('edad').value;
  const telefono = document.getElementById('telefono').value;
  const ubicacion = document.getElementById('ubicacion').value;
  const email = document.getElementById('email').value;
  const contrasena = document.getElementById('contrasena').value;
  const confirmarContrasena = document.getElementById('confirmar-contrasena').value;

  if (contrasena !== confirmarContrasena) {
    alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
    return;
  }

  localStorage.setItem('fullName', nombre);
  localStorage.setItem('edad', edad);
  localStorage.setItem('telefono', telefono);
  localStorage.setItem('ubicacion', ubicacion);
  localStorage.setItem('email', email);

  if (contrasena) {
    localStorage.setItem('password', contrasena);
  }

  alert('¡Cambios guardados correctamente!');
  window.location.href = 'perfil.html';
}
