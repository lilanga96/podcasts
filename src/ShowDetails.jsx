import React from 'react'
import { fetchShowById } from "./API"
import { Link, useParams } from "react-router-dom"
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



function ShowDetails({token}) {

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

     function handleCancel(){
       navigate('/')
     }

     function handleSignIn(){
      navigate('/sign-in')
     }


  return (
    <div>
      {token ? (
       <>
      <h2 className='show-title'>{show.title}</h2>
       <p className='description'>{show.description}</p>
       <hr></hr>
       <div className='container-show'>
       {show.seasons && show.seasons.map(season =>{
        return <div key={season.season}>
            <div className='cards-container-show'>
            <Link to = {`/season-details/${season.season}`}> <img className='card-image-show' src = {season.image} /></Link>
            <small className='card-title-show card-title'>{season.title}</small>
            <Link to={`/show/${id}/season/${season.season}`}><button className='btn1 button'>View Episodes</button></Link> 
           
         </div>
        
        </div>
       })}
        </div>
         <button className='btn2' onClick={()=>navigate('/')}>BACK TO HOMEPAGE</button>
        </>
      ) : ( 
        <div className="modal-container">
          <div className="modal-content">
            <p className='modal-paaragraph'>Please sign in to continue.</p>
            <button className='modal-button btn3' onClick={handleSignIn}>Sign In</button>
            <button className='modal-button btn4' onClick={handleCancel}>Cancel</button>
          </div>
        </div>
  
        )
      }
        </div>
  )
}

export default ShowDetails