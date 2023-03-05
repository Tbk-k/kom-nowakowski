import React from "react";
import { InnerWrapper, Wrraper } from "./ContactHero.style";

const ContactHero = () => {
  return (
    <Wrraper>
      <InnerWrapper>
        <h2>Kontakt</h2>
        <p>
          Wypełnij formularz kontaktowy a my skontaktujemy się z tobą tak szybko
          jak będzie to możliwe.
        </p>
      </InnerWrapper>
    </Wrraper>
  );
};

export default ContactHero;
