import React from "react";
import {
  FooterGroup,
  InnerWrapper,
  StyledAbout,
  StyledAddress,
  StyledMenu,
  Wrapper,
} from "./Footer.styles";
import DarkLogo from "../../assets/img/logoDark.png";

const Footer = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <FooterGroup>
          <div style={{ flex: 1 }}>
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
          </div>
          <StyledAddress>
            <h3>Kontakt</h3>
            <a href="tel:+48518050238">+48 518 050 238</a>
            <a href="mailto:gdansk.nowakowski@komornik.pl">
              gdansk.nowakowski@komornik.pl
            </a>
            <p>
              ul. Kartuska 422a/6, <br /> 80-125 Gdańsk
            </p>
          </StyledAddress>
        </FooterGroup>
        <StyledAbout>
          <h3>O kancelarii</h3>
          <p>
            Kancelaria Komornicza numer XXII w Gdańsku to godny zaufania
            partner, który specjalizuje się w prowadzeniu postępowań
            egzekucyjnych i zabezpieczających w obszarze podlegającym Sądowi
            Rejonowemu Gdańsk-Południe.
          </p>
        </StyledAbout>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Footer;
