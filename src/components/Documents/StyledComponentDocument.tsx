import React, { useState, useEffect } from "react";
import { Document, Page } from "@react-pdf/renderer";
import Html from "react-pdf-html";
import {
  getCheckboxHTML,
  getInputHTML,
  getRadioGroupHTML,
  getTableHTML,
} from "../../utils/getHTML";
import {
  getMarkdownHTML,
  removePseudoClasses,
} from "../../utils/getStyledMarkdownHTML";
import { markdownContent } from "../../utils/const";
import { antdesignStyles } from "../../utils/antd.styles";

export const StyledComponentDocument = () => {
  const { styles, html } = getMarkdownHTML(markdownContent);
  // const {  html } = getInputHTML();
  // const { html } = getTableHTML();
  // const {  html } = getRadioGroupHTML();
  // const {  html } = getCheckboxHTML();

  console.log("style:", styles);
  console.log("html:", html);

  const myhtml = `<html>
  <body>
  <style>
${styles}
</style>
  ${html}
  </body>
  </html>`;

  return (
    <Document>
      <Page size="A4">
        <Html>{myhtml}</Html>
      </Page>
    </Document>
  );
};
