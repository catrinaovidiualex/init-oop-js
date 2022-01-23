class Persoana{
    constructor(idPers, nume, prenume, varsta){
           this.idPers=idPers;
           this.nume=nume;
           this.prenume=prenume;
           this.varsta=varsta;
    }

    descrierePersoana=()=>{
           let descriereP="";
           descriereP+=" ID persoana: "+this.idPers+",";
           descriereP+=" Nume persoana: "+this.nume+",";
           descriereP+=" Prenume persoana: "+this.prenume+",";
           descriereP+=" Varsta persoana: "+this.varsta+";";


           return descriereP;
    }

}

export default Persoana;