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

export const mockLabel = "Action Buttons Label";
export const mockButtonNames = [
  "AC1",
  "AC2",
  "AC3",
  "AC4",
  "AC5",
  "AC6",
  "AC7",
  "AC8",
  "AC9",
  "AC10",
  "AC11",
  "AC12",
  "AC13",
  "AC14",
  "AC15",
  "AC16",
  "AC17",
  "AC18",
  "AC19",
  "AC20",
  "AC21",
  "AC22",
  "AC23",
  "AC24",
  "AC25",
  "AC26",
  "AC27",
  "AC28",
  "AC29",
  "AC30",
  "AC31",
  "AC32",
];
