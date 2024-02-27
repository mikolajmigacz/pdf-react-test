import React from "react";
import ReactDOMServer from "react-dom/server";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ServerStyleSheet } from "styled-components";
import { StyledMarkdown } from "../components/Markdown/MarkdownPreview.styles";
import { colorSyntaxPlugin } from "../components/Markdown/MarkdownPreview.utils";

export function removePseudoClasses(styleTags: string) {
  const regex = /([^{]+)\:([^{]+){((?:[^{}]*{[^{}]*}|[^{}])*?)}/g;
  let cleanedStyles = styleTags.replace(regex, "");

  cleanedStyles = cleanedStyles.replace(/\s*{\s*}\s*/g, "");

  return cleanedStyles;
}

export const getMarkdownHTML = (value: string) => {
  const sheet = new ServerStyleSheet();

  try {
    const html = ReactDOMServer.renderToString(
      sheet.collectStyles(
        <StyledMarkdown>
          <ReactMarkdown remarkPlugins={[remarkGfm, colorSyntaxPlugin]}>
            {value}
          </ReactMarkdown>
        </StyledMarkdown>
      )
    );
    const styleTags = removePseudoClasses(sheet.getStyleTags());

    return { html, styles: styleTags };
  } catch (error) {
    console.error(error);
    return { html: "", styles: "" };
  } finally {
    sheet.seal();
  }
};
