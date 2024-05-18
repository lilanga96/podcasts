import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import H5AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import supabase from './Components/Supabase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const SeasonDetails = () => {
  const [season, setSeason] = useState(null);
  const { id, seasonNumber } = useParams();
  const [favorites, setFavorites] = useState({});
  
  let navigate = useNavigate()

  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${id}`)
      .then((response) => response.json())
      .then((showData) => {
        const selectedSeason = showData.seasons.find((seasonData) => seasonData.season === parseInt(seasonNumber));
        setSeason(selectedSeason);
      })
      .catch((error) => {
        console.error('Error fetching season episodes:', error);
      });
  }, [id, seasonNumber]);

  const toggleFavorite = (episodeTitle) => {
    setFavorites(prevFavorites => ({
      ...prevFavorites,
      [episodeTitle]: !prevFavorites[episodeTitle]
    }));
  };

  const createFavorites = async (episode) => {
    await supabase
      .from('Favorites')
      .insert({ title: episode.title, episode: episode.episode, file: episode.file });
  };

  const handleHeartClick = (episode) => {
    createFavorites(episode);
    toggleFavorite(episode.title);
  };

  if (!season) {
    return <div className='loading'>Loading...</div>;
  }

  return (
    <div>
      <h2 className='seasonTitle'>{season.title}</h2>
      <div className='episode-cards-container'>
        {season.episodes.map((episode) => (
          <div className='episode-card' key={episode.title}>
            <h3>{episode.title}</h3>
            <p>Episode: {episode.episode}</p>
            <H5AudioPlayer autoPlay={false} src={episode.file} onPlay={(e) => console.log('Audio is playing')} />
            <button onClick={() => handleHeartClick(episode)}>
              <FontAwesomeIcon icon={faHeart} style={{ color: favorites[episode.title] ? 'red' : 'gray' }} />
            </button>
          </div>
        ))}
      </div>
    
        <button onClick={() => navigate("/")} className='button btn2'>Back to Show Details</button>
    </div>
  );
};

export default SeasonDetails;
