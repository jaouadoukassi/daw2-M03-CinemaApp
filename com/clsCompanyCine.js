class clsCompanyCine{
    constructor() {
        this.cine;
        this.CreateCines()
        this.createDiv()

    }



    CreateCines(){
        this.cine = new clsCine();
    }



    createDiv(){       
        var _dX = [
                    ["A", "B", "C"],
                    ["D", "E", "F"],
                    ["G", "H", "I", "j"]                    

                ]            
            for (let i = 1; i < _dX.length +1; i++) {                                         
                for(let k=0; k < _dX[i].length; k++){                                      
                    var container = document.getElementById("grid_sala")
                    var atr2 = document.createAttribute("class")                
                    var cell2 = document.createElement("div")                       
                        atr2.value = "cell"                    
                        cell2.setAttributeNode(atr2) +k                    
                        cell2.innerHTML = "Cell " + _dX[i][k]                
                        container.appendChild( cell2)  
                    
            }  
        }
            
        
    }
}