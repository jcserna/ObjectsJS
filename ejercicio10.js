class calculadora{
    constructor(numero){
    this.numero = 0;
    }
    cargar(numer){
this.numero = numer;
    }
    sumar(suma){
        this.numero =  this.numero + suma;
    }
    restar(resta){
        this.numero = this.numero - resta;
    }
    mulltiplicar(mult){
        this.numero = mult * this.numero;
    }
valorActual(){
    return this.numero;
}
}

calculadora1 = new calculadora();