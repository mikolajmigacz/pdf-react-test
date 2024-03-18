import React from "react";
import { LayoutElement } from "../../utils/types";
import { Image, Text, View } from "@react-pdf/renderer";
import { ReactPDFMarkdown } from "../../utils/ReactPDFMarkdown";

import { processData } from "../../utils/paperless-data/paperless-process";
import {
  convertToDatePicker,
  convertToTimePicker,
  extractAttachmentsData,
  extractCheckboxData,
  extractChecklistData,
  extractChoiceSelectorData,
  extractInputData,
  extractRadioData,
  extractSelectData,
  extractTableData,
  prepareLinearGaugeData,
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

export interface ColumnResourceProps {
  data: LayoutElement;
}

export const ColumnResource: React.FC<ColumnResourceProps> = React.memo(
  (props) => {
    const { data } = props;

    const resourceProcessData = processData.variablesList.find(
      (variable) => variable.name === data.id
    );
    const resourceProcessData_meta = processData.variablesList.find(
      (variable) => variable.name === data.id + "_meta"
    );

    switch (data.type) {
      case "Input":
      case "InputNumber":
      case "TextArea":
        const { label, value } = extractInputData(
          data.meta,
          resourceProcessData?.value
        );
        return <Input label={label} value={value || ""} key={data.id} />;
      case "TimePicker":
        const { label: timePickerLabel, value: timePickerValue } =
          extractInputData(data.meta, resourceProcessData?.value);
        return (
          <Input
            label={timePickerLabel}
            value={convertToTimePicker(timePickerValue || "")}
            key={data.id}
          />
        );
      case "Select":
        const { label: selectLabel, value: selectValue } = extractSelectData(
          data.meta,
          resourceProcessData?.value
        );
        return (
          <Input label={selectLabel} value={selectValue || ""} key={data.id} />
        );
      case "DatePicker":
        const { label: datePickerLabel, value: datePickerValue } =
          extractInputData(data.meta, resourceProcessData?.value);
        return (
          <Input
            label={datePickerLabel}
            value={convertToDatePicker(datePickerValue || "")}
            key={data.id}
          />
        );
      case "Label":
      case "Title":
        const { label: labelLabel, value: labelValue } = extractInputData(
          data.meta,
          resourceProcessData?.value
        );
        return (
          <Label label={labelLabel} text={labelValue || ""} key={data.id} />
        );
      case "Checkbox":
        const { label: checkboxLabel, options } = extractCheckboxData(
          data.meta,
          resourceProcessData?.value
        );
        return (
          <BasicRadioGroup
            key={data.id}
            data={options || []}
            label={checkboxLabel}
          />
        );
      case "Radio":
      case "GroupButton":
        const { label: radioLabel, options: radioOptions } = extractRadioData(
          data.meta,
          resourceProcessData?.value
        );
        return (
          <BasicRadioGroup
            label={radioLabel}
            data={radioOptions || []}
            vertical={false}
            key={data.id}
          />
        );

      case "ChoiceSelector":
        const { label: choiceSelectorLabel, value: selectedValue } =
          extractChoiceSelectorData(data.meta, resourceProcessData?.value);
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
          max,
          min,
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
            minValue={min}
            maxValue={max}
            ranges={ranges}
            showMinMax={showMinMax}
            showTresholds={showTresholds}
            target={target}
          />
        );
      case "Markdown":
        return <ReactPDFMarkdown data={data.meta.default.value.en} />;
      case "Checklist":
        const selectedValues = extractChecklistData(
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
        if (!resourceProcessData) return <View></View>;
        const attachmentData = extractAttachmentsData(
          JSON.parse(resourceProcessData.value).files
        );
        return <Attachments label={data.meta.label} data={attachmentData} />;
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
        if (!resourceProcessData) return <View></View>;
        const cameraData = JSON.parse(resourceProcessData?.value || "");
        return <Camera label={data.meta.label} data={cameraData.value} />;
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
        return <View></View>;
      default:
        return <Text>component not availavle</Text>;
    }
  }
);
