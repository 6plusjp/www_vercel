import clsx from "clsx";
import * as React from "react";

interface Props {
  state: "info" | "success" | "warning" | "error";
  placement:
    | "top"
    | "topLeft"
    | "topRight"
    | "bottom"
    | "bottomLeft"
    | "bottomRight";
  top?: number;
  bottom?: number;
  children: React.ReactNode;
  className?: string;
}

export function Notification({ placement, state, children, className }: Props) {
  return (
    <div
      className={clsx(
        className,
        "fixed rounded-lg border-4 px-4 py-2 text-base lg:text-lg",
        {
          "border-info bg-info/20 text-info": state === "info",
          "border-success bg-success/20 text-success": state === "success",
          "border-warning bg-warning/20 text-warning": state === "warning",
          "border-error bg-error/20 text-error": state === "error",
        },
        {
          "inset-x-6 top-6": placement === "top",
          "left-6 top-6": placement === "topLeft",
          "top-6 right-6": placement === "topRight",
          "inset-x-6 bottom-6": placement === "bottom",
          "bottom-6 left-6": placement === "bottomLeft",
          "right-6 bottom-6": placement === "bottomRight",
        }
      )}
    >
      {children}
    </div>
  );
}
