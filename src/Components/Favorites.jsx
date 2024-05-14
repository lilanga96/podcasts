import React from 'react'
import { useState, useEffect } from 'react'
import supabase from './Supabase'
import H5AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function Favorites() {
    const [favors, setFavors] = useState([])

    useEffect(() =>{
        fetchFavorites()
    }, [])

    async function fetchFavorites(){
        const { data } = await supabase
        .from('Favorites')
        .select('*')
        setFavors(data)
    }

  return (
    <div>
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

        </div>
  )
}

export default Favorites