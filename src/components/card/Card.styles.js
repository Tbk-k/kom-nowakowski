import styled from "styled-components";

export const StyledCard = styled.div`
  width: 100%;
  border-radius: 30px;
  margin-bottom: 20px;
  min-height: 500px;
  background: ${({ img }) => `url(${img}) center`};
  background-size: cover;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    background: linear-gradient(
      90deg,
      hsla(0, 0%, 5%, 0.65),
      hsla(0, 0%, 5%, 0.65)
    );
  }
  &:nth-of-type(2),
  &:nth-of-type(3) {
    min-height: 400px;
  }
  @media screen and (min-width: 768px) {
    &:first-of-type {
      div {
        align-items: flex-start;
        text-align: start;
        padding: 0 50px;
        h3 {
          font-size: 6rem;
          line-height: 6.5rem;
        }
        p {
          font-size: 1.9rem;
          line-height: 2.6rem;
          max-width: 500px;
        }
        button {
          margin-left: 50px;
        }
      }
    }
    &:nth-of-type(2),
    &:nth-of-type(3) {
      width: 49%;
    }
  }
  @media screen and (min-width: 1024px) {
    &:nth-of-type(1) {
      min-height: 585px;
    }

    &:nth-of-type(2),
    &:nth-of-type(3) {
      min-height: 480px;
      div {
        justify-content: flex-end;
        gap: 0;
        h3 {
          font-size: 5rem;
          line-height: 5rem;
        }
        p {
          font-size: 1.6rem;
          line-height: 2.4rem;
        }
        button {
          max-width: 350px;
          margin: 0 auto;
        }
      }
    }
  }
`;

export const InnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  color: white;
  padding: 60px 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  h3 {
    margin: 0;
    font: ${({ theme }) => theme.fonts.heading.span.M};
  }
  p {
    font: ${({ theme }) => theme.fonts.paragraph.M};
    font-size: 1.4rem;
    line-height: 2rem;
    letter-spacing: -0.2px;
  }
  button {
    background-color: ${({ btn }) => btn.idle.bg};
    color: ${({ btn }) => btn.idle.color};
    cursor: pointer;
    border: none;
    font: ${({ theme }) => theme.fonts.button};
    padding: 19px 30px;
    border-radius: 30px;
    letter-spacing: 0.18rem;
    font-size: 12px;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.5s;
    position: relative;
    &:hover {
      background-color: ${({ btn }) => btn.hover.bg};
      color: ${({ btn }) => btn.hover.color};
    }
  }
`;
