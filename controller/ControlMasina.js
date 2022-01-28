import Masina from "../model/Masina.js";


class ControlMasina{


     constructor(){

        this.list=[];

        this.load();
     }


     load=()=>{
        let items=localStorage.getItem("masini");

        
        JSON.parse(items).forEach(car => {
        
         this.list.push(new Masina(car));
            
        });
     }


     afisare=()=>{



        this.list.forEach((e)=>{

             console.log(e);
        })
     }



}

export default ControlMasina;