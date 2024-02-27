// https://github.com/sindresorhus/github-markdown-css/blob/main/github-markdown-light.css

import styled from "styled-components";

export const StyledMarkdown = styled.div`
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  width: 100%;
  margin: 0;
  color: #24292f;
  background-color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
  white-space: normal;

  details,
  figcaption,
  figure {
    display: block;
  }

  summary {
    display: list-item;
  }

  [hidden] {
    display: none !important;
  }

  a {
    background-color: transparent;
    color: #0969da;
    text-decoration: none;
  }

  a:active,
  a:hover {
    outline-width: 0;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: 600;
  }

  dfn {
    font-style: italic;
  }

  h1 {
    margin: 0.67em 0;
    font-weight: 600;
    padding-bottom: 0.3em;
    font-size: 2em;
    border-bottom: 1px solid hsla(210, 18%, 87%, 1);
  }

  mark {
    background-color: #fff8c5;
    color: #24292f;
  }

  small {
    font-size: 90%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
    max-width: 100%;
    box-sizing: content-box;
    background-color: #ffffff;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  figure {
    margin: 1em 40px;
  }

  hr {
    box-sizing: content-box;
    overflow: hidden;
    background: transparent;
    border-bottom: 1px solid hsla(210, 18%, 87%, 1);
    height: 0.25em;
    padding: 0;
    margin: 24px 0;
    background-color: #d0d7de;
    border: 0;
  }

  input {
    font: inherit;
    margin: 0;
    overflow: visible;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type="search"]::-webkit-search-cancel-button,
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  a:hover {
    text-decoration: underline;
  }

  hr::before {
    display: table;
    content: "";
  }

  hr::after {
    display: table;
    clear: both;
    content: "";
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
    display: block;
    width: max-content;
    max-width: 100%;
    overflow: auto;
  }

  td,
  th {
    padding: 0;
  }

  details summary {
    cursor: pointer;
  }

  details:not([open]) > *:not(summary) {
    display: none !important;
  }

  kbd {
    display: inline-block;
    padding: 3px 5px;
    font: 11px ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
      Liberation Mono, monospace;
    line-height: 10px;
    color: #24292f;
    vertical-align: middle;
    background-color: #f6f8fa;
    border: solid 1px rgba(175, 184, 193, 0.2);
    border-bottom-color: rgba(175, 184, 193, 0.2);
    border-radius: 6px;
    box-shadow: inset 0 -1px 0 rgba(175, 184, 193, 0.2);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  }

  h2 {
    font-weight: 600;
    padding-bottom: 0.3em;
    font-size: 1.5em;
    border-bottom: 1px solid hsla(210, 18%, 87%, 1);
  }

  h3 {
    font-weight: 600;
    font-size: 1.25em;
  }

  h4 {
    font-weight: 600;
    font-size: 1em;
  }

  h5 {
    font-weight: 600;
    font-size: 0.875em;
  }

  h6 {
    font-weight: 600;
    font-size: 0.85em;
    color: #57606a;
  }

  p {
    margin-top: 0;
    margin-bottom: 10px;
  }

  blockquote {
    margin: 0;
    padding: 0 1em;
    color: #57606a;
    border-left: 0.25em solid #d0d7de;
  }

  ul,
  ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 2em;
  }

  ol ol,
  ul ol {
    list-style-type: lower-roman;
  }

  ul ul ol,
  ul ol ol,
  ol ul ol,
  ol ol ol {
    list-style-type: lower-alpha;
  }

  dd {
    margin-left: 0;
  }

  tt,
  code {
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
      Liberation Mono, monospace;
    font-size: 12px;
  }

  pre {
    margin-top: 0;
    margin-bottom: 0;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
      Liberation Mono, monospace;
    font-size: 12px;
    word-wrap: normal;
  }

  ::placeholder {
    color: #6e7781;
    opacity: 1;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    margin: 0;
    -webkit-appearance: none;
    appearance: none;
  }

  a:not([href]) {
    color: inherit;
    text-decoration: none;
  }

  .anchor {
    float: left;
    padding-right: 4px;
    margin-left: -20px;
    line-height: 1;
  }

  .anchor:focus {
    outline: none;
  }

  p,
  blockquote,
  ul,
  ol,
  dl,
  table,
  pre,
  details {
    margin-top: 0;
    margin-bottom: 16px;
  }

  blockquote > :first-child {
    margin-top: 0;
  }

  blockquote > :last-child {
    margin-bottom: 0;
  }

  sup > a::before {
    content: "[";
  }

  sup > a::after {
    content: "]";
  }

  h1:hover .anchor,
  h2:hover .anchor,
  h3:hover .anchor,
  h4:hover .anchor,
  h5:hover .anchor,
  h6:hover .anchor {
    text-decoration: none;
  }

  h1 tt,
  h1 code,
  h2 tt,
  h2 code,
  h3 tt,
  h3 code,
  h4 tt,
  h4 code,
  h5 tt,
  h5 code,
  h6 tt,
  h6 code {
    padding: 0 0.2em;
    font-size: inherit;
  }

  ul.no-list,
  ol.no-list {
    padding: 0;
    list-style-type: none;
  }

  ol[type="1"] {
    list-style-type: decimal;
  }

  ol[type="a"] {
    list-style-type: lower-alpha;
  }

  ol[type="i"] {
    list-style-type: lower-roman;
  }

  div > ol:not([type]) {
    list-style-type: decimal;
  }

  ul ul,
  ul ol,
  ol ol,
  ol ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  li > p {
    margin-top: 16px;
  }

  li + li {
    margin-top: 0.25em;
  }

  dl {
    padding: 0;
  }

  dl dt {
    padding: 0;
    margin-top: 16px;
    font-size: 1em;
    font-style: italic;
    font-weight: 600;
  }

  dl dd {
    padding: 0 16px;
    margin-bottom: 16px;
  }

  table th {
    font-weight: 600;
  }

  table th,
  table td {
    padding: 6px 13px;
    border: 1px solid #d0d7de;
  }

  table tr {
    background-color: #ffffff;
    border-top: 1px solid hsla(210, 18%, 87%, 1);
  }

  table tr:nth-child(2n) {
    background-color: #f6f8fa;
  }

  table img {
    background-color: transparent;
  }

  img[align="right"] {
    padding-left: 20px;
  }

  img[align="left"] {
    padding-right: 20px;
  }

  span.frame {
    display: block;
    overflow: hidden;
  }

  span.frame > span {
    display: block;
    float: left;
    width: auto;
    padding: 7px;
    margin: 13px 0 0;
    overflow: hidden;
    border: 1px solid #d0d7de;
  }

  span.frame span img {
    display: block;
    float: left;
  }

  span.frame span span {
    display: block;
    padding: 5px 0 0;
    clear: both;
    color: #24292f;
  }

  span.align-center {
    display: block;
    overflow: hidden;
    clear: both;
  }

  span.align-center > span {
    display: block;
    margin: 13px auto 0;
    overflow: hidden;
    text-align: center;
  }

  span.align-center span img {
    margin: 0 auto;
    text-align: center;
  }

  span.align-right {
    display: block;
    overflow: hidden;
    clear: both;
  }

  span.align-right > span {
    display: block;
    margin: 13px 0 0;
    overflow: hidden;
    text-align: right;
  }

  span.align-right span img {
    margin: 0;
    text-align: right;
  }

  span.float-left {
    display: block;
    float: left;
    margin-right: 13px;
    overflow: hidden;
  }

  span.float-left span {
    margin: 13px 0 0;
  }

  span.float-right {
    display: block;
    float: right;
    margin-left: 13px;
    overflow: hidden;
  }

  span.float-right > span {
    display: block;
    margin: 13px auto 0;
    overflow: hidden;
    text-align: right;
  }

  code,
  tt {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    background-color: rgba(175, 184, 193, 0.2);
    border-radius: 6px;
  }

  code br,
  tt br {
    display: none;
  }

  del code {
    text-decoration: inherit;
  }

  pre code {
    font-size: 100%;
  }

  pre > code {
    padding: 0;
    margin: 0;
    word-break: normal;
    white-space: pre;
    background: transparent;
    border: 0;
  }

  pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f6f8fa;
    border-radius: 6px;
  }

  pre code,
  pre tt {
    display: inline;
    max-width: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    line-height: inherit;
    word-wrap: normal;
    background-color: transparent;
    border: 0;
  }

  .footnotes {
    font-size: 12px;
    color: #57606a;
    border-top: 1px solid #d0d7de;
  }

  .footnotes ol {
    padding-left: 16px;
  }

  .footnotes li {
    position: relative;
  }

  .footnotes li:target::before {
    position: absolute;
    top: -8px;
    right: -8px;
    bottom: -8px;
    left: -24px;
    pointer-events: none;
    content: "";
    border: 2px solid #0969da;
    border-radius: 6px;
  }

  .footnotes li:target {
    color: #24292f;
  }

  .task-list-item {
    list-style-type: none;
  }

  .task-list-item label {
    font-weight: 400;
  }

  .task-list-item.enabled label {
    cursor: pointer;
  }

  .task-list-item + .task-list-item {
    margin-top: 3px;
  }

  .task-list-item .handle {
    display: none;
  }

  .task-list-item-checkbox {
    margin: 0 0.2em 0.25em -1.6em;
    vertical-align: middle;
  }

  .contains-task-list:dir(rtl) .task-list-item-checkbox {
    margin: 0 -1.6em 0.25em 0.2em;
  }
`;
