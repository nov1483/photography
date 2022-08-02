import React from "react";
import { Link } from "react-router-dom";
import promoImg from "../img/promoImg1.png";
import work from "../img/work.jpg";
import work1 from "../img/work1.jpeg";
import home1 from "../img/homeimg1.jpg";
import home2 from "../img/homeimg2.jpg";
import home3 from "../img/homeimg3.jpg";
import "./home.css"
import BtnTop from "./toTop";

function Home() {

    return(
        <section className="full">
            <BtnTop />
            <div className="container home_container">
                <div className="promo_block">
                    <div className="promo_img">
                        <img src={promoImg} width='270px' height='400px' alt='Oops'></img>
                    </div>
                    <div className="promo_content">
                        <div className="word">"Które z moich zdjęć jest moim ulubionym?<br/>To, które zrobię jutro"<br/>-Imogen Cunningham.</div>
                        <Link to="/galery" onClick={() => window.scrollTo(0,0)}>Zobacz Portfolio</Link>
                    </div>
                </div>
                <div className="last_work">
                    <div className="work">
                        <div className="work_container">
                            <div className="work_content">
                                <div className="work_title">
                                    <h3>Ostatnie Prace</h3>
                                </div>
                                <p>Mój drugi w życiu wypad na rykowisko.<br/> Idąc kilka kilometrów w stronę, z której słychać było charakterystyczne Ryki natrafiłem na trzcinowisko. Na nim spotkałem kilka byków. Ten był jednym z największych.</p>
                            </div>
                            <div className="work_img_container">
                                <div className="work_img deer">
                                    <h4>Wypad na Rykowisko</h4>
                                    <img src={work} alt="work"></img>
                                </div>
                                <div className="img_content">
                                        <p>Arkadiusz Smolira</p>
                                        <p>25 Września, 2021</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="work">
                        <div className="work_container">
                                <div className="work_img_container">
                                    <div className="work_img hill">
                                        <img src={work1} alt="work1"></img>
                                        <h4>Kasprowy Wierch</h4>
                                    </div>
                                    <div className="img_content">
                                        <p>Arkadiusz Smolira</p>
                                        <p>13 Czerwca, 2022</p>
                                    </div>
                                </div>
                            <div className="work_content">
                                <p>Widok z Kasprowego Wierchu tuż przed zachodem słońca.<br/> Na szczęście miałem ze sobą mini statyw i kilka minut przed odjazdem ostatniej kolejki udało mi się zrobić to zdjęcie.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="services">
                    <div className="services_container">
                        <div className="services_content">
                            <h2>Usługi</h2>
                            <p>Jeżeli wynajęcie zawodowego fotografa jest dla Ciebie zbyt kosztowne, a jednak chciałbyś mieć w albumie piękne zdjęcia, ta oferta jest dla Ciebie:</p>
                            <ul>
                                <li>Sesje Plenerowe</li>
                                <li>Fotografia Okolicznościowa (chrzciny, urodziny, komunie, śluby, wieczory panieńskie)</li>
                                <li>Fotografia Wnętrz, nieruchomości na sprzedaż itp.</li>
                            </ul>
                            <p>Skontaktuj się ze mną żeby dowiedzieć się więcej.</p>
                            <Link to='/contact' onClick={() => window.scrollTo(0,0)}>Kontakty</Link>
                        </div>
                        <div className="services_img">
                            <img src={home1} alt='img'></img>
                            <img src={home2} alt='img'></img>
                            <img src={home3} alt='img'></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home;