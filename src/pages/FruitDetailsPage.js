import React from "react";
import { useOutletContext, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";


function FruitDetailsPage() {
  const { fruits } = useOutletContext();
  const { id } = useParams();
  const fruit = fruits.find(fruit => fruit.id === id)
  console.log(fruit);
  return <>
    <h1>{fruit.name}</h1>
  </>
}

export default FruitDetailsPage;