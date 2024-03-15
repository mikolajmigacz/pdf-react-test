export const ExtractInputData = (
  meta: any,
  processDataValue?: string
): { value: string; label: string } => {
  let defaultValue = meta.default.value;
  if (processDataValue) {
    defaultValue = processDataValue;
  }
  return { value: defaultValue, label: meta.label };
};

export const ExtractCheckboxData = (
  meta: any,
  processDataValue?: string
): { label: string; options: { checked: boolean; label: any }[] } => {
  const options: { checked: boolean; label: any }[] = [];
  meta.options.values.forEach((element: any) => {
    options.push({
      checked: element.value === meta.default.value ? true : false,
      label: element.label ? element.label : element.value,
    });
  });

  return { label: meta.label, options };
};

export const ExtractSelectData = (
  meta: any,
  processDataValue?: string
): { value: string; label: string } => {
  let defaultValue = meta.default.value;
  if (processDataValue) {
    defaultValue = processDataValue;
  }
  if (!defaultValue) {
    defaultValue = meta.placeholder;
  }
  return { value: defaultValue, label: meta.label };
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

export const ExtractRadioData = (
  meta: any,
  processDataValue?: string
): { label: string; options: { checked: boolean; label: any }[] } => {
  const options: { checked: boolean; label: any }[] = [];

  if (processDataValue) {
    meta.default.value = processDataValue;
  }
  meta.options.values.forEach((element: any) => {
    options.push({
      checked: element.value === meta.default.value ? true : false,
      label: element.label ? element.label : element.value,
    });
  });

  return { label: meta.label, options };
};

export const ExtractChoiceSelectorData = (
  meta: any,
  processDataValue?: string
): { label: string; selectedValue: string } => {
  const selectedValue = processDataValue
    ? processDataValue
    : meta.default.value;

  return { label: meta.label, selectedValue };
};

export const prepareLinearGaugeData = (meta: any) => {
  const {
    max: maxValue,
    min: minValue,
    label,
    ranges,
    target,
    default: { value: currentValue },
    unit,
    showTresholds,
  } = meta;

  return {
    label,
    unit,
    minValue,
    target,
    maxValue,
    currentValue,
    showMinMax: meta.showMinMax,
    ranges,
    showTresholds,
  };
};

type InputMetaData = {
  customValidationError: boolean;
  globalSignedBy: null;
  tasks: Array<{
    id: number;
    subtasks: Array<{
      id: number;
      result: string;
      comment?: string;
      optionalCheckboxChecked?: boolean;
    }>;
  }>;
};

type Output = Record<
  number,
  { result: string; optionalCheckboxChecked: boolean; comment: string }
>;

export const transformSelectedEvents = (
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

type MetaType = {
  rows: {
    canAddRows: boolean;
    rowsNumber: number;
    showRowNumber: boolean;
    showCellNumbers: boolean;
    highlightRowOnAutofill: boolean;
  };
  label: string;
  columns: Array<{
    id: string;
    name: string;
    label: string;
    cellType: string;
  }>;
  autofill: {
    url: string;
    enabled: boolean;
    polling: boolean;
    dependencies: Array<any>;
  };
  tableMode: string;
  showHeader: boolean;
  controlType: string;
};

export const extractTableData = (meta: MetaType, value: string) => {
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
