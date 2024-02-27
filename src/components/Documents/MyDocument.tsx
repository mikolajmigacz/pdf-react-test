import React from "react";
import { Document, Page } from "@react-pdf/renderer";
import { Row } from "../ReactPdfComponents/Row/Row";
import { RowTypeList } from "../ReactPdfComponents/Row/Row.types";
import { Section } from "../ReactPdfComponents/Section";

const rowTypes: RowTypeList[] = [
  "normal",
  "split",
  "split-left",
  "split-right",
  "three-columns",
  "three-columns-center",
];

export const MyDocument = () => (
  <Document>
    <Page style={{ padding: "5px" }} size="A4">
      <Section>
        {Object.values(rowTypes).map((type) => (
          <Row key={type} type={type} />
        ))}
        {Object.values(rowTypes).map((type) => (
          <Row key={type} type={type} />
        ))}
        {Object.values(rowTypes).map((type) => (
          <Row key={type} type={type} />
        ))}
        {Object.values(rowTypes).map((type) => (
          <Row key={type} type={type} />
        ))}
        {/* {text} */}
      </Section>
    </Page>
  </Document>
);
