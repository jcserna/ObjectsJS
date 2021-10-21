class formulas {
    constructor() { }

    sumar(cantidad1, cantidad2) {
        var resultado = cantidad1 + cantidad2;
        return resultado;
    }

    fibonacci(numero) {
        let numeros = [0, 1];
        for (let i = 2; i < numero; i++) {
            numeros[i] = numeros[i - 2] + numeros[i - 1];
        }
        return numeros;
    }

    modulo(numero){
        var num =[];
        for (var i = 1; i <= numero; i++) {   
            if (numero%i==0){
                num.push(i);
            }
        }
        return num;
    }

    primo(numero) {
        var num = [];
        for (var i = 2; i <= numero; i++) {  
            var primo = true;
            var contador = 2;
            while(contador <= i/2 && primo==true) {
                if (i % contador === 0) {
                    primo = false;
                }
                contador++;
            }
            if( primo==true ) {
                num.push(i);
            }
        }
        return num;
    }


}

var formulas1 = new formulas;

