import React from "react";
import { useOutletContext } from "react-router-dom";


function NewFruitForm() {
  const context = useOutletContext();

  console.log(context);

  return <form>    
    <label>Name:</label>
    <input id="name-input" name="name" type="text"></input>
    <input name="description" type="text"></input>
  </form>
}


export default NewFruitForm;