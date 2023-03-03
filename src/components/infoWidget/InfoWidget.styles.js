import styled from "styled-components";

export const Wrapper = styled.div`
  width: 95%;
  max-width: 1000px;
  border-radius: 30px;
  background-color: white;
  padding: 0 0 0 20px;
  position: absolute;
  z-index: 10;
  display: none;
  bottom: 0;
  transform: translateY(50%);
  box-shadow: 0 10px 20px 0 rgba(12, 12, 12, 0.2);
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledItem = styled.div`
  border-right: 1px solid #e0e0e0;
  padding: 20px 0;
  flex: 1;
  padding-left: 16px;
  &:last-of-type {
    border-right: none;
  }
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #e4e4e4;
    h3 {
      font-family: "Quicksand", sans-serif;
      size: 12rem;
      color: #4e4e4e;
      letter-spacing: 1px;
      line-height: 1.2rem;
      text-transform: uppercase;
      margin: 0;
    }
  }

  p {
    font-family: "Quicksand", sans-serif;
    font-size: 12px;
    margin-bottom: 0;
  }
`;
