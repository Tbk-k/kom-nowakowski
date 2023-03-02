import React, { useState } from "react";
import HideMenu from "./components/hideMenu/HideMenu";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <main style={{ width: "100vw", overflow: "hidden" }}>
      <Navbar menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <HideMenu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
    </main>
  );
};

export default App;
