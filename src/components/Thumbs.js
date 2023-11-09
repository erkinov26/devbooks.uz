import React from "react";

export default function Thumbs({ filterByType, setThumbItem, thumbItem }) {
  return (
    <ul className="thumb-box">
      <li
        className={`thumb-item ${thumbItem === 0 ? "active" : ""}`}
        onClick={() => {
          filterByType("Temuriylar");
          setThumbItem(0);
        }}
      ></li>
      <li
        className={`thumb-item ${thumbItem === 1 ? "active" : ""}`}
        onClick={() => {
          filterByType("Jadid");
          setThumbItem(1);
        }}
      ></li>
      <li
        className={`thumb-item ${thumbItem === 2 ? "active" : ""}`}
        onClick={() => {
          filterByType("Sovet");
          setThumbItem(2);
        }}
      ></li>
      <li
        className={`thumb-item ${thumbItem === 3 ? "active" : ""}`}
        onClick={() => {
          filterByType("Mustaqillik");
          setThumbItem(3);
        }}
      ></li>
    </ul>
  );
}
