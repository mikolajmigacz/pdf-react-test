export type Meta = {
  label: string;
  default: { value: string };
  options?: { values: Option[] };
  placeholder?: string;
};

export type Option = {
  value: string;
  label?: string;
};

export type ExtractedData = {
  value?: string;
  label: string;
  options?: ExtractedOption[];
};

export type ExtractedOption = {
  checked: boolean;
  label: string;
};

export type LinearGaugeMeta = {
  label: string;
  unit: string;
  min: number;
  max: number;
  target: number;
  default: { value: number };
  showMinMax: boolean;
  ranges: any[];
  showTresholds: boolean;
};

export type InputMetaData = {
  tasks: Array<{
    subtasks: Array<{
      result: string;
      comment?: string;
      optionalCheckboxChecked?: boolean;
    }>;
  }>;
};

export type Output = Record<
  number,
  {
    result: string;
    optionalCheckboxChecked: boolean;
    comment: string;
  }
>;

export type TableMeta = {
  label: string;
  columns: Array<{ id: string; name: string; label: string }>;
  rows: {
    showCellNumbers: boolean;
    showRowNumber: boolean;
  };
  showHeader: boolean;
};

export type MetaType = {
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

export type InputMetaCheckboxData = {
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
