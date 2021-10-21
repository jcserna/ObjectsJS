class personaa{
    constructor(nombre="", edad, cedula, sexo, peso, altura){
        this.nombre;
        this.edad;
        this.cedula;
        this.sexo;
        this.peso;
        this.altura;
    }

    crear(nombre_ingresado, edad_ingresado, cedula_ingresado, sexo_ingresado, peso_ingresado, altura_ingresada){
        this.nombre = nombre_ingresado;
        this.edad = edad_ingresado;
        this.cedula = cedula_ingresado; 
        this.sexo = sexo_ingresado;
        this.peso = peso_ingresado;
        this.altura = altura_ingresada;
     }

     calcularIMC(){
         var imc = this.peso/(this.altura)^2;
         if(imc<20){
             return -1 ;
         } else if(20<=imc>=25){
             return 0;
         } else if(imc>25){
             return 1;
         }
     }

     esMayorDeEdad(){
         if(this.edad>=18){
             return true;
         }else{
             return false;
         }
     }

     comprobarSexo(){
        if(this.sexo!=`m`||this.sexo!=`h`){
            this.sexo = `h`;
        }
        return this.sexo;
     }

}

var personaa1 = new personaa();
