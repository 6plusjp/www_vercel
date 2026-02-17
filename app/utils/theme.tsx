import { useFetcher } from "@remix-run/react";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import {
  createContext,
  createElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { __DEV__ } from "./assertion";
import { getSession, sessionStorage } from "./session.server";

type Theme = "light" | "dark";
const themes: Theme[] = ["light", "dark"];

const queries = {
  light: "(prefers-color-scheme: light)",
  dark: "(prefers-color-scheme: dark)",
};
const getPreferredTheme = () =>
  window.matchMedia(queries.light).matches ? themes[0] : themes[1];

async function getThemeSession(request: Request) {
  const session = await getSession(request);

  return {
    getTheme: () => {
      const themeValue = session.get("theme");
      return isTheme(themeValue) ? themeValue : themes[1];
    },
    setTheme: (theme: Theme) => session.set("theme", theme),
    commit: () => sessionStorage.commitSession(session),
  };
}

interface Meta extends Element {
  content?: string;
}
const setScriptCode = () => {
  const theme: Theme = getPreferredTheme();
  const root = document.documentElement;
  const cl = root.classList;
  const isThemeApplied = cl.contains(themes[0]) || cl.contains(themes[1]);
  if (isThemeApplied) {
    console.warn("Theme is already applied!?");
  } else {
    cl.add(theme);
  }
  const meta: Meta | null = document.querySelector("meta[name=color-scheme]");
  if (meta) {
    if (theme === themes[1]) {
      meta.content = "dark light";
    } else if (theme === themes[0]) {
      meta.content = "light dark";
    }
  } else {
    console.warn("Meta is not available!?");
  }
};
const themeStylesCode = `
  /* default light, but app-preference is "dark" */
  html.dark {
    light-mode {
      display: none;
    }
  }
  /* default light, and no app-preference */
  html:not(.dark) {
    dark-mode {
      display: none;
    }
  }
  @media (prefers-color-scheme: dark) {
    /* prefers dark, but app-preference is "light" */
    html.light {
      dark-mode {
        display: none;
      }
    }
    /* prefers dark, and app-preference is "dark" */
    html.dark,
    /* prefers dark and no app-preference */
    html:not(.light) {
      light-mode {
        display: none;
      }
    }
  }
`;
const ThemeScript = ({ ssrTheme }: { ssrTheme: boolean }) => {
  const [theme] = useTheme();
  const html = `(${String(setScriptCode)})`;
  return (
    <>
      <meta
        name="color-scheme"
        content={theme === themes[1] ? "dark light" : "light dark"}
      />
      {ssrTheme ? null : (
        <>
          <script dangerouslySetInnerHTML={{ __html: html }} />
          <style dangerouslySetInnerHTML={{ __html: themeStylesCode }} />
        </>
      )}
    </>
  );
};

const setElsCode = () => {
  const theme: Theme = getPreferredTheme();
  const darkEls = document.querySelectorAll("dark-mode");
  const lightEls = document.querySelectorAll("light-mode");
  for (const darkEl of darkEls) {
    if (theme === "dark") {
      for (const child of darkEl.childNodes) {
        darkEl.parentElement?.append(child);
      }
    }
    darkEl.remove();
  }
  for (const lightEl of lightEls) {
    if (theme === "light") {
      for (const child of lightEl.childNodes) {
        lightEl.parentElement?.append(child);
      }
    }
    lightEl.remove();
  }
};
function ThemeBody({ ssrTheme }: { ssrTheme: boolean }) {
  const html = `(${String(setElsCode)})`;
  return ssrTheme ? null : (
    <script dangerouslySetInnerHTML={{ __html: html }} />
  );
}

type ThemeContextType = [Theme | null, Dispatch<SetStateAction<Theme | null>>];

const ThemeContext = createContext({} as ThemeContextType);
if (__DEV__) {
  ThemeContext.displayName = "ThemeContext";
}
function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider!");
  }
  return context;
}

interface ThemeProviderProps {
  children: ReactNode;
  specifiedTheme: Theme | null;
}
function ThemeProvider(props: ThemeProviderProps) {
  const { children, specifiedTheme } = props;

  const [theme, setTheme] = useState<Theme | null>(() => {
    if (specifiedTheme) {
      if (themes.includes(specifiedTheme)) return specifiedTheme;
      else return null;
    }
    if (typeof window !== "object") return null;
    return getPreferredTheme();
  });

  const persistTheme = useFetcher();
  const persistThemeRef = useRef(persistTheme);
  useEffect(() => {
    persistThemeRef.current = persistTheme;
  }, [persistTheme]);

  const mountRun = useRef(false);

  useEffect(() => {
    if (!mountRun.current) {
      mountRun.current = true;
      return;
    }
    if (!theme) return;

    persistThemeRef.current.submit(
      { theme },
      { action: "action/set-theme", method: "post" }
    );
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia(queries.light);
    const handleChange = () => {
      setTheme(mediaQuery.matches ? themes[0] : themes[1]);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}
if (__DEV__) {
  ThemeProvider.displayName = "ThemeProvider";
}

function Themed({
  dark,
  light,
  initialOnly = false,
}: {
  dark: ReactNode | string;
  light: ReactNode | string;
  initialOnly?: boolean;
}) {
  const [theme] = useTheme();
  const [initialTheme] = useState(theme);
  const themeToReference = initialOnly ? initialTheme : theme;
  const serverRenderWithUnknownTheme = !theme && typeof window !== "object";
  if (serverRenderWithUnknownTheme) {
    return (
      <>
        {createElement("dark-mode", null, dark)}
        {createElement("light-mode", null, light)}
      </>
    );
  } else {
    return <>{themeToReference === "light" ? light : dark}</>;
  }
}

function isTheme(value: unknown): value is Theme {
  return typeof value === "string" && themes.includes(value as Theme);
}

export {
  getThemeSession,
  isTheme,
  ThemeBody,
  ThemeContext,
  Themed,
  ThemeProvider,
  themes,
  ThemeScript,
  useTheme,
};
export type { Theme };
