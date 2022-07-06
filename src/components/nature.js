import React, { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../db/db";
import usePagination from "../pagination/pagination";



function Nature() {
    const [data, setData] = useState([]);
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
      
    getData("Nature");
    
    return(
        <section className="full party">
            <h1>Przyroda</h1>
            <div className="container category_item_container">
                <div className="category_items">
                    {data.slice(firstContentIndex, lastContentIndex).map((d, index) => {
                        return(                           
                            <div style={{backgroundImage:`url(${d.data.img})`}} key={index} className="category_item">
                                {/* <img src={d.data.img} alt="chelm category img"></img> */}
                            </div>
                        )
                    })}
                </div>
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
                            className={`arr ${page === 8 ? 'active' : ''}`}
                            disabled={page === totalPage}
                        >
                            &rarr;
                        </button>
                    </div>
            </div>
            </div>
        </section>
    )
}

export default Nature;