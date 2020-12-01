import { css } from "styled-components";
import { THEME_COLOR, THEME } from "../../constants";

export const Search = css`
     position: absolute;
     left: 50%;
    transform: translate(-50%, 0);
    .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon
    .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] {
    padding-right: 65px;
    height: 31px;
    border: 2px solid ${(props) => {
      return props.theme === THEME.DEFAULT
        ? THEME_COLOR.DARK
        : THEME_COLOR.DEFAULT;
    }}}}
  }
  .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]
    .MuiAutocomplete-input:first-child {
    padding-left: 6px;
    height: 14px;
    padding: none;
    padding: 0;
  }
  .MuiInputLabel-outlined {
    z-index: 1;
    transform: translate(14px, 20px) scale(1);
    pointer-events: none;
    top: -11px;
  }
  .MuiFormLabel-root.Mui-focused {
    display: none;
  }
  .PrivateNotchedOutline-legendLabelled-3 > span {
    display: none;
  }
  .MuiFormLabel-root.Mui-focused{
    color:white !important;
  }
  .MuiSvgIcon-root {
  color:${(props) => {
    return props.theme === THEME.DEFAULT
      ? THEME_COLOR.DARK
      : THEME_COLOR.DEFAULT;
  }}}}
}
  .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child {
    color:${(props) => {
      return props.theme === THEME.DEFAULT
        ? THEME_COLOR.DARK
        : THEME_COLOR.DEFAULT;
    }}}}

    .MuiInputLabel-outlined {
      color:${(props) => {
        return props.theme === THEME.DEFAULT
          ? THEME_COLOR.DARK
          : THEME_COLOR.DEFAULT;
      }}}}
    }
    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline{
      border:none !important;
    }
    .MuiInputLabel-outlined.MuiInputLabel-shrink {
      display:none;
  }
}
`;
