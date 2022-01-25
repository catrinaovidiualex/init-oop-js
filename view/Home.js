import ControllerMasini from "../controller/ControlMasina.js"

class Home{


     constructor(){

        this.container=document.querySelector(".container");

        this.createPage();

        this.controllMasini=new ControllerMasini();

        this.populateTable();

        this.addBtn=document.querySelector(".creeazaMasina");

        this.addBtn.addEventListener("click",this.handleclick);

     }


     createPage=()=>{

        this.container.innerHTML=`
        
        
        <h3>Masini</h3>
        <button class="creeazaMasina">Creeaza Masina</button>
        <table>
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Pret</th>
                    <th scope="col">An</th>
                 </tr>
    
            </thead>
    
            <tbody class="table">
               
    
               
            </tbody>
    
        </table>
        
        `

     }


     populateTable=()=>{


        let table=document.querySelector(".table");

        this.controllMasini.list.forEach((e)=>{

            table.innerHTML+=`
            <tr>
                <th scope="row">${e.id}</th>
                <td><a href "#">${e.marca}</a></td>
                <td>${e.pret}</td>
                <td>${e.an}</td>

              </tr>
    
    
    
            `
        })
     }


     handleclick=(e)=>{


        console.log("ceva");

     }
     


}




export default Home;