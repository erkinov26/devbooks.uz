import React from "react";

export default function Input({ placeholder, type, innerRef, accept }) {
  return (
    <input
      required
      ref={innerRef}
      type={type}
      className="FormInput"
      placeholder={placeholder}
      accept={accept}
    />
  );
}
