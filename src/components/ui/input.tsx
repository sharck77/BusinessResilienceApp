import React from "react";

export const Input = ({ className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    className={`border px-2 py-1 rounded text-sm ${className}`}
    {...props}
  />
);