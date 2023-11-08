import React from "react";

export default function Search({ filterBySearch, setSearchText }) {
  return (
    <div className="search-section">
      <h1 className="section-title">Qidirish</h1>
      <div className="input">
        <input
          onChange={(e) => {
            setSearchText(e.target.value);
            filterBySearch(e.target.value);
          }}
          type="text"
          placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
          className="search-input"
        />
        <button className="search-button">
          <i className="bx bx-search-alt-2"></i> Izlash
        </button>
      </div>
    </div>
  );
}
