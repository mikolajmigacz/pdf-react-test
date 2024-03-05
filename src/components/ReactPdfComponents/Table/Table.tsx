import { Text, View, StyleSheet } from "@react-pdf/renderer";

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

export const Table = ({ columns, data }: { columns: any; data: any }) => {
  return (
    <View style={styles.table}>
      <View style={styles.header}>
        {columns.map((col: any) => (
          <Text
            style={[styles.cell, { flexBasis: `${100 / columns.length}%` }]}
            key={col.key}
          >
            {col.label}
          </Text>
        ))}
      </View>
      {data.map((row: any, i: number) => (
        <View style={styles.row} key={i}>
          {columns.map((col: any) => (
            <Text
              style={[styles.cell, { flexBasis: `${100 / columns.length}%` }]}
              key={col.key}
            >
              {row[col.key]}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
};
