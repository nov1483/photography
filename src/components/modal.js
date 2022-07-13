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
                    <div className='arrow arrow_right'>
                            <button onClick={handleRotationRight}>
                            <BsFillArrowRightSquareFill />
                            </button>
                        </div>
                        <div  className='arrow arrow_left'>
                            <button onClick={handleRotationLeft}>
                                <BsFillArrowLeftSquareFill/>
                            </button>
                        </div>
                    <div className="modal_img">
                        <img src={clickedImg} alt='Category'/>
                        <span className='dismiss' onClick={handleClick}>X</span>  
                    </div>
                    
                </div>
        </>
}

export default Modal;