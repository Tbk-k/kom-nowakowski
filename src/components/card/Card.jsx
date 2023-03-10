import React from "react";
import { InnerWrapper, StyledCard } from "./Card.styles";

const Card = ({ title, desc, link, img, btn }) => {
  return (
    <StyledCard img={img}>
      <InnerWrapper btn={btn}>
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
        <button>{btn.label}</button>
      </InnerWrapper>
    </StyledCard>
  );
};

export default Card;
