import React from "react";

const Menu = ({ item }) => {
  return (
    <div style={{ border: "1px solid red", margin: "5px" }}>
      <p>{item.title}</p>
      <p>{item.category}</p>
      <p>{item.price}</p>
    </div>
  );
};

export default Menu;
