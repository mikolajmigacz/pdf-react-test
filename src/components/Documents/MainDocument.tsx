import React from "react";
import { Document, Page, Text } from "@react-pdf/renderer";
import { Section } from "../ReactPdfComponents/Section";
import { SectionsLayout } from "../ReactPdfComponents/SectionLayout";
import { LayoutElement } from "../../utils/types";
import { Layout } from "../../utils/paperless-layout";

const renderSections = (sections: LayoutElement[]) => {
  return sections.map((value, index) => (
    <Section
      key={value.id}
      index={index}
      id={value.id}
      data={value.resources}
    />
  ));
};

export const MainDocument = () => (
  <Document>
    <Page style={{ padding: "5px" }} size="A4">
      <SectionsLayout isMainLayout={true}>
        {renderSections(Layout.data as LayoutElement[])}
      </SectionsLayout>
    </Page>
  </Document>
);
