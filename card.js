function ChangeName() {

    let texto = document.getElementById("change-name").value;

    document.getElementById("name").textContent = texto;

    
}
function subirImagen() {
    // Obtener el input de tipo file
    let input = document.getElementById("banner");
    input.src = " ";
    
   
}