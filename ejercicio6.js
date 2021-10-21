class contador {
    constructor(cont){
        this.cont;
    }
   reset(){
       this.cont = 0;
       return this.cont;
   }
   incr(){
       this.cont++;
       return this.cont;
   
   }
   decr(){
       this.cont--;
      return this.cont;
   }
   valorNuevo(numero){
       this.cont = numero;
       return this.cont;
   
   }
   valoractual(){
       return this.cont;
   
   }
   crear(numeroIngresado){
       this.cont=numeroIngresado;
   
   }
   }
   
   var contador1 = new con