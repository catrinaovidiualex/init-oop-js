
class Masina{
       constructor(obj){
        this.pret=obj.pret;
        this.an=obj.an;
        this.marca=obj.an;
        this.id=obj.id;
        }

 /*fuctie pt descriere masina*/     
        descriere=()=>{
            let descriere="";
            descriere+=" Id Masina: "+this.id+",";
            descriere+=" Marca masina: "+this.marca+",";
            descriere+=" Pret masina: "+this.pret+",";
            descriere+=" An masina: "+this.an+";";
            
            return descriere;
        }

}





export default Masina;