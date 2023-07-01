import { Outlet } from "@remix-run/react";

export default function My() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="prose mx-auto py-16 dark:prose-invert">
        <Outlet />
      </div>
    </div>
  );
}
