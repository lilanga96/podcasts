import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage({ token, data }) {
  const [sortBy, setSortBy] = useState('asc');

  const sortShowsByTitle = () => {
    const sortedData = [...data];
    sortedData.sort((a, b) => {
      if (sortBy === 'asc') {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
    return sortedData;
  };

  return (
    <div>  
      <div>
        Welcome, {token.user && token.user.user_metadata.full_name}
      </div>
      <div>
      
        <button onClick={() => setSortBy('asc')}>Sort A-Z</button>
        <button onClick={() => setSortBy('desc')}>Sort Z-A</button>
      </div>
      <div className="container">
    
        {sortShowsByTitle().map(show => (
          <div className='cards-container' key={show.id}>
            <li>
              <Link to={`/show-details/${show.id}`}>
                <img className='card-image' src={show.image} alt={show.title} />
              </Link>
              <div className='card-title'>{show.title}</div>
              <div className='card-title'>Seasons: {show.seasons}</div>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
