import React, { useState, useEffect } from "react";
import { Document, Page } from "@react-pdf/renderer";
import Html from "react-pdf-html";
import {
  getCheckboxHTML,
  getInputHTML,
  getRadioGroupHTML,
  getTableHTML,
} from "../../utils/getHTML";
import { ReactPDFMarkdown } from "../../utils/ReactPDFMarkdown";
import { markdownContent } from "../../utils/const";
import { antdesignStyles } from "../../utils/antd.styles";

export const StyledComponentDocument = () => {
  // const {  html } = getInputHTML();
  // const { html } = getTableHTML();
  // const {  html } = getRadioGroupHTML();
  // const {  html } = getCheckboxHTML();

  return (
    <Document>
      <Page size="A4">
        <ReactPDFMarkdown data="# WITAM" />
      </Page>
    </Document>
  );
};
