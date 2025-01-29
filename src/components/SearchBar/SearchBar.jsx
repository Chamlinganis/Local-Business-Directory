import React, { useState } from 'react';
import {Button} from "../ui/button"
import './SearchBar.css';

const SearchIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="search-icon"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`Searching for: ${query}`);
  };

  return (
    <form className={`search-bar ${isFocused ? 'focused' : ''}`} onSubmit={handleSearch}>
      <div className="search-container">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for businesses, categories, or locations..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="search-input"
        />
        <Button type="submit" variant={'outline'}>
          Search
        </Button>
      </div>
      {query && (
        <div className="search-suggestions">
          <div className="suggestion-category">
            Popular Categories
            <span className="suggestion-pill">Restaurants</span>
            <span className="suggestion-pill">Retail</span>
            <span className="suggestion-pill">Services</span>
          </div>
        </div>
      )}
    </form>
  );
};

export default SearchBar;