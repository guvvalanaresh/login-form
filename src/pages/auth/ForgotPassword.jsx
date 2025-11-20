// src/pages/auth/ForgotPassword.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/ui/card/Card";
import FormHeader from "../../components/ui/form-header/FormHeader";
import Input from "../../components/ui/input/Input";
import Button from "../../components/ui/button/Button";
import { useToast } from "../../components/ui/toast/ToastProvider";

const ForgotPassword = () => {
  const { showToast } = useToast();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      showToast("Reset link / OTP sent to your email.", "success");
      navigate("/otp-verification");
    } catch (err) {
      showToast("Something went wrong. Try again.", "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card>
        <FormHeader
          title="Forgot Password"
          subtitle="Enter your email to receive a reset link or OTP"
        />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <Input
            label="Email"
            name="email"
            placeholder="you@example.com"
            type="email"
            register={(name) =>
              register(name, {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Enter a valid email",
                },
              })
            }
            error={errors.email}
          />

          <p className="text-[11px] text-gray-500 mb-1">
            We&apos;ll send you a reset link or OTP to reset your password.
          </p>

          <Button
            type="submit"
            variant="primary"
            isLoading={isSubmitting}
            fullWidth
          >
            Send Reset Link / OTP
          </Button>

          <p className="mt-4 text-center text-xs text-gray-600">
            Remember your password?{" "}
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

export default ForgotPassword;
