import React, { useState } from "react";
import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  ForwardFilled,
  BackwardFilled,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import PasswordField from "../../components/PasswordField";
import { checkPasswordMatch, passwordRules } from "./validators";
import { Link } from "react-router-dom";

import Feedback from "../../components/Feedback";

const SignUpUI: React.FC = () => {
  const [isFormComplete, setIsFormComplete] = useState(false); // State to track form completeness
  const [showSegment, setShowSegment] = useState(true);
  const [form] = Form.useForm(); // antd use form instance
  const [confirmLoading, setConfirmLoading] = useState(false);

  //For Feedback Modal
  const [isFeedbackModalOpen, setFeedbackModal] = useState(false);
  // console.log(isFeedbackModalOpen, "before");
  const closeFeedbackModal = () => {
    setFeedbackModal(false);
    // console.log(isFeedbackModalOpen, "after");
  };

  // Ensure all fields are populated before button becomes available
  const handleValuesChange = (_: any, allValues: Record<string, any>): void => {
    const areAllFieldsFilled = Object.values(allValues).every(
      (value) => !!value
    );
    setIsFormComplete(areAllFieldsFilled);
  };

  // Submit onboarding form
  const onFinish = (OnboardingFormValues: Record<string, any>) => {
    console.log("Received values of form: ", OnboardingFormValues);
    console.log(OnboardingFormValues);
    setConfirmLoading(true);
    setTimeout(() => {
      setConfirmLoading(false);
      setFeedbackModal(true);
    }, 2000);
  };

  // Toggle form segments
  const switchFormSegment = () => {
    setShowSegment(!showSegment);
  };

  const successMessage = (
    <div className="text-center p-6">
      <CheckCircleOutlined className="text-green-500 text-5xl mb-4" />
      <h2 className="text-2xl font-semibold mb-2 ">You're all set!</h2>
      <p className="text-[1rem] mb-2">
        We've sent a confirmation email to your inbox. Click the link in the
        email to complete your sign up
      </p>
      <p className="text-sm text-gray-500">
        Didn't get the email? Check your spam folder or try again.
      </p>
    </div>
  );

  const onboardingIssueMessage = (
    <div className="text-center p-6">
      <ExclamationCircleOutlined className="text-red-500 text-6xl mb-4" />
      <h2 className="text-2xl font-semibold mb-4">
        Oops, something went wrong!
      </h2>
      <p className="text-lg mb-2">We couldn't complete your registration.</p>
      <p className="text-lg mb-2">
        Please try again or contact our support team for help.
      </p>
    </div>
  );

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
                message: "Phone number must be digits only!",
              },
            ]}
          >
            <Input
              autoComplete="off"
              addonBefore={
                <div className="flex gap-2" style={{ width: "60px" }}>
                  <img
                    src="/NG_Flag.svg"
                    alt="Nigerian Flag"
                    style={{ width: "18px", height: "14px" }}
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
              checkPasswordMatch(form), // Custom validation for password match
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
            <div className="flex justify-items-center justify-center text-red-700 font-semibold gap-2">
              <span className="flex justify-center">
                Existing User
                <ForwardFilled className="pt-1" />
              </span>
              <Link
                to="/login"
                className="text-center  font-medium cursor-pointer"
              >
                Login!
              </Link>
            </div>
          </div>
        </Form.Item>
      </Form>

      <Feedback
        title=""
        content={successMessage}
        visible={isFeedbackModalOpen}
        onClose={closeFeedbackModal}
      />
    </>
  );
};

export default SignUpUI;
