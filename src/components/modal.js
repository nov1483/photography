import React from "react";
import {BsFillArrowRightSquareFill} from 'react-icons/bs';
import {BsFillArrowLeftSquareFill} from 'react-icons/bs';
import './category.css'

const Modal = ({clickedImg, handleRotationRight, handleRotationLeft, setClickedImg}) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('dismiss')) {
            setClickedImg(null);
        }
    }

    return <>
                <div className="full overlay dismiss" onClick={handleClick}>
                    <div className="modal_img">
                        <img src={clickedImg} alt='Category'/>
                        <span className='dismiss' onClick={handleClick}>X</span>
                        <div onClick={handleRotationRight} className='arrow arrow_right'>
                            <BsFillArrowRightSquareFill/>
                        </div>
                        <div onClick={handleRotationLeft} className='arrow arrow_left'>
                            <BsFillArrowLeftSquareFill/>
                        </div>
                    </div>
                    
                </div>
        </>
}

export default Modal;