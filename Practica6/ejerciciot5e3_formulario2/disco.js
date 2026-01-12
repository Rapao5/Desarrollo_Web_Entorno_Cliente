class Disco {
    constructor(nombre, grupo, ano, tipo, almacen, prestado) {
        this.nombre = nombre;
        this.grupo = grupo;
        this.ano = ano;
        this.tipo = tipo;
        this.almacen = almacen;
        this.prestado = prestado;
    }

    cambiarAlmacen(almacen) {
        this.almacen = almacen;
    }

    cambiarPrestado(prestado) {
        this.prestado = prestado;
    }

    mostrar() {
        return 'Nombre: ' + this.nombre +
               ', Grupo: ' + this.grupo +
               ', Año: ' + this.ano +
               ', Tipo: ' + this.tipo +
               ', Almacén: ' + this.almacen +
               ', Prestado: ' + this.prestado;
    }
}
