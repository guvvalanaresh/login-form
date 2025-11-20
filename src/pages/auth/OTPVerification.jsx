// src/pages/auth/OTPVerification.jsx
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Card from "../../components/ui/card/Card";
import FormHeader from "../../components/ui/form-header/FormHeader";
import Button from "../../components/ui/button/Button";
import { useToast } from "../../components/ui/toast/ToastProvider";
import { useAuth } from "../../context/AuthContext";

const OTPVerification = () => {
  const { showToast } = useToast();
  const { login } = useAuth();
  const navigate = useNavigate();

  const [timer, setTimer] = useState(30);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({
    defaultValues: {
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: "",
    },
  });

  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const onSubmit = async (data) => {
    const otp = `${data.otp1}${data.otp2}${data.otp3}${data.otp4}`;

    if (otp.length < 4) {
      showToast("Please enter the full OTP.", "error");
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      login({ email: "verified@example.com" });
      showToast("OTP verified successfully!", "success");
      navigate("/reset-password");
    } catch (err) {
      showToast("Invalid OTP. Try again.", "error");
    }
  };

  const handleResend = () => {
    setTimer(30);
    showToast("OTP resent to your email.", "success");
  };

  const otpFields = ["otp1", "otp2", "otp3", "otp4"];

  const handleOtpChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 1);
    const name = otpFields[index];
    setValue(name, value);

    if (value && index < otpFields.length - 1) {
      const next = document.getElementById(otpFields[index + 1]);
      if (next) next.focus();
    }
  };

  const hasFieldErrors = Object.values(errors).some((e) => e?.message);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card>
        <FormHeader
          title="OTP Verification"
          subtitle="Enter the 4-digit code sent to your email"
        />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="flex justify-center gap-2 mb-1">
            {otpFields.map((field, index) => (
              <input
                key={field}
                id={field}
                type="text"
                maxLength={1}
                {...register(field, {
                  required: "Required",
                  pattern: {
                    value: /^[0-9]$/,
                    message: "Only digits allowed",
                  },
                })}
                onChange={(e) => handleOtpChange(e, index)}
                className={`h-12 w-12 rounded-md border text-center text-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors[field]
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300"
                }`}
              />
            ))}
          </div>

          {hasFieldErrors && (
            <p className="text-center text-[11px] text-red-600">
              Please fill all OTP fields correctly.
            </p>
          )}

          <p className="text-center text-xs text-gray-600">
            Resend OTP in{" "}
            <span className="font-medium text-gray-800">{timer}s</span>
          </p>

          <div className="flex gap-2">
            <Button
              type="button"
              variant="secondary"
              onClick={handleResend}
              disabled={timer > 0}
              fullWidth
            >
              Resend OTP
            </Button>
            <Button
              type="submit"
              variant="primary"
              isLoading={isSubmitting}
              fullWidth
            >
              Verify
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default OTPVerification;
