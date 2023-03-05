import React from "react";
import { LinkBtn, StyledCard, StyledIcon, Wrapper } from "./Card.styles";

const Card = ({ title, desc, link, img }) => {
  return (
    <StyledCard>
      <Wrapper>
        <StyledIcon>
          <div>{img}</div>
        </StyledIcon>
        <h4>{title}</h4>
        <hr />
        <p>{desc}</p>
        <LinkBtn>- Przejdź -</LinkBtn>
      </Wrapper>
    </StyledCard>
  );
};

export default Card;
