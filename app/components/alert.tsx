import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";

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
