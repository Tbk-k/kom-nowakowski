import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(12, 12, 12, 0.3);
  top: 0;
  left: 0;
  z-index: 10;
  filter: blur(20px);
`;

const Backdrop = () => {
  return <Wrapper />;
};

export default Backdrop;
