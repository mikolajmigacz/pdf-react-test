import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { labelFontSize } from "../../../globals.const";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  text: {
    fontSize: labelFontSize + 5,
  },
});

export const Label = ({ label, text }: { label: string; text: string }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.text}>{text}</Text>
  </View>
);
