import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";

const radioStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioOuter: {
    width: 10,
    height: 10,
    marginRight: 5,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  radioInner: {
    width: 6,
    height: 6,
    backgroundColor: "black",
    borderRadius: 3,
  },
  label: {
    fontSize: 10,
  },
});

function combineStyles(...styles: (Style | undefined)[]): Style {
  return Object.assign({}, ...styles.filter(Boolean));
}

export const Radio = ({
  checked,
  label,
  styles,
}: {
  checked: boolean;
  label: string;
  styles?: Style | Style[];
}) => {
  const combinedStyles = combineStyles(
    radioStyles.container,
    Array.isArray(styles) ? combineStyles(...styles) : styles
  );

  return (
    <View style={combinedStyles}>
      <View style={radioStyles.radioOuter}>
        {checked ? <View style={radioStyles.radioInner} /> : null}
      </View>
      <Text style={radioStyles.label}>{label}</Text>
    </View>
  );
};
