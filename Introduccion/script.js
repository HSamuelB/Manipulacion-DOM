const name = document.getElementById("nombre");
const button = document.getElementById("boton");


button.addEventListener("click",()=>{
    alert(`Hola, ${nombre.value}`)
})