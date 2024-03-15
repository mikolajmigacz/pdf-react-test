import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { Input } from "./Input";

const styles = StyleSheet.create({
  container: { flexDirection: "column", marginBottom: 2, gap: 10 },
  label: { fontSize: 10, marginBottom: 2 },
  value: { fontSize: 10 },
  initialsCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  initialsText: { color: "#FFFFFF", fontSize: 10, textAlign: "center" },
  employeeValueContainer: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
});

interface Employer {
  label: string;
  value: string;
}
interface Employee {
  circleColor: string;
  value: string;
  label: string;
}
interface EmployeePickerProps {
  label: string;
  employer?: Employer;
  employee?: Employee;
}

export const EmployeePicker: React.FC<EmployeePickerProps> = ({
  label,
  employer,
  employee,
}) => {
  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}:</Text>
      {employer?.value && (
        <Input label={employer.label} value={employer.value} />
      )}
      {employee?.value && (
        <View>
          <Text style={{ ...styles.value, marginBottom: 3 }}>
            {employee.label}:
          </Text>
          <View style={styles.employeeValueContainer}>
            <View
              style={{
                ...styles.initialsCircle,
                backgroundColor: employee.circleColor,
              }}
            >
              <Text style={styles.initialsText}>
                {getInitials(employee.value)}
              </Text>
            </View>
            <Text style={styles.value}>{employee.value}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export const mockData = {
  label: "Przypisany",
  firmaZewnetrzna: { label: "Firma zewnętrzna:", value: "Cegielec" },
  pracownik: {
    circleColor: "#FF6347",
    value: "Paweł Słabyk",
    label: "Pracownik",
  },
};
