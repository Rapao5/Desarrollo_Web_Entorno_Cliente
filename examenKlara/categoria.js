let ano = prompt("Añade el año de nacimiento");
let array = ["Micro",
             "Niño",
             "Junior",
             "Adulto",
             "Senior"];

function calculoCategoria(ano){
    if(ano > 1900){
            let anos = 2025 - ano;
        if(anos>0){
            if(anos > 0 && anos <= 3){
                return array[0];
            }else if(anos > 3 && anos <= 15){
                return array[1];
            }else if(anos > 15 && anos <=17){
                return array[2];
            }else if(anos > 18 && anos <= 59){
                return array[3];
            }else if(anos > 60){
                return array[4];
            }
        }else{
            return "Edad no válida.";
        }
    }else{
        return "Edad no válida.";
    }
}

let resultado = calculoCategoria(ano);

console.log("Tu categoría es: " + resultado);
console.log("Categorias:");
for(let i=0; i < array.length; i++){
    if(array[i] == resultado){
        console.log("-"+array[i]+" esta es tu categoría");
    }else{
        console.log("-"+array[i]);
    }
}


