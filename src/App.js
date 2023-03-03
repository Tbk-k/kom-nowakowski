import React, { useState } from "react";
import Hero from "./components/hero/Hero";
import HideMenu from "./components/hideMenu/HideMenu";
import Navbar from "./components/navbar/Navbar";
import SubpageLinks from "./components/subpageLinks/SubpageLinks";

const App = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <main style={{ width: "100vw", overflow: "hidden" }}>
      <Navbar menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <HideMenu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <Hero />
      <SubpageLinks />
      <div style={{ height: "100vh" }}></div>
    </main>
  );
};

export default App;
