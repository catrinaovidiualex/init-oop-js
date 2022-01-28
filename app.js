import ControlMasina from "./controller/ControlMasina.js";
import Masina from "./model/Masina.js";

let cm=new ControlMasina();



let m1= new Masina({id:10,marca:"Cielo",pret:650,an:2000});


console.log(m1.descriere());

cm.adaugareMasinaNoua(m1);





