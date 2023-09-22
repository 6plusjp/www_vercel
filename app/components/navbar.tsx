import { NavLink } from "@remix-run/react";

import * as Menu from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";

import { ThemeToggle } from "./toggle";
import { MenuIcon } from "./icons/menu-icon";
import { SixPlusIcon } from "./icons/six-plus-icon";

const LINKS = [
  { name: "Home", to: "/", svg: <SixPlusIcon size={55} /> },
  { name: "Works", to: "/works" },
  { name: "Contact", to: "/contact" },
  { name: "Blog", to: "/blog" },
];

export const Navbar = ({ className }: { className?: string }) => (
  <div className={clsx(className, "px-[5vw] py-4 sm:py-8 lg:py-12")}>
    <nav className="mx-auto flex max-w-screen-2xl items-center justify-between text-tp">
      <NavLink
        to={LINKS[0].to}
        prefetch="intent"
        className="ring-hp focus:outline-none focus:ring-2"
      >
        {LINKS[0].svg}
      </NavLink>
      <div className="flex items-center justify-center">
        <ul className="mr-8 hidden lg:flex">
          {LINKS.map((link) => {
            return (
              <li
                key={link.name}
                className=" whitespace-nowrap px-5 py-2 text-lg font-medium"
              >
                <NavLink
                  to={link.to}
                  prefetch="intent"
                  className={({ isActive }) =>
                    isActive
                      ? "text-slate-500 focus:text-hp focus:outline-none dark:text-slate-400 dark:focus:text-hp"
                      : "underline-animation text-tp focus:outline-none"
                  }
                  end
                >
                  {link.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="flex lg:hidden">
          <MobileMenu />
        </div>
        <div className="noscript-hidden hidden lg:flex">
          <ThemeToggle className="self-center" />
        </div>
      </div>
    </nav>
  </div>
);

export const MobileMenu = () => (
  <Menu.Root>
    <Menu.Trigger asChild>
      <button
        className={clsx(
          "menu-toggle my-auto inline-flex items-center justify-center ring-hp transition focus:outline-none focus:ring-2",
          "data-[state=open]:active",
        )}
        aria-label="menu toggle"
      >
        <MenuIcon className="text-tp" />
      </button>
    </Menu.Trigger>
    <Menu.Portal>
      <Menu.Content className="bg-bs shadow-xl p-6 rounded-md data-[side=top]:animate-slideDownAndFade data-[side=bottom]:animate-slideUpAndFade">
        <Menu.Group className="space-y-2">
          {LINKS.map((link) => (
            <NavLink
              to={link.to}
              prefetch="intent"
              key={link.to}
              className="text-lg"
            >
              {({ isActive, isPending }) => (
                <Menu.Item
                  className={
                    isPending
                      ? "outline-none cursor-not-allowed py-1"
                      : isActive
                      ? "outline-none text-slate-500 dark:text-slate-300 cursor-not-allowed py-1 data-[highlighted]:line-through"
                      : "outline-none text-tp hover:text-hp py-1 data-[highlighted]:text-hp"
                  }
                >
                  {link.name}
                </Menu.Item>
              )}
            </NavLink>
          ))}
          {/* //FIXME -keyboard navigation and tab key operations do not focus */}
          <Menu.Item className="noscript-hidden focus:outline-none items-center justify-center flex py-3">
            <ThemeToggle />
          </Menu.Item>
        </Menu.Group>
        <Menu.Arrow className="fill-bs" />
      </Menu.Content>
    </Menu.Portal>
  </Menu.Root>
);
