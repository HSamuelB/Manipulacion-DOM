const titulo = document.getElementById("titulo");
const boton = document.getElementById("btnCambiar");

boton.addEventListener("click", function(){
    titulo.textContent = "¡El texto ha cambiado!";
});