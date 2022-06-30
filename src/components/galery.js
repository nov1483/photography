import React, { useState, useRef, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../db/db";
import "./galery.css"

function Galery() {
    const [data, setData] = useState([]);
    const [photos, setPhotos] = useState([]);

    async function getData(){
        if (data.length === 0) {
          if (localStorage.getItem('categories')) {
              setData([...JSON.parse(localStorage.getItem('categories'))]) 
          }else{
            const doc = await getDocs(collection(db, "Categories"))
            let dataDb = [];
            doc.forEach(d => {
                dataDb.push({
                  id : d.id,
                  data : d.data(),
                });
                console.log(dataDb)
              });
            if(data.length === 0){
              localStorage.setItem('categories', JSON.stringify(dataDb));
              setData(dataDb);
            };
        
            };
        } 
        
      }
      
    getData();
    console.log(data)

    
    return(
        <section className="full about">
            <div className="container galery_container">
                <h1>Galery</h1>
                <div className="category">
                {data.map((d, index) => {
                    return(
                        <div key={index} className="category_card">                          
                                <img src={d.data.img} alt='img' crossOrigin="true"></img>
                                <p >{d.data.title}</p>                          
                        </div>
                    )
                })}
                </div>
            </div>
        </section>
    )
}
export default Galery;