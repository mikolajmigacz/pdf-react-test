import React from "react";
import {
  InputMetaData,
  Meta,
  ExtractedData,
  LinearGaugeMeta,
  TableMeta,
  Option,
  Output,
  AttachmentsFiles,
} from "./types";

const extractDefaultValue = (meta: Meta, processDataValue?: string) =>
  processDataValue ?? meta.default.value;
const extractLabelValue = (meta: Meta, processDataValue?: string) => ({
  label: meta.label,
  value: extractDefaultValue(meta, processDataValue),
});

export const extractInputData = (
  meta: Meta,
  processDataValue?: string
): ExtractedData => extractLabelValue(meta, processDataValue);

export const extractCheckboxData = (
  meta: Meta,
  processDataValue?: string
): ExtractedData => ({
  label: meta.label,
  options: meta.options?.values.map((element: Option) => ({
    checked: element.value === extractDefaultValue(meta, processDataValue),
    label: element.label || element.value,
  })),
});

export const extractSelectData = (
  meta: Meta,
  processDataValue?: string
): ExtractedData => {
  const value =
    processDataValue || meta.default.value || meta.placeholder || "";
  return { label: meta.label, value };
};

export const convertToTimePicker = (dateTimeString: string): string => {
  const date = new Date(dateTimeString);
  const hours = date.getUTCHours() + 1;
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

export const convertToDatePicker = (dateTimeString: string): string => {
  const date = new Date(dateTimeString);
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1; // January is 0!
  const day = date.getUTCDate();
  return `${month.toString().padStart(2, "0")}/${day
    .toString()
    .padStart(2, "0")}/${year}`;
};

export const extractRadioData = extractCheckboxData;

export const extractChoiceSelectorData = extractLabelValue;

export const prepareLinearGaugeData = (meta: LinearGaugeMeta) => ({
  ...meta,
  currentValue: meta.default.value,
});

export const extractChecklistData = (
  input: InputMetaData | undefined
): Output | {} => {
  if (!input) {
    return {};
  }
  let key = 1;
  const output: Output = {};

  input.tasks.forEach((task) => {
    task.subtasks.forEach((subtask) => {
      output[key++] = {
        result: subtask.result,
        optionalCheckboxChecked: subtask.optionalCheckboxChecked ?? false,
        comment: subtask.comment ?? "",
      };
    });
  });

  return output;
};

export const extractTableData = (meta: TableMeta, value: string) => {
  if (!value) {
    return {
      label: meta.label,
      columns: meta.columns.map((col) => ({
        key: col.id,
        label: col.label,
      })),
      data: [],
      showHeader: true,
      showCellNumbers: false,
      showRowNumber: false,
    };
  }
  const columns = meta.columns.map((col) => ({
    key: col.name,
    label: col.label,
  }));
  const data = JSON.parse(value).map((record: any) =>
    columns.reduce((acc: any, col) => {
      acc[col.key] = record[col.key].value;
      return acc;
    }, {})
  );

  return {
    label: meta.label,
    columns,
    data,
    showHeader: meta.showHeader,
    showCellNumbers: meta.rows.showCellNumbers,
    showRowNumber: meta.rows.showRowNumber,
  };
};
export const extractAttachmentsData = (files: Array<AttachmentsFiles>): any => {
  const data = files.map((file) => ({
    name: file.name,
    path: file.path,
    type: "File",
    status: file.status,
  }));
  return data;
};
