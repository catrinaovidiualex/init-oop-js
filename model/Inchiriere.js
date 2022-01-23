class Inchiriere{
    constructor(idInchiere,idMasina,idPersoana,createdate){
        this.idInchiere=idInchiere;
        this.idMasina=idMasina;
        this.idPersoana=idPersoana;
        this.createdate=createdate;
    }

    descriereInchiriere=()=>{
        let descriereInch="";
        descriereInch+=" ID inchiriere: "+this.idInchiere+",";
        descriereInch+=" ID masina: "+this.idMasina+",";
        descriereInch+=" ID persoana: "+this.idPersoana+",";
        descriereInch+=" Data inchiriere: "+this.createdate;
        return descriereInch;

        }
    }

    export default Inchiriere;