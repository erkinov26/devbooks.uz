import React from "react";
// import img from "../../images/behbudiy.png";
export default function Cards({ data, setFakeData, fakeData, setData }) {
  return (
    <ul className="card-list">
      {data.map((item) => (
        <li key={item.id} className="card-item">
          <img src={item.image_src} alt={item.image_src} className="card-img" />
          <h3 className="card-name">{item.name}</h3>
          <p className="card-years">{item.livingYear}</p>
          <div className="books">
            <div>
              <i className="bx bxs-book"></i>
              <span className="book-number">{item.bookNumber}</span>
            </div>
            <div>
              <i className="bx bx-headphone"></i>
              <span className="audioBook">{item.audioBook}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
