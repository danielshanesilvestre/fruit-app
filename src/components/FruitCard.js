import React from "react";

function FruitCard({
  name,
  description
}) {
  return <div className="fruit-card">
    <h4>{name}</h4>
    <p>{description}</p>
  </div>
}

export default FruitCard;