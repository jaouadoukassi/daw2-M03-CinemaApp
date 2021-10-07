class clsSala{
    constructor(pID, pNumerosdeasientos){
        this.number = pID;
        this.num_Asientos= pNumerosdeasientos;
        this.asientos =[];
        this.containerHTML = document.getElementById("grid_sala");
        this.CreateAsientos()
    }
////////////////////////////////////////////////////////////////////////////////////////////
    CreateAsientos(){
        for (let i = 0; i < this.num_Asientos; i++) {
            var tA = new clasAsiento(i)
            this.asientos.push(tA)            
        }
    }
//////////////////////////////////////////////////////////////////////////////

    DrawAsientos(){
        //let container = document.getElementById("grid_sala")
        for (let i = 0; i < this.num_Asientos; i++) {
            var tA = this.asientos[i];
            var tCell = tA.Draw();            
            this.containerHTML.appendChild(tCell);
            
        }
    }
/////////////////////////////////////////////////////////////////////////////////////////
    EraseAsientos(){
        this.containerHTML.innerHTML = "";
    }




}