import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";

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
    fontSize: 10,
    paddingVertical: 5,
    textAlign: "left",
  },
  iconCell: { width: "4%", maxWidth: "100%", maxHeight: "100%" },
  nameCell: {
    width: "28%",
  },
  pathCell: {
    width: "38%",
  },
  typeCell: {
    width: "15%",
  },
  statusCell: {
    width: "15%",
  },
});

export const Attachments = ({
  data,
}: {
  data: Array<{ name: string; path: string; type: string; status: string }>;
}) => (
  <View style={styles.table}>
    <Text style={styles.title}>Attachments:</Text>
    <Text style={styles.title}>Files</Text>
    {/* <View style={styles.header}>
      <Text style={[styles.headerCell, styles.iconCell]} />
      <Text style={[styles.headerCell, styles.nameCell]}>Name</Text>
      <Text style={[styles.headerCell, styles.pathCell]}>Path</Text>
      <Text style={[styles.headerCell, styles.typeCell]}>Type</Text>
      <Text style={[styles.headerCell, styles.statusCell]}>Status</Text>
    </View> */}
    {data.map((row, i) => (
      <View style={styles.row} key={i}>
        <Image style={[styles.cell, styles.iconCell]} src={"/attachment.jpg"} />
        <Text style={[styles.cell, styles.nameCell]}>{row.name}</Text>
        <Text style={[styles.cell, styles.pathCell]}>{row.path}</Text>
        <Text style={[styles.cell, styles.typeCell]}>{row.type}</Text>
        <Text style={[styles.cell, styles.statusCell]}>{row.status}</Text>
      </View>
    ))}
  </View>
);

{
  /* <Image src={"/attachment.jpg"} style={styles.attachmentIcon} /> */
}
