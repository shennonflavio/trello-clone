import React,{useState} from 'react';
import '../Styles/index.css';
import { Link } from 'react-router-dom';


function Index() {

    const [inputEmail, setInputEmail] = useState('');

    const emailSign = e =>{
        setInputEmail(e.target.value);
        console.log(inputEmail);
    }

    const handleSignUp=()=>{
        console.log(inputEmail);

    }

    return(
          <>
          <div className="indexBox">
              <div className="form">
                  <h3>Lorem Ipsum</h3>
          <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nulla nesciunt accusamus placeat sint 
              suscipit alias, doloremque incidunt non repellat! Quasi ullam ab rem odio earum distinctio nobis, quos 
              eaque!</h5>
          <input onChange={emailSign} className="inputIndex" placeholder="Digite seu e-mail" type="email" value={inputEmail}/>
          <Link onClick={handleSignUp}className="linkIndex" to="/Signup2"><button  className="btn">Cadastre-se Gratuitamente</button></Link>
              </div>
               

          <div className="img"></div>
         
          </div>
         

          </>
    );
}

export default Index;