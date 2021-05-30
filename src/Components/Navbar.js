import React from 'react';
import '../Styles/Navbar.css';
import { Link, useHistory } from 'react-router-dom';

function Navbar() {


    const history = useHistory();
    console.log(history);

    return(
        <>
            <nav className="navbar bg-white navbar-transparent">
                <div className="container">
                     <h2><li><Link to="/">Trello Clone</Link></li></h2>
                <ul> 
                     <li ><Link to="/Login">Login</Link></li>
                     <Link to={{pathname:"/Signup", state:{}}}><li className="sign" >Cadastre-se</li> </Link>
                </ul>
                </div>
               
            </nav>
        </>
    );
}

export default Navbar;