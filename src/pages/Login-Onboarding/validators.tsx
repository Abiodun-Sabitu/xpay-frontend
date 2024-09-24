import { RuleObject } from "antd/lib/form";
import { StoreValue } from "antd/lib/form/interface";

export const passwordRules = [
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

// Custom function to check if passwords match
export const checkPasswordMatch = (form: any) => ({
  validator(_: RuleObject, value: StoreValue) {
    const password = form.getFieldValue("password"); // Get password value

    if (!value || password === value) {
      return Promise.resolve(); // Validation passes
    }

    return Promise.reject(new Error("Passwords do not match!"));
  },
});
