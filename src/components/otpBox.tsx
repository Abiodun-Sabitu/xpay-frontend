// import React, { useState } from "react";
// import { Button, Modal, Input } from "antd";
// import type { ComponentProps } from "react"; // Correct type import for props
// import useCountdown from "../utils/useCountdown";
// import OtpInput from "react-otp-input";
// // Correct OTP input props typing
// // type OTPProps = ComponentProps<typeof Input.OTP>;

// interface Props {
//   visible: boolean;
//   onClose: () => void;
// }
// const otpBox: React.FC<Props> = ({ visible, onClose }) => {
//   const [confirmLoading, setConfirmLoading] = useState(false);
//   const [verifyOTPIndicator, setVerifyOTPIndicator] = useState(false);
//   const [otp, setOtp] = useState("");

//   // Use the countdown hook, countdown starts when the modal is visible
//   const { countdown, resetCountdown } = useCountdown(10, visible);

//   const handleOk = () => {
//     setConfirmLoading(true);
//     setTimeout(() => {
//       onClose();
//       setConfirmLoading(false);
//     }, 2000);
//   };

//   const handleCancel = () => {
//     console.log("Clicked cancel button");
//     onClose();
//   };

//   const handleResend = () => {
//     console.log("Resend button clicked");
//     resetCountdown(); // Reset the countdown when resend is clicked
//     setVerifyOTPIndicator(false);
//   };

//   // Handle OTP change
//   const handleOtpChange = (value: string) => {
//     setOtp(value);
//     console.log("OTP Input:", value);

//     // Set indicator to true if OTP length is exactly 6
//     if (value.length === 6) {
//       setVerifyOTPIndicator(true);
//     } else {
//       setVerifyOTPIndicator(false);
//     }
//   };

//   const renderInput = (props: any) => (
//     <input
//       {...props}
//       style={{
//         ...props.style,
//         width: "2rem",
//         height: "2rem",
//         margin: "0 0.5rem",
//         fontSize: "1.2rem",
//         borderRadius: 4,
//         border: "1px solid #d9d9d9",
//         outline: "none",
//       }}
//       onFocus={(e) => {
//         e.target.style.border = "1px solid #1e40af";
//         e.target.style.outline = "none";
//       }}
//       onBlur={(e) => {
//         e.target.style.border = "1px solid #d9d9d9";
//       }}
//     />
//   );

//   return (
//     <>
//       <Modal
//         className="text-center"
//         // title="One Time Password Verification"
//         open={visible}
//         onCancel={handleCancel}
//         confirmLoading={confirmLoading}
//         footer={[
//           countdown < 1 ? (
//             <Button key="back" onClick={handleResend} loading={confirmLoading}>
//               Resend
//             </Button>
//           ) : (
//             <Button
//               key="submit"
//               type="primary"
//               onClick={handleOk}
//               loading={confirmLoading}
//               style={{ backgroundColor: "#1e40af", borderColor: "#1e40af" }} // Custom color
//               className="mt-5"
//             >
//               Confirm
//             </Button>
//           ),
//         ]}
//       >
//         <div className="text-black-800 py-2 pb-8">
//           <h3 className="text-[1rem] font-bold text-blue-800">
//             One Time Password Verification
//           </h3>
//           <small>
//             Please enter the 6-digit code we sent to your email to continue.{" "}
//           </small>
//         </div>
//         <div className="flex justify-center">
//           <OtpInput
//             value={otp}
//             onChange={handleOtpChange}
//             shouldAutoFocus
//             numInputs={6}
//             renderSeparator={<span>*</span>}
//             renderInput={renderInput}
//           />
//         </div>

//         {/* <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps} /> */}
//         {/* Countdown Timer Display */}
//         <div style={{ marginTop: "10px", color: "#f97316" }}>
//           {countdown > 0 ? (
//             <span>Time remaining: {countdown}s</span>
//           ) : (
//             <span>Time up! Please click the resend button.</span>
//           )}
//         </div>
//       </Modal>
//     </>
//   );
// };

// export default otpBox;

import React, { useState } from "react";
import { Button, Modal } from "antd";
import useCountdown from "../utils/useCountdown";
import OtpInput from "react-otp-input";

interface Props {
  visible: boolean;
  onClose: () => void;
}

const otpBox: React.FC<Props> = ({ visible, onClose }) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [otp, setOtp] = useState("");

  // Use the countdown hook; countdown starts when the modal is visible
  const { countdown, resetCountdown } = useCountdown(10, visible);

  const handleOk = () => {
    if (otp.length === 6) {
      // Ensure OTP length is 6 before submitting
      setConfirmLoading(true);
      console.log("Submitting OTP:", otp); // Log OTP when "Confirm" button is clicked
      setTimeout(() => {
        onClose();
        setConfirmLoading(false);
      }, 2000);
    }
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    onClose();
  };

  const handleResend = () => {
    console.log("Resend button clicked");
    setConfirmLoading(true);
    setTimeout(() => {
      setConfirmLoading(false);
      resetCountdown();
      setOtp("");
    }, 2000);
    // Reset the countdown when resend is clicked // Clear OTP input
  };

  // Handle OTP change
  const handleOtpChange = (value: string) => {
    setOtp(value);
    console.log("OTP Input:", value);
  };

  const renderInput = (props: any) => (
    <input
      {...props}
      style={{
        ...props.style,
        width: "2rem",
        height: "2rem",
        margin: "0 0.5rem",
        fontSize: "1.2rem",
        borderRadius: 4,
        border: "1px solid #d9d9d9",
        outline: "none",
      }}
      onFocus={(e) => {
        e.target.style.border = "1px solid #1e40af";
        e.target.style.outline = "none";
      }}
      onBlur={(e) => {
        e.target.style.border = "1px solid #d9d9d9";
      }}
    />
  );

  return (
    <>
      <Modal
        className="text-center"
        open={visible}
        onCancel={handleCancel}
        confirmLoading={confirmLoading}
        footer={[
          countdown < 1 ? (
            <Button key="back" onClick={handleResend} loading={confirmLoading}>
              {confirmLoading ? "Re-sending OTP..." : "Resend"}
            </Button>
          ) : (
            <Button
              key="submit"
              type="primary"
              onClick={handleOk}
              loading={confirmLoading}
              style={
                otp.length === 6
                  ? { backgroundColor: "#1e40af", borderColor: "#1e40af" } // Active style
                  : { backgroundColor: "silver", borderColor: "silver" } // Inactive style
              }
              className="mt-5"
              disabled={otp.length !== 6} // Disable button unless OTP length is 6
            >
              {confirmLoading ? "Verifying..." : "Verify"}
            </Button>
          ),
        ]}
      >
        <div className="text-black-800 py-2 pb-8">
          <h3 className="text-[1rem] font-bold text-blue-800">
            One Time Password Verification
          </h3>
          <small>
            Please enter the 6-digit code we sent to your email to continue.
          </small>
        </div>
        <div className="flex justify-center">
          <OtpInput
            value={otp}
            onChange={handleOtpChange}
            shouldAutoFocus
            numInputs={6}
            renderSeparator={<span>*</span>}
            renderInput={renderInput}
          />
        </div>

        {/* Countdown Timer Display */}
        <div style={{ marginTop: "10px", color: "#f97316" }}>
          {countdown > 0 ? (
            <span>Time remaining: {countdown}s</span>
          ) : (
            <span>Time up! Please click the resend button.</span>
          )}
        </div>
      </Modal>
    </>
  );
};

export default otpBox;
