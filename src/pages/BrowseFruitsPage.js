import React, { useEffect, useState } from "react";
import FruitCard from "../components/FruitCard";

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

  return <div>
    {
      fruits.map(fruit => {
        return <FruitCard key={fruit.id} name={fruit.name} description={fruit.description} />
      })
    }
  </div>;
}


export default FruitsList;