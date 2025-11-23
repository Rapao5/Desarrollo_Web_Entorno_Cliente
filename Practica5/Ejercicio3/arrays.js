let paises = [];

paises.push(new Disco("Nevermind", "Nirvana", 1991, "rock", 1));
paises.push(new Disco("OK Computer", "Radiohead", 1997, "indie", 2));

function totalPaises() {
    let resultado = document.getElementById('resultado');
    if (paises.length != 0) {
        resultado.innerHTML = "El total de paises del array es: " + paises.length;
    } else {
        resultado.innerHTML = "El array está vacío.";
    }
}

function mostrarPaises() {
    let resultado = document.getElementById('resultado');
    if (paises.length != 0) {
        let mostrar = "";
        for (let i = 0; i < paises.length; i++) {
            mostrar += "País Nº" + (i + 1) + ": " + paises[i].mostrar() + "<br>";
        }
        resultado.innerHTML = mostrar;
    } else {
        resultado.innerHTML = "El array está vacío.";
    }
}

function inversaPaises() {
    let resultado = document.getElementById('resultado');
    if (paises.length != 0) {
        let mostrar = "";
        for (let i = paises.length - 1; i >= 0; i--) {
            mostrar += "País Nº" + (paises.length - i) + ": " + paises[i].mostrar() + "<br>";
        }
        resultado.innerHTML = mostrar;
    } else {
        resultado.innerHTML = "El array está vacío.";
    }
}

function ordenarPaises() {
    let resultado = document.getElementById('resultado');
    if (paises.length != 0) {
        let paises2 = paises.slice();
        paises2.sort((a, b) => a.nombre.localeCompare(b.nombre));
        let mostrar = "";
        for (let i = 0; i < paises2.length; i++) {
            mostrar += "País Nº" + (i + 1) + ": " + paises2[i].mostrar() + "<br>";
        }
        resultado.innerHTML = mostrar;
    } else {
        resultado.innerHTML = "El array está vacío.";
    }
}

function primerPaises() {
    let resultado = document.getElementById('resultado');
    let nombre = prompt("Nombre del disco:");
    let grupo = prompt("Grupo o cantante:");
    let ano = parseInt(prompt("Año de publicación:"), 10);
    let tipo = prompt("Tipo de música (rock, pop, punk, indie):");
    let almacen = parseInt(prompt("Número de estantería:"), 10);

    let nuevoDisco = new Disco(nombre, grupo, ano, tipo, almacen);
    paises.unshift(nuevoDisco);
    resultado.innerHTML = "Disco añadido correctamente";
}

function finalPaises() {
    let resultado = document.getElementById('resultado');
    let nombre = prompt("Nombre del disco:");
    let grupo = prompt("Grupo o cantante:");
    let ano = parseInt(prompt("Año de publicación:"), 10);
    let tipo = prompt("Tipo de música (rock, pop, punk, indie):");
    let almacen = parseInt(prompt("Número de estantería:"), 10);

    let nuevoDisco = new Disco(nombre, grupo, ano, tipo, almacen);
    paises.push(nuevoDisco);
    resultado.innerHTML = "Disco añadido correctamente";
}

function deletePrimerPaises() {
    let resultado = document.getElementById('resultado');
    if (paises.length != 0) {
        let discoBorrado = paises.shift();
        resultado.innerHTML = discoBorrado.mostrar();
    } else {
        resultado.innerHTML = "El array está vacío.";
    }
}

function deleteFinalPaises() {
    let resultado = document.getElementById('resultado');
    if (paises.length != 0) {
        let discoBorrado = paises.pop();
        resultado.innerHTML = discoBorrado.mostrar();
    } else {
        resultado.innerHTML = "El array está vacío.";
    }
}

function mostrarUnPaises() {
    let resultado = document.getElementById('resultado');
    if (paises.length != 0) {
        let pais = parseInt(prompt("Añade el Nº pais: "), 10);
        if (pais > 0 && pais <= paises.length) {
            resultado.innerHTML = "País Nº" + pais + ": " + paises[pais - 1].mostrar() + "<br>";
        } else {
            resultado.innerHTML = "País no encontrado";
        }
    } else {
        resultado.innerHTML = "El array está vacío.";
    }
}

function mostrarUnDosPaises() {
    let resultado = document.getElementById('resultado');
    if (paises.length != 0) {
        let nombreBuscado = prompt("Añade el nombre del disco: ");
        let nombres = paises.map(disco => disco.nombre.toLowerCase());
        let numero = nombres.indexOf(nombreBuscado.toLowerCase());
        if (numero != -1) {
            resultado.innerHTML = paises[numero].mostrar() + " es el Nº" + (numero + 1) + " en la lista.";
        } else {
            resultado.innerHTML = "Disco no encontrado.";
        }
    } else {
        resultado.innerHTML = "El array está vacío.";
    }
}

function intervaloPaises() {
    let resultado = document.getElementById('resultado');
    if (paises.length != 0) {
        let inicio = parseInt(prompt('Añade el primer valor.'));
        let final = parseInt(prompt('Añade el último valor.'));
        let intervalo = paises.slice((inicio - 1), final);
        let mostrar = "";
        for (let i = 0; i < intervalo.length; i++) {
            mostrar += "Disco Nº" + (inicio + i) + ": " + intervalo[i].mostrar() + "<br>";
        }
        resultado.innerHTML = mostrar;
    } else {
        resultado.innerHTML = "El array está vacío.";
    }
}
