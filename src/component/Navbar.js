import React from "react";
import logo from '../images/logo.svg';

function Navbar() {
    return(
        <nav>
            <img src={logo} alt="logo" width={"100px"} />
            <h3 className="nav_text">ReactFacts</h3>
            <h4 className="projectNo">React Course - project 1</h4>
        </nav>
    );
}

export default Navbar;