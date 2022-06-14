import * as React from "react";
import type { MetaFunction } from "remix";

import { Navbar } from "~/components/navbar";
import { Footer } from "~/components/footer";
import { HomeTitle } from "~/components/sections/home-title";
import { SkillsSection } from "~/components/sections/skills-section";
import { ToolsSection } from "~/components/sections/tools-section";
import { ContactSection } from "~/components/sections/contact-section";

import { getMeta } from "~/utils/seo";
import { getUrl } from "~/utils/misc";
import { AboutSection } from "~/components/sections/about-section";

export const meta: MetaFunction = ({ parentsData }) => {
  const { requestInfo } = parentsData.root;
  const description = "フリーランスでフロントエンド開発しています。";

  return {
    ...getMeta({
      url: getUrl(requestInfo),
      description,
      keywords: "JavaScript, TypeScript, React, Web Development, WEB開発",
    }),
  };
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
