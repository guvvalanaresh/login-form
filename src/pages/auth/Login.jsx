// src/pages/auth/Login.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/ui/card/Card";
import FormHeader from "../../components/ui/form-header/FormHeader";
import Input from "../../components/ui/input/Input";
import Button from "../../components/ui/button/Button";
import { useAuth } from "../../context/AuthContext";
import { useToast } from "../../components/ui/toast/ToastProvider";

const Login = () => {
  const { login } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      login({ email: data.email });
      showToast("Logged in successfully!", "success");
      navigate("/dashboard");
    } catch (err) {
      showToast("Login failed. Try again.", "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card>
        <FormHeader
          title="Welcome back"
          subtitle="Login to your account"
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

          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Your password"
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

          <div className="flex items-center justify-between text-xs text-blue-600 mb-2">
            <Link to="/forgot-password" className="hover:underline">
              Forgot Password?
            </Link>
          </div>

          <Button
            type="submit"
            variant="primary"
            isLoading={isSubmitting}
            fullWidth
          >
            Login
          </Button>

          <p className="mt-4 text-center text-xs text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-blue-600 hover:underline"
            >
              Sign up
            </Link>
          </p>

          <div className="mt-4">
            <p className="text-xs text-gray-500 text-center mb-2">
              Or continue with
            </p>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="secondary"
                className="w-full text-xs"
              >
                Google
              </Button>
              <Button
                type="button"
                variant="secondary"
                className="w-full text-xs"
              >
                GitHub
              </Button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;
