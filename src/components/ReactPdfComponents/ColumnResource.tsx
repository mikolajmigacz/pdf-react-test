import React from "react";
import { LayoutElement } from "../../utils/types";
import { View } from "@react-pdf/renderer";
import * as Components from "./Components";
import {
  componentMap,
  getComponentData,
  renderComponent,
} from "../../utils/componentsHelpers/render";

export interface ColumnResourceProps {
  data: LayoutElement;
}

export const ColumnResource: React.FC<ColumnResourceProps> = React.memo(
  ({ data }) => {
    const { type, id } = data;
    const componentKey =
      Object.keys(componentMap).find((key) =>
        componentMap[key as keyof typeof componentMap].includes(type || "")
      ) || "Default";

    const isDefaultComponent = componentKey === "Default";
    const componentProps = isDefaultComponent ? {} : getComponentData(data);

    if (isDefaultComponent || !componentProps) {
      return <View />;
    }

    const Component = Components[componentKey as keyof typeof Components];
    return renderComponent(id, Component, componentProps);
  }
);
