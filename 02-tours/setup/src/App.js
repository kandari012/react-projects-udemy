import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setloading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setInterval(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setInterval(false);
      setTours(tours);
      console.log(tours);
    } catch (error) {
      setInterval(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <h4>No Tours</h4>
        <button onClick={fetchTours}>refresh</button>
      </main>
    );
  }
  return (
    <main>
      <h4>Our Tours</h4>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </main>
  );
}

export default App;
