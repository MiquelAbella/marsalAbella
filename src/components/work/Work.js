import React, { useState } from "react";
import "./work.css";

export const Work = ({ imgArr, textArr, link, background }) => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    if (counter < imgArr.length - 1) {
      setCounter((prevCounter) => prevCounter + 1);
    }
    if (counter === imgArr.length - 1) {
      setCounter(0);
    }
  };
  const handleDecrement = () => {
    if (counter > 0) {
      setCounter((prevCounter) => prevCounter - 1);
    }
    if (counter === 0) {
      setCounter(imgArr.length - 1);
    }
  };

  return (
    <div
      className="work-container"
      style={{
        background: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="carousel-container">
        <button className="arrow" onClick={handleDecrement}>
          &larr;
        </button>
        <div className="img-container">
          <img src={imgArr[counter]} />
          <h1>{textArr[counter]}</h1>
        </div>
        <button className="arrow" onClick={handleIncrement}>
          &rarr;
        </button>
      </div>
      <a href={link} target="_blank">
        Veure més a http://marsalabella.blogspot.com/
      </a>
    </div>
  );
};
