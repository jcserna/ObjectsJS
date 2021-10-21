class chimuela{
    constructor(com, vuel, energiaT){
        this.energiaT;
        this.com;
        this.vuel;
    }
    crear(){
   this.energiaT = 0;
   this.com = 0;
   this.vuel = 0;
    return `se creo nueva chimuela con energia total ${this.energiaT}`
    }
    comida(gramos){
      this.com += (gramos*4);
    }
    volar(kilometros){
      this.vuel += (kilometros + 10);
    }
    energia(){
     this.energiaT = (this.com - this.vuel);
        return this.energiaT;
    }
}

chimuela1 = new chimuela();