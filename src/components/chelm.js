import React, { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../db/db";
import './category.css';


function Chelm() {
    const [data, setData] = useState([]);


    async function getData(){
        if (data.length === 0) {
          if (localStorage.getItem('chelm')) {
              setData([...JSON.parse(localStorage.getItem('chelm'))]) 
          }else{
            const doc = await getDocs(collection(db, "Chelm"))
            let dataDb = [];
            doc.forEach(d => {
                dataDb.push({
                  id : d.id,
                  data : d.data(),
                });
                console.log(dataDb)
              });
            if(data.length === 0){
              localStorage.setItem('chelm', JSON.stringify(dataDb));
              setData(dataDb);
            };
        
            };
        } 
        
      }
      
    getData();
    
    return(
        <section className="full chelm">
            <h1>Chełm Niczym Prypeć</h1>
            <div className="container category_item_container">
                <div className="category_items">
                    {data.map((d, index) => {
                        return(
                            
                                <div key={index} className="category_item">
                                    <img src={d.data.img} alt="chelm category img"></img>
                                </div>
                            
                        )
                    })}
                </div> 
            </div>
        </section>
    )
}

export default Chelm;