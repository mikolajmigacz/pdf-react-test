import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { StyledMarkdown } from "./MarkdownPreview.styles";
import { colorSyntaxPlugin } from "./MarkdownPreview.utils";
type MarkdownPreviewProps = {
  value: string;
};

export const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ value }) => {
  return (
    <StyledMarkdown>
      <ReactMarkdown remarkPlugins={[remarkGfm, colorSyntaxPlugin]}>
        {value}
      </ReactMarkdown>
    </StyledMarkdown>
  );
};
