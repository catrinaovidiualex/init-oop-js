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
      
      localStorage.setItem('masini',JSON.stringify(this.list));
     

    }

     //updateCar

     modificareMasinaExistenta=(masina)=>{

    
      
      this.list[this.pozitieMasina(masina)]=masina;


      localStorage.removeItem("masini");

      localStorage.setItem("masini",JSON.stringify( this.list));


     }


     //deleteCar

     stergeMasina=(masina)=>{

    
      
      let vec=this.list.filter((e)=>e.id!=masina.id);
      this.list=vec;


     localStorage.removeItem("masini");
     localStorage.setItem('masini',JSON.stringify(this.list));
     
     }


     pozitieMasina=(masina)=>{
       
      
        for(let i=0;i<this.list.length;i++){

            if(this.list[i].id==masina.id){

               return i;
            }

         
        }

        return -1;
   }







}

export default ControlMasina;