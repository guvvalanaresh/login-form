// src/components/ui/button/Button.jsx
import React from "react";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  isLoading = false,
  fullWidth = false,
  className = "",
  ...rest
}) => {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600",
    secondary:
      "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-300 border border-gray-300",
    ghost:
      "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
  };

  const padding = "px-4 py-2";

  return (
    <button
      type={type}
      disabled={isLoading || rest.disabled}
      className={`${base} ${variants[variant] || variants.primary} ${padding} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      {...rest}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;
