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
import { dummyStatusCommentData } from "../componentsConst/StatusComment";
import { mockData } from "../componentsConst/EmployeePicker";

const extractDefaultValue = (meta: Meta, processDataValue?: string) =>
  processDataValue ? processDataValue : meta.default.value;

export const extractValues = (meta: Meta, processData?: any) => {
  return {
    label: meta.label,
    value: extractDefaultValue(meta, processData ? processData?.value : ""),
  };
};

const extractTitleAndLabelValues = (meta: Meta, processData?: any) => ({
  label: meta.label,
  text: extractDefaultValue(meta, processData ? processData.default.value : ""),
});
export const extractInputData = (
  meta: Meta,
  processData?: any
): ExtractedData => extractValues(meta, processData.value || {});

export const extractTextAreaData = (
  meta: Meta,
  processData?: any
): ExtractedData => extractValues(meta, processData ? processData.default : "");

export const extractCheckboxData = (
  meta: Meta,
  processData?: any
): ExtractedData => ({
  label: meta.label,
  data: meta.options
    ? meta.options?.values.map((element: Option) => ({
        checked:
          element.value ===
          extractDefaultValue(meta, processData ? processData.value : ""),
        label: element.label || element.value,
      }))
    : [],
});

export const extractRadioData = (
  meta: Meta,
  processData?: any
): ExtractedData => {
  return {
    label: meta.label,
    data: meta.options
      ? meta.options?.values.map((element: Option) => ({
          checked:
            element.value ===
            extractDefaultValue(meta, processData ? processData.value : ""),
          label: element.label || element.value,
        }))
      : [],
  };
};

export const extractSelectData = (meta: Meta, process?: any): ExtractedData => {
  const value = process.value || meta.default.value || meta.placeholder || "";
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

export const extractChoiceSelectorData = (meta: Meta, processData?: any) => {
  return {
    label: meta.label,
    checkedValue: extractDefaultValue(meta, processData.value || ""),
  };
};

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

export const extractTableData = (meta: TableMeta, process: any) => {
  if (!process) {
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
  const data = JSON.parse(process.value).map((record: any) =>
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

export const extractData = {
  Input: extractInputData,
  InputNumber: extractInputData,
  TextArea: extractTextAreaData,
  TimePicker: (meta: any, process: any) => ({
    ...extractInputData(meta, process.value),
    value: convertToTimePicker(process.value),
  }),
  Select: extractSelectData,
  DatePicker: (meta: any, process: any) => ({
    ...extractInputData(meta, process.value),
    value: convertToDatePicker(process.value),
  }),
  Label: extractTitleAndLabelValues,
  Title: extractTitleAndLabelValues,
  Checkbox: extractCheckboxData,
  Radio: extractRadioData,
  GroupButton: extractRadioData,
  ChoiceSelector: extractChoiceSelectorData,
  Table: extractTableData,
  LinearGauge: prepareLinearGaugeData,
  Checklist: (meta: any, process: any, metaProcess: any) => ({
    inputData: JSON.parse(metaProcess.value),
    selectedValue: extractChecklistData(JSON.parse(process.value)),
  }),
  Attachments: (meta: any, process: any) => ({
    label: meta.label,
    data: extractAttachmentsData(JSON.parse(process.value).files),
  }),
  Inspection: (meta: any, process: any, metaProcess: any) => ({
    inspectionInput: JSON.parse(metaProcess.value),
    selectedValues: JSON.parse(process.value),
  }),
  Camera: (meta: any, process: any) => {
    if (!process) return {};
    return {
      data: JSON.parse(process?.value || "").value,
      label: meta.label,
    };
  },
  Markdown: (meta: any, value: any) => ({
    label: meta.label,
    data: meta.default.value.en,
  }),
  StatusComment: (meta: any, value: any) => {
    return {
      avatarSrc: dummyStatusCommentData.avatarSrc,
      comment: dummyStatusCommentData.comment,
    };
  },
  LoginButtonControl: (meta: any, value: any) => {
    return {
      label: "Employees Login",
      buttonNames: ["Sign"],
      stickToLeft: true,
    };
  },
  EmployeePicker: (meta: any, value: any) => {
    return {
      label: mockData.label,
      employer: mockData.employer,
      employee: mockData.employee,
    };
  },
  Photo: (meta: any, value: any) => {
    return {
      label: meta.label,
      src: "/photo.jpg",
    };
  },
  Image: (meta: any, value: any) => {
    return {
      label: meta.label,
      src: "/photo.jpg",
    };
  },
};
