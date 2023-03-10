import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 25px;
  @media screen and (min-width: 1024px) {
    padding: 100px 35px 25px;
  }
`;

export const InnerWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 2%;
  }
`;
