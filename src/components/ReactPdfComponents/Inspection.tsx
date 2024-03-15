import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { textFontSize } from "../../globals.const";
import { Input } from "./Input";

const styles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  valueContainer: { flexDirection: "row", justifyContent: "space-between" },
  label: { fontSize: textFontSize, marginBottom: 2, marginRight: 5 },
  value: { width: "90%", fontSize: textFontSize },
  gradeContainer: {
    width: 15,
    height: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
  grade: { fontSize: 10, textAlign: "center", color: "white" },
  gradeA: { backgroundColor: "green" },
  gradeB: { backgroundColor: "#ffbd71" },
  gradeC: { backgroundColor: "red" },
});
const gradeStyles: Record<string, Object> = {
  A: styles.gradeA,
  B: styles.gradeB,
  C: styles.gradeC,
};

const getValue = (value: string, param: any) => {
  if (param.valueType === "ENUM") {
    return (value = param.validator.properties.options.find(
      (option: any) => option.value === value
    ).label);
  }
  return value;
};

const mockValues: Record<string, Object> = {
  "Karta palety": {
    comment: "COMMMENT @%%",
    commentVisible: true,
    failureCausesVisible: false,
    inspectionValue: "C",
    value: "C",
  },
  "Schemat owijania": {
    commentVisible: false,
    failureCausesVisible: false,
    inspectionValue: "A",
    value: "A",
  },
  "Schemat paletyzacji": {
    comment: "OOL",
    commentVisible: true,
    failureCausesVisible: false,
    inspectionValue: "C",
    value: "C",
  },
  "Waga folii stretch (odczyt z owijarki)": {
    comment: "eh",
    commentVisible: true,
    failureCausesVisible: false,
    inspectionValue: "C",
    value: 167,
  },
  "Ładunek na palecie po owinięciu": {
    commentVisible: false,
    failureCausesVisible: false,
    inspectionValue: "A",
    value: "A",
  },
  "Ładunek na palecie przed owinięciem": {
    comment: "CO M AAA",
    commentVisible: true,
    failureCausesVisible: false,
    inspectionValue: "B",
    value: "B",
  },
};

export const Inspection = ({
  inspectionInput,
  selectedValues,
}: {
  inspectionInput: any;
  selectedValues: any;
}) => (
  <View>
    <Text>{inspectionInput.title}</Text>
    {inspectionInput.parameters.map((param: any, index: number) => {
      const value = getValue(selectedValues[param.name].value, param);
      return (
        <View key={param.id} style={styles.container}>
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.label}>{`${index + 1}. ${param.name}:`}</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>{value}</Text>
              <View
                style={[
                  styles.gradeContainer,
                  gradeStyles[selectedValues[param.name].inspectionValue] || {},
                ]}
              >
                <Text style={styles.grade}>
                  {selectedValues[param.name].inspectionValue}
                </Text>
              </View>
            </View>
            {selectedValues[param.name].commentVisible && (
              <Input
                label={`Comment for parameter '${param.name}'`}
                value={selectedValues[param.name].comment}
              />
            )}
          </View>
        </View>
      );
    })}
  </View>
);
