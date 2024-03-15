import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { CustomInput } from "../../AntDesignComponents/CustomInput";
import { Table } from "../Table/Table";
import { Checkbox } from "../Checkbox";
import { RadioGroup, dataRadioGroup } from "../RadioGroup";
import { LinearGauge } from "../LinearGauge";
import { RowTypeList } from "../../../utils/types";
import {
  EmployeesLoginHistorycolumns,
  EmployeesLoginHistorydata,
} from "../Table/Table.data";

const marginsStyle: {
  marginVertical: number;
  marginHorizontal: number;
} = {
  marginVertical: 5,
  marginHorizontal: 5,
};

const styles = StyleSheet.create({
  container: { ...marginsStyle, flexDirection: "row" },
  column: { borderStyle: "dotted", borderWidth: "1px", marginHorizontal: 2 },
});

const generateRows = (type: RowTypeList) => {
  switch (type) {
    case "normal":
      return (
        <View style={{ width: "100%", ...styles.column }}>
          <Table
            label="test label"
            columns={EmployeesLoginHistorycolumns}
            data={EmployeesLoginHistorydata}
          />
        </View>
      );
    case "split":
      return (
        <>
          <View style={{ width: "50%", ...styles.column }}>
            <Table
              label="test label"
              columns={EmployeesLoginHistorycolumns}
              data={EmployeesLoginHistorydata}
            />
          </View>
          <View style={{ width: "50%", ...styles.column }}>
            <Checkbox isChecked label="label" />
          </View>
        </>
      );
    case "split-left":
      return (
        <>
          <View style={{ width: "25%", ...styles.column }}>
            <LinearGauge
              label="test"
              unit="pt"
              currentValue={150}
              maxValue={300}
              minValue={0}
              target={200}
            />
          </View>
          <View style={{ width: "75%", ...styles.column }}>
            <RadioGroup
              options={dataRadioGroup.options}
              selectedValue={dataRadioGroup.selectedValue}
            />
            <LinearGauge
              target={200}
              label="test"
              unit="pt"
              currentValue={150}
              maxValue={300}
              minValue={0}
            />
          </View>
        </>
      );
    case "split-right":
      return (
        <>
          <View style={{ width: "75%", ...styles.column }}>
            <Table
              label="test label"
              columns={EmployeesLoginHistorycolumns}
              data={EmployeesLoginHistorydata}
            />
          </View>
          <View style={{ width: "25%", ...styles.column }}>
            <Text>Split Right Row Right</Text>
          </View>
        </>
      );
    case "three-columns":
      return (
        <>
          {[1, 2, 3].map((num) => (
            <View key={num} style={{ width: "33.33%", ...styles.column }}>
              <Text>Three Columns Row {num}</Text>
            </View>
          ))}
        </>
      );
    case "three-columns-center":
      return (
        <>
          <View style={{ width: "12.5%", ...styles.column }}>
            <Text>Three Columns Center Row 1</Text>
          </View>
          <View style={{ width: "75%", ...styles.column }}>
            <Text>Three Columns Center Row 2</Text>
          </View>
          <View style={{ width: "12.5%", ...styles.column }}>
            <Text>Three Columns Center Row 3</Text>
          </View>
        </>
      );
    default:
      return null;
  }
};

export const Row = ({ type }: { type: RowTypeList }) => (
  <View style={styles.container}>{generateRows(type)}</View>
);
