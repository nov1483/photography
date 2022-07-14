import React, { useState } from "react";
import "./pricePopup.css"

const PricePopup = ({active, setActive}) => {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if(selected === i) {
            return setSelected(null)
        };

        setSelected(i);
    }

    const priceData = [
    {
        item : "Sesje plenerowe ",
        price:  'od 120 zł'
    },

    {
        item : "Chrzest od ",
        price:  'od 220 zł'
    },

    {
        item : "Ślub cywilny ",
        price:  'od 180 zł'
    },

    {
        item : "Zdjęcia nieruchomości ",
        price:  'od 120 zł'
    },
        

    ]
    return (
        <div className={active ? "price modal active" : "price modal"} onClick={() => setActive(false)}>
            <div className="price modal_content" onClick={e => e.stopPropagation()}>
                <span className="close_modal" onClick={() => setActive(false)}>X</span>
                <h1>Cennik</h1>
                <div className="modal_text">
                    {priceData.map((item, id) => {
                        return(
                            <div key={id} className="accordion_item">
                                <div className="accordion_title" onClick={() => toggle(id)}>
                                    <h2>{item.item}</h2>
                                    <span className="accordion_wrap">{selected === id ? '-' : '+'}</span>
                                </div>
                                <div className={selected === id ? "accordion_price_show" : "accordion_price"}>
                                    <p>{item.price}</p>
                                </div>
                            </div>
                        )

                    })}
                    <div className="modal_btns">
                        <button className="close_btn" onClick={() => setActive(false)}>Zamknij</button>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PricePopup;