import React from "react";
import { Document, Page } from "@react-pdf/renderer";
import { Row } from "../ReactPdfComponents/Row/Row";
import { Section } from "../ReactPdfComponents/Section";
import { RowTypeList } from "../../utils/types";

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
      {/* <Section>
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
      </Section> */}
    </Page>
  </Document>
);
