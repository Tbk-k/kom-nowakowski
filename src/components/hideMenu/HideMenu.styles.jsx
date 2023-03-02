import styled from "styled-components";

export const MenuWrapper = styled.div`
  height: 100vh;
  background-color: white;
  max-width: 600px;
  width: 100%;
  position: fixed;
  z-index: 100;
  right: -600px;
  top: 0;
  transition: max-width 0.5s, transform 0.5s;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transform: ${({ menuIsOpen }) => menuIsOpen && "translateX(-600px)"};
  @media screen and (min-width: 578px) {
    max-width: 400px;
  }
`;

export const StyledMenu = styled.menu`
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    padding: 24px 30px;
    text-align: center;
    border-bottom: 1px solid #dadada;

    a {
      font: ${({ theme }) => theme.fonts.button};
      color: black;
      text-decoration: none;
      text-transform: uppercase;
      transition: color 0.5s;
      font-weight: bold;
      letter-spacing: 1.2px;
    }
    &:hover {
      a {
        color: ${({ theme }) => theme.colors.orange};
      }
    }
  }
`;

export const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #dadada;
  padding: 10px 0 15px;
  position: relative;
  img {
    height: 55px;
    cursor: pointer;
  }

  svg {
    position: absolute;
    top: 25px;
    right: 30px;
    font-size: 28px;
    cursor: pointer;
    transition: color 0.5s;
    &:hover {
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`;

export const MapWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const ExitBtn = styled.div`
  width: 100%;
  background-color: white;
  text-align: center;
  padding: 15px 30px;
  button {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border-radius: 30px;
    border: 1px solid black;
    border-color: ${({ theme }) => theme.colors.hover};
    padding: 25px 0;
    font: ${({ theme }) => theme.fonts.button};
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.5s;
    display: flex;
    justify-content: center;
    gap: 10px;
    &:hover {
      background-color: ${({ theme }) => theme.colors.hover};
      color: white;
      svg {
        color: white;
      }
    }
  }
`;
