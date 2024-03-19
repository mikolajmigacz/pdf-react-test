import React from "react";
import { View, Text, Image, StyleSheet } from "@react-pdf/renderer";
import { labelFontSize } from "../../../globals.const";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 2,
  },
  label: {
    fontSize: 12,
  },
  image: {
    maxHeight: "100px",
    maxWidth: "100px",
  },
});

export const Photo = ({ label, src }: { label: string; src: string }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, { fontSize: labelFontSize }]}>{label}</Text>
      <Image src={src} style={styles.image} />
    </View>
  );
};
