function datos(num){
    let resultado2=document.getElementById("resultado2");
    switch(num){
        case 1:
            resultado2.innerHTML=`<h2>Calculo de masa</h2>
            <input type="number" id="altura" placeholder="Altura">
            <input type="number" id="peso" placeholder="Peso">
            <button onclick="calcularMasa()">Enviar</button>`;
            break;
        case 2:
            resultado2.innerHTML=`<h2>Calculo de frecuencia cardiaca</h2>
            <input type="number" id="edad" placeholder="Edad">
            <input type="text" id="sexo" placeholder="Sexo">
            <button onclick="calcularFrecuencia()">Enviar</button>`;
            break;
        case 3:
            resultado2.innerHTML=`<h2>Calculo de categoria</h2>
            <input type="number" id="ano" placeholder="Año de nacimiento">
            <button onclick="calculoCategoria()">Enviar</button>`;
            break;
    }
}

function calcularMasa(){
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let resultado = document.getElementById("resultado");
    let array =['<16.00: Infrapeso (delgadez severa)',
            '16.00 - 16.99: Infrapeso (delagadez moderada)',
            '17.00 - 18.49: Infrapeso (delgadez aceptable)',
            '18.50 - 24.99: Peso normal',
            '25.00 - 29.99: Sobrepeso',
            '30.00 - 34.99: Obeso (Tipo 1)',
            '35.00 - 40.00: Obeso (Tipo 2)',
            '>40.00: Obeso (Tipo 3)' ]
    if(altura > 0 && peso > 0){
            let masa=peso/((altura/100) ** 2);
            if(masa < 16.00){
                resultado.innerHTML= "Indice de masa: "+array[0];
            }else if(masa >= 16.00 &&  masa <= 16.99){
                resultado.innerHTML="Indice de masa: "+array[1];
            }else if(masa >= 17.00 && masa <= 18.49){
                resultado.innerHTML="Indice de masa: "+array[2];
            }else if(masa >= 18.50 &&  masa <= 24.99){
                resultado.innerHTML="Indice de masa: "+array[3];
            }else if(masa >= 25.00 &&  masa <= 29.99){
                resultado.innerHTML="Indice de masa: "+array[4];
            }else if(masa >= 30.00 &&  masa <= 34.99){
                resultado.innerHTML="Indice de masa: "+array[5];
            }else if(masa >= 35.00 &&  masa <= 40.00){
                resultado.innerHTML="Indice de masa: "+array[6]; 
            }else if(masa > 40.00){
                resultado.innerHTML="Indice de masa: "+array[7];
            }
        }else{
            resultado.innerHTML="Los valores están por debajo de 0.";
        }
    }

function calcularFrecuencia(){
    let edad = document.getElementById('edad').value;
    let sexo = document.getElementById('sexo').value;
    let resultado = document.getElementById("resultado");
    if(edad < 0 || edad > 100){
        resultado.innerHTML="La edad debe estar entre 0 y 100 años.";
    }else{
        if(sexo ==='hombre'){
            resultado.innerHTML="Frecuencia cardiaca: "+(220 - edad);
        }else if(sexo === 'mujer'){
            resultado.innerHTML="Frecuencia cardiaca: "+(206 - (0.88 * edad));
        }else{
            resultado.innerHTML="Ha ocurrido un error en el sexo.";
        }
    }
}

function calculoCategoria(){
    let ano = document.getElementById('ano').value;
    let array = ["Micro",
             "Niño",
             "Junior",
             "Adulto",
             "Senior"];
    let resultado = document.getElementById("resultado");
    if(ano > 1900){
            let anos = 2025 - ano;
        if(anos>0){
            if(anos > 0 && anos <= 3){
                resultado.innerHTML="Categoría: "+array[0];
            }else if(anos > 3 && anos <= 15){
                resultado.innerHTML="Categoría: "+array[1];
            }else if(anos > 15 && anos <=17){
                resultado.innerHTML="Categoría: "+array[2];
            }else if(anos > 18 && anos <= 59){
                resultado.innerHTML="Categoría: "+array[3];
            }else if(anos > 60){
                resultado.innerHTML="Categoría: "+array[4];
            }
        }else{
            return "Edad no válida.";
        }
    }else{
        return "Edad no válida.";
    }
}

function crearHorario(){
    let resultado2 = document.getElementById("resultado2");
    resultado2.innerHTML = `
    <table border="1">
      <tr><th>Horario</th><th>Lunes</th><th>Martes</th><th>Miercoles</th><th>Jueves</th><th>Viernes</th></tr>
      <tr><th>09:00 - 11:00</th><td></td><td></td><td></td><td></td><td></td></tr>
      <tr><th>11:00 - 13:00</th><td></td><td></td><td></td><td></td><td></td></tr>
      <tr><th>13:00 - 15:00</th><td></td><td></td><td></td><td></td><td></td></tr>
    </table>
    </br>
    <table border="1">
      <tr><th>Horario</th><th>Lunes</th><th>Martes</th><th>Miercoles</th><th>Jueves</th><th>Viernes</th><th>Sabado</th><th>Domingo</th></tr>
      <tr><th>16:00 - 17:00</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
      <tr><th>17:00 - 18:00</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
      <tr><th>18:00 - 19:00</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
      <tr><th>19:00 - 20:00</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
      <tr><th>20:00 - 21:00</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
    </table>
  `;
}