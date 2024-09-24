import React, { useState } from "react";
import {
  LockOutlined,
  CheckCircleOutlined,
  ForwardFilled,
} from "@ant-design/icons";
import { Button, Form, Input, Modal } from "antd";
import PasswordField from "../../components/PasswordField";
import { checkPasswordMatch, passwordRules } from "./validators";
import { Link } from "react-router-dom";

const ResetPassword: React.FC = () => {
  const [isFeedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm(); // antd use form instance
  // Feedback Modal Content
  const successMessage = (
    <div className="text-center p-6">
      <CheckCircleOutlined className="text-green-500 text-5xl mb-4" />
      <h2 className="text-2xl font-semibold mb-2">
        Password Reset Successful!
      </h2>
      <p className="text-[1rem] mb-2">
        You can now log in with your new password.
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

    // Simulate async request (e.g., password reset)
    setTimeout(() => {
      setConfirmLoading(false);
      setFeedbackModalOpen(true);
    }, 2000);
  };

  return (
    <>
      <Form form={form} name="resetPassword" onFinish={onFinish}>
        {/* New Password Field */}
        <Form.Item name="password" rules={passwordRules}>
          <PasswordField
            prefix={<LockOutlined className="text-blue-700" />}
            placeholder="Create New Password"
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
            placeholder="Confirm New Password"
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
            {confirmLoading ? "Resetting..." : "Reset Password"}
          </Button>
          <div className="text-center text-blue-800 pt-4">
            <div className="flex justify-items-center justify-center text-red-700 font-semibold gap-2">
              <span className="flex justify-center">
                Return to
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

      {/* Feedback Modal */}
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

export default ResetPassword;
