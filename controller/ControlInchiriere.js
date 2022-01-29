import Inchiriere from "../model/Inchiriere.js";

class ControlInchiriere{

    constructor (){

    
        load=()=>{

            let items=localStorage.getIteam("inchirieri");
            JSON.parse(items).array.forEach(inch => {
            this.list.push(new Inchiriere(inch));
                
            });

        }


    }
}