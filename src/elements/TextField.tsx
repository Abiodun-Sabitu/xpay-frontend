import React from "react";
import { Input } from "antd";
import { InputProps } from "antd";

interface Props {
  placeholder: string;
  type: "text" | "password" | "email" | "number"; // Restrict type to common input types
  prefix: InputProps["prefix"]; // Using InputProps to get the type of prefix prop
}

const TextField: React.FC<Props> = ({ placeholder, prefix, type }) => {
  return (
    <Input size="large" placeholder={placeholder} prefix={prefix} type={type} />
  );
};

export default TextField;
