import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const selectCategory = () => {};
  return (
    <div>
      menu project setup
      <Categories />
      {items.map((item) => {
        return <Menu item={item} key={item.id}></Menu>;
      })}
    </div>
  );
}

export default App;
