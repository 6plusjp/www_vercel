import React, { forwardRef } from "react";
import { useField } from "remix-validated-form";

type InputProps = {
  name: string;
  label: string;
  type?: string;
  value?: string;
  hideErrors?: boolean;
  "data-cy"?: string;
  form?: string;
  disabled?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    name,
    label,
    type = "text",
    value,
    hideErrors: noErrors,
    "data-cy": dataTestId,
    form,
    disabled,
  },
  ref,
) {
  const { getInputProps, error } = useField(name, {
    formId: form,
  });
  const actualValue = value ?? (type === "checkbox" ? "on" : undefined);

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        data-cy={dataTestId}
        {...getInputProps({
          form,
          type,
          ref,
          id: name,
          value: actualValue,
          disabled,
        })}
      />
      {error && !noErrors && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
});
