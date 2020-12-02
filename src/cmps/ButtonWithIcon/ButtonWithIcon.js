import React from "react";
import { ReactMemo } from "../../hooks";
import * as PropTypes from "prop-types";
import styled from "styled-components";
import * as styles from "./styles";

const ButtonWithIcon = styled(({ className, theme, icon, handleClick }) => {
  return (
    <button {...{ className, theme }} onClick={handleClick && handleClick}>
      {icon}
    </button>
  );
})`
  ${styles.ButtonWithIcon}
`;

ButtonWithIcon.propTypes = {
  icon: PropTypes.element,
  theme: PropTypes.string,
  handleClick: PropTypes.func,
};

const shouldComponentUpdate = (prevProps, nextProps) =>
  prevProps.theme !== nextProps.theme ||
  prevProps.icon !== nextProps.icon ||
  prevProps.handleClick !== nextProps.handleClick;

export default ReactMemo(ButtonWithIcon, shouldComponentUpdate);
