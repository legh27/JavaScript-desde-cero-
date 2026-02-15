const formulario = document.getElementById("formulario");
const comentarioInput = document.getElementById("comentarioInput");
const listaComentarios = document.getElementById("listaComentarios");


formulario.addEventListener("submit", function(event) {

    event.preventDefault(); // Evita que la página se recargue

    const textoComentario = comentarioInput.value.trim();

    if (textoComentario === "") {
        alert("Por favor escribe un comentario.");
        return;
    }

    const nuevoComentario = document.createElement("div");
    nuevoComentario.classList.add("comentario");

    
    const fecha = new Date();
    const fechaFormateada = fecha.toLocaleString();

    
    nuevoComentario.innerHTML = `
        <p>${textoComentario}</p>
        <p class="fecha">${fechaFormateada}</p>
        <button class="eliminar">Eliminar</button>
    `;

   
    listaComentarios.appendChild(nuevoComentario);

    
    comentarioInput.value = "";

    
    const botonEliminar = nuevoComentario.querySelector(".eliminar");

    botonEliminar.addEventListener("click", function() {
        nuevoComentario.remove();
    });

});
