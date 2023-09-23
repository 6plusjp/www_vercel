import clsx from "clsx";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

import { Themed, themes, useTheme } from "~/utils/theme";

interface Props extends React.ComponentProps<"button"> {
  size?: "sm" | "md";
}

export const ThemeToggle = ({ className, size = "md", ...props }: Props) => {
  const [theme, setTheme] = useTheme();

  return (
    <>
      <button
        className={clsx(
          className,
          "inline-flex items-center justify-center overflow-hidden rounded-sm border-2 border-slate-400 outline-none transition hover:border-hp focus:border-hp",
          { "h-14 w-14": size === "md", "h-12 w-12": size === "sm" },
        )}
        onClick={() => setTheme(theme === themes[1] ? themes[0] : themes[1])}
        {...props}
      >
        <div
          className={clsx("relative ", {
            "h-8 w-8": size === "md",
            "h-7 w-7": size === "sm",
          })}
        >
          <span className="absolute inset-0 origin-[50%_100px] rotate-90 transform text-black transition duration-700 motion-reduce:duration-[0s] dark:rotate-0 dark:text-white">
            <MoonIcon />
          </span>
          <span className="absolute inset-0 origin-[50%_100px] rotate-0 transform text-black transition duration-700 motion-reduce:duration-[0s] dark:-rotate-90 dark:text-white">
            <SunIcon />
          </span>
        </div>
        <span className="sr-only text-tp">
          <Themed dark="switch to light mode" light="switch to dark mode" />
        </span>
      </button>
    </>
  );
};
