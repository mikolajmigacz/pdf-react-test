import React from "react";
import ReactDOMServer from "react-dom/server";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ServerStyleSheet } from "styled-components";
import { StyledMarkdown } from "../components/Markdown/MarkdownPreview.styles";
import { colorSyntaxPlugin } from "../components/Markdown/MarkdownPreview.utils";
import { Html } from "react-pdf-html";
import { View, Text } from "@react-pdf/renderer";
import { labelFontSize } from "../globals.const";

export interface ReactPDFMarkdownProps {
  label: string;
  data: string;
}

function removePseudoClasses(styleTags: string) {
  const regex = /([^{]+)\:([^{]+){((?:[^{}]*{[^{}]*}|[^{}])*?)}/g;
  let cleanedStyles = styleTags.replace(regex, "");

  cleanedStyles = cleanedStyles.replace(/\s*{\s*}\s*/g, "");

  return cleanedStyles;
}

export const Markdown: React.FC<ReactPDFMarkdownProps> = ({ label, data }) => {
  const sheet = new ServerStyleSheet();

  const html = ReactDOMServer.renderToString(
    sheet.collectStyles(
      <StyledMarkdown>
        <ReactMarkdown remarkPlugins={[remarkGfm, colorSyntaxPlugin]}>
          {data}
        </ReactMarkdown>
      </StyledMarkdown>
    )
  );
  const styleTags = removePseudoClasses(sheet.getStyleTags());
  const MarkdownHTML = `
    <body>
    ${styleTags}
    ${html}
    </body>`;

  return (
    <View style={{ flexDirection: "column", gap: 2 }}>
      <Text style={{ fontSize: labelFontSize }}>{label + ":"}</Text>
      <Html>{MarkdownHTML}</Html>
    </View>
  );
};
