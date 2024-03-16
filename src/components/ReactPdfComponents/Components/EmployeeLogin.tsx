import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { labelFontSize } from "../../../globals.const";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  initials: {
    color: "white",
    fontSize: labelFontSize,
  },
  addButton: {
    backgroundColor: "white",
    border: "1pt solid black",
  },
  addText: {
    color: "black",
    fontSize: labelFontSize,
  },
});

export const EmployeeLogin = ({
  users,
}: {
  users: Array<{ color: string; name: string }>;
}) => (
  <View style={styles.page}>
    {users.map((user) => {
      const initials = user.name
        .split(" ")
        .map((n) => n[0])
        .join("");
      return (
        <View
          style={[styles.circle, { backgroundColor: user.color }]}
          key={user.name}
        >
          <Text style={styles.initials}>{initials}</Text>
        </View>
      );
    })}
    <View style={[styles.circle, styles.addButton]}>
      <Text style={styles.addText}>+</Text>
    </View>
  </View>
);
