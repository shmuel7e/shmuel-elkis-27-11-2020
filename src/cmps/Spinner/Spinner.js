import React from "react";
import styled from "styled-components";
import * as styles from "./styles";

const Spinner = styled(({ className }) => {
  return (
    <div {...{ className }}>
      <img
        src={require("../../assets/animation/spinner.png")}
        alt="Loading..."
      />
    </div>
  );
})`
  ${styles.Spinner}
`;
export default Spinner;
