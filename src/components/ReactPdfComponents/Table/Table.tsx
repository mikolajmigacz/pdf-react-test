import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { columns, data } from "./Table.data";

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
    flexGrow: 1,
    padding: 5,
    textAlign: "center",
  },
});

export const Table = () => (
  <View style={styles.table}>
    <View style={styles.header}>
      {columns.map((col: any) => (
        <Text style={styles.cell} key={col.key}>
          {col.label}
        </Text>
      ))}
    </View>
    {data.map((row: any, i: number) => (
      <View style={styles.row} key={i}>
        {columns.map((col: any) => (
          <Text style={styles.cell} key={col.key}>
            {row[col.key]}
          </Text>
        ))}
      </View>
    ))}
  </View>
);
