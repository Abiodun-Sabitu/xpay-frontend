import React from "react";
import { Input } from "antd";
import type { GetProps } from "antd";

type OTPProps = GetProps<typeof Input.OTP>;

const OtpField: React.FC = () => {
  const onChange: OTPProps["onChange"] = (text) => {
    console.log("onChange:", text);
  };

  const sharedProps: OTPProps = {
    onChange,
  };

  return <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps} />;
};

export default OtpField;
