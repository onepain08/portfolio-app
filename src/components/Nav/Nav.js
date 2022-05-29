import React from "react";
import './Nav.css';
import toggleHamburger from 'react-icons'

function Nav(){
    
    const [menuState, setMenuState] = React.useState(false)
    
    function toggleMenu(){
        setMenuState((prevMenuState)=> !prevMenuState)
    }

    return(
        <div className="nav">
            <div className="logo">
                <h2>Ariel</h2>
                <h2>Tolwinski</h2>
            </div>
                <button className="toggle-menu-btn" onClick={toggleMenu}>M</button>
            <ul className={menuState ? 'menu-open' : 'menu-closed'}>
                <a href="#home"><li>Home</li></a>
                <a href="#about"><li>About</li></a>
                <a href="#projects"><li>Projects</li></a>
                <a href="#Comments"><li>Comments</li></a>
            </ul>
        </div>
    )
}

export default Nav;
