import React from 'react'
import { Link } from 'react-router-dom'


function HomePage({ token, data }) {

    
   
   
  return (
    <div>  
        Welcome,{token.user && token.user.user_metadata.full_name}
        { <div className="container">
      {data.map(show => (
        <div className='cards-container' key={show.id}>
          <li>
            <Link to = {'/show-details/'+ show.id}><img className='card-image' src={show.image} alt={show.title} /></Link>
            <div className='card-title'>{show.title}</div>
            <div className='card-title'>Seasons: {show.seasons}</div>
          </li>
        </div>
      ))}
    </div>}
    </div>
  )
}

export default HomePage