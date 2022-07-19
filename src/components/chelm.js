import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import Modal from "./modal";
import db from "../db/db";
import Spinner from "./spinner";
import "./spinner.css"



function Chelm() {
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [clickedImg, setClickedImg] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);
    
    const handleClick = (d, index) => {
        setClickedImg(d.data.img);
        setCurrentIndex(index);
    }
   
    const handleRotationRight = () => {
      
        const totalLength = data.length;
        if(currentIndex + 1 >= totalLength) {
            setCurrentIndex(0)
            const newUrl = data[0].data.img;
            setClickedImg(newUrl);  
            return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = data.filter((d) => {    
            return data.indexOf(d) === newIndex;  
        });
        const newItem = newUrl[0].data.img;
        setClickedImg(newItem);
        setCurrentIndex(newIndex); 
    }

    const handleRotationLeft = () => {
        const totalLength = data.length;
        if(currentIndex === 0) {
            setCurrentIndex(totalLength)
            const newUrl = data[totalLength - 1].data.img;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = data.filter((d) => {
            return data.indexOf(d) === newIndex;
            
        });
        const newItem = newUrl[0].data.img;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    }


    async function getData(category){
        if (data.length === 0) {
          if (localStorage.getItem(`${category}`)) {
              setData([...JSON.parse(localStorage.getItem(`${category}`))]) 
          }else{
            const doc = await getDocs(collection(db, `${category}`))
            let dataDb = [];
            doc.forEach(d => {
                dataDb.push({
                  id : d.id,
                  data : d.data(),
                });
              });
            if(data.length === 0){
              localStorage.setItem(`${category}`, JSON.stringify(dataDb));
              setData(dataDb);
            };
        
            };
        } 
        
      }
      
    getData("Chelm");
    
  useEffect(() => {
        setLoaded(true);
    }, [])
   if(!loaded) {
    return (
        
        <Spinner/>
    )
   }

    return(
        <section className="full chelm">
            
            <div className="container category_item_container">
                <h1>Chełm Niczym Prypeć </h1>
                <div className="category_items">
                 
                    {data.map((d, index) => {
                        return(                           
                            <div style={{backgroundImage:`url(${d.data.img})`}} key={index} onClick={() => handleClick(d, index) } className="category_item">
                                    
                            </div>
                        )
                    })}
                </div>
            </div> 
           
             {clickedImg && (
                    <Modal clickedImg={clickedImg} handleRotationRight={handleRotationRight} setClickedImg={setClickedImg} handleRotationLeft={handleRotationLeft} />
                )}
        </section>
    )
}

export default Chelm;