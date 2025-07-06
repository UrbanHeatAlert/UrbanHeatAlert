document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('sugerencia-form');

    if (formulario) {
        formulario.addEventListener('submit', (event) => {
            event.preventDefault();

            const nombre = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('suggestion').value;

            alert(`¡Gracias por tu mensaje, ${nombre}!\n\nHemos recibido tu sugerencia y te contactaremos pronto si es necesario.`);

            formulario.reset();
        });
    }
});