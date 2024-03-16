import React from "react";
import { Document, Page, Image, Font } from "@react-pdf/renderer";

import {
  taskList,
  tastList_meta,
} from "../../utils/componentsConst/tasklist.const";
import {
  ActionButtons,
  Attachments,
  BasicRadioGroup,
  Checkbox,
  CommentsThread,
  CostControl,
  EmployeeLogin,
  EmployeePicker,
  Input,
  Periodicity,
  SpareParts,
  StatusComment,
  Table,
  TaskList,
  WorkOrderInfo,
} from "../ReactPdfComponents/Components";
import {
  EmployeesLoginHistorycolumns,
  EmployeesLoginHistorydata,
  GeneratedWorkOrdersColumns,
  GeneratedWorkOrdersData,
} from "../../utils/componentsConst/Table.data";
import { Row } from "../ReactPdfComponents/Row/Row";
import { mockUsers } from "../../utils/componentsConst/EmployeeLogin";
import { mockData } from "../../utils/componentsConst/EmployeePicker";
import { mockComments } from "../../utils/componentsConst/CommentsThread";
import { mockProps } from "../../utils/componentsConst/WorkOrderInfo";
import {
  mockButtonNames,
  mockLabel,
} from "../../utils/componentsConst/ActionButtons";
import { mockInputData } from "../../utils/componentsConst/SpareParts";
import { dummyStatusCommentData } from "../../utils/componentsConst/StatusComment";
import { dummyData } from "../../utils/componentsConst/Attachments";
import { basicRadioButtonsDataMock } from "../../utils/componentsConst/BasicRadioGroup";

Font.register({
  family: "Roboto",
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
});

export const CustomPdfComponentsDocument = () => {
  return (
    <Document>
      <Page
        style={{
          padding: "5px",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Roboto",
        }}
        size="A4"
      >
        <EmployeeLogin users={mockUsers} />
        <EmployeePicker
          label={mockData.label}
          employer={mockData.firmaZewnetrzna}
          employee={mockData.pracownik}
        />
        <CommentsThread comments={mockComments} />
        <WorkOrderInfo
          description={mockProps.description}
          statusColor={mockProps.statusColor}
          status={mockProps.status}
          workOrder={mockProps.workOrder}
        />
        <ActionButtons
          label={"Employees Login"}
          buttonNames={["Sign"]}
          stickToLeft
        />
        <Table
          label="test"
          columns={GeneratedWorkOrdersColumns}
          data={GeneratedWorkOrdersData}
        />
        <ActionButtons label={mockLabel} buttonNames={mockButtonNames} />
        <TaskList taskList_meta={tastList_meta} taskList={taskList} />
        <SpareParts inputData={mockInputData} />
        {/* <Inspection /> */}
        {/* <Checklist /> */}
        <Periodicity
          dependentOnTime={true}
          startDate="2024-03-06"
          endDate="2024-04-06"
          repeatEvery={{ value: "1", timeUnit: "hours" }}
          workBefore={{ value: "2", timeUnit: "minutes" }}
          workAfter={{ value: "3", timeUnit: "values" }}
          generateBefore={{ value: "4", timeUnit: "simues" }}
          additionalOptions={true}
        />
        <CostControl
          estimatedCost="30000"
          costs={[
            { name: "Spare parts", cost: "2500", color: "#8A2BE2" },
            { name: "Additional", cost: "200", color: "#FF69B4" },
            { name: "Clothes", cost: "1000", color: "blue" },
          ]}
          additionalCostComment="Some comment about the additional cost."
        />
        {/* <ChoiceSelector /> */}
        <StatusComment
          avatarSrc={dummyStatusCommentData.avatarSrc}
          comment={dummyStatusCommentData.comment}
        />
        <Attachments data={dummyData} />
        <Table
          label="test"
          data={EmployeesLoginHistorydata}
          columns={EmployeesLoginHistorycolumns}
        />
        <Checkbox isChecked={true} label="test checkbox" />
        <Checkbox isChecked={false} label="test checkbox2" />
        <Input label="test label" value="test value" />
        <Image src={"/photo.jpg"} />
        <Row type="split"></Row>
        <Row type="split-left"></Row>
        <BasicRadioGroup
          data={basicRadioButtonsDataMock}
          label="RadioButtons label"
          vertical
        />
        <BasicRadioGroup
          data={basicRadioButtonsDataMock}
          label="RadioButtons label"
          vertical={false}
        />
      </Page>
    </Document>
  );
};
