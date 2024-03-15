import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";
import { combineStyles, textFontSize } from "../../../globals.const";

const checkboxStyles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 8,
    height: 8,
    marginRight: 5,
    borderWidth: 1,
    borderColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  checkedX: {
    fontWeight: "ultrabold",
    fontSize: 4,
  },
  label: {
    fontSize: textFontSize,
  },
});

export const Checkbox = ({
  isChecked,
  label,
  styles,
}: {
  isChecked: boolean;
  label: string;
  styles?: Style | Style[];
}) => {
  const combinedStyles = combineStyles(
    checkboxStyles.checkboxContainer,
    Array.isArray(styles) ? combineStyles(...styles) : styles
  );

  return (
    <View style={combinedStyles}>
      <View style={checkboxStyles.checkbox}>
        {isChecked && <Text style={checkboxStyles.checkedX}>X</Text>}
      </View>
      <Text style={checkboxStyles.label}>{label}</Text>
    </View>
  );
};
