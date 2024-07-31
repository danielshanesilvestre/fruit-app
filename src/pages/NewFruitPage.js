import React from "react";
import NavBar from "../components/NavBar";

function NewFruitPage() {
  return <>
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
  </>
}

export default NewFruitPage;