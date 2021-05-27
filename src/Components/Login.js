import React, {useState} from 'react';
import '../Styles/Login.css';

function initialState() {
    return{ user:'',password:''};
}


    
        


function Login() {
    const [values, setValues]= useState(initialState);


    function onChange(event) {
        const {value, name}= event.target;

        setValues({  
             ...values,
             [name]:value
            });
        }
    return(
        <>
        <h1>Trello Clone</h1>
        <div className="index">
        <div className="svg1"></div>
        <div className="mainbox">
        <h6>Fazer login </h6>
        <input onChange={onChange} name="user" type="email" placeholder="Insira o e-mail" value={values.user}/>
        <input onChange={onChange} name="password" type="password" placeholder="Inserir senha" value={values.password} /><br />
        <button className="btnLogin">Fazer login</button>
        </div>
        <div className="svg2"></div>
        </div>
        
        
        </>
    );
}

export default Login;