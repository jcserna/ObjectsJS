class carro{
    constructor(cambio, rpm){
        this.cambio;
        this.rpm;
    }

    crear(cambioIngresado, rpmIngresado){
        this.cambio=cambioIngresado;
        this.rpm=rpmIngresado;
    }
    velocidad(){
        var vel = (this.rpm/100)*(0.5+(this.cambio/2));
        return vel;
    }
    
    consumo(){
        var auxrpm=1;
        var auxCambio=1;

        if(this.rpm>3000){
            auxrpm=(this.rpm - 2500)/500;
        }
        if(this.cambio==1){
            auxCambio=3;
        }
        if(this.cambio==2){
            auxCambio=2;
        }

        return 0.05*auxrpm*auxCambio;
    }

    arrancar(){
        this.cambio=1;
        this.rpm=500;
    }

    subirCambio(){
        if(this.cambio>=6){
            return "No se puede subir el cambio"
        }else{
            this.cambio += 1;
        }
    }

    bajarCambio(){
        if(this.cambio<=1){
            return "No se puede bajar el cambio"
        }else{
            this.cambio -= 1;
        } 
    }

    subirRPM(cuantos){
        this.rpm += cuantos;
        return this.rpm;
    }

    bajarRPM(cuantos){
        if(this.rpm<=0){
            return "No se pueden bajar las rpm";
        }
        else if(this.rpm<cuantos){
            return "No se pueden bajar las rpm";
        }
        else{
            this.rpm -= cuantos;
            return this.rpm;
        }
    }
}

var carro1 = new carro;