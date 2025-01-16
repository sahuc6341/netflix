import React, { useEffect,useRef, useState } from 'react'
import './TitleCards.css'
import { Link } from 'react-router-dom';


const TitleCards = ({title,category}) => {
   const [apiData, setApiData]=useState([]);
   const cardsRedf=useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTc0OTI2NTdkMzQ5ZGYxNjZjNmYzMjA0YjIwYWMzZCIsIm5iZiI6MTczNTc1MDA2MC4xMTAwMDAxLCJzdWIiOiI2Nzc1NzFhYzdkMWJjODdkZTc2MWQ2MDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.KM5m5pH1h8cFPElrxmdsp3vldxOEb-LWde5ES0mp9xw'
    }
  };
  
 
const handleWheel=(event)=>{
  event.preventDefault()
  cardsRedf.current.scrollLeft +=event.deltaY
}
useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
  

  cardsRedf.current.addEventListener('wheel',handleWheel)
},[])
  return (
    <div className='titlecards'>
        <h2>{title?title:"Popular on Netflix"}</h2>
        <div className='card-list'ref={cardsRedf}>
               {apiData.map((card,index)=>{
                return <Link to={`/player/${card.id}`} className='card' key={index}>
                    <img src={'https://image.tmdb.org/t/p/w500'+card.backdrop_path} alt="" />
                    <p>{card.original_title}</p>
                    </Link>
                
               })}
        </div>
    </div>
  )
}

export default TitleCards