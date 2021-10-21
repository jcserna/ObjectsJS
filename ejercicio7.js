class contadorA {
    constructor(cont, mensaje){
        this.cont;
        this.mensaje ="";
    }

   reset(){
       this.cont = 0;
       return this.cont;
   }
   incr(){
       this.cont++;
       this.mensaje = "Incremento";
       return this.cont;
   
   }
   decr(){
       this.cont--;
       this.mensaje = "Decremento";
      return this.cont;
   }
   valorNuevo(numero){
       this.cont = numero;
       this.mensaje = "Actualización";
       return this.cont;
   
   }
   valoractual(){
       return this.cont;
   
   }
   crear(numeroIngresado){
       this.cont=numeroIngresado;
   
   }

    ultimoComando(){
        return this.mensaje;
    }
   }
   
   var contador1 = new contadorA();