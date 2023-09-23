import { Link } from "@remix-run/react";

export const SkipContent = () => {
  return (
    <Link
      to="#skip"
      title="Skip to content"
      className={
        "absolute left-10 top-4 inline-flex items-center justify-center py-2 px-4 rounded text-sm z-[999999] -translate-y-96 focus-visible:-translate-y-0 text-black dark:text-white focus:outline-none focus-visible:ring-hp focus-visible:ring"
      }
    >
      Skip to main content
    </Link>
  );
};
