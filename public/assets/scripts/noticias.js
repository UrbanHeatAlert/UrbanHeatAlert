document.addEventListener('DOMContentLoaded', () => {
    const botonVerMas = document.querySelector('.btn_VerMas');

    if (botonVerMas) {
        botonVerMas.addEventListener('click', () => {
            alert('Próximamente: ¡Funcionalidad para cargar más noticias!');
        });
    }
});