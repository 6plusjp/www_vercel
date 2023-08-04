import { NavLink } from "@remix-run/react";

import clsx from "clsx";

import { ThemeToggle } from "./toggle";
import { GitHubIcon } from "./icons/github-icon";
// import { TwitterIcon } from "./icons/twitter-icon";
import { RssIcon } from "./icons/rss-icon";
import { ExternalLink } from "./external-link";

const NAV_LIST = [
  { name: "Home", to: "/" },
  { name: "Works", to: "/works" },
  { name: "Contact", to: "/contact" },
  { name: "Blog", to: "/blog" },
];
const LEGAL_LIST = [
  { name: "Privacy Policy", to: "/policy" },
  { name: "Terms of Use", to: "/terms" },
];

function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={clsx(className, "relative w-full py-8")}
      role="contentinfo"
    >
      <div className="container mx-auto grid justify-evenly gap-8 px-[5vw] py-10 sm:grid-flow-col-dense">
        <nav className="flex flex-col whitespace-nowrap text-base text-tp">
          <h2 className="mb-3">NAVIGATION</h2>
          {NAV_LIST.map((link) => {
            return (
              <NavLink
                to={link.to}
                key={link.name}
                prefetch="intent"
                className={({ isActive }) =>
                  isActive
                    ? "pl-2 text-slate-500 focus:text-hp focus:outline-none dark:text-slate-400 dark:focus:text-hp"
                    : "pl-2 hover:text-hp focus:text-hp focus:outline-none"
                }
                end
              >
                {link.name}
              </NavLink>
            );
          })}
        </nav>
        <nav className="flex flex-col whitespace-nowrap text-base text-tp">
          <h2 className="mb-3">LEGAL</h2>
          {LEGAL_LIST.map((link) => {
            return (
              <NavLink
                to={link.to}
                key={link.name}
                prefetch="intent"
                className={({ isActive }) =>
                  isActive
                    ? "pl-2 text-slate-500 dark:text-slate-400"
                    : "pl-2 hover:text-hp focus:text-hp focus:outline-none"
                }
                end
              >
                {link.name}
              </NavLink>
            );
          })}
          {/* <ExternalLink
            className="pl-2 text-tp hover:text-hp focus:text-hp focus:outline-none"
            href="https://umami-6plus.up.railway.app/share/Ibl3yjOa/6plus.tech"
          >
            Analytics - umami
          </ExternalLink> */}
          <a
            className="pl-2 text-tp hover:text-hp focus:text-hp focus:outline-none"
            href="/sitemap.xml"
          >
            Sitemap.xml
          </a>
        </nav>
        <div className="col-span-2 flex gap-8 sm:col-span-1 sm:flex-col">
          <div className="flex items-center justify-center gap-4">
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
            {/* <ExternalLink
              className="ring-hp focus:outline-none focus:ring-2"
              aria-label="Twitter"
              href="https://twitter.com"
            >
              <span className="sr-only"> View on Twitter </span>
              <TwitterIcon
                size={32}
                className="fill-slate-500 hover:fill-[#1DA1F2] focus:fill-[#1DA1F2]"
              />
            </ExternalLink> */}
            <ExternalLink
              className="ring-hp focus:outline-none focus:ring-2"
              aria-label="RSS"
              href="https://6plus.tech/blog/rss.xml"
            >
              <span className="sr-only"> View RSS </span>
              <RssIcon
                size={32}
                className="fill-slate-500 hover:fill-[#f26522] focus:fill-[#f26522]"
              />
            </ExternalLink>
            <ExternalLink
              href="https://www.buymeacoffee.com/6plus"
              className="rounded-sm bg-hp ring-hp hover:ring-2 focus:outline-none focus:ring-2"
            >
              <img
                src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
                alt="Buy me a coffee"
                className="m-1 h-7 w-7"
              />
            </ExternalLink>
          </div>
          <div className="noscript-hidden mx-auto">
            <ThemeToggle size="sm" />
          </div>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center text-sm text-tp">
        <span className="">Copyright &copy; 6+ All rights reserved. </span>
      </div>
    </footer>
  );
}

export { Footer };
