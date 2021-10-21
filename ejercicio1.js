class persona{
    constructor(nombre="", edad = 0, cedula= 0){
        this.nombre
        this.edad
        this.cedula
    }

    crear(nombre_ingresado, edad_ingresado, cedula_ingresado){
       this.nombre = nombre_ingresado;
       this.edad = edad_ingresado;
       this.cedula = cedula_ingresado; 
    }


    mostrar(persona){
        return `Nombre: ${persona.nombre}, edad: ${persona.edad}, ${persona.cedula}` 
    }

    es_mayor_de_edad(persona){
        if(persona.edad>=18){
            return true;
        }
        else {
            return false;
        }
    }

}

var persona1 = new persona();
