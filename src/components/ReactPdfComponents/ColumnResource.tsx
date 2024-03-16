import React from "react";
import { LayoutElement } from "../../utils/types";
import { Image, Text, View } from "@react-pdf/renderer";
import { ReactPDFMarkdown } from "../../utils/ReactPDFMarkdown";

import { processData } from "../../utils/paperless-data/paperless-process";
import {
  ExtractCheckboxData,
  ExtractChoiceSelectorData,
  ExtractInputData,
  ExtractRadioData,
  ExtractSelectData,
  convertToDatePicker,
  convertToTimePicker,
  extractTableData,
  prepareLinearGaugeData,
  transformSelectedEvents,
} from "../../utils/extractData/extractDataToComponent";
import {
  ActionButtons,
  Attachments,
  BasicRadioGroup,
  Camera,
  Checklist,
  ChoiceSelector,
  EmployeePicker,
  Input,
  Inspection,
  Label,
  LinearGauge,
  StatusComment,
  Table,
} from "./Components";
import { labelFontSize } from "../../globals.const";
import { dummyData } from "../../utils/componentsConst/Attachments";
import { dummyStatusCommentData } from "../../utils/componentsConst/StatusComment";
import { mockData } from "../../utils/componentsConst/EmployeePicker";
import { cameraMockData } from "../../utils/componentsConst/Camera";

export interface ColumnResourceProps {
  data: LayoutElement;
}

export const ColumnResource: React.FC<ColumnResourceProps> = React.memo(
  (props) => {
    const { data } = props;

    console.log("data", data);
    const resourceProcessData = processData.variablesList.find(
      (variable) => variable.name === data.id
    );
    const resourceProcessData_meta = processData.variablesList.find(
      (variable) => variable.name === data.id + "_meta"
    );
    if (resourceProcessData) {
      console.log("resourceProcessData", resourceProcessData);
    }
    if (resourceProcessData_meta) {
      console.log("resourceProcessData_meta", resourceProcessData_meta);
    }

    switch (data.type) {
      case "Input":
      case "InputNumber":
      case "TextArea":
        const { label, value } = ExtractInputData(
          data.meta,
          resourceProcessData?.value
        );
        return <Input label={label} value={value} key={data.id} />;
      case "TimePicker":
        const { label: timePickerLabel, value: timePickerValue } =
          ExtractInputData(data.meta, resourceProcessData?.value);
        return (
          <Input
            label={timePickerLabel}
            value={convertToTimePicker(timePickerValue)}
            key={data.id}
          />
        );
      case "Select":
        const { label: selectLabel, value: selectValue } = ExtractSelectData(
          data.meta,
          resourceProcessData?.value
        );
        return <Input label={selectLabel} value={selectValue} key={data.id} />;
      case "DatePicker":
        const { label: datePickerLabel, value: datePickerValue } =
          ExtractInputData(data.meta, resourceProcessData?.value);
        return (
          <Input
            label={datePickerLabel}
            value={convertToDatePicker(datePickerValue)}
            key={data.id}
          />
        );
      case "Label":
      case "Title":
        const { label: labelLabel, value: labelValue } = ExtractInputData(
          data.meta,
          resourceProcessData?.value
        );
        return <Label label={labelLabel} text={labelValue} key={data.id} />;
      case "Checkbox":
        const { label: checkboxLabel, options } = ExtractCheckboxData(
          data.meta,
          resourceProcessData?.value
        );
        return (
          <BasicRadioGroup key={data.id} data={options} label={checkboxLabel} />
        );
      case "Radio":
      case "GroupButton":
        const { label: radioLabel, options: radioOptions } = ExtractRadioData(
          data.meta,
          resourceProcessData?.value
        );
        return (
          <BasicRadioGroup
            label={radioLabel}
            data={radioOptions}
            vertical={false}
            key={data.id}
          />
        );

      case "ChoiceSelector":
        const { label: choiceSelectorLabel, selectedValue } =
          ExtractChoiceSelectorData(data.meta, resourceProcessData?.value);
        return (
          <ChoiceSelector
            label={choiceSelectorLabel}
            checkedValue={selectedValue}
            key={data.id}
          />
        );
      case "Photo":
      case "Image":
        return (
          <View style={{ flexDirection: "column", gap: 2 }}>
            <Text style={{ fontSize: labelFontSize }}>{data.meta.label}</Text>
            <Image src={"/photo.jpg"} />
          </View>
        );
      case "Table":
        console.log(data.meta, resourceProcessData?.value);
        const {
          columns: tableColumns,
          data: tableData,
          label: tableLabel,
          showCellNumbers,
          showHeader,
          showRowNumber,
        } = extractTableData(data.meta, resourceProcessData?.value || "");
        return (
          <Table
            label={tableLabel}
            columns={tableColumns}
            data={tableData}
            showCellNumbers={showCellNumbers}
            showHeader={showHeader}
            showRowNumbers={showRowNumber}
          />
        );
      case "LinearGauge":
        const {
          currentValue,
          unit,
          label: linearLabel,
          maxValue,
          minValue,
          ranges,
          showMinMax,
          showTresholds,
          target,
        } = prepareLinearGaugeData(data.meta);

        return (
          <LinearGauge
            label={linearLabel}
            unit={unit}
            currentValue={currentValue}
            minValue={minValue}
            maxValue={maxValue}
            ranges={ranges}
            showMinMax={showMinMax}
            showTresholds={showTresholds}
            target={target}
          />
        );
      case "Markdown":
        return <ReactPDFMarkdown data={data.meta.default.value.en} />;
      case "Checklist":
        const selectedValues = transformSelectedEvents(
          JSON.parse(resourceProcessData?.value || "")
        );
        return (
          <Checklist
            inputData={JSON.parse(resourceProcessData_meta?.value || "")}
            selectedValue={selectedValues}
            key={data.id}
          />
        );

      case "Attachments":
        return <Attachments data={dummyData} />;
      case "Inspection":
        return (
          <Inspection
            inspectionInput={JSON.parse(resourceProcessData_meta?.value || "")}
            selectedValues={JSON.parse(resourceProcessData?.value || "")}
          />
        );
      case "StatusComment":
        return (
          <StatusComment
            avatarSrc={dummyStatusCommentData.avatarSrc}
            comment={dummyStatusCommentData.comment}
          />
        );
      case "LoginButtonControl":
        return (
          <ActionButtons
            label={"Employees Login"}
            buttonNames={["Sign"]}
            stickToLeft
          />
        );
      case "EmployeePicker":
        return (
          <EmployeePicker
            label={mockData.label}
            employer={mockData.firmaZewnetrzna}
            employee={mockData.pracownik}
          />
        );
      case "Camera":
        //error when parsing data, that why there is a mock.
        return <Camera label={data.meta.label} data={cameraMockData} />;
      case "FilesAndForms":
      case "SpareParts":
      case "AssetPicker":
      case "CostControl":
      case "Periodicity":
      case "StatusHistory":
      case "ActionButtons":
      case "TaskList":
      case "WorkOrderInfo":
      case "GeneratedWorkOrders":
      case "CommentsThread":
      case "RelatedOrders":
      case "EmployeesLoginHistory":
      case "EmployeesLogin":
      case "ActivityPicker":
        return <Text>component not availavle</Text>;
      default:
        return <Text>component not availavle</Text>;
    }
  }
);
