import React from "react";

const List = (props) => {
  return (
    <div className="person">
      <img src={props.image}></img>
      <h2>{props.name}</h2>
      <h3>{props.age}</h3>
    </div>
  );
};

export default List;
