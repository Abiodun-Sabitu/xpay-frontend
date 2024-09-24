import React from "react";
import { Button, Modal } from "antd";

const Feedback: React.FC<{
  content: React.ReactNode;
  title: string;
  visible: boolean;
  onClose: () => void;
}> = ({ content, title, visible, onClose }) => {
  console.log(visible);

  const handleOk = () => {
    console.log("ok");
    onClose();
  };
  const handleCancel = () => {
    console.log("close");
    onClose();
  };

  return (
    <>
      <Modal
        open={visible}
        onCancel={handleCancel}
        footer={[
          <Button
            key="button"
            type="primary"
            onClick={handleOk}
            style={{ backgroundColor: "#1e40af", border: "#1e40af" }}
          >
            Okay
          </Button>,
        ]}
      >
        <div className="text-center font-semibold text-[1.2rem]">{title}</div>
        {content}
      </Modal>
    </>
  );
};

export default Feedback;
