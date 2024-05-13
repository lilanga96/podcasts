import React from 'react'
import supabase from './Components/Supabase'

function HomePage({ token, data }) {

    
   
   
  return (
    <div>  
        Welcome,{token.user && token.user.user_metadata.full_name}
        { <div className="container">
      {data.map(movie => (
        <div className='cards-container' key={movie.id}>
          <li>
            <img className='card-image' src={movie.image} alt={movie.title} />
            <div className='card-title'>{movie.title}</div>
            <div className='card-title'>Seasons: {movie.seasons}</div>
          </li>
        </div>
      ))}
    </div>}
    </div>
  )
}

export default HomePage