class Enterprise {
    constructor(Cpotencia, Ccoraza) {
        this.Cpotencia = 50;
        this.Ccoraza = 5;
    }

    potencia() {
        return this.Cpotencia;
    }
    coraza() {
        return this.Ccoraza;
    }
    encontrarPilaAtomica() {
        if (this.Cpotencia > 75) {
            this.Cpotencia = 100;
        } else {
            this.Cpotencia += 25;
        }
    }
    encontrarEscudo() {
        if (this.Ccoraza > 10) {
            this.Ccoraza = 20;
        } else {
            this.Ccoraza += 10;
        }
    }
    recibirAtaque(puntos) {
        if (this.Ccoraza >= puntos) {
            this.Ccoraza = this.Ccoraza - puntos;
        } else if (this.Ccoraza == 0) {
            if (this.Cpotencia >= puntos) {
                this.Cpotencia = this.Cpotencia - puntos;
            } else {
                this.Cpotencia = 0;
            }
        } else if (this.Ccoraza < puntos) {
            var tempCoraza = puntos - this.Ccoraza;
            this.Ccoraza = 0;
            if (this.Cpotencia < tempCoraza) {
                this.Cpotencia = 0;
            }else{
                this.Cpotencia = this.Cpotencia - tempCoraza;
            }

        }
    }
}

Enterprise1 = new Enterprise();