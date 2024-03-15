import React from "react";

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
