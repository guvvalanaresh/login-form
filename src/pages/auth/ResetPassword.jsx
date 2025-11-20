// src/pages/auth/ResetPassword.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import Card from "../../components/ui/card/Card";
import FormHeader from "../../components/ui/form-header/FormHeader";
import Input from "../../components/ui/input/Input";
import Button from "../../components/ui/button/Button";
import { useToast } from "../../components/ui/toast/ToastProvider";

const ResetPassword = () => {
  const { showToast } = useToast();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const newPasswordValue = watch("newPassword");

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      showToast("Password reset successfully! Please login.", "success");
      navigate("/login");
    } catch (err) {
      showToast("Could not reset password. Try again.", "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card>
        <FormHeader
          title="Reset Password"
          subtitle="Set a new password for your account"
        />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <Input
            label="New Password"
            name="newPassword"
            type="password"
            placeholder="Enter new password"
            showPasswordToggle
            register={(name) =>
              register(name, {
                required: "New password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })
            }
            error={errors.newPassword}
          />

          <Input
            label="Confirm New Password"
            name="confirmNewPassword"
            type="password"
            placeholder="Re-enter new password"
            showPasswordToggle
            register={(name) =>
              register(name, {
                required: "Please confirm your new password",
                validate: (value) =>
                  value === newPasswordValue || "Passwords do not match",
              })
            }
            error={errors.confirmNewPassword}
          />

          {newPasswordValue && (
            <p className="mt-[-4px] text-[11px] text-gray-500">
              Password length: {newPasswordValue.length} characters
            </p>
          )}

          <Button
            type="submit"
            variant="primary"
            isLoading={isSubmitting}
            fullWidth
          >
            Reset Password
          </Button>

          <p className="mt-4 text-center text-xs text-gray-600">
            Remembered your password?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:underline"
            >
              Back to login
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default ResetPassword;
