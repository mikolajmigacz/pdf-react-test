import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { labelFontSize } from "../../globals.const";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 2,
  },
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
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    height: "100%",
  },
  rangeLine: {
    position: "absolute",
    backgroundColor: "black",
    width: 1,
    height: "100%",
  },
  dottedLine: {
    position: "absolute",
    height: "100%",
    width: 1,
    backgroundColor: "transparent",
    borderStyle: "dotted",
    borderWidth: 1,
    borderColor: "black",
  },
  rangeValueText: {
    position: "absolute",
    fontSize: 10,
    marginTop: 22,
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
const getRangeLabelAndColor = (currentValue: number, ranges: any) => {
  for (let [min, max, label, leftOpened, rightOpened] of ranges) {
    const isInLeftBound = leftOpened ? currentValue > min : currentValue >= min;
    const isInRightBound = rightOpened
      ? currentValue < max
      : currentValue <= max;

    if (isInLeftBound && isInRightBound) {
      let color;
      switch (label) {
        case "success":
          color = "green";
          break;
        case "warning":
          color = "orange";
          break;
        case "error":
          color = "red";
          break;
        default:
          color = "green";
      }
      return { color };
    }
  }
  return { color: "grey" };
};

export const LinearGauge = ({
  label,
  unit,
  minValue,
  currentValue,
  target,
  maxValue,
  showMinMax = true,
  ranges = [],
  showTresholds,
}: {
  label: string;
  unit: string;
  minValue: number;
  currentValue: number;
  target: number;
  maxValue: number;
  showMinMax?: boolean;
  ranges?: number[];
  showTresholds?: boolean;
}) => {
  const filledPercentage = (currentValue / maxValue) * 100;
  const filledWidth = `${filledPercentage}%`;
  const targetPosition = (target / maxValue) * 100;

  const { color } = getRangeLabelAndColor(currentValue, ranges);

  return (
    <View style={styles.container} wrap={false}>
      <Text style={{ fontSize: labelFontSize }}>{label + ":"}</Text>
      <View style={styles.gaugeContainer}>
        {showMinMax && (
          <Text style={styles.minValueText}>{`${minValue} ${unit}`}</Text>
        )}
        <View style={styles.gaugeBarContainer}>
          <View
            style={[
              styles.filledGauge,
              { width: filledWidth, backgroundColor: color },
            ]}
          />
          {showTresholds &&
            ranges.map((range: any, index: number) => {
              if (range[1] === maxValue) return null;
              const position = (range[1] / maxValue) * 100;
              return (
                <>
                  <View
                    key={`line-${index}`}
                    style={[styles.rangeLine, { left: `${position}%` }]}
                  />
                  <Text
                    key={`text-${index}`}
                    style={[styles.rangeValueText, { left: `${position}%` }]}
                  >
                    {`${range[1]}`}
                  </Text>
                </>
              );
            })}
          {target && (
            <>
              <View
                style={[styles.dottedLine, { left: `${targetPosition}%` }]}
              />
              <Text
                style={[styles.rangeValueText, { left: `${targetPosition}%` }]}
              >
                {`${target} ${unit}`}
              </Text>
            </>
          )}
          <Text
            style={[styles.currentValueText, { left: `${filledPercentage}%` }]}
          >
            {`${currentValue} ${unit}`}
          </Text>
        </View>
        {showMinMax && (
          <Text style={styles.maxValueText}>{`${maxValue} ${unit}`}</Text>
        )}
      </View>
    </View>
  );
};
