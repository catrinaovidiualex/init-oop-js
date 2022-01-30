import ControlInchiriere from "./controller/ControlInchiriere.js";
import ControlMasina from "./controller/ControlMasina.js";
import Inchiriere from "./model/Inchiriere.js";
import Masina from "./model/Masina.js";

let cm=new ControlMasina();

/*let m3=new Masina({pret:1250,an:2008,marca:"Opel Astra",id:2});

console.log(cm.pozitieMasina(m3));*/

let m4=new Masina();

console.log(cm.update({id:3,marca:"test testare",pret:9999,an:1999}));

/*console.log(cm.update({id:4,marca:"",pret:"",an:2001}));*/


console.log(cm.update({id:4,marca:"BMW X5 Test",pret:9999,an:""}));
