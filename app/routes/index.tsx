import * as React from 'react'
import type { MetaFunction } from 'remix'

import { Navbar } from '~/components/navbar'
import { Footer } from '~/components/footer'
import { HomeTitle } from '~/components/sections/home-title'
import { SkillsSection } from '~/components/sections/skills-section'
import { ToolsSection } from '~/components/sections/tools-section'
import { ContactSection } from '~/components/sections/contact-section'

import { getMeta } from '~/utils/seo'
import { getUrl } from '~/utils/misc'

export const meta: MetaFunction = ({ parentsData }) => {
  const { requestInfo } = parentsData.root
  const description = 'はじめまして。'

  return {
    ...getMeta({
      origin: requestInfo.origin,
      url: getUrl(requestInfo),
      description
    })
  }
}

export default function Index() {
  return (
    <div className='bg-bp duration-500'>
      <Navbar />
      <main>
        <HomeTitle />
        <SkillsSection />
        <ToolsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
