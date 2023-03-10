import styled from "styled-components";
import HeroImage from "../../assets/img/hero.jpeg";
import { ContactBtn, RepayBtn } from "../navbar/Navbar.styles";

export const Wrraper = styled.div`
  width: 100%;
  padding: 25px;
  background-color: ${({ theme }) => theme.colors.bg};
  @media screen and (min-width: 1024px) {
    padding: 25px 35px;
  }
`;

export const InnerWrapper = styled.div`
  min-height: 600px;
  border-radius: 30px;
  background: url(${HeroImage}) center;
  background-size: cover;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    background: linear-gradient(1turn, #0c0c0c, #0d0d0d29);
  }
  @media screen and (min-width: 1024px) {
    min-height: 850px;
  }
`;

export const StyledContent = styled.div`
  color: white;
  position: relative;
  z-index: 10;
  text-align: center;
  width: 90%;

  h1 {
    font: ${({ theme }) => theme.fonts.heading.L};
    span {
      font: ${({ theme }) => theme.fonts.heading.span.L};
      font-size: 3.9rem;
    }
  }
  p {
    font: ${({ theme }) => theme.fonts.paragraph.L};
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 4rem;
      line-height: 5rem;
      span {
        font-size: 5rem;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    transform: translateY(-76px);
    transition: transform 0.5s;

    h1 {
      font-size: 5rem;
      line-height: 6.5rem;
      span {
        font-size: 9rem;
        line-height: 6rem;
        letter-spacing: -1px;
      }
    }
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
  max-width: 300px;
  gap: 10px;
  margin-bottom: 30px;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const HeroContantBtn = styled(ContactBtn)`
  width: 100%;
`;

export const HeroRepayBtn = styled(RepayBtn)`
  width: 100%;
  background-color: rgb(255, 255, 255, 0.3);
  color: white;
  border: none;
  &:hover {
    background-color: white;
    color: black;
  }
`;
