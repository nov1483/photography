import React, {useState} from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { ImMail4 } from 'react-icons/im';
import Popup from "./popup";
import PricePopup from "./pricePopup";
import logo from "../img/mini150.jpg"
import "./header.css"

function Header () {
    const location = useLocation();
    const [modalActive, setModalActive] = useState(false);
    const [priceActive, setPriceActive] = useState(false);
    const [check, setCheck] = useState(false);
    const [selected, setSelected] = useState(false);

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
                        <div className="burger">
                            <div className="home_link">
                                <Link to='/'><AiOutlineHome /></Link>
                            </div>
                            <input type="checkbox" checked={check} onChange={() => setCheck(!check)} className="burger__check" id="burger-check" />
                            <label htmlFor="burger-check">
                                <span></span>
                            </label>
                            <nav className="burger-nav">
                            <ul className="burger_menu">
                                    <li><Link to='/' checked={check} 
                                            onClick={() => {setCheck(!check); window.scrollTo(0,0);}} 
                                            className={location.pathname === '/' ? "active" : "disabled" }>
                                            Strona główna</Link>
                                    </li>
                                    <li><Link to='/about' checked={check} 
                                        onClick={() => {setCheck(!check); window.scrollTo(0,0);}} 
                                        className={location.pathname === '/about' ? "active" : "disabled"}>
                                            O Mnie</Link>
                                    </li>
                                    <li className={location.pathname === '/galery' ? "burger_accordion_menu active" : "burger_accordion_menu"} 
                                        onClick={() => !selected ? setSelected(true): setSelected(false)} 
                                        >Portfolio {selected? <IoIosArrowUp />:<IoIosArrowDown/>}
                                    
                                        <ul className={selected? "burger_sub_menu sub_menu_active" : "burger_sub_menu sub_menu_disabled"}>
                                            <li><Link to='galery' 
                                                className={location.pathname === '/galery' ? "active" : "disabled" } 
                                                checked={check} 
                                                onClick={() => {setCheck(!check); window.scrollTo(0,0);}}>Portfolio</Link>
                                            </li>
                                            <li><Link to='galery/products' 
                                                className={location.pathname === '/galery/products' ? "active" : "disabled" } 
                                                checked={check} 
                                                onClick={() => {setCheck(!check); window.scrollTo(0,0);}}>Fotografia Produktowa</Link>
                                            </li>
                                            <li><Link to='galery/people' 
                                                className={location.pathname === '/galery/people' ? "active" : "disabled" } 
                                                checked={check} 
                                                onClick={() => {setCheck(!check); window.scrollTo(0,0);}}>Ludzie Świata</Link>
                                            </li>
                                            <li><Link to='galery/places' 
                                                className={location.pathname === '/galery/places' ? "active" : "disabled" } 
                                                checked={check} 
                                                onClick={() => {setCheck(!check); window.scrollTo(0,0);}}>Miejsca Na Świecie</Link>
                                            </li>
                                            <li><Link to='galery/portret' 
                                                className={location.pathname === '/galery/portret' ? "active" : "disabled" } 
                                                checked={check} 
                                                onClick={() => {setCheck(!check); window.scrollTo(0,0);}}>Portret</Link>
                                            </li>
                                            <li><Link to='galery/nature' 
                                                className={location.pathname === '/galery/nature' ? "active" : "disabled" } 
                                                checked={check} 
                                                onClick={() => {setCheck(!check); window.scrollTo(0,0);}}>Przyroda</Link>
                                            </li>
                                            <li><Link to='galery/kids' 
                                                className={location.pathname === '/galery/kids' ? "active" : "disabled" } 
                                                checked={check} 
                                                onClick={() => {setCheck(!check); window.scrollTo(0,0);}}>Sesje Dziecięce</Link>
                                            </li>
                                            <li><Link to='galery/church' 
                                                className={location.pathname === '/galery/church' ? "active" : "disabled" } 
                                                checked={check} 
                                                onClick={() => {setCheck(!check); window.scrollTo(0,0);}}>Śladami Architektury Cerkiewnej</Link>
                                            </li>
                                            <li><Link to='galery/party' 
                                                className={location.pathname === '/galery/party' ? "active" : "disabled" } 
                                                checked={check}     
                                                onClick={() => {setCheck(!check); window.scrollTo(0,0);}}>Uroczystości i Imprezy</Link>
                                            </li>
                                            <li><Link to='galery/chelm' 
                                                className={location.pathname === '/galery/chelm' ? "active" : "disabled" } 
                                                checked={check} 
                                                onClick={() => {setCheck(!check); window.scrollTo(0,0);}}>Chełm Niczym Prypeć</Link>
                                            </li>
                                            <li><Link to='galery/airplane' 
                                                className={location.pathname === '/galery/airplane' ? "active" : "disabled" } 
                                                checked={check} 
                                                onClick={() => {setCheck(!check); window.scrollTo(0,0);}}>W Chmurach</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <button className={modalActive ? 'rules active' : 'rules'} checked={check} onClick={() => {setCheck(!check); window.scrollTo(0,0);setModalActive(true)}}>Regulamin</button>
                                    </li>
                                    <li>
                                        <button className={priceActive ? 'rules active' : 'rules'} checked={check} onClick={() => {setCheck(!check); window.scrollTo(0,0);setPriceActive(true)}}>Cennik</button>
                                    </li>
                                    <li><Link to='/contact' 
                                        checked={check} 
                                        onClick={() => {setCheck(!check); window.scrollTo(0,0);}} 
                                        className={location.pathname === '/contact' ? "active" : "disabled"}>Kontakt</Link>
                                    </li>
                                </ul>
                                <div className="burger_links">
                                    <a href="https://www.facebook.com/arkadiuszsmolira" target="_blank" rel="noreferrer" className="ico_fb"><FaFacebookSquare/></a>
                                    <a href="mailto:a.smolira@gmail.com?subject=Kontakt w sprawie fotografii" className="contacts_ico_gmail"><ImMail4/></a>
                                </div>
                            </nav>          
                        </div> 
                        <Popup active={modalActive} setActive={setModalActive} />
                        <PricePopup active={priceActive} setActive={setPriceActive} />
                    </div>
                </div>
            </header>
    )
}

export default Header;