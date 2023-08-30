import React, { useState } from 'react';
import './App.css';
import TrendGifs from './components/trendingGIF';
import SearchGifs from './components/searchGIF';

export default function App() {
  const [showSearch, setShowSearch] = useState(true);

  const handleTrendClick = () => {
    setShowSearch(false);
  };

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  return (
    <div className="App">
      <button onClick={handleTrendClick}>Trending</button>
      <button onClick={handleSearchClick}>Search</button>
      {showSearch ? <SearchGifs /> : <TrendGifs />}
    </div>
  );
}