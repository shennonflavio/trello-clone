import React from 'react';
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <>
            <nav className="navbar bg-light">
                <div className="container">
                     <h4>Trello Clone</h4>
                <ul>
                    <li ><Link to="/Home">Home</Link></li>
                     <li ><Link to="/Board">Board</Link></li>
                     
                </ul>
                </div>
               
            </nav>
        </>
    );
}

export default Navbar;