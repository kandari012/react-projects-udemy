import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ data, index, Delete, Update }) => {
  return (
    <div>
      {data}{" "}
      <FaEdit
        onClick={() => {
          Update(index);
        }}
      />
      <FaTrash
        onClick={() => {
          Delete(index);
        }}
      />
    </div>
  );
};

export default List;
