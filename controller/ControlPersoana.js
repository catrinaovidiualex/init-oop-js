import Persoana from "../model/Persoana.js";
class ControlPersoana{
constructor(){
    this.list=[];
    this.load();            
}

load=()=>{
    let pers=localStorage.getItem("persoane");
    JSON.parse(pers).forEach(p => {
        this.list.push(new Persoana(p));
        
    });

}


}