import React, { useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import db from "../db/db";
import "./galery.css"

function Galery() {
    const [data, setData] = useState([]);
    // const [photos, setPhotos] = useState([]);

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
                <h1>Kategorii</h1>
                <div className="category">
                {data.map((d, id) => {
                    return(
                        <div key={id} className="category_card" >                          
                            {d.id === "rIGNtFNVGzz7kQM1vf90" ? <Link to='/galery/chelm'><img src={d.data.img} alt='img' crossOrigin="true"></img></Link> : ''}
                            {d.id === "1ukBR8khOU7OU47I7Ulv" ? <Link to='/galery/products'><img src={d.data.img} alt='img' crossOrigin="true"></img></Link> : ''}
                            {d.id === "ogINKkfeYgeGJr3mCIhO" ? <Link to='/galery/party'><img src={d.data.img} alt='img' crossOrigin="true"></img></Link> : ''}
                            {d.id === "m6jWbhQpFzmueBMxceB8" ? <Link to='/galery/church'><img src={d.data.img} alt='img' crossOrigin="true"></img></Link> : ''}
                            <div className="category_card_title">
                              {d.id === "rIGNtFNVGzz7kQM1vf90" ? <Link to='/galery/chelm'>{d.data.title}</Link> : ''} 
                              {d.id === "1ukBR8khOU7OU47I7Ulv" ? <Link to='/galery/products'>{d.data.title}</Link> : ''}
                              {d.id === "ogINKkfeYgeGJr3mCIhO" ? <Link to='/galery/party'>{d.data.title}</Link> : ''}
                              {d.id === "m6jWbhQpFzmueBMxceB8" ? <Link to='/galery/church'>{d.data.title}</Link> : ''}  
                            </div>                         
                        </div>
                    )
                })}
                </div>
            </div>
        </section>
    )
}
export default Galery;