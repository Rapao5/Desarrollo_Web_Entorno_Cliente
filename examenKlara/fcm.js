let edad = prompt("Añade su edad.");
let sexo = prompt("Añade su sexo.");
let fcm;

function calcularFrecuencia(edad, sexo){
    if(edad < 0 && edad > 100){
        console.log("La edad debe estar entre 0 y 100 años.");
        return null;
    }else{
        if(sexo ==='hombre'){
            return 220 - edad;
        }else if(sexo === 'mujer'){
            return 206 - (0.88 * edad);
        }else{
            console.log("Ha ocurrido un error en el sexo.")
            return null;
        }
    }
}

fcm = calcularFrecuencia(edad, sexo);

function calcularZona(fcm, porcentajeMin, porcentajeMax) {
  const min = Math.round(fcm * (porcentajeMin / 100));
  const max = Math.round(fcm * (porcentajeMax / 100));
  return `${min} - ${max} lpm`;
}
console.log("Su FCM es: " + fcm + " con edad de: " + edad + " años.");
console.log("Tabla de valores:");
console.log('Zona de recuperación (60%-70%) : ' + calcularZona(fcm, 60, 70));
console.log('Zona aeróbica (70%-80%) : '  + calcularZona(fcm, 70, 80));
console.log('Zona anaeróbica (80%-90%) : '  + calcularZona(fcm, 80, 90));
console.log('Línea roja (90%-100%) : '  + calcularZona(fcm, 90, 100));
