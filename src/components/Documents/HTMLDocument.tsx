import { Document, Page } from "@react-pdf/renderer";
import Html from "react-pdf-html";

export const HTMLDocument = () => {
  const html = `
    <div style="display: flex; align-items: center; margin: 8px 0;">
      <div style="font-size: 15px; margin-right: 5px;">X</div>
      <label style="font-size: 15px;" >CheckboxLabel</label>
    </div>
  `;

  return (
    <Document>
      <Page size="A4">
        <Html>{html}</Html>
      </Page>
    </Document>
  );
};
