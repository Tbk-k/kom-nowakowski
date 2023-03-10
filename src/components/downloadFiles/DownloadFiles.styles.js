import styled from "styled-components";
import { ContactBtn } from "../navbar/Navbar.styles";

export const StyledSection= styled.section`
  width: 100%;
  padding: 25px;
  background-color: ${({ theme }) => theme.colors.bg};
  text-align: center;
  @media screen and (min-width: 1024px) {
    padding: 25px 35px;
  }
  h2 {
    font: ${({ theme }) => theme.fonts.heading.L};
    margin: 0;
    text-align: center;
    span {
      font: ${({ theme }) => theme.fonts.heading.span.L};
    }
  }
  hr {
    width: 150px;
    border: none;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.orange};
    border-radius: 20px;
    margin: 15px auto;
  }
`;

export const InnerWrapper = styled.div`
  margin: 30px auto 0;
  text-align: start;
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    gap: 0 10px;
    max-width: 1000px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1400px;
  }
`;
export const FileItem = styled.a`
  text-decoration: none;
  color: black;
  display: flex;
  cursor: pointer;
  gap: 20px;
  padding: 20px;
  max-width: 500px;
  min-height: 90px;
  margin: 10px auto;
  border-radius: 30px;
  transition: box-shadow 0.5s;

  div:first-of-type {
    width: 50px;
    height: 50px;
    border-radius: 30px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    svg {
      font-size: 20px;
    }
  }
  div:last-of-type {
    h4 {
      font: ${({ theme }) => theme.fonts.heading.S};
      font-size: 1.6rem;
      letter-spacing: -0.35px;
      line-height: 1.8rem;
      margin: 0;
    }
    p {
      font: ${({ theme }) => theme.fonts.button};
      text-transform: uppercase;
      margin: 10px 0;
      transition: color 0.5s;
    }
  }
  &:hover {
    box-shadow: 0 5px 20px rgb(0 0 0 / 12%);
    div {
      p {
        color: ${({ theme }) => theme.colors.orange};
      }
    }
  }
  @media screen and (min-width: 1024px) {
    width: 49%;
  }
  @media screen and (min-width: 1440px) {
    gap: 40px;
    max-width: 650px;
    div:first-of-type {
      width: 85px;
      height: 85px;
      svg {
        font-size: 30px;
      }
    }
    div:last-of-type {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      h4 {
        font-size: 2.4rem;
        line-height: 1.8rem;
      }
      p {
        font-size: 2rem;
      }
    }
  }
`;

export const DownloadAll = styled(ContactBtn)`
  margin: 40px 0 50px;
`;
