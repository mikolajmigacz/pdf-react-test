import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { labelFontSize, textFontSize } from "../../../globals.const";

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    marginBottom: 8,
  },
  table: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    fontWeight: "bold",
  },
  headerCell: {
    fontSize: labelFontSize,
    paddingVertical: 5,
    textAlign: "left",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    borderBottomStyle: "solid",
  },
  cell: {
    fontSize: textFontSize,
    paddingVertical: 5,
    textAlign: "left",
  },
  nameCell: {
    width: "30%",
  },
  pathCell: {
    width: "40%",
  },
  typeCell: {
    width: "15%",
  },
  statusCell: {
    width: "15%",
  },
});

export const Attachments = ({
  label,
  data,
}: {
  label: string;
  data: Array<{ name: string; path: string; type: string; status: string }>;
}) => (
  <View style={styles.table}>
    <Text style={styles.title}>{label}:</Text>
    <Text style={styles.title}>Files:</Text>
    <View wrap={false} style={styles.header}>
      <Text style={[styles.headerCell, styles.nameCell]}>Name</Text>
      <Text style={[styles.headerCell, styles.pathCell]}>Path</Text>
      <Text style={[styles.headerCell, styles.typeCell]}>Type</Text>
      <Text style={[styles.headerCell, styles.statusCell]}>Status</Text>
    </View>
    {data.map((row, i) => (
      <View wrap={false} style={styles.row} key={i}>
        {/* <Image style={[styles.cell, styles.iconCell]} src={"/attachment.jpg"} /> */}
        <Text style={[styles.cell, styles.nameCell]}>{row.name}</Text>
        <Text style={[styles.cell, styles.pathCell]}>{row.path}</Text>
        <Text style={[styles.cell, styles.typeCell]}>{row.type}</Text>
        <Text style={[styles.cell, styles.statusCell]}>{row.status}</Text>
      </View>
    ))}
  </View>
);
