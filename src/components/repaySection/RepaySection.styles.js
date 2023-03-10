import styled from "styled-components";
import { Btn } from "../navbar/Navbar.styles";
import { StyledSection } from "../downloadFiles/DownloadFiles.styles";
import ThemisImg from "../../assets/img/themis.jpeg";

export const Wrapper = styled(StyledSection)`
  hr {
    margin-bottom: 30px;
  }
`;

export const InnerWrapper = styled.div`
  p {
    text-align: justify;
    max-width: 450px;
    font-weight: 300;
    font-family: "Quicksand", sans-serif;
    font-size: 1.4rem;
    line-height: 2.1rem;
    margin: 0 auto;
  }
  button {
    font: ${({ theme }) => theme.fonts.button};
    margin-top: 30px;
  }
  div:last-of-type {
    width: 100%;
    max-width: 600px;
    aspect-ratio: 1.5;
    border-radius: 30px;
    background: url(${ThemisImg}) center;
    background-size: cover;
    position: relative;
    margin: 30px 0;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 30px;
      background: linear-gradient(1turn, #0c0c0c, #0d0d0d29);
    }
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    gap: 70px;
    div {
      flex: 1;
      p {
        font-size: 1.6rem;
        line-height: 2.4rem;
      }
    }
  }
`;

export const ModalBtn = styled(Btn)`
  background-color: ${({ theme }) => theme.colors.orange};
  color: white;
  &:hover {
    background-color: ${({ theme }) => theme.colors.orangeDark};
  }
`;
