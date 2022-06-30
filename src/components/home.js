import React from "react";
import { Link } from "react-router-dom";
import servicesImg from "../img/servicesImg.jpg"
import promoImg from "../img/promoImg1.png"
import work from "../img/work.jpg"
import work1 from "../img/work1.jpg"
import "./home.css"

function Home() {
    return(
        <section className="full">
            <div className="container home_container">
                <div className="promo_block">
                    <div className="promo_img">
                        <img src={promoImg} width='270px' height='400px' alt='Oops'></img>
                    </div>
                    <div className="promo_content">
                        <h2>Gotowy,<br/> abyś wyglądał radośnie <br/> dzięki fotografii.</h2>
                        <Link to="/galery">Zobacz Portfolio</Link>
                    </div>
                </div>
                <div className="last_work">
                    <div className="work">
                        <div className="work_container">
                            <div className="work_content">
                                <div className="work_title">
                                    <h3>Ostatnie Pracy</h3>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Laoreet habitant facilisis sapien massa duis.<br/> Consequat, vitae elit pellentesque.</p>
                            </div>
                            <div className="work_img_container">
                                <div className="work_img">
                                    <h4>Zdjęcie</h4>
                                    <img src={work} width='390px' height='400px' alt="work image"></img>
                                </div>
                                <div className="img_content">
                                        <p>Arkadiusz Smolira</p>
                                        <p>13 Czerwca, 2022</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="work">
                        <div className="work_container">
                                <div className="work_img_container">
                                    <div className="work_img">
                                        <img src={work1} width='690px' height='400px' alt="work1 image"></img>
                                        <h4>Zdjęcie 1</h4>
                                    </div>
                                    <div className="img_content">
                                        <p>Arkadiusz Smolira</p>
                                        <p>13 Czerwca, 2022</p>
                                    </div>
                                </div>
                            <div className="work_content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Laoreet habitant facilisis sapien massa duis.<br/> Consequat, vitae elit pellentesque.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="services">
                    <div className="services_container">
                        <div className="services_content">
                            <h2>Usługi</h2>
                            <p>Jeżeli wynajęcie zawodowego fotografa jest dla Ciebie zbyt kosztowne,<br/> a jednak chciałbyś mieć w albumie piękne zdjęcia,<br/> ta oferta jest dla Ciebie:</p>
                            <ul>
                                <li>Sesje Plenerowe</li>
                                <li>Fotografia Okolicznościowa (chrzciny, urodziny, komunie, śluby, wieczory panieńskie)</li>
                                <li>Fotografia Wnętrz, nieruchomości na sprzedaż itp.</li>
                            </ul>
                            <p>Skontaktuj się ze mną żeby dowiedzieć się więcej.</p>
                            <Link to='/contact'>Kontakty</Link>
                        </div>
                        <div className="services_img">
                            <img src={servicesImg} alt='img'></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home;