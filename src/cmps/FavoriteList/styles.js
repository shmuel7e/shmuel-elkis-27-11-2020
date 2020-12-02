import { css } from "styled-components";

export const FavoriteList = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, 290px);
  grid-gap: 2px;
  justify-content: center;
  @media (max-width: 596px) {
    height: calc(100vh - 125px);
    grid-template-rows: repeat(auto-fill, 120px);
    overflow-y: scroll;
  }
`;
