// Comentario de línea
/* Comentario de bloque */

function cuentaClicks(event) {
    let input = document.querySelector("#entrada").value
    alert(input)
    // TODO: Crear un párrafo debajo del botón con el texto de input
}

window.onload = function() {
    let elboton = document.querySelector("#crear")
    elboton.addEventListener("click", cuentaClicks)
}