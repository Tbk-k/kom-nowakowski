import React from "react";
import { InnerWrapper, StyledMenu, Wrapper } from "./Footer.styles";
import DarkLogo from "../../assets/img/logoDark.png";

const Footer = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <img
          src={DarkLogo}
          alt=""
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
        <StyledMenu>
          <li>
            <a href="">wnioski do pobrania</a>
          </li>
          <li>
            <a href="">kontakt z kancelarią</a>
          </li>
          <li>
            <a href="">rewir komorniczy</a>
          </li>
          <li>
            <a href="">spłać zadłużenie</a>
          </li>
        </StyledMenu>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Footer;
