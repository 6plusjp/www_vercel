import * as React from "react";
import { NavLink } from "remix";

import clsx from "clsx";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Menu,
  MenuButton,
  MenuLink,
  MenuPopover,
  useMenuButtonContext,
  MenuItems,
} from "@reach/menu-button";

import { ThemeToggle } from "./toggle";
import { MenuIcon } from "./icons/menu-icon";
import { SixPlusIcon } from "./icons/six-plus-icon";

const LINKS = [
  { name: "Home", to: "/" },
  { name: "Works", to: "/works" },
  { name: "Contact", to: "/contact" },
  { name: "Blog", to: "/blog" },
];

function Navbar({ className }: { className?: string }) {
  return (
    <div className={clsx(className, "px-[5vw] py-4 sm:py-8 lg:py-12")}>
      <nav className="mx-auto flex max-w-screen-2xl items-center justify-between text-tp">
        <NavLink
          to="/"
          prefetch="intent"
          className="ring-hp focus:outline-none focus:ring-2"
        >
          <SixPlusIcon size={50} />
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
}

function MobileMenu() {
  return (
    <Menu>
      {({ isExpanded }) => {
        const state = isExpanded ? "active" : "";
        return (
          <>
            <MenuButton
              className={clsx(
                state,
                "menu-toggle my-auto inline-flex items-center justify-center ring-hp transition focus:outline-none focus:ring-2"
              )}
            >
              <span className="sr-only">menu toggle</span>
              <MenuIcon className="text-tp" />
            </MenuButton>

            <MobileMenuList />
          </>
        );
      }}
    </Menu>
  );
}

function MobileMenuList() {
  const { isExpanded } = useMenuButtonContext();
  const shouldReduceMotion = useReducedMotion();
  const duration = shouldReduceMotion ? 0 : 0.15;
  const easing = "linear";

  React.useEffect(() => {
    if (isExpanded) {
      document.body.classList.add("fixed");
      document.body.classList.add("overflow-y-scroll");
      document.body.style.height = "100vh";
    } else {
      document.body.classList.remove("fixed");
      document.body.classList.remove("overflow-y-scroll");
      document.body.style.removeProperty("height");
    }
  }, [isExpanded]);

  return (
    <AnimatePresence>
      {isExpanded ? (
        <MenuPopover
          position={(r) => ({
            top: `calc(${Number(r?.top) + Number(r?.height)}px + 2rem)`, // 2 rem = py-8 from navbar
            bottom: 0,
            right: 0,
          })}
          className="z-50 block"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{
              duration: duration,
              ease: easing,
            }}
            className="h-full pb-8"
          >
            <MenuItems className="flex min-w-[30vw] flex-col bg-bs text-center shadow-xl outline-none">
              {LINKS.map((link) => (
                <MenuLink
                  key={link.to}
                  as={NavLink}
                  to={link.to}
                  prefetch="intent"
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive
                      ? "py-3 text-lg text-slate-500 focus:outline-none dark:text-slate-300"
                      : "py-3 text-lg text-tp hover:text-hp focus:outline-none"
                  }
                >
                  {link.name}
                </MenuLink>
              ))}
              <div className="noscript-hidden py-6">
                <ThemeToggle />
              </div>
            </MenuItems>
          </motion.div>
        </MenuPopover>
      ) : null}
    </AnimatePresence>
  );
}

export { Navbar, MobileMenu };
