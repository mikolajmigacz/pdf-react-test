import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { labelFontSize, textFontSize } from "../../../globals.const";

function lightenColor(hex: string, percent: number): string {
  percent = Math.min(100, Math.max(0, percent));
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);

  let adjust = (value: number) =>
    Math.round(value + (255 - value) * (percent / 100));

  r = adjust(r);
  g = adjust(g);
  b = adjust(b);
  return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
}

const styles = StyleSheet.create({
  section: {
    flexGrow: 1,
    flexDirection: "column",
  },
  rectangle: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: textFontSize - 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
    color: "#FF00FF",
  },
  workOrderName: {
    fontSize: labelFontSize,
  },
  workOrderData: {
    fontSize: textFontSize - 4,
  },
});

export const WorkOrderInfo = ({
  workOrder,
  description,
  statusColor,
  status,
}: {
  workOrder: string;
  description: string;
  statusColor: string;
  status: string;
}) => (
  <View style={styles.section}>
    <View style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
      <Text style={styles.workOrderName}>{workOrder}</Text>
      <Text
        style={[
          styles.rectangle,
          {
            backgroundColor: lightenColor(statusColor, 90),
            border: `0.5px solid ${statusColor}`,
          },
        ]}
      >
        {status}
      </Text>
    </View>
    <Text style={styles.workOrderData}>{description}</Text>
  </View>
);
