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
  padding: 30px 20px;
  img {
    height: 90px;
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
