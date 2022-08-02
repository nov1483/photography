import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../img/about.jpg"
import "./about.css"
import BtnTop from "./toTop";

function About() {

    return(
        <section className="full about">
            <BtnTop />
            <div className="container about_container">
                <h1>Cześć, nazywam się Arkadiusz Smolira, jestem fotografem!</h1>
                <div className="about_wrapper">
                    <div className="about_img">
                        <img src={aboutImg} alt='about'></img>
                    </div>
                    <div className="about_content">
                        <p>Fotografią na poważnie interesuje się kilkanaście lat. Jestem założycielem Chełmskiego Klubu Fotografii Przyrodniczej, 
                        członkiem Związku Polskich Fotografów Przyrody.     
                        Posiadam wykształcenie kierunkowe - technik fotografii i multimediów, ukończyłem kurs fotografowania podczas celebracji liturgicznych.
                        Otrzymasz zdjęcia z pełnoklatkowego aparatu nowej generacji, obrobione cyfrowo, na ozdobnej płycie, dodatkowo galeria internetowa oraz możliwość wywołania odbitek. 
                        Przepisy regulujące działalność nierejestrowaną pozwalają mi na podpisanie umowy z klientem oraz wystawienie rachunku.
                        Z racji, że fotografia nie jest moim źródłem utrzymania, a jedynie pasją i hobby, cena za usługi jest dostępna dla każdej kieszeni. Jakość zdjęć nie odbiega zaś
                        znacząco od profesjonalnych ujęć.
                        </p>
                        <Link to="/galery" onClick={() => window.scrollTo(0,0)} >Portfolio</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;