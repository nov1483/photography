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
                <h1>Kategorie</h1>
                <div className="category">
                {data.map((d, id) => {
                    return(
                        <div key={id} className="category_card" >                          
                            {d.id === "rIGNtFNVGzz7kQM1vf90" ? <Link to='/galery/chelm' onClick={() => window.scrollTo(0,0)}><img src={d.data.img} alt='img'></img></Link> : ''}
                            {d.id === "1ukBR8khOU7OU47I7Ulv" ? <Link to='/galery/products' onClick={() => window.scrollTo(0,0)}><img src={d.data.img} alt='img'></img></Link> : ''}
                            {d.id === "ogINKkfeYgeGJr3mCIhO" ? <Link to='/galery/party' onClick={() => window.scrollTo(0,0)}><img src={d.data.img} alt='img'></img></Link> : ''}
                            {d.id === "m6jWbhQpFzmueBMxceB8" ? <Link to='/galery/church' onClick={() => window.scrollTo(0,0)}><img src={d.data.img} alt='img'></img></Link> : ''}
                            {d.id === "iSegsQWmZMMQkBK2pCYH" ? <Link to='/galery/nature' onClick={() => window.scrollTo(0,0)}><img src={d.data.img} alt='img'></img></Link> : ''}
                            {d.id === "yY8bRrnBOcDa7ZzPXCLC" ? <Link to='/galery/airplane' onClick={() => window.scrollTo(0,0)}><img src={d.data.img} alt='img'></img></Link> : ''}
                            {d.id === "lZudqchOuA1fxN2UFUMm" ? <Link to='/galery/kids' onClick={() => window.scrollTo(0,0)}><img src={d.data.img} alt='img' ></img></Link> : ''}
                            {d.id === "2RYKz3EUMuf8tiVmoFW3" ? <Link to='/galery/people' onClick={() => window.scrollTo(0,0)}><img src={d.data.img} alt='img' ></img></Link> : ''}
                            {d.id === "4GgzgLQPMJbfQar8xHi3" ? <Link to='/galery/places' onClick={() => window.scrollTo(0,0)}><img src={d.data.img} alt='img'></img></Link> : ''}
                            {d.id === "WTNTM65ftLpKFuu24YKI" ? <Link to='/galery/portret' onClick={() => window.scrollTo(0,0)}><img src={d.data.img} alt='img'></img></Link> : ''}
                            <div className="category_card_title">
                              {d.id === "rIGNtFNVGzz7kQM1vf90" ? <Link to='/galery/chelm' onClick={() => window.scrollTo(0,0)}>{d.data.title}</Link> : ''} 
                              {d.id === "1ukBR8khOU7OU47I7Ulv" ? <Link to='/galery/products' onClick={() => window.scrollTo(0,0)}>{d.data.title}</Link> : ''}
                              {d.id === "ogINKkfeYgeGJr3mCIhO" ? <Link to='/galery/party' onClick={() => window.scrollTo(0,0)}>{d.data.title}</Link> : ''}
                              {d.id === "m6jWbhQpFzmueBMxceB8" ? <Link to='/galery/church' onClick={() => window.scrollTo(0,0)}>{d.data.title}</Link> : ''} 
                              {d.id === "iSegsQWmZMMQkBK2pCYH" ? <Link to='/galery/nature' onClick={() => window.scrollTo(0,0)}>{d.data.title}</Link> : ''}
                              {d.id === "yY8bRrnBOcDa7ZzPXCLC" ? <Link to='/galery/airplane' onClick={() => window.scrollTo(0,0)}>{d.data.title}</Link> : ''}
                              {d.id === "lZudqchOuA1fxN2UFUMm" ? <Link to='/galery/kids' onClick={() => window.scrollTo(0,0)}>{d.data.title}</Link> : ''}
                              {d.id === "2RYKz3EUMuf8tiVmoFW3" ? <Link to='/galery/people' onClick={() => window.scrollTo(0,0)}>{d.data.title}</Link> : ''}
                              {d.id === "4GgzgLQPMJbfQar8xHi3" ? <Link to='/galery/places' onClick={() => window.scrollTo(0,0)}>{d.data.title}</Link> : ''}
                              {d.id === "WTNTM65ftLpKFuu24YKI" ? <Link to='/galery/portret' onClick={() => window.scrollTo(0,0)}>{d.data.title}</Link> : ''}  
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