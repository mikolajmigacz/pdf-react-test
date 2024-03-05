import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

type SectionMeta = {
  label: string;
  textSize?: number;
};

type SectionHeaderProps = {
  meta: SectionMeta;
  hideTitle?: boolean;
  children: React.ReactNode;
};

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  meta,
  hideTitle,
  children,
}) => {
  return (
    <View style={styles.headerContainer}>
      {!hideTitle && meta?.label ? (
        <Text style={{ ...styles.headerText, fontSize: meta.textSize || 20 }}>
          {meta.label}
        </Text>
      ) : null}
      {children}
    </View>
  );
};
