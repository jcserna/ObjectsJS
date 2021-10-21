class contrasenia{
    constructor(password = "", longitud){
        this.password;
        this.longitud = password.length;
    }

    crear(contraseniaIngresada){
        this.password = contraseniaIngresada;
        this.longitud = contraseniaIngresada.length;
    }

    esFuerte(){
        var mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var minusculas = "abcdefghijklmnopqrstuvwxyz";
        var numeros = "1234567890";
        var contadorMay = 0;
        var contadorMin = 0;
        var contadorNum = 0;
        for(var i=0;i<mayusculas.length;i++){
            for(var j=0;j<this.longitud;j++){
                if(this.password[j]==mayusculas[i]){
                    contadorMay+=1
                }
            }
        }

        for(var i=0;i<minusculas.length;i++){
            for(var j=0;j<this.longitud;j++){
                if(this.password[j]==minusculas[i]){
                    contadorMin+=1
                }
            }
        }
        for(i=0;i<numeros.length;i++){
            for(var j=0;j<this.longitud;j++){
                if(this.password[j]==numeros[i]){
                    contadorNum+=1
                }
            }
        }
        if(contadorMay >= 2 && contadorMin >= 1 && contadorNum >=5){
            return true;
        }else {
            return false;
        }
        }

    generarContrasenia(){
        var num = Math.floor((Math.random() * (20 - 1 + 1)) + 1);
        this.password="";
        var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for(var i=0; i < num ; i++ ){
        this.password += String.fromCharCode((Math.floor((Math.random() * 100)) % 94) + 33);
            
        }
        this.longitud = this.password.length;
        return this.password;
    }
    
    seguridadPassword(){
        if(this.password.length<7){
            return "Debil";
        }
        else if (7<=this.password.length<=10){
            return "Media";
        }
        else if(11<=this.password.length<=20){
            return "Fuerte";
        }
    }
}

var password = new contrasenia();
//seguridadPaswword(); indicar si la contraseña
//es debil contiene entre 1 a 6 caracteres (caracteres numeros
//y letras), media (7 a 10 caracteres numeros y letras) o
//fuerte (11 a 20 caracteres letras y caracteres especiales)