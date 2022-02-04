
import ControlMasina from "./controller/ControlMasina.js";
import ControlInchiriere from "./controller/ControlInchiriere.js";
import Inchiriere from "./model/Inchiriere.js";
import ControlPersoana from "./model/Persoana.js"

let cm=new ControlMasina();

/*let m3=new Masina({pret:1250,an:2008,marca:"Opel Astra",id:2});

console.log(cm.pozitieMasina(m3));*/


/*console.log(cm.update({id:4,marca:"",pret:"",an:2001}));*/


/*console.log(cm.update({id:4,marca:" Test"}));*/


let ci= new ControlInchiriere();
let i1=new Inchiriere(10,3,345,"02/02/2022");

/*console.log(ci.adaugareInchiriere(i1));*/
/*console.log(ci.stergeInchiriere(i1));*/
console.log(ci.updateInchiriere({idInchiriere:10,idMasina}));


/*let cp=new ControlPersoana();
let p1=new Persoane({idPers: 100, nume: Visan, prenume: Cornel, varsta: 34});
console.log(cp.afisare());*/
