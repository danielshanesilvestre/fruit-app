import React, { useEffect, useState } from "react";
import FruitCard from "../components/FruitCard";
import NavBar from "../components/NavBar";

function BrowseFruitsPage() {
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

      {
        fruits.map(fruit => {
          return <FruitCard
            key={fruit.id}
            name={fruit.name}
            description={fruit.description}
          />
        })
      }
      
    </main>
  </>;
}


export default BrowseFruitsPage;