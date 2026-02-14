
let librosLeidos = [];

function agregarLibro(titulo) {
    librosLeidos.push(titulo);
    console.log("Libro agregado:", titulo);
}

function mostrarLibrosLeidos() {
    console.log("Libros leídos:");

    for (let i = 0; i < librosLeidos.length; i++) {
        console.log((i + 1) + ". " + librosLeidos[i]);
    }
}

agregarLibro("El Psicoanalista");
agregarLibro("El valle de la calma");
agregarLibro("Cien años de soledad");
agregarLibro("IT");
agregarLibro("Ecuaciones Diferenciales");

mostrarLibrosLeidos();
