import React from "react";
import InfoWidget from "../infoWidget/InfoWidget";
import {
  BtnWrapper,
  HeroContantBtn,
  HeroRepayBtn,
  InnerWrapper,
  StyledContent,
  Wrraper,
} from "./Hero.styles";

const Hero = () => {
  return (
    <Wrraper>
      <InnerWrapper>
        <StyledContent>
          <h1>
            <span>Marek Nowakowski</span>
            <br /> Komornik Sądowy
          </h1>
          <p>przy Sądzie Rejonowym Gdańsk - Południe w Gdańsku</p>
          <BtnWrapper>
            <HeroContantBtn>Kontakt z kancelarią</HeroContantBtn>
            <HeroRepayBtn>spłać zadłużenie </HeroRepayBtn>
          </BtnWrapper>
        </StyledContent>
        <InfoWidget />
      </InnerWrapper>
    </Wrraper>
  );
};

export default Hero;
