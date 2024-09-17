import { useState, useEffect } from "react";

const useCountdown = (initialSeconds: number, isActive: boolean) => {
  const [countdown, setCountdown] = useState(initialSeconds);
  const [triggerReset, setTriggerReset] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;

    if (isActive || triggerReset) {
      setCountdown(initialSeconds); // Reset the timer when it becomes active or reset is triggered
      setTriggerReset(false); // Reset the trigger

      // Start the countdown
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer); // Clear the interval when countdown reaches 0
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer); // Cleanup timer on component unmount or when it stops being active
  }, [initialSeconds, isActive, triggerReset]);

  const resetCountdown = () => setTriggerReset(true); // Function to trigger a reset

  return { countdown, resetCountdown };
};

export default useCountdown;
