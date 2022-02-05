import ControllerMasini from "../controller/ControlMasina.js";
import Masina from "../model/Masina.js";

export default class Updatecar{

    constructor(id){
        this.container=document.querySelector(".container");

        this.createUpdatePage();

        this.controllerMasini=new ControllerMasini();

        this.masina=this.controllerMasini.getMasinaById(id);
       // this.masina=this.controllerMasini.getMasinaById(marca);
       // this.updateCars=document.querySelector(".updateCars");
       // this.updateCars.addEventListener("click",this.handleUpdate)

        this.populateInputs();
       
        
    }

    

    createUpdatePage=()=>{
    
     this.container.innerHTML=`
            <form class="containerModif">


            <div class="updateCars">

                <h3>Modificare masina</h3>

                <label for="text">ID</label>
                <input type="text" class="idMasina"></input>

                <label for="text">Marca<label>
                <input type="text" class="marcaMasina"></input>

                <label for="text">Pret</label>
                <input type="text" class="pretMasina"></input>

                <label for="text">An<label>
                <input type="text" class="anMasina"></input>
            </div>

            <div class="buttonsUpdateCars">
                <button class="modifMasina">Modifica masina</button>
                <button class="stergeMasina">Sterge Masina</button>
                <button class="anuleazaModif">Anuleaza</button>
                
            </div> 


            </form>

     `

    }

    handleUpdate=(e)=>{

        

    }

  
    populateInputs=()=>{

        let idMasina=document.querySelector(".idMasina");

        idMasina.value=this.masina.id;

        let marcaMasina=document.querySelector(".marcaMasina");
        marcaMasina.value=this.masina.marca;

        let pretMasina=document.querySelector(".pretMasina");
        pretMasina.value=this.masina.pret;

        let anMasina=document.querySelector(".anMasina");
        anMasina.value=this.masina.an;

    }

}