import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from 'react-icons/io';
import './toTop.css'

function BtnTop() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100){
                setShow(true);
            }else { setShow(false) }
        })
}, [])
    return(
        <div className="btn-top">
            {show && (
                <button onClick={() => window.scrollTo(0,0)}><IoIosArrowUp /></button>
            )}
        </div>
    )
}

export default BtnTop;