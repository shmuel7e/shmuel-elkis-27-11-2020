import { css } from "styled-components";

export const TempDetails = css`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;
  background: #00000063;
  border-radius: 25px;
  padding: 32px;
  div:first-child {
    font-size: 1.5rem;
  }
  div:nth-child(2) {
    font-size: 2.5rem;
  }
  div:nth-child(3) {
    font-size: 1.8rem;
  }
  button:nth-child(4) {
    font-size: 2rem;
    transition: 0.3s ease all;
  }
  div:nth-child(5) {
    font-size: 1.4rem;
    @media (max-width: 500px) {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 780px) {
    margin-right: initial;
    margin-left: initial;
  }
`;
