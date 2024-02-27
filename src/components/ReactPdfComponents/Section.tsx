import React from "react";
import { View } from "@react-pdf/renderer";
import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    borderStyle: "dotted",
    borderWidth: "1px",
    marginVertical: 5,
  },
});

export const Section = ({ children }: { children: any }) => (
  <View wrap={false} style={styles.container}>
    {children}
  </View>
);
