import React, { useCallback } from "react";
import Switch from "@material-ui/core/Switch";
import { ReactMemo } from "../../../src/hooks";
import * as PropTypes from "prop-types";
import { THEME } from "../../constants";
import styled from "styled-components";
import * as styles from "./styles";

const Switches = styled(({ className, theme, onChange }) => {
  return (
    <div {...{ className }}>
      <Switch
        checked={theme === THEME.DEFAULT}
        onChange={useCallback(() => {
          onChange(theme === THEME.DARK ? THEME.DEFAULT : THEME.DARK);
        }, [theme, onChange])}
      />
    </div>
  );
})`
  ${styles.Switches}
`;

Switches.propTypes = {
  theme: PropTypes.string,
  onChange: PropTypes.func,
};

const shouldComponentUpdate = (prevProps, nextProps) =>
  prevProps.theme !== nextProps.theme ||
  prevProps.onChange !== nextProps.onChange;

export default ReactMemo(Switches, shouldComponentUpdate);
