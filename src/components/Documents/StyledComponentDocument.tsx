import React, { useState, useEffect } from "react";
import { Document, Page } from "@react-pdf/renderer";
import Html from "react-pdf-html";
import {
  getCheckboxHTML,
  getInputHTML,
  getRadioGroupHTML,
  getTableHTML,
} from "../../utils/getHTML";
import { Markdown } from "../../utils/ReactPDFMarkdown";
import { markdownContent } from "../../utils/const";
import { antdesignStyles } from "../../utils/antd.styles";

export const StyledComponentDocument = () => {
  // const {  html } = getInputHTML();
  // const { html } = getTableHTML();
  // const {  html } = getRadioGroupHTML();
  // const {  html } = getCheckboxHTML();

  return (
    <Document>
      <Page size="A4">{/* <Markdown data="# WITAM" /> */}</Page>
    </Document>
  );
};
