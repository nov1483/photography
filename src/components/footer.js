import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/mini150.jpg"
import "./footer.css"

function Footer () {
    return(
        <footer className="full footer">
            <div className="container footer_container">
                <div className="footer_logo">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="footer_menu">
                    <h3>Menu</h3>
                    <ul>
                        <li><Link to="/">Strona główna</Link></li>
                        <li><Link to="/about">O Mnie</Link></li>
                        <li><Link to="/galery">Portfolio</Link></li>
                        <li><Link to="/contacts">Kontakt</Link></li>
                    </ul>
                </div> 
            </div>
           
        </footer>
    )
}

export default Footer;