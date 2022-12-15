import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [reminder, setReminder] = useState(data);
  const clearReminder = () => {
    setReminder([]);
  };
  return (
    <>
      <h2>reminder project setup</h2>
      <h2>{reminder.length} birthdays today</h2>
      {reminder.map((item) => {
        return <List key={item.id} {...item}></List>;
      })}
      {!reminder && <p2>reminders cleared</p2>}
      <button type="submit" onClick={clearReminder}>
        clear
      </button>
    </>
  );
}

export default App;
