import React, { useState } from "react";
import {
  MailOutlined,
  CheckCircleOutlined,
  BackwardFilled,
} from "@ant-design/icons";
import { Button, Form, Input, Modal } from "antd";
import { useNavigate } from "react-router-dom";

const ForgotPassword: React.FC = () => {
  const [isFeedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const navigate = useNavigate();
  // Feedback Modal Content
  const successMessage = (
    <div className="text-center p-6">
      <CheckCircleOutlined className="text-green-500 text-5xl mb-4" />
      <h2 className="text-2xl font-semibold mb-2 ">Check your email!</h2>
      <p className="text-[1rem] mb-2">
        We've sent a password reset link to your registered email address.
      </p>
      <p className="text-sm text-gray-500">
        If you don’t see it, check your spam folder.
      </p>
    </div>
  );

  const closeFeedbackModal = () => {
    setFeedbackModalOpen(false);
  };

  // Handle form submission
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    setConfirmLoading(true);

    // Simulate async request (e.g., sending the reset email)
    setTimeout(() => {
      setConfirmLoading(false);
      setFeedbackModalOpen(true);
    }, 2000);
  };

  return (
    <>
      {/* The email input field for users to enter their registered email */}
      <Form name="forgotPassword" onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please input your registered email!" },
            { type: "email", message: "Please input a valid email!" },
          ]}
        >
          <Input
            prefix={<MailOutlined className="text-blue-700" />}
            placeholder="Enter your email address"
            size="large"
            autoComplete="email"
          />
        </Form.Item>

        <Form.Item>
          <Button
            block
            type="primary"
            htmlType="submit"
            loading={confirmLoading}
            className="py-5 font-semibold"
            style={{
              backgroundColor: "#1e40af",
              borderColor: "#1e40af",
              color: "#fff",
            }}
          >
            {confirmLoading ? "Sending..." : "Send Reset Link"}
          </Button>
          <div
            onClick={() => navigate(-1)}
            className="flex justify-center justify-items-center pt-5 text-blue-800 font-semibold cursor-pointer"
          >
            <BackwardFilled className="pt-1" />
            Back
          </div>
        </Form.Item>
      </Form>

      <Modal
        open={isFeedbackModalOpen}
        footer={null}
        onCancel={closeFeedbackModal}
      >
        {successMessage}
      </Modal>
    </>
  );
};

export default ForgotPassword;
