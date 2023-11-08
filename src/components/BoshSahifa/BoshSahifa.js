import React, { useState } from "react";
import HeroSection from "./HeroSection";
import Search from "./Search";
import Cards from "./Cards";

export default function BoshSahifa({ data, setData }) {
  const [filteredAuthors, setFilteredAuthors] = useState(data);
  const [searchText, setSearchText] = useState("");
  const [literatureOpen, setLiteratureOpen] = useState(false);
  const filterByType = (type) => {
    const filteredAuthors = data.filter((author) => author.type === type);
    setFilteredAuthors(filteredAuthors);
  };

  const filterBySearch = (searchTerm) => {
    const filteredAuthors = data.filter((author) => {
      return author.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredAuthors(filteredAuthors);
  };
  const filteredAndSearchedAuthors = filteredAuthors.filter((author) => {
    return author.name.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <>
      <HeroSection />
      <Search
        data={data}
        filterBySearch={filterBySearch}
        setSearchText={setSearchText}
      />
      <h1 className="section-title main-category-title">
        Asosiy kategoriyalar
        <button
          className="category-button"
          onClick={() => setLiteratureOpen(!literatureOpen)}
        >
          {literatureOpen ? (
            <i class="bx bx-chevron-up"></i>
          ) : (
            <i class="bx bx-chevron-down"></i>
          )}
        </button>
      </h1>
      <ul
        className={`literature-nav ${
          literatureOpen ? "literature-nav_open" : ""
        }`}
      >
        <li
          className="literature-nav-item"
          onClick={() => filterByType("Temuriylar")}
        >
          Temuriylar Adabiyoti
        </li>
        <li
          className="literature-nav-item"
          onClick={() => filterByType("Jadid")}
        >
          Jadid adabiyoti
        </li>
        <li
          className="literature-nav-item"
          onClick={() => filterByType("Sovet")}
        >
          Sovet davri
        </li>
        <li
          className="literature-nav-item"
          onClick={() => filterByType("Mustaqillik")}
        >
          Mustaqillik Davri
        </li>
      </ul>

      <Cards data={filteredAndSearchedAuthors} />
    </>
  );
}
