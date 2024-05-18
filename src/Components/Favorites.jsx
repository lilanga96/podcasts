import React from 'react'
import { useState, useEffect } from 'react'
import supabase from './Supabase'
import H5AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useNavigate } from 'react-router-dom';

function Favorites({token}) {
    const [favors, setFavors] = useState([])

    let navigate = useNavigate()

    useEffect(() =>{
        fetchFavorites()
    }, [])

    async function fetchFavorites(){
        const { data } = await supabase
        .from('Favorites')
        .select('*')
        setFavors(data)
    }

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
        <h1> Your favorites</h1>
        <div className='episode-cards-container'>
        { favors && favors.map(item =>{
            return <div className='episode-card' key={item.title}>
                <div>{item.title} </div>
                <div>{item.episode} </div>
                <H5AudioPlayer autoPlay={false} src={item.file} onPlay={(e) => console.log('Audio is playing')} />
            </div>
        })}
        </div>

        <button onClick={() => navigate('/')}>BACK TO HOMEPAGE</button>
</>
         ) : (
            <div className="modal-container">
            <div className="modal-content">
              <p>Please sign in to continue.</p>
              <button className='modal-button btn3' onClick={handleSignIn}>Sign In</button>
              <button className='modal-button btn4' onClick={handleCancel}>Cancel</button>
            </div>
          </div>
         )
    }
        </div>


  )
}

export default Favorites