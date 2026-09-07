const caja = document.getElementById("caja");
const btnColor = document.getElementById("btnColor");
const btnResaltar = document.getElementById("btnResaltar");

btnColor.addEventListener("click", function(){
    caja.style.backgroundColor = "lightblue";
});

btnResaltar.addEventListener("click", function(){
    caja.classList.toggle("resaltado");
});