export type Id = string;

export type LayoutElement = {
  id: Id;
  index: number;
  resources?: LayoutElement[];
  meta?: any;
  type?: RowTypeList | SupportedControlsEnum;
};

export type SupportedControlsEnum =
  | "Input"
  | "InputNumber"
  | "TextArea"
  | "Checkbox"
  | "Checklist"
  | "FilesAndForms"
  | "SpareParts"
  | "Select"
  | "TimePicker"
  | "DatePicker"
  | "Radio"
  | "GroupButton"
  | "Label"
  | "Title"
  | "Text"
  | "Photo"
  | "Table"
  | "LinearGauge"
  | "Image"
  | "InfoImage"
  | "Video"
  | "Attachments"
  | "InfoAttachments"
  | "Inspection"
  | "Markdown"
  | "AssetPicker"
  | "CostControl"
  | "Periodicity"
  | "StatusHistory"
  | "ActionButtons"
  | "TaskList"
  | "WorkOrderInfo"
  | "GeneratedWorkOrders"
  | "CommentsThread"
  | "EmployeePicker"
  | "InfoMarkdown"
  | "RelatedOrders"
  | "LoginButtonControl"
  | "StatusComment"
  | "EmployeesLoginHistory"
  | "EmployeesLogin"
  | "ActivityPicker"
  | "ChoiceSelector"
  | "Camera";

export type RowTypeList =
  | "normal" // 1 - 100% width
  | "split" // 2 - both 50 %
  | "split-left" // 2 - 25% and 75%
  | "split-right" // 2 - 75% and 25%
  | "three-columns" // 3 - each 33.33%
  | "three-columns-center"; // 3 - 12.5% , 75% and 12.5%
