import { forwardRef } from "react";

import clsx from "clsx";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { useId } from "@reach/auto-id";
import { useField } from "remix-validated-form";

function Label({ className, ...labelProps }: JSX.IntrinsicElements["label"]) {
  return (
    <label
      {...labelProps}
      className={clsx("inline-block text-lg text-tp", className)}
    />
  );
}

type InputProps = JSX.IntrinsicElements["input"];
const Input = forwardRef<
  HTMLInputElement,
  {
    defaultValue?: string | null;
    name: string;
    label: string;
    className?: string;
    description?: React.ReactNode;
    id?: string;
  } & InputProps
>(function Input(
  { defaultValue, name, label, className, description, id, ...props },
  ref,
) {
  const prefix = useId();
  const inputId = id ?? `${prefix}-${name}`;
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
      <input
        className="w-full appearance-none rounded-lg bg-bs px-8 py-6 text-lg font-medium text-tp placeholder-slate-400 ring-hp ring-offset-4 ring-offset-bp transition duration-300 focus:outline-none focus:ring-2 disabled:text-ts sm:px-10 sm:py-8"
        {...(props as InputProps)}
        required
        defaultValue={defaultValue}
        aria-required="true"
        aria-describedby={
          error ? errorId : description ? descriptionId : undefined
        }
        autoComplete={
          name === "name"
            ? "name organization"
            : name === "email"
            ? name
            : "off"
        }
        {...getInputProps({ ref, id: inputId })}
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
  const prefix = useId();
  const inputId = id ?? `${prefix}-${name}`;
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
  const prefix = useId();
  const inputId = id ?? `${prefix}-${name}`;
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
          "w-full appearance-none rounded-lg bg-bs px-8 py-6 text-lg font-medium text-tp placeholder-slate-400 ring-hp ring-offset-4 ring-offset-bp transition duration-300 focus:outline-none focus:ring-2 disabled:text-ts sm:px-10 sm:py-8",
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
}
function InputError({ children, id }: InputErrorProps) {
  if (!children) {
    return null;
  }

  return (
    <p
      role="alert"
      id={id}
      className="inline-flex text-sm text-error"
      data-cy="error-message"
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
