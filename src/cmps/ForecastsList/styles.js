import { css } from "styled-components";

export const ForecastsList = css`
  align-items: center;
  display: flex;
  justify-content: space-around;
  @media (max-width: 780px) {
    flex-direction: column;
  }
`;
