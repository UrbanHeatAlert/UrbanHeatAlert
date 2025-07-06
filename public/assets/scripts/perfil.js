document.addEventListener('DOMContentLoaded', () => {
    const obtenerDato = (clave, valorPorDefecto) => localStorage.getItem(clave) || valorPorDefecto;
    const actualizarTexto = (id, texto) => {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.textContent = texto;
        }
    };

    const cargarDatosDelPerfil = () => {
        actualizarTexto('Unombre', obtenerDato('fullName', 'No disponible'));
        actualizarTexto('edad', obtenerDato('edad', 'No disponible'));
        actualizarTexto('Uemail', obtenerDato('email', 'No disponible'));
        actualizarTexto('Utelefono', obtenerDato('telefono', 'No disponible'));
        actualizarTexto('ubicacion', obtenerDato('ubicacion', 'No disponible'));
        actualizarTexto('emergencia-nombre', obtenerDato('emergenciaNombre', 'No asignado'));
        actualizarTexto('emergencia-telefono', obtenerDato('emergenciaTelefono', 'No asignado'));
        actualizarTexto('emergencia-relacion', obtenerDato('emergenciaRelacion', 'No asignado'));

        // --- LÓGICA PARA EL INTERRUPTOR DE NOTIFICACIONES ---
        const interruptorNotificaciones = document.getElementById('notificaciones-toggle');
        const textoNotificaciones = document.querySelector('.interruptor-texto:not(.modo-oscuro-texto)');
        const notificacionesActivasGuardado = localStorage.getItem('notificacionesActivas');
        const notificacionesActivas = notificacionesActivasGuardado !== 'false';

        interruptorNotificaciones.checked = notificacionesActivas;
        textoNotificaciones.textContent = notificacionesActivas ? 'Activadas' : 'Desactivadas';

        interruptorNotificaciones.addEventListener('change', () => {
            const estaActivo = interruptorNotificaciones.checked;
            localStorage.setItem('notificacionesActivas', estaActivo);
            textoNotificaciones.textContent = estaActivo ? 'Activadas' : 'Desactivadas';
        });

        // --- LÓGICA PARA EL INTERRUPTOR DE MODO OSCURO ---
        const interruptorModoOscuro = document.getElementById('modo-oscuro-toggle');
        const textoModoOscuro = document.querySelector('.interruptor-texto.modo-oscuro-texto');
        const modoOscuroGuardado = localStorage.getItem('modoOscuro');
        const modoOscuroActivo = modoOscuroGuardado === 'true';

        interruptorModoOscuro.checked = modoOscuroActivo;
        textoModoOscuro.textContent = modoOscuroActivo ? 'Activado' : 'Desactivado';
        document.body.classList.toggle('modo-oscuro', modoOscuroActivo);

        interruptorModoOscuro.addEventListener('change', () => {
            const estaActivo = interruptorModoOscuro.checked;
            localStorage.setItem('modoOscuro', estaActivo);
            textoModoOscuro.textContent = estaActivo ? 'Activado' : 'Desactivado';
            document.body.classList.toggle('modo-oscuro', estaActivo);
        });
    };

    cargarDatosDelPerfil();
});

function mostrarErrorIdioma() {
    alert("Hubo un error al cambiar el idioma. Inténtalo más tarde.");
}
