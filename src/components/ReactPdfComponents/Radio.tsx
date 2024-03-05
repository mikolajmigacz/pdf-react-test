import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
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

export const Radio = ({
  checked,
  label,
}: {
  checked: boolean;
  label: string;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.radioOuter}>
        {checked ? <View style={styles.radioInner} /> : null}
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};
