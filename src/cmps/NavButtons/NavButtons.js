import React from "react";
import { isEqual } from "lodash";
import * as PropTypes from "prop-types";
import { ReactMemo } from "../../../src/hooks";
import ButtonWithIcon from "../ButtonWithIcon";
import { getRandomId } from "../.././helpers";
import * as styles from "./styles";
import styled from "styled-components";

const NavButtons = styled(({ className, theme, icons, handleClick }) => {
  return (
    <div {...{ className }}>
      {icons &&
        icons.map((icon) => (
          <ButtonWithIcon key={getRandomId()} {...{ theme, icon,handleClick }} />
        ))}
    </div>
  );
})`
  ${styles.NavButtons}
`;

NavButtons.propTypes = {
  theme: PropTypes.string,
  icons: PropTypes.arrayOf(PropTypes.element),
  handleClick: PropTypes.func
};

const shouldComponentUpdate = (prevProps, nextProps) =>
  prevProps.theme !== nextProps.theme ||
  prevProps.handleClick !== nextProps.handleClick ||
  !isEqual(prevProps.icons, nextProps.icons);

export default ReactMemo(NavButtons, shouldComponentUpdate);
