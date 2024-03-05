import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";

type SectionsLayoutProps = {
  isMainLayout?: boolean;
  children: React.ReactNode;
};

const styles = StyleSheet.create({
  mainLayout: {
    backgroundColor: "white",
  },
  secondaryLayout: {
    backgroundColor: "#f3f3f3",
  },
});

export const SectionsLayout: React.FC<SectionsLayoutProps> = ({
  isMainLayout = false,
  children,
}) => {
  const layoutStyle = isMainLayout ? styles.mainLayout : styles.secondaryLayout;

  return <View style={layoutStyle}>{children}</View>;
};
