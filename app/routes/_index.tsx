import type { MetaFunction } from "@vercel/remix";

import { Navbar } from "~/components/navbar";
import { Footer } from "~/components/footer";
import { HomeTitle } from "~/components/sections/home-title";
import { SkillsSection } from "~/components/sections/skills-section";
import { ToolsSection } from "~/components/sections/tools-section";
import { ContactSection } from "~/components/sections/contact-section";
import { AboutSection } from "~/components/sections/about-section";

import { getMeta } from "~/utils/seo";

export const meta: MetaFunction = () => {
  return [
    ...getMeta({
      description: "フリーランスでフロントエンド開発しています。",
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
