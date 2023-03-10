import React from "react";
import { InnerWrapper, ModalBtn, Wrapper } from "./RepaySection.styles";

const RepaySection = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <div>
          <h2>
            Spłać <span>zadłużenie </span>
          </h2>
          <hr />
          <p>
            Wszelkich wpłat w postępowaniach egzekucyjnych można dokonywać w
            formie gotówkowej w toku czynności egzekucyjnych badź w kasie
            kacelarii czynnej w godzinach urzędowania kancelarii oraz w formie
            bezgotówkowej.
          </p>
          <ModalBtn>Dane do przelewu</ModalBtn>
        </div>
        <div />
      </InnerWrapper>
    </Wrapper>
  );
};

export default RepaySection;
