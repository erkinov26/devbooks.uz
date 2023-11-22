import React from "react";
import { useNavigate } from "react-router-dom";
// import img from "../../images/behbudiy.png";
export default function Cards({ data, access, setData }) {
  const navigate = useNavigate();
  return (
    <ul className="card-list">
      {data.map((item) => (
        <li
          key={item.id}
          className="card-item"
          onClick={() => {
            navigate(access ? "/" : "/SignIn");
          }}
        >
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
