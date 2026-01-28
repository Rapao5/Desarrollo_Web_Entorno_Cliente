window.onload = function() {
    const body = document.body;
    const tabla = document.getElementById("tablaPlantas").getElementsByTagName('tbody')[0];
    const btnGenerar = document.createElement("button");
    btnGenerar.textContent = "Generar planta";
    body.prepend(btnGenerar); 

    btnGenerar.onclick = function() {
        const nombre = prompt("Nombre de la planta:");
        const ubicacion = prompt("Ubicación:");
        const ejemplares = prompt("Número de ejemplares:");
        const flor = prompt("¿Tiene flor?");

        if (nombre && ubicacion && ejemplares && flor) {
            const nuevaFila = tabla.insertRow(); 
            
            nuevaFila.insertCell(0).textContent = nombre;
            nuevaFila.insertCell(1).textContent = ubicacion;
            nuevaFila.insertCell(2).textContent = ejemplares;
            nuevaFila.insertCell(3).textContent = flor;
        }else{
            alert('Los campos no pueden estar vacíos.')
        }
    };

    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Borrar fila";
    btnGenerar.after(btnBorrar); 

    btnBorrar.onclick = function() {
        const filas = tabla.rows;
        if (filas.length > 0) {
            tabla.deleteRow(filas.length - 1);
        } else {
            alert("No hay más filas para borrar.");
        }
    };

    const btnContar = document.createElement("button");
    btnContar.textContent = "Mostrar número de filas";
    body.appendChild(btnContar); 

    btnContar.onclick = function() {
        const numeroFilas = tabla.getElementsByTagName("tr").length;
        alert("La tabla tiene actualmente " + numeroFilas + " filas de datos.");
    };
};