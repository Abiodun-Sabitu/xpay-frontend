import React from "react";
import { Input } from "antd";
import { InputProps } from "antd"; // Importing the InputProps type for proper typing
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

interface PasswordFieldProps extends InputProps {
  placeholder?: string; // Optional placeholder prop
  prefix?: React.ReactNode; // Optional prefix prop, such as an icon
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  placeholder,
  prefix,
  ...rest
}) => {
  return (
    <Input.Password
      autoComplete="new-password"
      size="large"
      placeholder={placeholder}
      prefix={prefix}
      iconRender={(visible) =>
        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
      } // Toggle icon logic
      {...rest} // Spread other props like onChange, value, etc.
    />
  );
};

export default PasswordField;
