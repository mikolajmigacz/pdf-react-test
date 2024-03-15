import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { labelFontSize, textFontSize } from "../../../globals.const";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  containerHorizontal: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: labelFontSize,
    marginBottom: 2,
  },
  labelHorizontal: {
    marginRight: 5,
  },
  value: {
    fontSize: textFontSize,
  },
});

export const Input = ({
  label,
  value,
  horizontal = false,
}: {
  label: string;
  value: string;
  horizontal?: boolean;
}) => (
  <View style={horizontal ? styles.containerHorizontal : styles.container}>
    <Text
      style={[
        styles.label,
        horizontal && styles.labelHorizontal ? styles.labelHorizontal : {},
      ]}
    >
      {label + ":"}
    </Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);
