import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { Input } from "./Input";
import { textFontSize } from "../../../globals.const";

interface Option {
  value: string;
  label: string;
}

interface Validator {
  properties: {
    options: Option[];
  };
}

interface Parameter {
  id: string;
  name: string;
  valueType: "ENUM" | string;
  validator: Validator;
}

interface InspectionInput {
  title: string;
  parameters: Parameter[];
}

interface SelectedValue {
  value: string;
  inspectionValue: string;
  comment: string;
  commentVisible: boolean;
}

interface InspectionProps {
  inspectionInput: InspectionInput;
  selectedValues: Record<string, SelectedValue>;
}

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

const getValue = (value: string, param: Parameter) => {
  if (param.valueType === "ENUM") {
    const option = param.validator.properties.options.find(
      (option: any) => option.value === value
    );
    return option ? option.label : value;
  }
  return value;
};

export const Inspection: React.FC<InspectionProps> = ({
  inspectionInput,
  selectedValues,
}) => (
  <View>
    <Text>{inspectionInput.title}</Text>
    {inspectionInput.parameters.map((param: any, index: number) => {
      const value = getValue(selectedValues[param.name].value, param);
      return (
        <View key={param.id} style={styles.container}>
          <View wrap={false} style={{ flexDirection: "column" }}>
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
