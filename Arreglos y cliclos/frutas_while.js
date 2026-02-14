let frutas = ["manzana", "pera", "papaya", "manzana", "naranja", "pera", "manzana", "uva", "piña", "papaya"];
let conteo = {};

let i = 0;

while (i < frutas.length) {
    let fruta = frutas[i];

    if (conteo[fruta]) {
        conteo[fruta]++;
    } else {
        conteo[fruta] = 1;
    }

    i++;
}

for (let tipo in conteo) {
    console.log(tipo + ": " + conteo[tipo]);
}
