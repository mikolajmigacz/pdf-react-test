import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { labelFontSize, textFontSize } from "../../../globals.const";

const styles = StyleSheet.create({
  buttonLabel: {
    marginBottom: 8,
    fontSize: labelFontSize,
  },
  buttonRow: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 8,
  },
  button: {
    margin: 2,
    padding: "1px 3px",
    border: "1px solid black",
    borderRadius: 3,
  },
  buttonText: {
    fontSize: textFontSize,
  },
});

export const ActionButtons = ({ label, buttonNames, stickToLeft }: any) => {
  return (
    <View>
      <Text style={styles.buttonLabel}>{`${label}:`}</Text>
      <View
        style={[
          styles.buttonRow,
          { justifyContent: stickToLeft ? "flex-start" : "flex-end" },
        ]}
      >
        {buttonNames.map((name: string, index: number) => (
          <View key={index} style={styles.button}>
            <Text style={styles.buttonText}>{name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};
