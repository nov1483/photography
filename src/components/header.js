import React, {useState} from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowDown } from 'react-icons/io';
import Popup from "./popup";
import PricePopup from "./pricePopup";
import logo from "../img/mini150.jpg"
import "./header.css"

function Header () {
    const location = useLocation();
    const [modalActive, setModalActive] = useState(false);
    const [priceActive, setPriceActive] = useState(false)
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
                                <li className="drop_menu"><Link to='/galery' className={location.pathname === '/galery' ? "active" : "disabled"}>Portfolio <IoIosArrowDown/></Link>
                                    <ul className="sub_menu">
                                        <li><Link to='galery/products'>Fotografia Produktowa</Link></li>
                                        <li><Link to='galery/people'>Ludzie Świata</Link></li>
                                        <li><Link to='galery/places'>Miejsca Na Świecie</Link></li>
                                        <li><Link to='galery/portret'>Portret</Link></li>
                                        <li><Link to='galery/nature'>Przyroda</Link></li>
                                        <li><Link to='galery/kids'>Sesje Dziecięce</Link></li>
                                        <li><Link to='galery/church'>Śladami Architektury Cerkiewnej</Link></li>
                                        <li><Link to='galery/party'>Uroczystości i Imprezy</Link></li>
                                        <li><Link to='galery/chelm'>Chełm Niczym Prypeć</Link></li>
                                        <li><Link to='galery/airplane'>W Chmurach</Link></li>
                                        
                                    </ul>
                                </li>
                                <li><button className='rules' onClick={() => setModalActive(true)}>Regulamin</button></li>
                                <li><button className='rules' onClick={() => setPriceActive(true)}>Cennik</button></li>
                                <li><Link to='/contact' className={location.pathname === '/contact' ? "active" : "disabled"}>Kontakt</Link></li>
                            </ul>
                        </nav>
                        <Popup active={modalActive} setActive={setModalActive} />
                        <PricePopup active={priceActive} setActive={setPriceActive} />
                    </div>
                </div>
            </header>
    )
}

export default Header;