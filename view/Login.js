
import ControlPersoana from "../controller/ControlPersoana.js";
import Home from"./Home.js";
import Persoana from "../model/Persoana.js";


 export class Login{
    constructor(){

    this.pers= new Persoana();
    this.containerLogin=document.querySelector(".container");

    this.createPageLogin();
    this.userName=document.querySelector(".username");
    this.pass=document.querySelector(".password");
    this.btnLogin=document.querySelector(".butonLogare");
    
    this.btnLogin.addEventListener("click",this.checkUserInfo);
    this.controll = new ControlPersoana();
    
   

    }


    checkUserInfo=(e)=>{
               

        let sol=this.controll.checkUserDetails(this.userName.value,this.pass.value);

        
        if(sol.length>0)
        {
            alert("Logare cu succes!"+sol[0].user);
            new Home(sol[0]);   
        }
        else{
            alert("User sau parola gresita!");
        }
                    

        
       
    }


    createPageLogin(){

        this.containerLogin.innerHTML=`
        <div class="containerLogin">
        <h1>Login</h1>
        <form class="loginForm">
            <div class="textField">
                <label for="username">Username</label>
                <input type="text" mandatory class="username">
            </div>

            <div class="textField">
                <label for="password">Parola</label>
                <input type="text" mandatory class="password">
            </div>

            <div class="forgotPass">Ati uitat parola?<a href="">Modificare parola</a></div>
            <div class="signup_link"><a href="">Cont nou</a></div>

            <button  class="butonLogare">Login</button>

        </form>


    </div>
        
        `
        
    }

    


}

export default Login;