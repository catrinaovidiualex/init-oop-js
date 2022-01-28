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


     //addCar

     adaugareMasinaNoua=(masina)=>{


      this.list.push(masina);

      
      localStorage.removeItem("masini");
      console.log(this.list);


      localStorage.setItem('masini',JSON.stringify(this.list));
     

    }

     //updateCar
     //deleteCar







}

export default ControlMasina;