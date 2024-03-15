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
