import { extractData } from "../extractData/extractDataToComponent";
import { processData } from "../paperless-data/paperless-process";

export const componentMap = {
  Input: [
    "Input",
    "InputNumber",
    "TextArea",
    "TimePicker",
    "Select",
    "DatePicker",
  ],
  Label: ["Label", "Title"],
  BasicRadioGroup: ["Checkbox", "Radio", "GroupButton"],
  ChoiceSelector: ["ChoiceSelector"],
  Photo: ["Photo", "Image"],
  Table: ["Table"],
  LinearGauge: ["LinearGauge"],
  Markdown: ["Markdown"],
  Checklist: ["Checklist"],
  Attachments: ["Attachments"],
  Inspection: ["Inspection"],
  StatusComment: ["StatusComment"],
  ActionButtons: ["LoginButtonControl"],
  EmployeePicker: ["EmployeePicker"],
  Camera: ["Camera"],
  Default: [
    "FilesAndForms",
    "SpareParts",
    "AssetPicker",
    "CostControl",
    "Periodicity",
    "StatusHistory",
    "ActionButtons",
    "TaskList",
    "WorkOrderInfo",
    "GeneratedWorkOrders",
    "CommentsThread",
    "RelatedOrders",
    "EmployeesLoginHistory",
    "EmployeesLogin",
    "ActivityPicker",
  ],
};

export const PDFSupportedComponents = [
  "Input",
  "InputNumber",
  "TextArea",
  "TimePicker",
  "Select",
  "DatePicker",
  "Label",
  "Title",
  "Checkbox",
  "Radio",
  "GroupButton",
  "ChoiceSelector",
  "Photo",
  "Image",
  "Table",
  "LinearGauge",
  "Markdown",
  "Checklist",
  "Attachments",
  "Inspection",
  "StatusComment",
  "LoginButtonControl",
  "EmployeePicker",
  "Camera",
];

export const getComponentData = (data: any) => {
  const resource = processData.variablesList.find(
    (variable) => variable.name === data.id
  );
  const resourceMeta = processData.variablesList.find(
    (variable) => variable.name === data.id + "_meta"
  );
  const { ...props } = extractData[data.type as keyof typeof extractData](
    data.meta,
    resource,
    resourceMeta
  );
  return { ...props };
};

export const renderComponent = (
  id: string,
  Component: any,
  componentProps: any
) => <Component {...componentProps} key={id} />;
