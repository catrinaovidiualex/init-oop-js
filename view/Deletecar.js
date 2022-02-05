import ControllerMasini from "../controller/ControlMasina.js";
import Masina from "../model/Masina.js";

class Deletecar{
constructor(){
    this.containerDeleteCar=document.querySelector(".container");
    this.deleteCar();
    this.control=new ControllerMasini();
    this.masina=new Masina();

    this.deleteC=document.querySelector(".")

}

handleManageCar=(e)=>{
    let obj=e.target;
    
    if(obj.classList.contains("idMasina") && obj.classList.contains("idMasina")){
        this.deleteCar();
       
    }


}

deleteCar=()=>{
    this.control.stergeMasina(this.masina);
    location.reload();
}



}