import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import Modal from "./modal";
import db from "../db/db";
import usePagination from "../pagination/pagination";
import Spinner from "./spinner";
import "./spinner.css"



function Portret() {
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [clickedImg, setClickedImg] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);
    const {
        totalPage,
        nextPage,
        prevPage,
        setPage,
        firstContentIndex,
        lastContentIndex,
        page,
    } = usePagination({
    contentPerPage: 12,
    count: data.length,
    })
   
    
    const handleClick = (d, index) => {
        setClickedImg(d.data.img);
        setCurrentIndex(index);
        console.log(index)
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
                console.log(dataDb)
              });
            if(data.length === 0){
              localStorage.setItem(`${category}`, JSON.stringify(dataDb));
              setData(dataDb);
            };
        
            };
        } 
        
      }
      
    getData("Portret");
    
  useEffect(() => {
        setLoaded(true);
    }, [])
   if(!loaded) {
    return (
        
        <Spinner/>
    )
   }

    return(
        <section className="full party">
            <h1>Portret</h1>
            <div className="container category_item_container">
                <div className="category_items">
                 
                    {data.slice(firstContentIndex, lastContentIndex).map((d, index) => {
                        return(                           
                            <div style={{backgroundImage:`url(${d.data.img})`}} key={index} onClick={() => handleClick(d, index) } className="category_item">
                                    
                            </div>
                        )
                    })}
                
                </div>
                {loaded &&(
                <div className="container pagintaion_container">
                    <div className="page_pagination">
                        <p className="text">
                            {page}/{totalPage}
                        </p>
                        <button
                            onClick={prevPage}
                            
                            className={`arr ${page === 1 ? 'active' : ''} `}
                            disabled={page === 1}
                        >
                            &larr;
                        </button>
                        {[...Array(totalPage).keys()].map(el => (
                            <button
                                onClick={() => {setPage(el + 1);window.scrollTo(0,0)}}
                                key={el.toString()}
                                className={`page ${page === el + 1 ? 'active' : ''}`}
                                disabled={page === el + 1}
                            >
                                {el + 1}
                            </button>

                        ))}
                        <button
                            onClick={nextPage}
                            className={`arr ${page === totalPage? 'active' : ''}`}
                            disabled={page === totalPage}
                        >
                            &rarr;
                        </button>
                    </div>
            </div>)}
            </div> 
           
             {clickedImg && (
                    <Modal clickedImg={clickedImg} handleRotationRight={handleRotationRight} setClickedImg={setClickedImg} handleRotationLeft={handleRotationLeft} />
                )}
        </section>
    )
}

export default Portret;