import React from 'react';
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <>
            <nav className="navbar bg-white navbar-transparent">
                <div className="container">
                     <h2><li><Link to="/">Trello Clone</Link></li></h2>
                <ul>
               
                     
                     <li ><Link to="/Login">Login</Link></li>
                     <li className="sign" ><Link to="/Signup2">Cadastre-se</Link></li> 
                    
                     
                </ul>
                </div>
               
            </nav>
        </>
    );
}

export default Navbar;