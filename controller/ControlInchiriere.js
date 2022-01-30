import Inchiriere from "../model/Inchiriere.js";
import Masina from "../model/Masina.js";

class ControlInchiriere{

    constructor (){

    this.list=[];
    this.load();

    }

    load=()=>{

        let items=localStorage.getItem("inchirieri");
        JSON.parse(items).forEach(inch => {
        this.list.push(new Inchiriere(inch));
            
        });

    }

    afisare=()=>{
        this.list.forEach((e)=>{
            console.log(e);
        });
    }

    //CRUD

    adaugareInchiriere=(inch)=>{

        this.list.push(inch);
        localStorage.removeItem("inchirieri");
        localStorage.setItem('inchirieri',JSON.stringify(this.list));
      
        
    }

    modificareInchiriere=(inch)=>{

      this.list[this.pozitieInchiriere(inch)]=inch;
      
      localStorage.removeItem("inchirieri");

      localStorage.setItem("inchirieri",JSON.stringify(this.list));
        
    }


    pozitieInchiriere=(inch)=>{
        for(let i=0;i<this.list.length;i++){
            if(this.list[i].idInchiriere==inch.idInchiriere){
                return i;
            }
        }
        return -1;

    }



}


export default ControlInchiriere;