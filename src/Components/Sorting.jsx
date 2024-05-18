import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Sorting({ data }) {
  // Convert object values into an array
  const initialDataArray = Object.values(data);

  const [myData, setMyData] = useState(initialDataArray);

  const sortAscending = () => {
    const sorted = [...myData].sort((a, b) => a.title.localeCompare(b.title));
    setMyData(sorted);
  };

  const sortDescending = () => {
    const sorted = [...myData].sort((a, b) => b.title.localeCompare(a.title));
    setMyData(sorted);
  };

  const handleSortChange = (e) => {
    if (e.target.value === 'ascending') {
      sortAscending();
    } else if (e.target.value === 'descending') {
      sortDescending();
    }
  };

  return (
    <div>
      <select onChange={handleSortChange}>
        <option value="ascending">A-Z</option>
        <option value="descending">Z-A</option>
      </select>
      <div className="container">
        {myData.map(show => (
          <div className='cards-container' key={show.id}>
            <li>
              <Link to = {'/show-details/'+ show.id}><img className='card-image' src={show.image} alt={show.title} /></Link>
              <div className='card-title'>{show.title}</div>
              <div className='card-title'>Seasons: {show.seasons}</div>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sorting;
