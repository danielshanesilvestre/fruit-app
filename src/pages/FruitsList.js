import React, { useEffect, useState } from "react";


function FruitsList() {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {

    fetch("http://localhost:4000/fruits")
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });

  }, []);

  return <div>

  </div>;
}


export default FruitsList;