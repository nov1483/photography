import React, { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../db/db";


function Party() {
    const [data, setData] = useState([]);


    async function getData(){
        if (data.length === 0) {
          if (localStorage.getItem('party')) {
              setData([...JSON.parse(localStorage.getItem('party'))]) 
          }else{
            const doc = await getDocs(collection(db, "Party"))
            let dataDb = [];
            doc.forEach(d => {
                dataDb.push({
                  id : d.id,
                  data : d.data(),
                });
                console.log(dataDb)
              });
            if(data.length === 0){
              localStorage.setItem('party', JSON.stringify(dataDb));
              setData(dataDb);
            };
        
            };
        } 
        
      }
      
    getData();
    
    return(
        <section className="full party">
            <h1>Uroczystości i Imprezy</h1>
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

export default Party;