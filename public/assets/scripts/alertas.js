document.getElementById("agregar-alerta-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const direccion = document.getElementById("direccion").value;
    const temperatura = document.getElementById("temperatura").value;

    alert("Alerta guardada para: " + direccion + " con temperatura de: " + temperatura + "°C");

    document.getElementById("direccion").value = "";
    document.getElementById("temperatura").value = "";
});