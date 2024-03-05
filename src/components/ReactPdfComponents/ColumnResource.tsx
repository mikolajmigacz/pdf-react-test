import React from "react";
import { LayoutElement } from "../../utils/types";
import { Checkbox } from "./Checkbox";
import { Input } from "./Input";
import { Table } from "./Table/Table";
import { LinearGauge } from "./LinearGauge";
import { Image } from "@react-pdf/renderer";
import { ReactPDFMarkdown } from "../../utils/ReactPDFMarkdown";
import { BasicRadioGroup, basicRadioButtonsDataMock } from "./BasicRadioGroup";
import {
  EmployeesLoginHistorycolumns,
  EmployeesLoginHistorydata,
} from "./Table/Table.data";

export interface ColumnResourceProps {
  data: LayoutElement;
}

export const ColumnResource: React.FC<ColumnResourceProps> = React.memo(
  (props) => {
    const { data } = props;

    switch (data.type) {
      case "Input":
      case "InputNumber":
      case "TextArea":
      case "TimePicker":
      case "Select":
      case "DatePicker":
      case "Label":
      case "Title":
      case "AssetPicker":
      case "StatusHistory":
      case "CommentsThread":
        return <Input label="label" value="value" key={data.id} />;
      case "Checkbox":
      case "Radio":
      case "GroupButton":
        return (
          <BasicRadioGroup
            label="RadioGroup label"
            data={basicRadioButtonsDataMock}
            vertical={false}
            key={data.id}
          />
        );
      case "ChoiceSelector":
        return (
          <BasicRadioGroup
            label="ChoiceSelector label"
            data={basicRadioButtonsDataMock}
            vertical
            key={data.id}
          />
        );
      case "Photo":
        return <Image src={"/photo.jpg"} />;
      case "Table":
        return (
          <Table
            columns={EmployeesLoginHistorycolumns}
            data={EmployeesLoginHistorydata}
          />
        );
      case "LinearGauge":
        return <LinearGauge currentValue={150} minValue={0} maxValue={300} />;
      case "Markdown":
        return <ReactPDFMarkdown data={"# SIEMANKO ## SIEMANKO MNIEJSZE"} />;
      default:
        return <Checkbox isChecked={true} label="label" key={data.id} />;
    }
  }
);
