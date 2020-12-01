import { css } from "styled-components";

export const Forecast = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 200px;
  width: 150px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 20px;
  background: #00000063;
  border-radius: 25px;
  @media (max-width: 780px) {
    width: 206px;
    height: 304px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 10px;
  }
  div:first-child {
    margin-bottom: 7px;
  }
`;
