import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { LayoutElement } from "../../utils/types";
import { Column } from "./Column";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderStyle: "dotted",
    borderWidth: "1px",
  },
});

interface RowType {
  [key: string]: {
    columns: number;
    columnWidth?: string[];
  };
}

const ROW_TYPES: RowType = {
  normal: { columns: 1 },
  split: { columns: 2 },
  "split-left": { columns: 2, columnWidth: ["30%", "70%"] },
  "split-right": { columns: 2, columnWidth: ["70%", "30%"] },
  "three-columns": { columns: 3 },
  "three-columns-center": { columns: 3, columnWidth: ["15%", "70%", "15%"] },
};

export const RowFactory = (type: string) => {
  const rowType = ROW_TYPES[type];

  return (colIds: string[], ...res: LayoutElement[][]) => {
    const columnWidth = rowType?.columnWidth;
    const columns = rowType?.columns;

    return (
      <View style={styles.container}>
        {[...Array(columns)].map((_, i) => {
          const columnId = colIds[i];
          const columnResources = res[i];

          return (
            <Column
              key={columnId}
              id={columnId}
              data={columnResources}
              columnWidth={columnWidth?.[i] || "100%"}
            />
          );
        })}
      </View>
    );
  };
};
