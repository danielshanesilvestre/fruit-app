import React from "react";
import { useOutletContext } from "react-router-dom";


function NewFruitForm() {
  const context = useOutletContext();

  console.log(context);

  return <form>    
    <label for="name-input">Name:</label><br/>
    <input id="name-input" name="name" type="text"></input><br/>
    <label for="description-input">Description:</label><br/>
    <input id="description-input" name="description" type="text"></input><br/>
    <button type="submit">Submit</button>
  </form>
}


export default NewFruitForm;