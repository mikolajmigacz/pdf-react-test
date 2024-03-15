import React from "react";
import { Document, Font, Page, Text } from "@react-pdf/renderer";
import { Section } from "../ReactPdfComponents/Section";
import { SectionsLayout } from "../ReactPdfComponents/SectionLayout";
import { LayoutElement } from "../../utils/types";
import { paperlesslayout2 } from "../../utils/paperless-data/paperless-layout";

Font.register({
  family: "Roboto",
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
});

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
    <Page style={{ padding: "5px", fontFamily: "Roboto" }} size="A4">
      <SectionsLayout isMainLayout={true}>
        {renderSections(paperlesslayout2.data as LayoutElement[])}
      </SectionsLayout>
    </Page>
  </Document>
);
