class libro {
    constructor(tituloLibro, autor, numEjemplares, numPrestados) {
        this.tituloLibro;
        this.autor;
        this.numEjemplares;
        this.numPrestados;
    }

    crear(tituloIngresado, autorIngresado, ejemIngresados, prestadosIngresados) {
        this.tituloLibro = tituloIngresado;
        this.autor = autorIngresado;
        this.numEjemplares = ejemIngresados;
        this.numPrestados = prestadosIngresados;
    }
    prestamo() {
        var disp = this.numEjemplares - this.numPrestados;
        if (disp > 0) {
            this.numPrestados += 1;
            return true;
        } else if (disp == 0) {
            return false;
        }
    }

    devolucion() {

        if (this.numPrestados > 0) {
            this.numPrestados -= 1;
            return true;
        } else if (this.numPrestados == 0) {
            return false;
        }
    }

    toString(libro) {
        return `Titulo: ${libro.tituloLibro}, Autor: ${libro.autor}, Número de ejemplares: ${libro.numEjemplares}, Ejemplares prestados: ${libro.numPrestados}`;

    }
}

var libro1 = new libro();
//Crear un metodo constructor llamado Libro. Sus atributos título del libro, autor, número de ejemplares del libro y número de
//ejemplares prestados los siguiente metodos para la clase: