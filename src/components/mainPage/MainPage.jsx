import React from "react";
import About from "../about/About";
import DownloadFiles from "../downloadFiles/DownloadFiles";
import Hero from "../hero/Hero";
import RepaySection from "../repaySection/RepaySection";
import SubpageLinks from "../subpageLinks/SubpageLinks";

const MainPage = () => {
  return (
    <>
      <Hero />
      <About />
      <SubpageLinks />
      <RepaySection />
      <DownloadFiles />
    </>
  );
};

export default MainPage;
