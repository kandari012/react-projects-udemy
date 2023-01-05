import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [item, setItem] = useState("");
  const [listData, setListData] = useState([]);
  const [isUpdate, setisUpdate] = useState(false);
  const [updateIndex, setupdateIndex] = useState(0);

  // useEffect();
  const change = (e) => {
    setItem(e.target.value);
  };
  const addToList = async (e) => {
    e.preventDefault();

    await setListData([...listData, { item, time: new Date().getTime() }]);
    setItem("");
  };
  const onDelete = (index) => {
    listData.splice(index, 1);
    setListData([...listData]);
  };
  const onUpdate = (index) => {
    setItem(listData[index].item);
    setisUpdate(true);
    setupdateIndex(index);
  };
  const updateToList = async (e) => {
    e.preventDefault();

    listData[updateIndex].item = item;
    setListData(listData);
    setItem("");
    setisUpdate(false);
  };
  return (
    <div>
      grocery bud setup
      <form>
        <div>
          <input
            type="string"
            name="item"
            value={item}
            onChange={change}
            placeholder="eg : egg"
          />
          {isUpdate ? (
            <button type="submit" onClick={updateToList}>
              Edit
            </button>
          ) : (
            <button type="submit" onClick={addToList}>
              Submit
            </button>
          )}
        </div>
      </form>
      {listData.map((data, index) => {
        return (
          <List
            key={data.time}
            data={data.item}
            index={index}
            Delete={onDelete}
            Update={onUpdate}
          ></List>
        );
      })}
      <button
        onClick={() => {
          setListData([]);
        }}
      >
        Clear
      </button>
    </div>
  );
}

export default App;
