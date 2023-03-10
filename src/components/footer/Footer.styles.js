import styled from "styled-components";

export const Wrapper = styled.footer`
  width: 100vw;
  padding: 0px 25px;
  background-color: ${({ theme }) => theme.colors.bg};
  @media screen and (min-width: 1024px) {
    padding: 0px 35px;
  }
`;

export const InnerWrapper = styled.div`
  width: 100%;
  border-radius: 30px 30px 0 0;
  background-color: white;
  padding: 30px 40px;
  img {
    height: 90px;
  }
  @media screen and (min-width: 768px) {
    padding-top: 60px;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 100px 40px;
  }
`;

export const StyledMenu = styled.menu`
  list-style: none;
  margin: 35px 0 0;
  padding: 0;
  li {
    margin-top: 10px;
    a {
      color: black;
      font: ${({ theme }) => theme.fonts.button};
      text-decoration: none;
      text-transform: uppercase;
      transition: color 0.3s;
      font-size: 1.2rem;
      &:hover {
        color: ${({ theme }) => theme.colors.orange};
      }
    }
  }
`;

export const StyledAddress = styled.address`
  margin-top: 10px;
  flex: 1;
  h3 {
    font: ${({ theme }) => theme.fonts.button};
    line-height: 2rem;
    font-size: 1.6rem;
    letter-spacing: -0.25px;
    font-weight: bold;
  }
  display: flex;
  flex-direction: column;
  a,
  p {
    font: ${({ theme }) => theme.fonts.paragraph.M};
    font-size: 1.3rem;
    line-height: 2.6rem;
  }
  a {
    color: black;
    text-decoration: none;
    transition: color 0.3s;
    &:hover {
      color: ${({ theme }) => theme.colors.orange};
    }
  }
  p {
    margin-top: 15px;
  }
  @media screen and (min-width: 768px) {
    margin: 0;
    h3 {
      margin-top: 0;
    }
  }
  @media screen and (min-width: 1024px) {
    h3 {
      margin: 0 0 30px 0;
      font-size: 2.4rem;
      line-height: 2.9rem;
    }
    p,
    a {
      font-size: 1.6rem;
      line-height: 2, 4rem;
    }
  }
`;

export const StyledAbout = styled.div`
  h3 {
    font: ${({ theme }) => theme.fonts.button};
    line-height: 2rem;
    font-size: 1.6rem;
    letter-spacing: -0.25px;
    font-weight: bold;
  }
  p {
    font: ${({ theme }) => theme.fonts.paragraph.M};
    font-size: 1.3rem;
    line-height: 2.2rem;
    max-width: 400px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
  @media screen and (min-width: 1024px) {
    margin-top: 0;
    h3 {
      margin: 0 0 30px 0;
      font-size: 2.4rem;
      line-height: 2.9rem;
    }
    p {
      font-size: 1.6rem;
      line-height: 2, 4rem;
    }
  }
`;

export const FooterGroup = styled.div`
  max-width: 700px;
  flex: 2;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
