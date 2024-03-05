import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 10,
    marginBottom: 4,
  },
  input: {
    fontSize: 10,
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    minHeight: 20,
  },
});

export const Input = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.input}>
      <Text>{value}</Text>
    </View>
  </View>
);
