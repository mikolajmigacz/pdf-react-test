import React from "react";
import { View, Text } from "@react-pdf/renderer";
import { StyleSheet } from "@react-pdf/renderer";
import { LayoutElement, RowTypeList } from "../../utils/types";
import { SectionRow } from "./SectionRow";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    borderStyle: "dotted",
    borderWidth: "1px",
  },
});

export interface SectionProps {
  id: string;
  index: number;
  data?: LayoutElement[];
}

export const Section: React.FC<SectionProps> = React.memo((props) => {
  const { id, data } = props;

  const component = (
    <>
      {data
        ? data.map((value, index) => (
            <SectionRow
              key={value.id}
              id={value.id}
              index={index}
              type={(value.type as RowTypeList) || "normal"}
              data={value.resources || []}
            />
          ))
        : []}
    </>
  );

  return <View style={styles.container}>{component}</View>;
});
