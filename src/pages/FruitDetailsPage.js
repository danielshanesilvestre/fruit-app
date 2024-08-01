import React from "react";
import { useOutletContext, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";


function FruitDetailsPage() {
  const { fruits } = useOutletContext();
  const { id } = useParams();
  
  if (fruits.length === 0) return <h1>Loading...</h1>;

  const fruit = fruits.find(fruit => fruit.id === id)

  if (fruit === undefined) return <h1>Fruit not found!</h1>;

  console.log(fruit);

  return <>
    <h1>{fruit.name}</h1>
    <p>{fruit.description}</p>
    <img src={fruit.image} style={{
      width: "300px",
      height: "300px",
    }}/>
  </>
}

export default FruitDetailsPage;