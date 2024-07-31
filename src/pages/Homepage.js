import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import FruitCard from "../components/FruitCard";

function Homepage({}) {
  const [fotd, setFotd] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/fruits/1")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setFotd(data);
      });
  }, [])

  return <>
    <header>
      <NavBar />
    </header>
    <main>
      <h1>This is the homepage!</h1>
      {
        fotd === null ?
          <span>Loading Fruit of the Day!</span>
          : <>
            <span>The Fruit of the Day is {fotd.name}!</span>
            <FruitCard name={fotd.name} description={fotd.description} />
          </>
      }
    </main>
  </>;
}


export default Homepage;