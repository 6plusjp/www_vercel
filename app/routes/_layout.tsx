import { Outlet } from "@remix-run/react";

import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-bp duration-500">
      <Navbar />
      <Outlet />
      <Footer className="bg-bs duration-500" />
    </div>
  );
}
