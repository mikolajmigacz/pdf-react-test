import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { Radio } from "./Radio";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  label: {
    fontSize: 12,
    marginBottom: 4,
  },
  radioContainerVertical: {
    flexDirection: "column",
  },
  radioContainerHorizontal: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  radioHorizontal: {
    marginRight: 10,
  },
  radioVertical: {
    marginBottom: 2,
  },
});

export const BasicRadioGroup = ({
  label,
  data,
  vertical,
}: {
  label: string;
  data: { label: string; checked: boolean }[];
  vertical?: boolean;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={
          vertical
            ? styles.radioContainerVertical
            : styles.radioContainerHorizontal
        }
      >
        {data.map((item, index) => (
          <View
            key={index}
            style={vertical ? styles.radioVertical : styles.radioHorizontal}
          >
            <Radio label={item.label} checked={item.checked} />
          </View>
        ))}
      </View>
    </View>
  );
};
