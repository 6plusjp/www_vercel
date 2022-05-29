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

export const meta: MetaFunction = ({ parentsData }) => {
  const { requestInfo } = parentsData.root;
  const description = "フリーランスでフロントエンド開発しています。";

  return {
    ...getMeta({
      origin: requestInfo.origin,
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
        <SkillsSection />
        <ToolsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
