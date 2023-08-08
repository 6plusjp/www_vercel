import { Link, Outlet } from "@remix-run/react";

const NAV_LINKS = [
  { name: "Home", to: "/" },
  // { name: "About", to: "/about" },
  { name: "Works", to: "/works" },
  { name: "Contact", to: "/contact" },
  { name: "Blog", to: "/blog" },
  { name: "Privacy", to: "/policy" },
  { name: "Terms", to: "/terms" },
];

export default function ResumesLayout() {
  return (
    <div className="min-h-screen bg-gray-200">
      <Outlet />
      <footer className="flex items-center justify-center py-4 sm:py-8 md:py-10 text-xs sm:text-sm md:text-base text-gray-500">
        {NAV_LINKS.map(({ name, to }) => (
          <Link
            className="px-1 sm:px-2 py-2 md:px-4 hover:scale-105 transition-transform"
            key={name}
            to={to}
            prefetch="intent"
          >
            {name}
          </Link>
        ))}
      </footer>
    </div>
  );
}
