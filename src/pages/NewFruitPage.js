import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";


function NewFruitPage() {
  const {
    fruits,
    setFruits
  } = useOutletContext();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: ""
  });

  function handleChange(event) {
    setFormData(formData => {
      return {
        ...formData,
        [event.target.name]: event.target.value
      };
    })
  }

  function handleSubmit(event) {
    event.preventDefault();

    let newFruit = {
      name: formData.name,
      description: formData.description,
      image: formData.image,
    };
  
    const configuration = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(newFruit)
    };

    fetch("http://localhost:4000/fruits", configuration)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setFruits(fruits => {
          return [
            ...fruits,
            data
          ];
        });
      });
  }

  return <form onSubmit={handleSubmit}>
    <label>Name:</label><br/>
    <input id="name-input" name="name" type="text" onChange={handleChange}></input><br/>
    <label>Description:</label><br/>
    <input id="description-input" name="description" type="text" onChange={handleChange}></input><br/>
    <label>Image:</label><br/>
    <input id="image-input" name="image" type="text" onChange={handleChange}></input><br/>
    <button type="submit">Submit</button>
  </form>
}


export default NewFruitPage;