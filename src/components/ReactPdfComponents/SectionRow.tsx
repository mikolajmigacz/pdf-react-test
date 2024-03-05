import React from "react";
import { StyleSheet, View } from "@react-pdf/renderer";
import { LayoutElement, RowTypeList } from "../../utils/types";
import { RowFactory } from "./RowFactory";

export interface SectionRowProps {
  data: LayoutElement[];
  index: number;
  type: RowTypeList;
  id: string;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderStyle: "dotted",
    borderWidth: "1px",
  },
});

export const SectionRow: React.FC<SectionRowProps> = React.memo((props) => {
  const { id, data } = props;

  const indexes = [0, 1, 2];
  const columns = indexes.map((index) => data[index]);
  const [firstResource, secondResource, thirdResource] = columns.map(
    (column) => column?.resources ?? []
  );
  const colIds = columns.map((column) => column?.id ?? "");

  const component = (
    <>
      {RowFactory(props.type)(
        colIds,
        firstResource,
        secondResource,
        thirdResource
      )}
    </>
  );

  return <View style={styles.container}>{component}</View>;
});
