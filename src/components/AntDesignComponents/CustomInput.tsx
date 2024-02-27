import React from "react";
import { Input, Typography } from "antd";
import "antd/dist/reset.css";
import "../../../node_modules/antd/dist/reset.css";

export const CustomInput = ({
  title,
  defaultValue,
}: {
  title: string;
  defaultValue: string;
}) => (
  <div>
    <Typography.Title level={3}>{title}</Typography.Title>
    <Input
      count={{
        show: true,
        max: 10,
      }}
      defaultValue={defaultValue}
    />
  </div>
);
