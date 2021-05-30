import React,{useState} from 'react';
import {useLocation} from 'react-router-dom';
import '../Styles/Signup.css';


 



function Signup(){

    const location =  useLocation();
    console.log(location);
   

   const [inputEmail, setInputEmail]= useState(location.state.inputSignEmail);
   const [inputName, setInputName] = useState ();
   const [inputPassword, setInputPassword]=useState();

   const SignEmail = e =>{
    
     setInputEmail(e.target.value);
    
       console.log(inputEmail);
   } 

   const  signName = e =>{
        setInputName(e.target.value);
        console.log(inputName);
   }

   const signPass = e =>{
       setInputPassword(e.target.value);
       console.log(inputPassword);
   }

   const handleClick = () =>{
       console.log(inputEmail,inputName,inputPassword);
       setInputEmail('');
       setInputName('');
       setInputPassword('')
   
   } 
  
   

    return(
<>
 <h1>Trello Clone</h1>
       <div className="index2">
            <div className="svg1"></div>
           <div className="mainbox2" >
        <h6>Criar sua conta</h6>
        
        <input onChange={SignEmail}  name="user" id="email" type="email" placeholder="Insira o e-mail" value={inputEmail} />
        <input onChange={signName}  name="nome" type="text" placeholder="Digite seu nome" value={inputName}/>
        <input onChange={signPass} name="password" type="password" placeholder="Digite sua senha" value={inputPassword} />
        <button onClick={handleClick} type="submit"  >Continuar</button>
       </div>
        <div className="svg2"></div>
       </div>
       
</>
    );
}

export default Signup;