import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage({ token, data }) {
  const [sortBy, setSortBy] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
       if (data && data.length > 0) {
          setIsLoading(false);
       }
   }, [data]);

   const handleSearchChange = (e) => {
       const value = e.target.value;
      setSearchQuery(value);

      if (data) {
          const filtered = data.filter(item =>
              item.title.toLowerCase().includes(value.toLowerCase())
          );
          setFilteredData(filtered);
      }
  };

 

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
      
    <div className='search-container'>
    <input id='searchInput' type="text" placeholder="Search..." value={searchQuery} onChange={handleSearchChange} />
    </div>
    { isLoading ? (
        <div className='loading'>Loading...</div>
    ) : ( 
        <div className='container'>
            {searchQuery !== '' && filteredData.length === 0 ? (
                <div>No results found.</div>
            ) : (
                filteredData.map(item => (
                    <div key={item.id} className='cards-container'>
                        <Link to={'/show-details/' + item.id}><img className='card-image' src={item.image} alt={item.title} /></Link>
                        <div className='card-title'> {item.title}</div>
                        <div className='card-image'> seasons: {item.seasons}</div>
                    </div>
                ))
            )}
        </div>
    )}
      <div className='search-container'>
      <div className='sortingBtns'>
      
        <button className='btn1' onClick={() => setSortBy('asc')}>Sort A-Z</button>
        <button className='btn2' onClick={() => setSortBy('desc')}>Sort Z-A</button>
      </div>
      </div>
      <div className="container">
    
        {sortShowsByTitle().map(show => (
          <div className='cards-container' key={show.id}>
            <li>
              <Link to={`/show-details/${show.id}`}>
                <img className='card-image' src={show.image} alt={show.title} />
              </Link>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
