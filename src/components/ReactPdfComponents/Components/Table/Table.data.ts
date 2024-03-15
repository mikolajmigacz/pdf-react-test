import { duration } from "html2canvas/dist/types/css/property-descriptors/duration";

export const data = [
  { id: 1, name: "John Doe", age: 28, job: "Engineer" },
  { id: 2, name: "Jane Doe", age: 32, job: "Designer" },
];

export const columns = [
  { label: "ID", key: "id" },
  { label: "Name", key: "name" },
  { label: "Age", key: "age" },
  { label: "Job", key: "job" },
];

export const EmployeesLoginHistorydata = [
  {
    id: 1,
    user: "John Doe",
    date_from: "28 styczeń",
    date_to: "29 styczeń",
    duration: "1d 1h",
  },
  {
    id: 2,
    user: "John Doe2",
    date_from: "28 luty",
    date_to: "29 luty",
    duration: "1h",
  },
  {
    id: 3,
    user: "John Doe3",
    date_from: "28 marzec",
    date_to: "29 marzec",
    duration: "45 min",
  },
];

export const EmployeesLoginHistorycolumns = [
  { label: "User", key: "user" },
  { label: "Date from", key: "date_from" },
  { label: "Date to", key: "date_to" },
  { label: "Duration", key: "duration" },
];

export const GeneratedWorkOrdersData = [
  {
    work_order: "WO001",
    planned_start_date: "2023-09-01",
    asset: "Pump A",
    status: "Scheduled",
  },
  {
    work_order: "WO002",
    planned_start_date: "2023-09-05",
    asset: "Valve B",
    status: "In Progress",
  },
  {
    work_order: "WO003",
    planned_start_date: "2023-09-10",
    asset: "Conveyor C",
    status: "Completed",
  },
];

export const GeneratedWorkOrdersColumns = [
  { label: "Work order", key: "work_order" },
  { label: "Planned start date", key: "planned_start_date" },
  { label: "Asset", key: "asset" },
  { label: "Status", key: "status" },
];
