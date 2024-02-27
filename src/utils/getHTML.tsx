import React from "react";
import ReactDOMServer from "react-dom/server";

import { CustomInput } from "../components/AntDesignComponents/CustomInput";
import { CustomTable } from "../components/AntDesignComponents/CustomTable";
import { ReactGroup } from "../components/AntDesignComponents/RadioGroup";
import { CustomCheckbox } from "../components/AntDesignComponents/CustomCheckbox";

export const getInputHTML = (): { html: string } => {
  const htmlString = ReactDOMServer.renderToString(
    <CustomInput defaultValue="default" title="title" />
  );

  return {
    html: htmlString,
  };
};

export const getTableHTML = (): { html: string } => {
  const htmlString = ReactDOMServer.renderToString(<CustomTable />);

  return {
    html: htmlString,
  };
};

export const getRadioGroupHTML = (): { html: string } => {
  const html = ReactDOMServer.renderToString(<ReactGroup />);

  return { html };
};

export const getCheckboxHTML = (): { html: string } => {
  const htmlString = ReactDOMServer.renderToString(<CustomCheckbox />);

  return { html: htmlString };
};
