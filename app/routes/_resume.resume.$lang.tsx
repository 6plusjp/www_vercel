import { json } from "@vercel/remix";
import type { LinksFunction, LoaderArgs } from "@vercel/remix";
import { Link, useLoaderData } from "@remix-run/react";

import { notFound } from "~/utils/responses";
import { ExternalLink } from "~/components/external-link";
import { SixPlusIcon } from "~/components/icons/six-plus-icon";
import { Alert } from "~/components/alert";

export const loader = ({ params }: LoaderArgs) => {
  if (params.lang !== "en" && params.lang !== "jp")
    throw notFound("お探しのページは見つかりませんでした。");

  return json(params.lang);
};

export const meta = () => {
  return [{ title: "Shoma Yamamoto's Resume | 6+" }];
};

export const links: LinksFunction = () => {
  return [
    // {
    //   rel: "preconnect",
    //   href: "https://fonts.googleapis.com",
    //   crossOrigin: "anonymous",
    // },
    // {
    //   rel: "preconnect",
    //   href: "https://fonts.gstatic.com",
    //   crossOrigin: "anonymous",
    // },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap",
      crossOrigin: "anonymous",
    },
  ];
};

export default function Resume() {
  const lang = useLoaderData<typeof loader>();

  return (
    <>
      <Alert state="warning">
        The contents are under development and may differ from the facts or
        change suddenly.
        <br />
        開発段階なので、内容が事実とは異なる場合や突然変更する可能性があります。
      </Alert>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between text-gray-500 px-4">
          <Link className="drop-shadow" to="/" prefetch="intent">
            <SixPlusIcon size={55} />
          </Link>
          <div className="flex items-center justify-center gap-x-2">
            <div className="py-2 sm:py-4 lg:py-6">
              Inspired by
              <br />
              <ExternalLink
                className="font-bold text-gray-600"
                href="https://standardresume.co"
              >
                Standard Resume
              </ExternalLink>
            </div>
            <Link
              className="bg-white rounded-full flex items-center justify-center p-2 cursor-not-allowed hover:scale-105 transition-transform"
              title="Download PDF resume"
              to="pdf"
              reloadDocument
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </Link>
          </div>
        </div>
        {lang === "en" ? <EnResume /> : <JpResume />}
      </div>
    </>
  );
}

const EnResume = () => {
  return (
    <>
      <div className="text-[#232E53] bg-white px-6 py-12 md:p-14 lg:py-20 lg:px-24 overflow-hidden shadow">
        <div className="space-y-10">
          <header>
            <h1 className="text-4xl md:text-5xl font-['DM_Serif_Display',serif] !leading-[.9] text-hs mb-8">
              Shoma
              <br />
              Yamamoto
            </h1>
            <p className="text-base md:text-xl mb-4">
              Self-taught, dedicated and highly motivated Web Developer with a
              passion for the acquisition of new skills and knowledge. Familiar
              with most major technology stacks and platforms. Strong focus on
              user experience and accessibility. Believe that committing to
              share expectations and goals with a team is key to any successful
              project delivered.
            </p>
            <ul className="flex flex-wrap text-[#757d94]">
              <li className="pr-2 border-r border-[#757d94]">Web Developer</li>
              <li className="px-2 border-r border-[#757d94]">Osaka, JP</li>
              <li className="px-2 border-r border-[#757d94]">
                6plusjp@gmail.com
              </li>
              <li className="pl-2">
                <ExternalLink
                  className="hover:opacity-70"
                  href="http://github.com/6plusjp"
                >
                  github.com/6plusjp
                </ExternalLink>
              </li>
            </ul>
          </header>
          <section className="space-y-8">
            <h2 className="text-2xl md:text-3xl text-hs font-['DM_Serif_Display',serif]">
              Work Experience
            </h2>
            <div className="flex flex-col md:flex-row space-y-1 md:space-y-0">
              <div className="space-y-1 md:space-y-2 md:w-1/3">
                <h2 className="font-bold">Freelance</h2>
                <div className="text-[#757d94]">Apr 2020 - Current</div>
              </div>
              <div className="space-y-2 md:w-2/3">
                <div className="italic">Web Developer</div>
                <ul className="list-inside list-disc space-y-1">
                  <li>
                    As the tech lead for the Patient Growth team, I really wore
                    many hats and helped with many things but my main areas of
                    focus were defining the technical vision, reducing tech
                    debt, mentoring, and working with the product, marketing,
                    and customer enablement teams to prioritize features. I also
                    improved processes and empowered the team in order to
                    increase test coverage and reduce bugs. Additionally I built
                    Opencare's first design library with the design team, and
                    built a custom analytics package to simplify integrating
                    analytics across the multiple apps (Snowplow, Fullstory,
                    Heap, Optimizely). Tech stack was predominantly React,
                    Typescript, Jest/React Testing Library, and
                    styled-components, using a rest API built in Node.
                  </li>
                  <li>
                    Review students marketing projects and suggest changes and
                    improvements.
                  </li>
                  <li>
                    Topics include paid advertising, content marketing, landing
                    page copy/design/optimization, and more.
                  </li>
                  <li>
                    Helped startup founders increase growth by as much as 10x.
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="space-y-8">
            <h2 className="text-2xl md:text-3xl text-hs font-['DM_Serif_Display',serif]">
              Education
            </h2>
            <div className="flex flex-col md:flex-row space-y-1 md:space-y-0">
              <div className="space-y-1 md:space-y-2 md:w-1/3">
                <h2 className="font-bold">
                  <ExternalLink
                    className="hover:opacity-70"
                    href="https://www.osakafu-u.ac.jp/en/"
                  >
                    Osaka Prefecture University
                  </ExternalLink>
                  <br />
                  <ExternalLink
                    className="hover:opacity-70"
                    href="https://www.omu.ac.jp/en/"
                  >
                    (now Osaka Metropolitan University)
                  </ExternalLink>
                </h2>
                <div className="text-[#757d94]">2015 - 2020</div>
              </div>
              <div className="space-y-2 md:w-2/3">
                <div className="italic">
                  Science, College of Life, Environment, and Advanced Sciences
                </div>
                <ul className="list-inside list-disc space-y-1">
                  <li>
                    Leave of absence and study abroad year at personal expense.
                  </li>
                  <li>Withdrawn from school for personal reasons.</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="space-y-8 md:flex block md:space-y-0">
            <h2 className="text-2xl md:text-3xl text-hs font-['DM_Serif_Display',serif] md:w-1/3">
              Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 md:w-2/3">
              <div className="space-y-1">
                <div className="font-bold">Languages</div>
                <ul>
                  <li>JavaScript, TypeScript</li>
                  <li>Python</li>
                  <li>Rust</li>
                  <li>PHP</li>
                </ul>
              </div>
              <div className="space-y-1">
                <div className="font-bold">Frameworks</div>
                <ul>
                  <li>Remix</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="space-y-1">
                <div className="font-bold">Other</div>
                <ul>
                  <li>Git</li>
                  <li>REST API</li>
                  <li>Linux</li>
                  <li>Unit testing</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

const JpResume = () => {
  return (
    <>
      <div className="text-gray-500 bg-white aspect-w-5 aspect-h-7"></div>
    </>
  );
};
