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
          "border-info bg-info/20 text-info": state === "info",
          "border-success bg-success/20 text-success": state === "success",
          "border-warning bg-warning/20 text-warning": state === "warning",
          "border-error bg-error/20 text-error": state === "error",
        }
      )}
    >
      {children}
    </div>
  );
}
