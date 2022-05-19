import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/outline";
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
        "alert fixed w-auto rounded-lg border-2 px-2 py-1 text-base lg:px-4 lg:py-2 lg:text-lg",
        {
          "border-info bg-info/20 text-info": state === "info",
          "border-success bg-success/20 text-success": state === "success",
          "border-warning bg-warning/20 text-warning": state === "warning",
          "border-error bg-error/20 text-error": state === "error",
        },
        {
          "inset-x-6 top-6 mb-6": placement === "top",
          "left-6 top-6 mr-6": placement === "topLeft",
          "top-6 right-6 ml-6": placement === "topRight",
          "inset-x-6 bottom-6 mt-6": placement === "bottom",
          "bottom-6 left-6 mr-6": placement === "bottomLeft",
          "right-6 bottom-6 ml-6": placement === "bottomRight",
        }
      )}
    >
      {state === "info" ? (
        <InformationCircleIcon className="h-6 w-6 flex-shrink-0" />
      ) : state === "success" ? (
        <CheckCircleIcon className="h-6 w-6 flex-shrink-0" />
      ) : state === "warning" ? (
        <ExclamationCircleIcon className="h-6 w-6 flex-shrink-0" />
      ) : state === "error" ? (
        <XCircleIcon className="h-6 w-6 flex-shrink-0" />
      ) : null}
      {children}
    </div>
  );
}
