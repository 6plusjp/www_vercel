import { forwardRef, useId } from "react";

import clsx from "clsx";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { useField } from "remix-validated-form";

function Label({ className, ...labelProps }: React.ComponentProps<"label">) {
  return (
    <label
      className={clsx("inline-block text-lg text-tp cursor-pointer", className)}
      {...labelProps}
    />
  );
}

interface InputProps {
  name: string;
  label: string;
  type?: string;
  value?: string;
  placeholder?: string;
  hideErrors?: boolean;
  "data-cy"?: string;
  form?: string;
  disabled?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    name,
    label,
    type = "text",
    value,
    placeholder,
    hideErrors: noErrors,
    "data-cy": dataTestId,
    form,
    disabled,
  },
  ref,
) {
  const suffix = useId();
  const inputId = `${name}--${suffix}`;
  const errorId = `${inputId}-error`;
  const actualValue = value ?? (type === "checkbox" ? "on" : undefined);
  const { getInputProps, error } = useField(name, { formId: form });

  return (
    <div className="mb-8">
      <div className="mb-4 flex items-baseline justify-between gap-2">
        <Label htmlFor={inputId}>{label}</Label>
        {error && !noErrors && <InputError id={errorId}>{error}</InputError>}
      </div>
      <input
        className="w-full appearance-none rounded-lg bg-bs px-8 py-6 text-lg font-medium text-tp placeholder-slate-400 ring-hp ring-offset-4 ring-offset-bp transition duration-300 focus:outline-none focus:ring-2 disabled:text-ts sm:px-10 sm:py-8"
        required
        aria-required="true"
        aria-describedby={error ? errorId : undefined}
        autoComplete={
          name === "name"
            ? "name organization"
            : name === "email"
            ? name
            : "off"
        }
        data-cy={dataTestId}
        {...getInputProps({
          form,
          type,
          ref,
          id: inputId,
          value: actualValue,
          placeholder,
          disabled,
        })}
      />
    </div>
  );
});

interface TextareaProps {
  name: string;
  label: string;
  placeholder?: string;
  value?: string;
  "data-cy"?: string;
  rows?: number;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    { name, label, placeholder, "data-cy": dataTestId, rows },

    ref,
  ) {
    const suffix = useId();
    const inputId = `${name}--${suffix}`;
    const errorId = `${inputId}-error`;
    const { getInputProps, error } = useField(name);

    return (
      <div className="mb-8">
        <div className="mb-4 flex items-baseline justify-between gap-2">
          <Label htmlFor={inputId} className="">
            {label}
          </Label>
          {error && <InputError id={errorId}>{error}</InputError>}
        </div>
        <textarea
          className={clsx(
            "w-full appearance-none rounded-lg bg-bs px-8 py-6 text-lg font-medium text-tp placeholder-slate-400 ring-hp ring-offset-4 ring-offset-bp transition duration-300 focus:outline-none focus:ring-2 disabled:text-ts sm:px-10 sm:py-8",
          )}
          required
          aria-required="true"
          aria-describedby={error ? errorId : undefined}
          rows={rows}
          data-cy={dataTestId}
          {...getInputProps({ id: inputId, placeholder, ref })}
        />
      </div>
    );
  },
);

type SelectProps = {
  name: string;
  label: string;
  placeholder?: string;
  multiple?: boolean;
  "data-cy"?: string;
  children?: React.ReactNode;
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { name, label, placeholder, multiple, "data-cy": dataTestId, children },
  ref,
) {
  const suffix = useId();
  const inputId = `${name}--${suffix}`;
  const errorId = `${inputId}-error`;
  const { getInputProps, error } = useField(name);

  return (
    <div className="mb-8">
      <div className="mb-4 flex items-baseline justify-between gap-2">
        <Label htmlFor={inputId}>{label}</Label>
        {error && <InputError id={errorId}>{error}</InputError>}
      </div>
      <select
        className={clsx(
          "w-full appearance-none rounded-lg bg-bs px-8 py-6 text-lg font-medium text-tp placeholder-slate-400 ring-hp ring-offset-4 ring-offset-bp transition duration-300 focus:outline-none focus:ring-2 disabled:text-ts sm:px-10 sm:py-8 cursor-pointer",
        )}
        required
        aria-required="true"
        aria-describedby={error ? errorId : undefined}
        data-cy={dataTestId}
        {...getInputProps({ id: inputId, placeholder, multiple, ref })}
      >
        {children}
      </select>
    </div>
  );
});

interface InputErrorProps {
  id: string;
  "data-cy"?: string;
  children?: string;
}

function InputError({ children, id, "data-cy": dataTestId }: InputErrorProps) {
  if (!children) {
    return null;
  }

  return (
    <p
      role="alert"
      id={id}
      className="inline-flex text-sm text-error"
      data-cy={dataTestId ?? id}
    >
      <ExclamationCircleIcon className="h-5 w-5" />
      {children}
    </p>
  );
}

function ButtonGroup({
  children,
  className,
}: {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}) {
  return (
    <div
      className={clsx(
        className,
        "flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0",
      )}
    >
      {children}
    </div>
  );
}

function ErrorPanel({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <div role="alert" className="relative mt-8 px-11 py-8" id={id}>
      <div className="bg-error-100 absolute inset-0 rounded-lg" />
      <div className="relative text-lg font-medium text-tp">{children}</div>
    </div>
  );
}

export { Label, Input, Select, Textarea, InputError, ButtonGroup, ErrorPanel };
