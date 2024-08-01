import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import FruitCard from "../components/FruitCard";

function Homepage({}) {
  const context = useOutletContext();
  const fotd = context.fruits.find(fruit => fruit.id === "1");

  console.log(fotd);
  return <>
    <h1>This is the homepage!</h1>
    {
      context.fruits.length === 0 ?
        <span>Loading Fruit of the Day!</span>
        : <>
          <span>The Fruit of the Day is {fotd.name}!</span>
          <FruitCard name={fotd.name} description={fotd.description} />
        </> 
    }
  </>;
}


export default Homepage;