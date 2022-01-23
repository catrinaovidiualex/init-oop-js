
class Masina{
       constructor(marca ,pret ,an){
        this.pret=pret;
        this.an=an;
        this.marca=marca;
        }

 /*fuctie pt descriere masina*/     
        descriere=()=>{
            let descriere="";
            descriere+="Marca masina:"+this.marca;
            descriere+="Pret masina:"+this.pret;
            descriere+="An masina:"+this.an;

            return descriere;

        }



}