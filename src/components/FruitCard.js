import React from "react";
import { Link } from "react-router-dom";

function FruitCard({
  fruit
}) {
  return <div className="fruit-card">
    <h4>{fruit.name}</h4>
    <p>{fruit.description}</p>
    <Link to={`/fruits/${fruit.id}`}>View details</Link>
  </div>
}

export default FruitCard;