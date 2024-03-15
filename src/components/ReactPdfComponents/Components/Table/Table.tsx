import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { labelFontSize, textFontSize } from "../../../../globals.const";

const styles = StyleSheet.create({
  table: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#E0E0E0",
    textAlign: "center",
    fontWeight: "bold",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    borderBottomStyle: "solid",
  },
  cell: {
    flexGrow: 0,
    padding: 5,
    textAlign: "left",
  },
});

export const Table = ({
  label,
  columns,
  data,
  showCellNumbers = false,
  showRowNumbers = true,
  showHeader = true,
}: {
  label: string;
  columns: any;
  data: any;
  showCellNumbers?: boolean;
  showRowNumbers?: boolean;
  showHeader?: boolean;
}) => {
  const adjustedColumns = showRowNumbers
    ? [{ key: "rowNumber", label: "#" }, ...columns]
    : columns;
  const totalColumns = adjustedColumns.length;
  const nonRowNumberColumns = totalColumns - (showRowNumbers ? 1 : 0);
  const flexBasisRowNumber = `${10}%`;
  const flexBasisOther = `${90 / nonRowNumberColumns}%`;

  return (
    <View style={styles.table}>
      <Text style={{ fontSize: labelFontSize }}>{label + ":"}</Text>
      {showHeader && (
        <View style={styles.header}>
          {adjustedColumns.map((col: any) => (
            <Text
              style={[
                styles.cell,
                {
                  flexBasis:
                    col.key === "rowNumber"
                      ? flexBasisRowNumber
                      : flexBasisOther,
                  fontSize: labelFontSize,
                },
              ]}
              key={col.key || "rowNumber"}
            >
              {col.label}
            </Text>
          ))}
        </View>
      )}
      {data.map((row: any, rowIndex: number) => (
        <View style={styles.row} key={rowIndex}>
          {adjustedColumns.map((col: any, colIndex: number) => (
            <Text
              style={[
                styles.cell,
                {
                  flexBasis:
                    col.key === "rowNumber"
                      ? flexBasisRowNumber
                      : flexBasisOther,
                  fontSize: textFontSize,
                },
              ]}
              key={col.key || rowIndex}
            >
              {col.key === "rowNumber"
                ? rowIndex + 1
                : `${
                    showCellNumbers && col.key !== "rowNumber"
                      ? rowIndex * columns.length +
                        colIndex +
                        (showRowNumbers ? 0 : 1) +
                        ". "
                      : ""
                  }${row[col.key]}`}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
};
