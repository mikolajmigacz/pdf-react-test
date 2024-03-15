import React from "react";
import { StyleSheet, View, Text } from "@react-pdf/renderer";
import { LayoutElement } from "../../utils/types";
import { ColumnResource } from "./ColumnResource";

export interface ColumnProps {
  data: LayoutElement[];
  columnWidth: string;
  id: string;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderStyle: "dotted",
    borderWidth: "1px",
  },
});

export const Column: React.FC<ColumnProps> = React.memo((props) => {
  const component = (
    <>
      {props.data
        ? props.data.map((value, index) => (
            <ColumnResource key={value.id} data={value} />
          ))
        : []}
    </>
  );

  return (
    <View style={[styles.container, { width: props.columnWidth }]}>
      {component}
    </View>
  );
});
