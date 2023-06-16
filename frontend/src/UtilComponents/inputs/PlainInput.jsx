import React from "react";
import "./PlainInput.css";

export default function PlainInput({
  label,
  name,
  type,
  onChange,
  validation,
  errors,
  value,
  required
}) {
  return (
    <label htmlFor={name} className="plain-input-wrapper">
      <span>{label}
        {required && <span style={{ color: 'red' }}> {'*'}</span>}
      </span>
      <input
        type={type ? type : "text"}
        name={name}
        value={value}
        onChange={onChange}
        {...validation}
        className="plain-input"
      />
      {errors && (
        <span className="input-error">
          {errors[name] ? errors[name].message : ""}
        </span>
      )}
    </label>
  );
}
