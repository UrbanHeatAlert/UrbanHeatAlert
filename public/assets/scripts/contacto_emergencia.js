function guardarContactoEmergencia() {
  const nombre = document.getElementById('contacto-nombre').value;
  const telefono = document.getElementById('contacto-telefono').value;
  const relacion = document.getElementById('contacto-relacion').value;

  if (nombre) localStorage.setItem('emergenciaNombre', nombre);
  if (telefono) localStorage.setItem('emergenciaTelefono', telefono);
  if (relacion) localStorage.setItem('emergenciaRelacion', relacion);

  alert('Contacto de emergencia guardado');
  window.location.href = 'perfil.html';
}
