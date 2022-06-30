import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../img/mini150.jpg"
import "./header.css"

function Header () {
    const location = useLocation();

    return(
            <header className="full header">
                <div className="container container_header">
                    <div className="menu">
                        <div className="logo">
                            <Link to="/"><img src={logo} alt="logo"></img></Link>
                        </div>
                        <nav className="nav">
                            <ul>
                                <li><Link to='/' className={location.pathname === '/' ? "active" : "disabled"}>Strona główna</Link></li>
                                <li><Link to='/about' className={location.pathname === '/about' ? "active" : "disabled"}>O Mnie</Link></li>
                                <li><Link to='/galery' className={location.pathname === '/galery' ? "active" : "disabled"}>Portfolio</Link></li>
                                <li><Link to='/contact' className={location.pathname === '/contact' ? "active" : "disabled"}>Kontakt</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
    )
}

export default Header;