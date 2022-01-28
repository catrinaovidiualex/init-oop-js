import ControllerMasini from "../controller/ControlMasina.js";

class Addcar{

    constructor(){
    this.containerAddCar=document.querySelector(".container");
    this.createAddCarPage();
 
    }


    createAddCarPage=()=>{

        this.containerAddCar.innerHTML=`

        <h3>Masina Noua</h3>

        <div class="inputCars">

            <label for="text">ID</label>
            <input type="text" class="idMasina"></input>

            <label for="text">Marca<label>
            <input type="text" class="marcaMasina"></input>

            <label for="text">Pret</label>
            <input type="text" class="pretMasina"></input>

            <label for="text">An<label>
            <input type="text" class="anMasina"></input>
        </div>

        <div class="buttonsAddCars">
            <input type="submit" value="Creeaza masina noua" class="newCars">
            <button class="anuleaza">Anuleaza</button>
        </div>
        
        `
    }

   

 

}


export default Addcar;