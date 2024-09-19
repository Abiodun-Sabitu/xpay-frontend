import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Flex, Input } from "antd";
import PasswordField from "../../components/PasswordField";
import OTPBox from "./otpBox";
import { Link } from "react-router-dom";

const LoginUI: React.FC = () => {
  //For OTPBox
  const [isOTPBoxOpen, setOTPBox] = useState(false);

  const closeOTPBox = () => {
    setOTPBox(false); // Close OTPBox modal
  };

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    setOTPBox(true);
  };

  return (
    <>
      <Form name="login" initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="text-blue-700" />}
            placeholder="Username"
            autoComplete="new-password"
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <PasswordField
            prefix={<LockOutlined className="text-blue-700" />}
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox className="custom-checkbox text-blue-800">
                Remember me
              </Checkbox>
            </Form.Item>
            <span className="text-center text-blue-800 cursor-pointer">
              Forgot Password
            </span>
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button
            block
            type="primary"
            htmlType="submit"
            className="py-5 font-semibold"
            style={{
              backgroundColor: "#1e40af",
              borderColor: "#1e40af",
              color: "#fff",
            }}
          >
            Log in
          </Button>
          <div className="text-center text-blue-800 pt-4">
            <Link
              to="/register"
              className="text-center  font-medium cursor-pointer"
            >
              New User? Sign Up!
            </Link>
          </div>
        </Form.Item>
      </Form>
      <OTPBox visible={isOTPBoxOpen} onClose={closeOTPBox} />
    </>
  );
};

export default LoginUI;
