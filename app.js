import ControlMasina from "./controller/ControlMasina.js";
import Masina from "./model/Masina.js";

let cm=new ControlMasina();

let m3=new Masina({pret:1250,an:2008,marca:"Opel Astra",id:2});

console.log(cm.pozitieMasina(m3));

let m4=new Masina({id:2,marca:"Opel Astra",pret:2300,an:2023});

console.log(cm.modificareMasinaExistenta(m4));

let m5=new Masina({id:5,marca:"Tesla",pret:6600,an:2022});
console.log(cm.modificareMasinaExistenta(m5));

/*console.log(cm.stergeMasina(m4));*/

console.log(cm.adaugareMasinaNoua(m4));






