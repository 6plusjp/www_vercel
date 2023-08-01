import React, { forwardRef } from "react";
import { useField } from "remix-validated-form";

export type SelectProps = {
  name: string;
  label: string;
  multiple?: boolean;
  "data-cy"?: string;
  children?: React.ReactNode;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select(
    { name, multiple, label, "data-cy": dataTestId, children },
    ref,
  ) {
    const { error, getInputProps } = useField(name);

    return (
      <>
        <label>
          {label}
          <select {...getInputProps({ multiple, ref })} data-cy={dataTestId}>
            {children}
          </select>
          {error && (
            <span role="alert" className="inline-flex text-sm text-error">
              {error}
            </span>
          )}
        </label>
      </>
    );
  },
);
