import React from "react";
import { ImMail4 } from 'react-icons/im';
import { FaFacebookSquare } from 'react-icons/fa';
import "./contacts.css"

function Contacts() {
    return(
        <section className="full contacts">
            <div className="full contacts_bg">
                <div className="container contacts_container">
                    <h1>Kontakty</h1>
                    <div className="contacts_content">
                        <div className="contacts_info">
                            <p>Chełm, Lubelskie, 22-100</p>
                            <p>Polska</p>
                        </div>

                        <div className="contacts_text">
                            <h3>Arkadiusz Smolira Fotografia</h3>
                            <p>E-mail:  a.smolira@gmail.com <a href="mailto:a.smolira@gmail.com?subject=Kontakt w sprawie fotografii" className="contacts_ico_gmail"><ImMail4/></a></p>  
                            <p>Facebook : <a href="https://www.facebook.com/arkadiuszsmolira" target="_blank" rel="noreferrer" className="ico_fb"><FaFacebookSquare/></a></p>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
export default Contacts;