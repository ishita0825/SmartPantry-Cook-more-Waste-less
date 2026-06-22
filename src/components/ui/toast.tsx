import React from "react";
import toast from "react-hot-toast";
import Button from "./button";

/**
 * ToastProps
 * @property message - message shown in the toast notification
 */
type ToastProps = {
  message?: string;
};

const Toast: React.FC<ToastProps> = ({
  message = "SmartPantry toast notification!",
}) => {
  return (
    <Button variant="secondary" onClick={() => toast.success(message)}>
      Show Toast
    </Button>
  );
};

export default Toast;
