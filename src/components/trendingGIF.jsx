import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'CQ4jUWnYsaX3DnV1r4ihtdbHVz74LUF4';
const TRENDING_API_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`;

function TrendGifs() {
    const [trendGifs, setTrendGifs] = useState([]);

    useEffect(() => {
        fetchTrendGifs();
    }, []);

    const fetchTrendGifs = async () => {
        try {
            const response = await axios.get(TRENDING_API_URL);
            setTrendGifs(response.data.data);
        } catch (error) {
            console.error('Error fetching trending gifs:', error);
        }
    };

    return (
        <div className="trending-gifs">
            <div className="gif-container">
                <h2>Trending GIFs</h2>
                {trendGifs.map((gif) => (
                    <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
                ))}
            </div>
        </div>
    );
}

export default TrendGifs;