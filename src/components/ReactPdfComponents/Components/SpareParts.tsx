import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { labelFontSize, textFontSize } from "../../../globals.const";

const styles = StyleSheet.create({
  tableContainer: { flexDirection: "column" },
  headerRow: {
    flexDirection: "row",
    borderBottom: "1 solid #E4E4E4",
    backgroundColor: "#e8d8bc",
    marginBottom: 2,
    paddingBottom: 2,
  },
  dataRow: {
    flexDirection: "row",
    borderBottom: "1 solid #E4E4E4",
    marginBottom: 2,
    paddingBottom: 2,
  },
  sectionHeader: {
    borderBottom: "1 solid #E4E4E4",
    marginBottom: 3,
    paddingBottom: 3,
    paddingLeft: 8,
  },
  columnText: {
    flexBasis: "33%",
    flexGrow: 0,
    margin: 5,
    fontSize: labelFontSize,
    textTransform: "uppercase",
  },
  grayText: { color: "#808080" },
  sparePartsColumn: {
    flexDirection: "column",
    flexBasis: "33%",
    flexGrow: 0,
    margin: 5,
  },
  sparePartText: {
    fontSize: textFontSize,
    textTransform: "uppercase",
  },
});

export const SpareParts = ({ inputData }: { inputData: any }) => (
  <View style={styles.tableContainer}>
    <View style={styles.headerRow}>
      <Text style={styles.columnText}>Spare part</Text>
      <Text style={styles.columnText}>Location</Text>
      <Text style={styles.columnText}>Quantity</Text>
    </View>
    {inputData.map((section: any, index: number) => (
      <React.Fragment key={index}>
        <Text style={{ ...styles.sectionHeader, fontSize: textFontSize }}>
          {section.name}
        </Text>

        {section.items.map((item: any, itemIndex: number) => (
          <View key={itemIndex} style={styles.dataRow}>
            <View style={styles.sparePartsColumn}>
              {item.sparePart.map((part: string, partIndex: number) => (
                <Text
                  key={partIndex}
                  style={[
                    styles.sparePartText,
                    partIndex === item.sparePart.length - 1
                      ? styles.grayText
                      : {},
                  ]}
                >
                  {part}
                </Text>
              ))}
            </View>
            <Text style={[styles.columnText, { fontSize: textFontSize }]}>
              {item.location}
            </Text>
            <Text style={[styles.columnText, { fontSize: textFontSize }]}>
              {item.quantity}
            </Text>
          </View>
        ))}
      </React.Fragment>
    ))}
  </View>
);
