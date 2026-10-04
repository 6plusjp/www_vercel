import type { MetaFunction } from "@vercel/remix";

import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";
import { AboutSection } from "~/components/sections/about-section";
import { ContactSection } from "~/components/sections/contact-section";
import { HomeTitle } from "~/components/sections/home-title";
import { SkillsSection } from "~/components/sections/skills-section";
import { ToolsSection } from "~/components/sections/tools-section";
import { getMeta } from "~/utils/seo";

export const meta: MetaFunction = () => {
  return [
    ...getMeta({
      description:
      "WebアプリケーションとCLIツールの開発。Shoma Yamamoto（Remix / TypeScript / Rust）。",
    }),
  ];
};

export default function Index() {
  return (
    <div className="relative bg-bp duration-500">
      <Navbar />
      <main>
        <HomeTitle />
        <AboutSection />
        <SkillsSection />
        <ToolsSection />
        <ContactSection />
      </main>
      <Footer className="bg-bs duration-500" />
    </div>
  );
}
