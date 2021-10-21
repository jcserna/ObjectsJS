class chimuela {
  constructor(energiaT) {
    this.energiaT;
  }
  crear() {
    this.energiaT = 0;

    return `se creo nueva chimuela con energia total ${this.energiaT}`
  }
  comida(gramos) {
    this.energiaT += (gramos * 4);
  }
  volar(kilometros) {
    if (this.energiaT < 10) {
      return "No puede volar, poca energía";
    } else {
      this.energiaT -= (kilometros + 10);
    }
  }
  energia() {
    //this.energiaT = (this.com - this.vuel);
    return this.energiaT;
  }

  estaDebil() {
    if (this.energiaT < 50) {
      return true;
    }
    else {
      false;
    }
  }
  estaFeliz() {
    if (500 <= this.energiaT <= 1000) {
      return true;
    }
    else {
      return false;
    }
  }

  cuantoQuiereVolar() {
    var aux = 0;
    if (300 <= this.energiaT <= 400) {
      aux += 10;
    }
    if (this.energiaT % 20 == 0) {
      aux += 15;
    }
    var ener = (this.energiaT / 5) + aux;
    return ener;
  }
}

chimuela1 = new chimuela();