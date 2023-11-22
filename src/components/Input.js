import React from "react";

export default function Input({
  placeholder,
  type,
  innerRef,
  accept,
  inputValue,
  changeInfo
}) {
  return (
    <input
      required
      value={inputValue}
      ref={innerRef}
      type={type}
      className="FormInput"
      placeholder={placeholder}
      accept={accept}
    />
  );
}
