import styled from "styled-components";
import { RepayBtn } from "../navbar/Navbar.styles";

export const StyledCard = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 30px;
  padding: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: transform 0.3s;
  min-height: 500px;
  max-width: 500px;
  &:hover {
    transform: translateY(-10px);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 500px;
  border-radius: 30px;
  border: 1px solid black;
  border-color: ${({ theme }) => theme.colors.gray};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  h4 {
    font: ${({ theme }) => theme.fonts.heading.span.M};
    margin: 25px 0 0;
    text-align: center;
  }
  hr {
    width: 150px;
    border: none;
    background-color: ${({ theme }) => theme.colors.orange};
    border-radius: 30px;
    height: 2px;
    margin: 10px 0;
  }
  p {
    width: 90%;
    max-width: 450px;
    font: ${({ theme }) => theme.fonts.paragraph.M};
    text-align: center;
    margin-bottom: 50px;
  }
`;

export const StyledIcon = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 50%;
  div {
    width: 45px;
    background-color: ${({ theme }) => theme.colors.orange};
    height: 45px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      color: white;
      font-size: 25px;
    }
  }
`;

export const LinkBtn = styled(RepayBtn)`
  ${StyledCard}:hover & {
    background-color: ${({ theme }) => theme.colors.hover};
    color: white;
  }
`;
