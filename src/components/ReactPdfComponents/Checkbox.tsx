import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
    marginRight: 5,
    borderWidth: 1,
    borderColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  checkedX: {
    fontWeight: "bold",
    fontSize: "10pt",
  },
});

export const Checkbox = ({
  isChecked,
  label,
}: {
  isChecked: boolean;
  label: string;
}) => (
  <View style={styles.checkboxContainer}>
    <View style={styles.checkbox}>
      {isChecked && <Text style={styles.checkedX}>X</Text>}
    </View>
    <Text>{label}</Text>
  </View>
);
