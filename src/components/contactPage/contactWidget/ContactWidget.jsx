import React from "react";
import { CiMobile3, CiMail } from "react-icons/ci";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bg};
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding-bottom: 15px;

    svg {
      font-size: 20px;
    }
    a {
      color: black;
      font: ${({ theme }) => theme.fonts.paragraph.L};
      &#tel {
        text-decoration: none;
        cursor: pointer;
        @media screen and (min-width: 768px) {
          font: ${({ theme }) => theme.fonts.heading.M};
        }
      }
    }
  }
`;

const ContactWidget = () => {
  return (
    <Wrapper>
      <div>
        <CiMobile3 />
        <a href="tel:+48518050238" id="tel">
          +48 518 050 238
        </a>
      </div>
      <div>
        <CiMail />
        <a href="mailto:gdansk.nowakowski@komornik.pl ">
          gdansk.nowakowski@komornik.pl
        </a>
      </div>
    </Wrapper>
  );
};

export default ContactWidget;
