import React from "react";
import { Document, Page } from "@react-pdf/renderer";
import { Table } from "../ReactPdfComponents/Table/Table";
import { Checkbox } from "../ReactPdfComponents/Checkbox";
import { InputField } from "../ReactPdfComponents/Input";
import { Row } from "../ReactPdfComponents/Row/Row";

export const CustomPdfComponentsDocument = () => (
  <Document>
    <Page
      style={{ padding: "5px", display: "flex", flexDirection: "column" }}
      size="A4"
    >
      <Table />
      <Checkbox isChecked={true} label="test checkbox" />
      <Checkbox isChecked={false} label="test checkbox2" />
      <InputField label="test label" value="test value" />
      <Row type="split"></Row>
    </Page>
  </Document>
);
