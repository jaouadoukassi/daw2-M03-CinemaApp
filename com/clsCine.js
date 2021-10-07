class clsCine {
    constructor(){
        this.sala1;
        this.sala2;
        this.CreateSalas();
        this.drawSalas();
    }

    CreateSalas(){
        this.sala1 = new clsSala("1", 20)
        this.sala2 = new clsSala(2);
    }

    drawSalas(){
        this.sala1.DrawAsientos();
    }




}