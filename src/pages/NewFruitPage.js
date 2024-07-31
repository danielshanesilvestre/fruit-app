import React from "react";
import NavBar from "../components/NavBar";
import NewFruitForm from "../components/NewFruitForm";

function NewFruit() {
  return <div>
    <header>
      <NavBar />
    </header>
    <main>

      <form>
        <label>Test</label>
        <input name="name" type="text"></input>
        <input name="description" type="text"></input>
      </form>

    </main>
  </div>
}