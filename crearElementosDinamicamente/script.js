const input = document.getElementById("inputFruta");
const boton = document.getElementById("btnAgregar");
const lista = document.getElementById("listaFrutas");

boton.addEventListener("click", function(){
    const texto = input.value;

    if(texto === ""){
        return;
    }

    const item = document.createElement("li");
    item.textContent = texto;
    lista.appendChild(item);

    input.value = "";
});