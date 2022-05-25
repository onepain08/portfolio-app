import React from "react";
import './Nav.css';

function Nav(){
    return(
        <div className="nav">
            <div className="logo">
                <h2>Ariel</h2>
                <h2>Tolwinski</h2>
            </div>
            <ul>
                <a href="#home"><li>Home</li></a>
                <a href="#about"><li>About</li></a>
                <a href="#projects"><li>Projects</li></a>
                <a href="#Comments"><li>Comments</li></a>
            </ul>
        </div>
    )
}

export default Nav;
