import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  return (
    <main>
      {tours.map((tour) => {
        return <Tour tour={tour} key={tour.id} removeTour={removeTour} />;
      })}
    </main>
  );
};

export default Tours;
