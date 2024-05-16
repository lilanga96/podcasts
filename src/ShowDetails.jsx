import React from 'react'
import { fetchShowById } from "./API"
import { Link, useParams } from "react-router-dom"
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



function ShowDetails() {

    const [show, setShow] = useState([])

    let navigate = useNavigate()


    const { id } = useParams();
  
  
    useEffect(() => {
      fetchShowData();
     }, []);
  
     const fetchShowData = async () => {
       try {
         const response = await fetchShowById(id);
         const data = response.data;
        setShow(data);
       console.log(data)
       } catch (error) {
         console.log('Error fetching show details:', error);
       }
     };


  return (
    <div>
       <h1>hello {id}</h1>
       <h2>{show.title}</h2>
       <hr></hr>
       {show.description}
       <div className='container'>
       {show.seasons && show.seasons.map(season =>{
        return <div key={season.season}>
            <div className='card-container'>
            <Link to = {`/season-details/${season.season}`}> <img className='card-image' src = {season.image} /></Link>
            <h5 className='card-title'>{season.title}</h5>
            <Link to={`/show/${id}/season/${season.season}`}><button>View Episodes</button></Link>
         </div>
    
        </div>
       })}
        </div>
        <button onClick={()=>navigate('/')}>BACK TO HOMEPAGE</button>
        </div>
  )
}

export default ShowDetails