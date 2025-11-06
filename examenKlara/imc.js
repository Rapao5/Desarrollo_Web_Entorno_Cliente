let altura = prompt("Añade su altura en centímetros");
let peso = prompt("Añade el peso en Kg");
altura = parseFloat(altura)/100;
peso = parseFloat(peso);
let estado = '';
let array =['<16.00: Infrapeso (delgadez severa)',
            '16.00 - 16.99: Infrapeso (delagadez moderada)',
            '17.00 - 18.49: Infrapeso (delgadez aceptable)',
            '18.50 - 24.99: Peso normal',
            '25.00 - 29.99: Sobrepeso',
            '30.00 - 34.99: Obeso (Tipo 1)',
            '35.00 - 40.00: Obeso (Tipo 2)',
            '>40.00: Obeso (Tipo 3)' ]

function calcularMasa(altura, peso){
    if(altura > 0 && peso > 0){
                let masa=peso/(altura ** 2);
            if(masa < 16.00){
                return array[0];
            }else if(masa >= 16.00 &&  masa <= 16.99){
                return array[1];
            }else if(masa >= 17.00 && masa <= 18.49){
                return array[2];
            }else if(masa >= 18.50 &&  masa <= 24.99){
                return array[3];
            }else if(masa >= 25.00 &&  masa <= 29.99){
                return array[4];
            }else if(masa >= 30.00 &&  masa <= 34.99){
                return array[5];
            }else if(masa >= 35.00 &&  masa <= 40.00){
                return array[6]; 
            }else if(masa > 40.00){
                return array[7];
            }
        }else{
            console.log("Los valores están por debajo de 0.")
        }
    }

    estado=calcularMasa(altura, peso);

    for(let i=0; i<array.length; i++){
        if(array[i]===estado){
            console.log("- " + array[i] + " este es tu índice.");
        }else{
            console.log("- " + array[i]);
        }
    }



