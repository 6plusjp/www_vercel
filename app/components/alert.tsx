import clsx from "clsx";
import * as React from "react";

interface Props {
  state: "info" | "success" | "warning" | "error";
  children: React.ReactNode;
  className?: string;
}
export function Alert({ state, children, className }: Props) {
  return (
    <div
      className={clsx(
        className,
        "alert relative rounded-r-lg border-l-4 px-4 py-2 text-base lg:text-lg",
        {
          "bg-info/20 text-info border-info": state === "info",
          "bg-success/20 text-success border-success": state === "success",
          "bg-warning/20 text-warning border-warning": state === "warning",
          "bg-error/20 text-error border-error": state === "error",
        }
      )}
    >
      {children}
    </div>
  );
}
