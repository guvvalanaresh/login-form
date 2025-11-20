// src/pages/auth/Signup.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/ui/card/Card";
import FormHeader from "../../components/ui/form-header/FormHeader";
import Input from "../../components/ui/input/Input";
import Button from "../../components/ui/button/Button";
import { useToast } from "../../components/ui/toast/ToastProvider";

const Signup = () => {
  const { showToast } = useToast();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const passwordValue = watch("password");

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      showToast("Signup successful! Please verify with OTP.", "success");
      navigate("/otp-verification");
    } catch (err) {
      showToast("Signup failed. Try again.", "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card>
        <FormHeader
          title="Create account"
          subtitle="Join us in a few steps"
        />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
          <Input
            label="Full Name"
            name="name"
            placeholder="John Doe"
            register={(name) =>
              register(name, {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })
            }
            error={errors.name}
          />

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

          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Create a strong password"
            showPasswordToggle
            register={(name) =>
              register(name, {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })
            }
            error={errors.password}
          />

          <Input
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Re-enter your password"
            showPasswordToggle
            register={(name) =>
              register(name, {
                required: "Please confirm your password",
                validate: (value) =>
                  value === passwordValue || "Passwords do not match",
              })
            }
            error={errors.confirmPassword}
          />

          {passwordValue && (
            <p className="mt-[-4px] text-[11px] text-gray-500">
              Password length: {passwordValue.length} characters
            </p>
          )}

          <div className="mt-2 mb-1 flex items-start gap-2">
            <input
              id="terms"
              type="checkbox"
              className="mt-1 h-3.5 w-3.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              {...register("terms", {
                required: "You must accept the terms",
              })}
            />
            <label
              htmlFor="terms"
              className="text-xs text-gray-600 leading-tight"
            >
              I accept the{" "}
              <span className="text-blue-600">Terms</span> &{" "}
              <span className="text-blue-600">Privacy Policy</span>
            </label>
          </div>
          {errors.terms && (
            <p className="mt-[-4px] text-[11px] text-red-600">
              {errors.terms.message}
            </p>
          )}

          <Button
            type="submit"
            variant="primary"
            isLoading={isSubmitting}
            fullWidth
            className="mt-2"
          >
            Create account
          </Button>

          <p className="mt-4 text-center text-xs text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default Signup;
