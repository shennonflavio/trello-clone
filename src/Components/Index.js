import React,{useState} from 'react';
import '../Styles/index.css';
import {Link, useHistory} from 'react-router-dom';



function Index() {
    
  const history = useHistory();
   console.log(history);
    
    const [inputSignEmail, setInputEmail] = useState('');
    
    const emailSign = e =>{
        setInputEmail(e.target.value);
        console.log(inputSignEmail);
    }

    const handleSignUp=()=>{ 
       history.push({ })
        console.log(inputSignEmail);
    }
 
     
     


    

    return(
          <>
          <div className="indexBox">
              <div className="form">
                  <h3>Lorem Ipsum</h3>
          <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nulla nesciunt accusamus placeat sint 
              suscipit alias, doloremque incidunt non repellat! Quasi ullam ab rem odio earum distinctio nobis, quos 
              eaque!</h5>
          <input onChange={emailSign} className="inputIndex" placeholder="Digite seu e-mail" type="email" value={inputSignEmail}/>
          <Link onClick={()=>{handleSignUp(inputSignEmail)}}className="linkIndex" to={{pathname:"/Signup", state:{inputSignEmail}}} ><button  className="btn">Cadastre-se Gratuitamente</button></Link>
              </div>
               

          <div className="img"></div>
         
          </div>
         
  
          </>
         
    );
   
}

export default Index;