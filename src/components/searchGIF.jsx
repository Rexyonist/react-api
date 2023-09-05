import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const API_KEY = 'CQ4jUWnYsaX3DnV1r4ihtdbHVz74LUF4';
const SEARCH_API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}`;

function SearchGifs() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchGifs, setSearchGifs] = useState([]);
    const [trendingGifs, setTrendingGifs] = useState([]);
    const [showTrending, setShowTrending] = useState(true);

    useEffect(() => {
        fetchTrendingGifs();
    }, []);

    const fetchTrendingGifs = async () => {
        try {
            const response = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`);
            setTrendingGifs(response.data.data);
        } catch (error) {
            console.error('Error fetching trending gifs:', error);
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault()
        try {
            if (searchTerm.trim() !== '') {
                const response = await axios.get(`${SEARCH_API_URL}&q=${searchTerm}`);
                setSearchGifs(response.data.data);
                setShowTrending(false);
            } else {
                setSearchGifs([]);
                setShowTrending(true);
            }
        } catch (error) {
            console.error('Error searching gifs:', error);
        }
    };

    return (
        <div className="search-gifs">
            <div className="search-container">
                <form className='input-src' onSubmit={handleSearch}>
                    <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='src-input' />
                    <button type="submit" className="src-icon-conta">
                        <FontAwesomeIcon icon={faSearch} className='btn-search'/>                
                    </button>
                </form>
            </div>
            {searchGifs.map((gif) => (
                <div className="gif-container" key={gif.id}>
                    <div>
                <img src={gif.images.fixed_height.url} alt={gif.title} />
                    </div>
                </div>
            ))}
            {showTrending && (       
                <div className="trend-gif" id='trend-gif2'>
                    <h3>Trending GIFs</h3>
                        <div className="gif-container" >
                        {trendingGifs.map((gif) => (
                            <div key={gif.i}>
                                <img src={gif.images.fixed_height.url} alt={gif.title} />
                            </div>
                        ))}
                        </div>
                </div>              
            )}
            </div>
    );
}

export default SearchGifs;
