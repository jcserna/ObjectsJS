class cuenta{

    constructor(titular = "", cantidad=0){
        this.titular;
        this.cantidad;
    }

    crear(titular_ingresado, cantidad_ingresada){
        this.titular = titular_ingresado;
        this.cantidad = cantidad_ingresada;
     }

    mostrar(cuenta){
        return `Nombre: ${cuenta.titular}, Cantidad: ${cuenta.cantidad}`    
    }

    ingresar(aumentarCantidad){
        if(aumentarCantidad>0){
        this.cantidad += aumentarCantidad;
        return this.cantidad;
        }
        else{
            return this.cantidad;
        }
    }    
    retirar(retirarCantidad){
        this.cantidad -= retirarCantidad;
        return this.cantidad;
    }
}

var cuenta1 = new cuenta();
