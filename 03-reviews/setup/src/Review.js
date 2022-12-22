import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];
  const moveRight = () => {
    if (index === people.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const moveLeft = () => {
    if (index === 0) {
      setIndex(people.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const random = () => {
    const number = Math.floor(Math.random() * people.length);
    setIndex(number);
    console.log(number);
  };
  return (
    <main>
      <img src={image} className="person-img"></img>
      <h4>{name}</h4>
      <h4>{job}</h4>
      <FaChevronLeft onClick={moveLeft} />
      <FaChevronRight onClick={moveRight} />
      <button onClick={random}>suprise me</button>
    </main>
  );
};

export default Review;
