import Persoana from "../model/Persoana.js";
class ControlPersoana{
constructor(){
    this.list=[];
    this.load();            
}

load=()=>{
    let pers=localStorage.getItem("persoane");
    JSON.parse(pers).forEach(p => {
        this.list.push(new Persoana(p.idPers,p.nume,p.prenume,p.varsta));
        
    });

}

afisare=()=>{
    this.list.forEach((e)=>{
        console.log(e);
    });
}

}