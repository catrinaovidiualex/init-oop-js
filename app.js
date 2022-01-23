
import ControlMasina from "./controller/ControlMasina.js";
import Persoana from "./model/Persoana.js";


let cm=new ControlMasina();
cm.afisare();


let p1=new Persoana(1,"Popescu","Paul",44);
let p2=new Persoana(2,"Ionescu","Ana",22);
let p3=new Persoana(3,"Georgescu","Gina",31);
let p4=new Persoana(4,"Popa","Cristi",53);

localStorage.setItem("persoane",p1);


