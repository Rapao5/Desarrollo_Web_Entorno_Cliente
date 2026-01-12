let producto =[];

producto.push(new Producto("20/04/2020", "WW$1234", 'NM_albuquerque:1234', 100, '200gC3OH7', 'SG26-737000737000-22'));

function totalLotes(){
    let resultado = document.getElementById('resultado');
    if(producto.length != 0){
        resultado.innerHTML='El número de lotes es: ' + producto.length;
    }else{
        resultado.innerHTML='No hay lotes.';
    }
}

function mostrarLotes(){
    let resultado = document.getElementById('resultado');
    if(producto.length != 0){
        let mostrar = "";
        for (let i = 0; i < producto.length; i++) {
            mostrar += "Lote Nº" + (i + 1) + ": " + producto[i].mostrar() + "<br>";
        }
        resultado.innerHTML = mostrar;
    }else{
        resultado.innerHTML='No hay lotes.';
    }
}

function deleteLote(){
    let resultado = document.getElementById('resultado');
     if(producto.length!=0){
        let loteEliminado = producto.pop();
        resultado.innerHTML='¡Lote distribuido! El siguiente producto ha salido del inventario:' + loteEliminado.mostrar();
     }else{
        resultado.innerHTML='No hay lotes.';
     }
}

function validaciones(){
    let errores = [];
    let fechaE = document.getElementById('fecha');
    let quimicoE = document.getElementById('quimico');
    let entregaE = document.getElementById('entrega');
    let pesoE = document.getElementById('peso');
    let formulaE = document.getElementById('formula');
    let cuentaE = document.getElementById('cuenta');
    let fecha = document.getElementById('fecha').value;
    let quimico = document.getElementById('quimico').value;
    let entrega = document.getElementById('entrega').value;
    let peso = document.getElementById('peso').value;
    let formula = document.getElementById('formula').value;
    let cuenta = document.getElementById('cuenta').value;

    fechaE.classList.remove('is-invalid');
    quimicoE.classList.remove('is-invalid');
    entregaE.classList.remove('is-invalid');
    pesoE.classList.remove('is-invalid');
    formulaE.classList.remove('is-invalid');
    cuentaE.classList.remove('is-invalid');

    let comprobarFecha = /^\d{2}\/\d{2}\/\d{4}$/;
    let comprobarQuimico = /^[A-Z]{2}[^a-zA-Z0-9]\d{4}$/;
    let comprobarEntrega = /^[A-Z]{2,3}\_[a-z]{3,20}\:\d{4}$/;
    let comprobarFormula = /^\d{1,3}g([A-Z]{1,2}\d{0,1}){2}$/;
    let comprobarCuenta = /^[A-Z]{2}\d{2}-\d{12}-\d{2}$/;

    if(comprobarFecha.test(fecha)==false){
        errores.push('fecha');
    }
    if(comprobarQuimico.test(quimico)==false){
        errores.push('quimico');
    }
    if(comprobarEntrega.test(entrega)==false){
        errores.push('entrega');
    }
    if(peso < 100 || peso >5000){
        errores.push('peso');
    }
    if(comprobarFormula.test(formula)==false){
        errores.push('formula');
    }
    if(comprobarCuenta.test(cuenta)==false){
        errores.push('cuenta');
    }
    
    if(errores.length==0){
        anadirLote();
    }else{
        for(let i=0; errores.length > i; i++){
            if(errores[i]=='fecha'){
                fechaE.classList.add('is-invalid');
            }
            if(errores[i]=='quimico'){
                quimicoE.classList.add('is-invalid');
            }
            if(errores[i]=='entrega'){
                entregaE.classList.add('is-invalid');
            }
            if(errores[i]=='peso'){
                pesoE.classList.add('is-invalid');
            }
            if(errores[i]=='formula'){
                formulaE.classList.add('is-invalid');
            }
            if(errores[i]=='cuenta'){
                cuentaE.classList.add('is-invalid');
            }
        }
    }
}

function anadirLote(){
    let resultado = document.getElementById('resultado');
    let fecha = document.getElementById('fecha').value;
    let quimico = document.getElementById('quimico').value;
    let entrega = document.getElementById('entrega').value;
    let peso = document.getElementById('peso').value;
    let formula = document.getElementById('formula').value;
    let cuenta = document.getElementById('cuenta').value;

    let lote = new Producto(fecha, quimico, entrega, peso, formula, cuenta);
    producto.unshift(lote);
    resultado.innerHTML="Lote añadido";
}