// src/components/ui/input/Input.jsx
import React, { useState } from "react";

const Input = ({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
  showPasswordToggle = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    type === "password" && showPasswordToggle
      ? showPassword
        ? "text"
        : "password"
      : type;

  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={name}
          name={name}
          type={inputType}
          placeholder={placeholder}
          {...(register ? register(name) : {})}
          className={`block w-full rounded-md border px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
            error
              ? "border-red-500 focus:ring-red-500 focus:border-red-500"
              : "border-gray-300"
          } ${showPasswordToggle ? "pr-16" : ""}`}
        />

        {type === "password" && showPasswordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute inset-y-0 right-2 flex items-center text-xs text-gray-500 hover:text-gray-700"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>

      {error && (
        <p className="mt-1 text-xs text-red-600">{error.message}</p>
      )}
    </div>
  );
};

export default Input;
