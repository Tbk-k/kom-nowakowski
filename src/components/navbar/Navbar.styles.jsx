import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  height: 100%;
  max-height: ${({ isScroll }) => (isScroll ? "95px" : "135px")};
  padding: 0 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: ${({ isScroll }) => isScroll && "white"};
  transition: max-height 0.3s, background-color 0.3s;
  z-index: 10;
  img {
    height: 65px;
    cursor: pointer;
    transition: transform 0.5s;
    &:hover {
      transform: scale(0.9);
    }
  }
  @media screen and (min-width: 768px) {
    max-height: ${({ isScroll }) => (isScroll ? "155px" : "203px")};
    img {
      height: 95px;
    }
  }
  @media screen and (min-width: 1024px) {
    padding: 0 55px;
  }
`;

export const StyledBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0 20px;
  svg {
    font-size: 25px;
    transition: all 0.3s;
    color: ${({ isScroll }) => (isScroll ? "black" : "white")};
    &:hover {
      fill: ${({ theme }) => theme.colors.orange};
      color: ${({ theme }) => theme.colors.orange};
    }
  }
  @media screen and (min-width: 1440px) {
    width: 489px;
    text-align: right;
    &:first-of-type {
      display: none;
    }
  }
`;

export const BtnWrapper = styled.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 10px;
  }
`;

export const Btn = styled.button`
  border: none;
  font: ${({ theme }) => theme.fonts.button};
  padding: 19px 30px;
  border-radius: 30px;
  letter-spacing: 0.18rem;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.5s;
  position: relative;
`;

export const ContactBtn = styled(Btn)`
  background-color: ${({ theme }) => theme.colors.orange};
  color: white;
  &:hover {
    background-color: ${({ theme }) => theme.colors.orangeDark};
  }
`;

export const RepayBtn = styled(Btn)`
  background-color: white;
  border: 1px solid gray;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
    color: white;
  }
`;

export const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  background-color: red;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
`;
