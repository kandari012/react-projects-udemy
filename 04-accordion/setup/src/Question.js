import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ item }) => {
  const [show, setShow] = useState(false);
  const flip = () => {
    setShow(!show);
  };
  return (
    <div>
      <p>
        {item.title}
        {show ? (
          <AiOutlineMinus onClick={flip} />
        ) : (
          <AiOutlinePlus onClick={flip} />
        )}
      </p>
      <p>{show && item.info}</p>
    </div>
  );
};

export default Question;
