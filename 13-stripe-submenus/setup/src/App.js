import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import { useGlobalContext } from "./context";

function App() {
  const c = useGlobalContext();
  console.log(c);
  return (
    <>
      <h2>stripe submenus setup</h2>
      <h2>{c}</h2>
    </>
  );
}

export default App;
