import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 30px;
  padding: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-10px);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  border: 1px solid black;
  border-color: ${({ theme }) => theme.colors.gray};
  padding: 20px;
  display: flex;
  justify-content: center;
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
    height: 45px;
    background-color: ${({ theme }) => theme.colors.orange};
    border-radius: 50%;
  }
`;
