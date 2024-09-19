import React, { useState } from "react";
import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  ForwardFilled,
  BackwardFilled,
} from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import PasswordField from "../../components/PasswordField";
import NG_Flag from "../../assets/NG_Flag.svg";
import { Link } from "react-router-dom";
import { RuleObject } from "antd/lib/form";
import { StoreValue } from "antd/lib/form/interface";

const LoginUI: React.FC = () => {
  const [isFormComplete, setIsFormComplete] = useState(false); // State to track form completeness
  const [showSegment, setShowSegment] = useState(true);
  const [form] = Form.useForm(); // antd use form instance
  const [confirmLoading, setConfirmLoading] = useState(false);

  // Ensure all fields are populated before button becomes available
  const handleValuesChange = (_: any, allValues: Record<string, any>): void => {
    const areAllFieldsFilled = Object.values(allValues).every(
      (value) => !!value
    );
    setIsFormComplete(areAllFieldsFilled);
  };

  // Custom function to check if passwords match
  const checkPasswordMatch = (
    _: RuleObject,
    value: StoreValue
  ): Promise<void> => {
    const password = form.getFieldValue("password"); // Get password value

    // Check if confirm password is empty or if the passwords match
    if (!value || password === value) {
      return Promise.resolve(); // Validation passes
    }

    // If passwords don't match, reject with error
    return Promise.reject(new Error("Passwords do not match!"));
  };

  // Submit onboarding form
  const onFinish = (OnboardingFormValues: Record<string, any>) => {
    console.log("Received values of form: ", OnboardingFormValues);
    console.log(OnboardingFormValues.firstName);
    setConfirmLoading(true);
    setTimeout(() => {
      setConfirmLoading(false);
    }, 2000);
  };

  // Toggle form segments
  const switchFormSegment = () => {
    setShowSegment(!showSegment);
  };

  const passwordRules = [
    { required: true, message: "Please enter a password!" },
    () => ({
      validator(_: any, value: string) {
        if (value.length < 8) {
          return Promise.reject(new Error("must be at least 8 characters!"));
        }
        if (!/\d/.test(value)) {
          return Promise.reject(new Error("must include at least one number!"));
        }
        if (!/[A-Z]/.test(value)) {
          return Promise.reject(
            new Error("must include at least one uppercase letter!")
          );
        }
        if (!/[a-z]/.test(value)) {
          return Promise.reject(
            new Error("must include at least one lowercase letter!")
          );
        }
        if (!/[\W_]/.test(value)) {
          return Promise.reject(
            new Error("must include at least one special character!")
          );
        }
        return Promise.resolve();
      },
    }),
  ];

  return (
    <>
      <Form
        form={form} // Bind form instance
        name="register"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onValuesChange={handleValuesChange}
      >
        {/* Segment 1 */}
        <div className={showSegment ? "block" : "hidden"}>
          <Form.Item
            name="firstName"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
          >
            <Input
              autoComplete="off"
              prefix={<UserOutlined className="text-blue-700" />}
              placeholder="First Name"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="lastName"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input
              prefix={<UserOutlined className="text-blue-700" />}
              placeholder="Last Name"
              autoComplete="off"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[
              { required: true, message: "Please input your phone number" },
              {
                pattern: /^[0-9]{10}$/, // Regex to ensure 10 digits and no alphabets
                message: "Phone number must be 10 digits only!",
              },
            ]}
          >
            <Input
              autoComplete="off"
              addonBefore={
                <div className="flex gap-2" style={{ width: "60px" }}>
                  <img
                    src={NG_Flag}
                    alt="Nigerian Flag"
                    style={{ width: "18px" }}
                    className="pt-[0.19rem]"
                  />
                  <span className="text-[0.98rem]">+234</span>
                </div>
              }
              placeholder="Phone Number"
              size="large"
              type="tel"
              maxLength={10}
            />
          </Form.Item>
        </div>

        {/* Segment 2 */}
        <div className={!showSegment ? "block" : "hidden"}>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email address!",
              },
              {
                type: "email",
                message: "Ensure it is a valid email!",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="text-blue-700" />}
              placeholder="Email Address"
              autoComplete="off"
              size="large"
            />
          </Form.Item>

          <Form.Item name="password" rules={passwordRules}>
            <PasswordField
              prefix={<LockOutlined className="text-blue-700" />}
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            dependencies={["password"]} // Ensure revalidation when password changes
            hasFeedback
            rules={[
              { required: true, message: "Please confirm your password!" },
              { validator: checkPasswordMatch }, // Custom validation for password match
            ]}
          >
            <PasswordField
              prefix={<LockOutlined className="text-blue-700 " />}
              placeholder="Confirm Password"
            />
          </Form.Item>
        </div>

        <button
          type="button"
          className="text-blue-800 font-semibold pb-4"
          onClick={switchFormSegment}
        >
          {showSegment ? (
            <span className="flex justify-items-center">
              Continue
              <ForwardFilled className="pt-1" />
            </span>
          ) : (
            <span className="flex justify-items-center">
              <BackwardFilled className="pt-1" />
              Back
            </span>
          )}
        </button>

        <Form.Item>
          <Button
            loading={confirmLoading}
            block
            disabled={!isFormComplete}
            type="primary"
            htmlType="submit"
            className="py-5 font-semibold"
            style={
              isFormComplete
                ? {
                    backgroundColor: "#1e40af",
                    borderColor: "#1e40af",
                    color: "#fff",
                  } // Active style
                : { backgroundColor: "#f5f2f5", borderColor: "#f5f2f5" } // Inactive style
            }
          >
            {confirmLoading ? "Signing up..." : "Sign up"}
          </Button>

          <div className="text-center text-blue-800 pt-4">
            <Link
              to="/login"
              className="text-center font-medium cursor-pointer"
            >
              Already have an account? Sign in
            </Link>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginUI;
