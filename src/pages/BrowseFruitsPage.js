import React from "react";
import { useOutletContext } from "react-router-dom";

import FruitCard from "../components/FruitCard";

function BrowseFruitsPage() {
  const context = useOutletContext();
  const {
    fruits, setFruits
  } = context;

  return <>
    {
      fruits.map(fruit => {
        return <FruitCard
          key={fruit.id}
          name={fruit.name}
          description={fruit.description}
        />
      })
    }
  </>;
}


export default BrowseFruitsPage;