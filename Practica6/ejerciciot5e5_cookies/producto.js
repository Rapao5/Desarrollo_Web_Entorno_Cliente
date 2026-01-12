class Producto {
    constructor(fecha, cocinero, destinatario, gramos, composicion, cuenta){
        this.fecha=fecha;
        this.cocinero=cocinero;
        this.destinatario=destinatario;
        this.gramos=gramos;
        this.composicion=composicion;
        this.cuenta=cuenta;
    }
    mostrar(){
        return 'Fecha: ' + this.fecha +
               ', Cocinero: ' + this.cocinero +
               ', Destinatario: ' + this.destinatario +
               ', Gramos: ' + this.gramos +
               ', Composición: ' + this.composicion +
               ', Nº de cuenta: ' + this.cuenta;
    }
}