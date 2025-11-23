let paises = ['España' , 'Portugal' , 'Alemania', 'Inglaterra'];


function totalPaises(){
    let resultado = document.getElementById('resultado');
    if(paises.length !=0){
        let total = 0;
        for(let i=0; i < paises.length; i++){
            total +=1;
        }
        resultado.innerHTML="El total de paises del array es: " + total;
    }else{
        resultado.innerHTML="El array está vacío.";
    }
        
}

function mostrarPaises(){
    let resultado = document.getElementById('resultado');
    if(paises.length !=0){
        let total = 1;
        let mostrar = "";
        for(let i=0; i < paises.length; i++){
            mostrar+="País Nº" + total + ": " + paises[i] + "</br>";
            total++;
        }
        resultado.innerHTML=mostrar;
    }else{
        resultado.innerHTML="El array está vacío.";
    }
        
}

function inversaPaises(){
    let resultado = document.getElementById('resultado');
    if(paises.length !=0){
        let total = 1;
        let mostrar = "";
        for(let i=paises.length-1; i >= 0; i--){
            mostrar+="País Nº" + total + ": " + paises[i] + "</br>";
            total++;
        }
        resultado.innerHTML=mostrar;
    }else{
        resultado.innerHTML="El array está vacío.";
    }
}

function ordenarPaises(){
    let resultado = document.getElementById('resultado');
    if(paises.length !=0){
        let total = 1;
        let mostrar = "";
        let paises2=paises.slice();
        paises2.sort();
        for(let i=0; i < paises2.length; i++){
            mostrar+="País Nº" + total + ": " + paises2[i] + "</br>";
            total++;
        }
        resultado.innerHTML=mostrar;
    }else{
        resultado.innerHTML="El array está vacío.";
    }
}

function primerPaises(){
    let resultado = document.getElementById('resultado');
    if(paises.length !=0){
        let pais = prompt("Añade el pais: ");
        paises.unshift(pais);
        resultado.innerHTML="País añadido correctamente";
    }else{
        resultado.innerHTML="El array está vacío.";
    }
}

function finalPaises(){
    let resultado = document.getElementById('resultado');
    if(paises.length !=0){
        let pais = prompt("Añade el pais: ");
        paises.push(pais);
        resultado.innerHTML="País añadido correctamente";
    }else{
        resultado.innerHTML="El array está vacío.";
    }
}

function deletePrimerPaises(){
    let resultado = document.getElementById('resultado');
    if(paises.length !=0){
        resultado.innerHTML=paises.shift();
    }else{
        resultado.innerHTML="El array está vacío.";
    }
}

function deleteFinalPaises(){
    let resultado = document.getElementById('resultado');
    if(paises.length !=0){
        resultado.innerHTML=paises.pop();
    }else{
        resultado.innerHTML="El array está vacío.";
    }
}

function mostrarUnPaises(){
    let resultado = document.getElementById('resultado');
    if(paises.length !=0){
        let pais = parseInt(prompt("Añade el Nº pais: "), 10);
        if(pais > 0 && pais <=paises.length){
            resultado.innerHTML="País Nº" + pais + ": " + paises[pais-1] + "</br>";
        }else{
            resultado.innerHTML="País no encontrado";
        }  
    }else{
        resultado.innerHTML="El array está vacío.";
    }
        
}


function mostrarUnDosPaises(){
    let resultado = document.getElementById('resultado');
    if(paises.length !=0){
        let pais = prompt("Añade el nombre del pais: ");
        let paises2=paises.map(elemento => elemento.toLowerCase());
        let numero = paises2.indexOf(pais.toLowerCase());
        if(numero!=-1){
            resultado.innerHTML=paises[numero] + " es el Nº" + (numero+1) + " en la lista.";
        }else{
            resultado.innerHTML="País no encontrado.";
        }
        
    }else{
        resultado.innerHTML="El array está vacío.";
    }
        
}


function intervaloPaises(){
    let resultado = document.getElementById('resultado');
    if(paises.length!=0){
        let inicio = parseInt(prompt('Añade el primer valor.'));
        let final = parseInt(prompt('Añade el último valor.'))
        resultado.innerHTML=paises.slice((inicio -1), (final));
    }else{
        resultado.innerHTML="El array está vacío."
    }
}


