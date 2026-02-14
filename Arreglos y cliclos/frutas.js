let frutas = ["manzana", "pera", "manzana", "naranja", "pera", "manzana", "uva","naranja"];
let conteo = {};

for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];

    if (conteo[fruta]) {
        conteo[fruta]++;
    } else {
        conteo[fruta] = 1;
    }
}

for (let tipo in conteo) {
    console.log(tipo + ": " + conteo[tipo]);
}
