import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Search({ data }) {
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

    return (
        <div>
            <input type="text" placeholder="Search..." value={searchQuery} onChange={handleSearchChange} />
            {isLoading ? (
                <div>Loading...</div>
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
        </div>
    );
}

export default Search;
