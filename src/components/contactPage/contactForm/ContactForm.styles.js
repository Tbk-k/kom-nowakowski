import styled from "styled-components";
import { Btn } from "../../navbar/Navbar.styles";
export const Wrapper = styled.div`
  width: 100%;
  padding: 25px;
  background-color: ${({ theme }) => theme.colors.bg};
  @media screen and (min-width: 1024px) {
    padding: 25px 35px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  input,
  textarea {
    border-radius: 40px;
    border: 1px solid #e4e4e4;
    color: #0c0c0c;
    font: ${({ theme }) => theme.fonts.paragraph.M};
    padding: 19px 30px;
    margin-top: 15px;
    outline: none;
    width: 100%;
  }
  textarea {
    min-height: 300px;
  }
  @media screen and (min-width: 768px) {
    gap: 2%;
    input {
      width: 49%;
    }
    textarea {
      min-height: 150px;
    }
  }
`;

export const SubmitBtn = styled(Btn)`
  width: 100%;
  background-color: black;
  color: white;
  margin: 50px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 1px solid black;
  svg {
    font-size: 15px;
  }
  &:hover {
    background-color: white;
    color: black;
    svg {
      color: black;
    }
  }
  @media screen and (min-width: 768px) {
    max-width: 250px;
  }
`;
