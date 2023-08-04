import { forwardRef } from "react";

import clsx from "clsx";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { useId } from "@reach/auto-id";
import { useField } from "remix-validated-form";

function Label({ className, ...labelProps }: JSX.IntrinsicElements["label"]) {
  return (
    <label
      {...labelProps}
      className={clsx("inline-block text-lg text-tp cursor-pointer", className)}
    />
  );
}

interface InputProps {
  name: string;
  label: string;
  type?: string;
  value?: string;
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
        {...getInputProps({
          form,
          type,
          ref,
          id: name,
          value: actualValue,
          disabled,
        })}
      />
    </div>
  );
});

type TextareaProps = JSX.IntrinsicElements["textarea"];
const Textarea = forwardRef<
  HTMLTextAreaElement,
  {
    defaultValue?: string | null;
    name: string;
    label: string;
    className?: string;
    description?: React.ReactNode;
    id?: string;
  } & TextareaProps
>(function Textarea(
  { defaultValue, name, label, className, description, id, ...props },
  ref,
) {
  const suffix = useId();
  const inputId = id ?? `${name}--${suffix}`;
  const errorId = `${inputId}-error`;
  const descriptionId = `${inputId}-description`;
  const { getInputProps, error } = useField(name);

  return (
    <div className={clsx("mb-8", className)}>
      <div className="mb-4 flex items-baseline justify-between gap-2">
        <Label htmlFor={inputId} className="">
          {label}
        </Label>
        {error ? (
          <InputError id={errorId}>{error}</InputError>
        ) : description ? (
          <div id={descriptionId} className="text-lg text-tp">
            {description}
          </div>
        ) : null}
      </div>
      <textarea
        className={clsx(
          "w-full appearance-none rounded-lg bg-bs px-8 py-6 text-lg font-medium text-tp placeholder-slate-400 ring-hp ring-offset-4 ring-offset-bp transition duration-300 focus:outline-none focus:ring-2 disabled:text-ts sm:px-10 sm:py-8",
        )}
        {...(props as TextareaProps)}
        required
        defaultValue={defaultValue}
        aria-required="true"
        aria-describedby={
          error ? errorId : description ? descriptionId : undefined
        }
        {...getInputProps({ ref, id: inputId })}
      />
    </div>
  );
});

type SelectProps = JSX.IntrinsicElements["select"];
const Select = forwardRef<
  HTMLSelectElement,
  {
    defaultValue?: string | null;
    name: string;
    label: string;
    className?: string;
    description?: React.ReactNode;
    id?: string;
  } & SelectProps
>(function Select(
  { defaultValue, name, label, className, description, id, ...props },
  ref,
) {
  const suffix = useId();
  const inputId = id ?? `${name}--${suffix}`;
  const errorId = `${inputId}-error`;
  const descriptionId = `${inputId}-description`;
  const { getInputProps, error } = useField(name);

  return (
    <div className={clsx("mb-8", className)}>
      <div className="mb-4 flex items-baseline justify-between gap-2">
        <Label htmlFor={inputId} className="">
          {label}
        </Label>
        {error ? (
          <InputError id={errorId}>{error}</InputError>
        ) : description ? (
          <div id={descriptionId} className="text-lg text-tp">
            {description}
          </div>
        ) : null}
      </div>
      <select
        className={clsx(
          "w-full appearance-none rounded-lg bg-bs px-8 py-6 text-lg font-medium text-tp placeholder-slate-400 ring-hp ring-offset-4 ring-offset-bp transition duration-300 focus:outline-none focus:ring-2 disabled:text-ts sm:px-10 sm:py-8 cursor-pointer",
        )}
        {...(props as SelectProps)}
        required
        defaultValue={defaultValue}
        aria-required="true"
        aria-describedby={
          error ? errorId : description ? descriptionId : undefined
        }
        {...getInputProps({ ref, id: inputId })}
      />
    </div>
  );
});

interface InputErrorProps {
  id: string;
  children?: string;
  "data-cy"?: string;
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
