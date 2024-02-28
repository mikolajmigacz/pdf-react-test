import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  gaugeContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  gaugeBarContainer: {
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    flexGrow: 1,
    marginHorizontal: 2,
    position: "relative",
  },
  filledGauge: {
    backgroundColor: "green",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    height: "100%",
  },
  minValueText: {
    fontSize: 10,
  },
  maxValueText: {
    fontSize: 10,
  },
  currentValueText: {
    position: "absolute",
    fontSize: 10,
    top: 3,
  },
});

export const LinearGauge = ({
  minValue,
  currentValue,
  maxValue,
}: {
  minValue: number;
  currentValue: number;
  maxValue: number;
}) => {
  const filledPercentage = (currentValue / maxValue) * 100;
  const filledWidth = `${filledPercentage}%`;
  let currentValueLeft = "";
  if (filledPercentage < 50) {
    currentValueLeft = `${filledPercentage + 15}%`;
  } else {
    currentValueLeft = `${filledPercentage - 15}%`;
  }

  return (
    <View style={styles.gaugeContainer}>
      <Text style={styles.minValueText}>{minValue}</Text>
      <View style={styles.gaugeBarContainer}>
        <View style={[styles.filledGauge, { width: filledWidth }]} />
        <Text style={[styles.currentValueText, { left: currentValueLeft }]}>
          {currentValue}
        </Text>
      </View>
      <Text style={styles.maxValueText}>{maxValue}</Text>
    </View>
  );
};
