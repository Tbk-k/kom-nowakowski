import React from "react";
import styled from "styled-components";
const Wrapper = styled.section`
  width: 100%;
  padding: 25px;
  background-color: ${({ theme }) => theme.colors.bg};
  #second-paragraph {
    p {
      font-family: "Quicksand", sans-serif;
      font-size: 1.4rem;
      line-height: 2.1rem;
      font-weight: 300;
    }
  }
  #first-paragraph {
    font-family: "Quicksand", sans-serif;
    letter-spacing: -1px;
    font-size: 2.2rem;
    font-weight: 400;
    line-height: 2.8rem;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 1024px) {
    padding: 25px 35px;
    div {
      display: flex;
      max-width: 1350px;
      margin: 50px auto 0;
    }
    #second-paragraph {
      flex: 1;
      display: block;
      margin-top: 0;
      padding: 0 20px;
      p {
        font-size: 1.6rem;
        line-height: 2.4rem;
      }
    }
    #first-paragraph {
      font-size: 3rem;
      line-height: 4rem;
      flex: 1;
      padding: 0 20px;
      margin: 12px auto 0;
    }
  }
  @media screen and (min-width: 1440px) {
    #second-paragraph {
      padding: 0 40px;
    }
    #first-paragraph {
      padding: 0 40px;
    }
  }
`;

const About = () => {
  return (
    <Wrapper>
      <div>
        <p id="first-paragraph">
          Komornik Sądowy Marek Nowakowski jest od wielu lat praktykującym
          specjalistą w dziedzinie egzekucji komorniczej oraz windykacji
          należności.
        </p>
        <div id="second-paragraph">
          <p>
            W swojej pracy kieruje się zawsze najwyższymi standardami etycznymi
            oraz dba o dobre relacje z klientami. Kancelaria Komornicza numer
            XXII w Gdańsku, świadczy usługi na najwyższym poziomie, zapewniając
            skuteczną i profesjonalną pomoc w dochodzeniu wierzytelności.
          </p>
          <p>
            Dzięki indywidualnemu podejściu do każdej sprawy oraz skrupulatnej
            analizie dokumentów, Kancelaria Komornicza Marka Nowakowskiego jest
            w stanie osiągnąć najlepsze efekty dla swoich klientów. Zapraszamy
            do kontaktu z kancelarią w celu uzyskania szczegółowych informacji.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
