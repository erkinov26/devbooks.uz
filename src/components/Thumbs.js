import React, { useState, useEffect } from "react";

export default function Thumbs({ thumbItem }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % thumbItem);
    }, 5000);

    return () => clearInterval(intervalId); // Clear the interval on component unmount

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [thumbItem]);

  const thumbsArray = Array.from({ length: 4 });

  return (
    <ul className="thumb-box">
      {thumbsArray.map((_, index) => (
        <li key={index} className={`thumb-item ${index === activeIndex ? "active" : ""}`}></li>
      ))}
    </ul>
  );
}
