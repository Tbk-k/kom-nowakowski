import styled from "styled-components";
import ContactHeroImage from "../../../assets/img/contact-hero.jpeg";

export const Wrraper = styled.div`
  width: 100%;
  padding: 25px;
  background-color: ${({ theme }) => theme.colors.bg};
  @media screen and (min-width: 1024px) {
    padding: 25px 35px;
  }
`;

export const InnerWrapper = styled.div`
  min-height: 300px;
  border-radius: 30px;
  background: url(${ContactHeroImage}) center;
  background-size: cover;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  h2 {
    font: ${({ theme }) => theme.fonts.heading.span.L};
    color: white;
    position: relative;
    z-index: 10;
    margin-bottom: 22px;
  }
  p {
    color: white;
    position: relative;
    z-index: 10;
    font: ${({ theme }) => theme.fonts.heading.S};
    font-size: 18px;
    line-height: 24px;
    max-width: 450px;
    width: 90%;
    text-align: center;
    margin: 0;
    margin-bottom: 36px;
    letter-spacing: -0.2px;
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    background: linear-gradient(1turn, #0c0c0c, #0d0d0d29);
  }
  @media screen and (min-width: 1024px) {
    min-height: 550px;
  }
`;
