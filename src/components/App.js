import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [themeSwich, setThemeSwich] = useState(false);

  const toggle = () => {
    themeSwich ? setThemeSwich(false) : setThemeSwich(true);
  };

  return (
    <div className={themeSwich ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggle}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
