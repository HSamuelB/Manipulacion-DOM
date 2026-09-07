const formulario = document.getElementById("formNombre");
const inputNombre = document.getElementById("inputNombre");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = inputNombre.value.trim();

    if (nombre === "") {
        mensaje.textContent = "Por favor escribe tu nombre.";
        mensaje.style.color = "red";
        return;
    }

    mensaje.textContent = "¡Hola, " + nombre + "! Bienvenido.";
    mensaje.style.color = "green";
    inputNombre.value = "";
});