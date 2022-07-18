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
                        <li><Link to="/" onClick={() => window.scrollTo(0,0)}>Strona główna</Link></li>
                        <li><Link to="/about" onClick={() => window.scrollTo(0,0)}>O Mnie</Link></li>
                        <li><Link to="/galery" onClick={() => window.scrollTo(0,0)}>Portfolio</Link></li>
                        <li><Link to="/contact" onClick={() => window.scrollTo(0,0)}>Kontakt</Link></li>
                    </ul>
                </div> 
            </div>
           
        </footer>
    )
}

export default Footer;