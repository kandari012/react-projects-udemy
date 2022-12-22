import React, { useState } from "react";

const Tour = ({ tour, removeTour }) => {
  const [readMore, setreadMore] = useState(false);
  return (
    <main>
      <p>{tour.id}</p>
      <p>{tour.name}</p>
      <p>
        {readMore ? tour.info : `${tour.info.substring(0, 100)}....`}
        <button
          onClick={() => {
            setreadMore(!readMore);
          }}
        >
          {readMore ? "read less" : "read more"}
        </button>
      </p>
      <p>{tour.price}</p>
      <button type="button" onClick={() => removeTour(tour.id)}>
        clear tour
      </button>
    </main>
  );
};

export default Tour;
