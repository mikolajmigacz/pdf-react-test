import { Style } from "@react-pdf/types";

export const textFontSize = 10;
export const labelFontSize = 12;

export const combineStyles = (...styles: (Style | undefined)[]): Style => {
  return Object.assign({}, ...styles.filter(Boolean));
};
