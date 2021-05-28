import React, {useState} from 'react';
import '../Styles/Login.css';



function Login(){

    const [emailLogin, setEmailLogin]= useState();
    const [passwordLogin, setPasswordLogin]= useState();


    const inputEmailLogin =(e)=>{
        setEmailLogin(e.target.value)
        console.log(emailLogin)
        
    }

     const inputPasswordLogin =(e)=>{
        setPasswordLogin(e.target.value)
        console.log(passwordLogin)
        
    }

     const handleLoginButton =()=>{
        console.log(emailLogin, passwordLogin)
        
    }

 return(
                <>
                    <h1>Trello Clone</h1>
                    <div className="index">
                            <div className="svg1"></div>
                            <div className="mainbox">
                                <h6>Fazer login </h6>
                                <input onChange={inputEmailLogin}  name="user" type="email" placeholder="Insira o e-mail" value={emailLogin} />
                                <input onChange={inputPasswordLogin}  name="password" type="password" placeholder="Inserir senha" value={passwordLogin} /><br />
                                <button onClick={handleLoginButton} className="btnLogin">Fazer login</button>
                            </div>
                            <div className="svg2"></div>
                    </div>
                </>
            );
}

export default Login;