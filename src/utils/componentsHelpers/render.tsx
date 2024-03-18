import { Key } from "react";
import { Input } from "../../components/ReactPdfComponents/Components/Input";
import {
  convertToDatePicker,
  convertToTimePicker,
  extractCheckboxData,
  extractChoiceSelectorData,
  extractInputData,
  extractRadioData,
  extractSelectData,
} from "../extractData/extractDataToComponent";
import { Meta } from "../extractData/types";
import {
  BasicRadioGroup,
  ChoiceSelector,
  Label,
} from "../../components/ReactPdfComponents/Components";

export const renderInputBasedComponents = (
  data: { type: any; id: Key | null | undefined },
  value: any,
  meta: any
) => {
  const { label, value: extractedValue } = extractInputData(meta, value);
  switch (data.type) {
    case "TimePicker":
      return (
        <Input
          label={label}
          value={convertToTimePicker(extractedValue || "")}
          key={data.id}
        />
      );
    case "DatePicker":
      return (
        <Input
          label={label}
          value={convertToDatePicker(extractedValue || "")}
          key={data.id}
        />
      );
    default:
      return <Input label={label} value={extractedValue || ""} key={data.id} />;
  }
};

export const renderSelectComponent = (
  data: { id: Key | null | undefined },
  value: any,
  meta: any
) => {
  const { label, value: selectValue } = extractSelectData(meta, value);
  return <Input label={label} value={selectValue || ""} key={data.id} />;
};

export const renderLabelComponent = (
  data: { id: any },
  value: string | undefined,
  meta: Meta
) => {
  const { label, value: text } = extractInputData(meta, value);
  return <Label label={label} text={text || ""} key={data.id} />;
};

export const renderRadioGroupComponent = (
  data: { type: string; id: any },
  value: any,
  meta: any
) => {
  const { label, options } =
    data.type === "Checkbox"
      ? extractCheckboxData(meta, value)
      : extractRadioData(meta, value);
  return <BasicRadioGroup label={label} data={options || []} key={data.id} />;
};

export const renderChoiceSelectorComponent = (
  data: { id: any },
  value: any,
  meta: any
) => {
  const { label, value: selectedValue } = extractChoiceSelectorData(
    meta,
    value
  );
  return (
    <ChoiceSelector label={label} checkedValue={selectedValue} key={data.id} />
  );
};
