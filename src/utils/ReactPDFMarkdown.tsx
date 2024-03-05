import React from "react";
import ReactDOMServer from "react-dom/server";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ServerStyleSheet } from "styled-components";
import { StyledMarkdown } from "../components/Markdown/MarkdownPreview.styles";
import { colorSyntaxPlugin } from "../components/Markdown/MarkdownPreview.utils";
import { Html } from "react-pdf-html";

export interface ReactPDFMarkdownProps {
  data: string;
}

function removePseudoClasses(styleTags: string) {
  const regex = /([^{]+)\:([^{]+){((?:[^{}]*{[^{}]*}|[^{}])*?)}/g;
  let cleanedStyles = styleTags.replace(regex, "");

  cleanedStyles = cleanedStyles.replace(/\s*{\s*}\s*/g, "");

  return cleanedStyles;
}

export const ReactPDFMarkdown: React.FC<ReactPDFMarkdownProps> = (props) => {
  const sheet = new ServerStyleSheet();

  const html = ReactDOMServer.renderToString(
    sheet.collectStyles(
      <StyledMarkdown>
        <ReactMarkdown remarkPlugins={[remarkGfm, colorSyntaxPlugin]}>
          {props.data}
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

  return <Html>{MarkdownHTML}</Html>;
};
