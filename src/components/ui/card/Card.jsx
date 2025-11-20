// src/components/ui/card/Card.jsx
import React from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full max-w-md rounded-xl bg-white p-6 shadow-md border border-gray-100 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
