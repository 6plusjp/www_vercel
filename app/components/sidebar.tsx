import type { ReactNode } from "react";
import { Link, NavLink } from "@remix-run/react";

import { ExternalLink } from "./external-link";
import { ThemeToggle } from "./toggle";

import { GitHubIcon } from "./icons/github-icon";
import { RssIcon } from "./icons/rss-icon";

function Sidebar({ children }: { children?: ReactNode }) {
  return (
    <aside className="sticky top-0 h-full max-h-screen w-64 overflow-y-auto overflow-x-hidden py-10 pl-6 pr-3 xl:w-80 xl:pr-5 2xl:w-96 2xl:pr-6">
      {children}
      <Desktop />
    </aside>
  );
}

const NAV_LIST = [
  { name: "Home", to: "/" },
  { name: "Works", to: "/works" },
  { name: "Contact", to: "/contact" },
  { name: "Blog", to: "/blog" },
];
const LEGAL_LIST = [
  { name: "Privacy Policy", to: "/policy" },
  { name: "Terms of Use", to: "/policy#terms" },
];

function Desktop() {
  return (
    <>
      <nav className="mb-8 text-tp">
        <h4 className="mb-2 py-1 pt-0 text-base font-medium uppercase">
          Navigation
        </h4>
        <ul className="mb-3">
          {NAV_LIST.map((link) => {
            return (
              <li key={link.name} className="py-1 pl-2 text-sm">
                <NavLink
                  to={link.to}
                  prefetch="intent"
                  className={({ isActive }) =>
                    isActive
                      ? "w-auto text-slate-500 focus:text-hp focus:outline-none dark:text-slate-400 dark:focus:text-hp"
                      : "w-auto hover:text-hp focus:text-hp focus:outline-none"
                  }
                  end
                >
                  {link.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <nav className="mb-12 text-tp">
        <h4 className="mb-2 py-1 pt-0 text-base font-medium uppercase">
          Legal
        </h4>
        <ul className="mb-3">
          {LEGAL_LIST.map((link) => {
            return (
              <li key={link.name} className="py-1 pl-2 text-sm">
                <NavLink
                  to={link.to}
                  prefetch="intent"
                  className="w-auto hover:text-hp focus:text-hp focus:outline-none"
                >
                  {link.name}
                </NavLink>
              </li>
            );
          })}
          <li className="py-1 pl-2 text-sm">
            <a
              className="hover:text-hp focus:text-hp focus:outline-none"
              href="/sitemap.xml"
            >
              Sitemap.xml
            </a>
          </li>
        </ul>
      </nav>
      <div className="mb-12 flex items-center gap-4">
        <ExternalLink
          className="ring-hp focus:outline-none focus:ring-2"
          aria-label="GitHub"
          href="https://github.com/6plusjp"
        >
          <span className="sr-only"> View on GitHub </span>
          <GitHubIcon
            size={32}
            className="fill-slate-500 hover:fill-[#333] focus:fill-[#333]"
          />
        </ExternalLink>
        <Link
          className="ring-hp focus:outline-none focus:ring-2"
          aria-label="RSS"
          target="_blank"
          to="/blog/rss.xml"
        >
          <span className="sr-only"> View RSS </span>
          <RssIcon
            size={32}
            className="fill-slate-500 hover:fill-[#f26522] focus:fill-[#f26522]"
          />
        </Link>
      </div>
      <div className="noscript-hidden mx-auto">
        <ThemeToggle size="sm" />
      </div>
    </>
  );
}

export { Sidebar };
