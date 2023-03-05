import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import HideMenu from "./components/hideMenu/HideMenu";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <>
      <main style={{ width: "100vw", overflow: "hidden" }}>
        <Navbar menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
        <Outlet />
        <HideMenu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      </main>
      <Footer />
    </>
  );
};

export default App;
