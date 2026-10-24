import React, { useState } from "react";
import "../css/SearchBar.css";
import { CiSearch } from "react-icons/ci";

function SearchBar({ onSearch }) {
  const [inputCity, setInputCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputCity.trim() !== "") {
      onSearch(inputCity.trim());
      setInputCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="input-wrapper">
        <CiSearch className="search-icon" />
        <input
          className="search-input"
          placeholder="Enter a city name..."
          type="text"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
        />
      </div>
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
