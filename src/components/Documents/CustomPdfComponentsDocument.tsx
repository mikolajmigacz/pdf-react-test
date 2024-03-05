import React from "react";
import { Document, Page, Image } from "@react-pdf/renderer";
import { Table } from "../ReactPdfComponents/Table/Table";
import { Checkbox } from "../ReactPdfComponents/Checkbox";
import { Input } from "../ReactPdfComponents/Input";
import { Row } from "../ReactPdfComponents/Row/Row";
import { Radio } from "../ReactPdfComponents/Radio";
import {
  BasicRadioGroup,
  basicRadioButtonsDataMock,
} from "../ReactPdfComponents/BasicRadioGroup";
import { Attachments, dummyData } from "../ReactPdfComponents/Attachments";
import {
  EmployeesLoginHistorycolumns,
  EmployeesLoginHistorydata,
} from "../ReactPdfComponents/Table/Table.data";
import {
  StatusComment,
  dummyStatusCommentData,
} from "../ReactPdfComponents/StatusComment";
import { ChoiceSelector } from "../ReactPdfComponents/ChoiceSelector";
import CostControl from "../ReactPdfComponents/CostControl";

export const CustomPdfComponentsDocument = () => {
  return (
    <Document>
      <Page
        style={{ padding: "5px", display: "flex", flexDirection: "column" }}
        size="A4"
      >
        <CostControl
          estimatedCost="30000"
          costs={[
            { name: "Spare parts", cost: "2500", color: "#8A2BE2" },
            { name: "Additional", cost: "200", color: "#FF69B4" },
            { name: "Clothes", cost: "1000", color: "blue" },
          ]}
          additionalCostComment="Some comment about the additional cost."
        />

        <ChoiceSelector />
        <StatusComment
          avatarSrc={dummyStatusCommentData.avatarSrc}
          comment={dummyStatusCommentData.comment}
        />
        <Attachments data={dummyData} />
        <Table
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
