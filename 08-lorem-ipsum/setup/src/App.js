import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [updatedData, setUpdatedData] = useState([]);
  const showData = async (e) => {
    e.preventDefault();
    let number = count;
    if (count > 9) {
      number = 9;
    } else if (count <= 0) {
      number = 1;
    }
    setUpdatedData(data.slice(0, number));

    console.log(count, updatedData);
  };
  const change = (e) => {
    setCount(e.target.value);
  };
  return (
    <main>
      lorem ipsum project setup
      <form className="form">
        <div className="form-control">
          <label htmlFor="paragraph">Paragraph : </label>
          <input
            type="number"
            id="paragraph"
            name="paragraph"
            value={count}
            onChange={change}
          />
          <button type="submit" onClick={showData}>
            Generate
          </button>
        </div>
      </form>
      {updatedData.map((item) => {
        return <p>{item}</p>;
      })}
    </main>
  );
}

export default App;
