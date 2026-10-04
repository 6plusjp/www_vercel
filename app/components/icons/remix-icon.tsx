import clsx from "clsx";

interface Props {
  className?: string;
  title?: string;
}

export function RemixIcon({ className, title = "Remix" }: Props) {
  return (
    <svg
      className={clsx(className)}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <title>{title}</title>
      <circle cx="44" cy="18" r="7" fill="currentColor" />
      <path d="M10 46 24 21l9 15 6-9 15 19H10Z" fill="currentColor" />
    </svg>
  );
}