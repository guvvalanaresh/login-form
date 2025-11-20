// src/components/ui/form-header/FormHeader.jsx
import React from "react";

const FormHeader = ({ title, subtitle }) => {
  return (
    <div className="mb-6 text-center">
      <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
      {subtitle && (
        <p className="mt-2 text-sm text-gray-500">{subtitle}</p>
      )}
    </div>
  );
};

export default FormHeader;
