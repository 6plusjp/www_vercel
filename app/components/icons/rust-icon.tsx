import clsx from "clsx";

interface Props {
  className?: string;
  title?: string;
}

export function RustIcon({ className, title = "Rust" }: Props) {
  return (
    <svg
      className={clsx(className)}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <title>{title}</title>
      <circle cx="48" cy="16" r="6" fill="currentColor" />
      <path
        d="M17.4 46.5a4.2 4.2 0 0 1-1.7-3.4l.1-2.7 3.3-1.9c1.2-.7 2.7-.7 3.9.1l6.7 4.4c2.3 1.5 5.2 1.9 7.9 1.2a4.2 4.2 0 0 1 3.2 5.9l-1.5 2.3a4.2 4.2 0 0 1-5.3 1.5l-4.4-2.6a4.2 4.2 0 0 1-2.2-1.2l-4.6-4.2-5.1 2.9a4.2 4.2 0 0 1-.2 1.4v3a4.2 4.2 0 0 1-3.2 4.1l-3.7 1.1-2.3-3.6z"
        fill="currentColor"
      />
      <path
        d="M40.4 33.2c-2.6-1.8-5.8-2.3-8.8-1.4a4.2 4.2 0 0 0-2.8 2v4.9a4.2 4.2 0 0 0 5.7 3.9l4.5-2.2c1.7-.8 2.7-2.5 2.7-4.4v-2.1a4.2 4.2 0 0 0-1.3-.7z"
        fill="currentColor"
      />
    </svg>
  );
}