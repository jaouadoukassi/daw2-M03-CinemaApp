class clasAsiento{
    constructor(pNumberAsiento){
        this.number = pNumberAsiento
        this.ocupado = 0; // 0=libre; 1 = ocuppado; 2 = temporal personal.
    }
//////////////////////////////////////////////////////////////////////////////////////

    reservarAsiento(){
        this.ocupado = 1;
    }

/////////////////////////////////////////////////////////////////////////////////

    Draw(){
        let cell = document.createElement("div")
            cell.innerHTML = "Asiento: " + this.number;
            cell.className ="cell";
            cell.id = "a:"+ this.number;
            return cell;
    }


}