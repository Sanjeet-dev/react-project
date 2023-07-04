import React, { useState } from "react";
import people from "./data.js";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [idx, setIdx] = useState(0);
  // console.log(people[3]);
  const { name, job, image, text } =  people[idx];
  
  function checkNumber(i){
    if(i<0){
      return people.length-1;
    }
    if(i > people.length-1){
      return 0
    }
    return i;
    
  }
  const nextPerson = () => {
    setIdx((idx) => {
      let newidx = idx + 1;
      // return newidx;
      return checkNumber(newidx);
    });
  };

  const prevPerson = () => {
    setIdx((idx) => {
      let newidx = idx - 1;
      return checkNumber(newidx);
      // return newidx;
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === idx) {
      randomNumber = idx + 1;
    }
    setIdx(checkNumber(randomNumber));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
