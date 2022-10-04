// Comentario de línea
/* Comentario de bloque */

function addRow(event) {
    const texto = document.querySelector("#entrada").value //Selecciona la entrada y su valor (el texto) y nos lo muestra. Te devuelve el nodo (objeto)
    const tabla = document.querySelector("#la_tabla")
    // TODO: Crear una fila a la tabla la_tabla debajo del botón con el texto de input
    const fila = document.createElement("tr")
    const celda = document.createElement("td")
    celda.innerHTML = texto //Lee lo que se escribe dentro de cada celda

    fila.appendChild(celda)
    tabla.appendChild(fila)
}

window.onload = function() { //Objeto ventana: Equivale a la pestaña del navegador
    let elboton = document.querySelector("#crear")
    elboton.addEventListener("click", addRow)
}