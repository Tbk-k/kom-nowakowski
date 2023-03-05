import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 25px;
  @media screen and (min-width: 1024px) {
    padding: 150px 35px 25px;
  }
`;
