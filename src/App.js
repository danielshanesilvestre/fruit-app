import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";

function App() {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/fruits")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setFruits(data);
      });
  }, []);

  return <>
    <header>
      <NavBar />
    </header>
    <main>
      <Outlet context={{
        fruits: fruits,
        setFruits: setFruits
      }} />
    </main>
  </>
}


export default App;