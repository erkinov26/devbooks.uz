import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Search from "../components/Search";
import Cards from "../components/Cards";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

export default function BoshSahifa({
  data,
  setOpen,
  open,
  currentUserImg,
  setCurrentUserImg,
  access,
  setAccess,
}) {
  const [filteredAuthors, setFilteredAuthors] = useState(data);
  const [searchText, setSearchText] = useState("");
  const [literatureOpen, setLiteratureOpen] = useState(false);
  const [thumbItem, setThumbItem] = useState(0);

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
      <Header
        access={access}
        setAccess={setAccess}
        setOpen={setOpen}
        currentUserImg={currentUserImg}
        setCurrentUserImg={setCurrentUserImg}
      />
      <SideBar open={open} setOpen={setOpen} />
      <HeroSection
        thumbItem={thumbItem}
        setThumbItem={setThumbItem}
        filterByType={filterByType}
      />
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
            <i className="bx bx-chevron-up"></i>
          ) : (
            <i className="bx bx-chevron-down"></i>
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
          onClick={() => {
            filterByType("Temuriylar");
            setThumbItem(0);
          }}
        >
          Temuriylar Adabiyoti
        </li>
        <li
          className="literature-nav-item"
          onClick={() => {
            filterByType("Jadid");
            setThumbItem(1);
          }}
        >
          Jadid adabiyoti
        </li>
        <li
          className="literature-nav-item"
          onClick={() => {
            filterByType("Sovet");
            setThumbItem(2);
          }}
        >
          Sovet davri
        </li>
        <li
          className="literature-nav-item"
          onClick={() => {
            filterByType("Mustaqillik");
            setThumbItem(3);
          }}
        >
          Mustaqillik Davri
        </li>
      </ul>

      <Cards data={filteredAndSearchedAuthors} access={access} />
    </>
  );
}
