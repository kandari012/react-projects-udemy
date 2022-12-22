import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <main>
      <h3>Questions And Answers About Login</h3>
      <div>
        {data.map((item) => {
          return <SingleQuestion item={item} key={item.id} />;
        })}
      </div>
    </main>
  );
}

export default App;
