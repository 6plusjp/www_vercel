import { json } from "@vercel/remix";
import type { LinksFunction, LoaderArgs } from "@vercel/remix";
import { Link, useLoaderData } from "@remix-run/react";

import { notFound } from "~/utils/responses";
import { ExternalLink } from "~/components/external-link";
import { SixPlusIcon } from "~/components/icons/six-plus-icon";
import { Alert } from "~/components/alert";

export const loader = async ({ params }: LoaderArgs) => {
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

function EnResume() {
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
              A web developer driven by the skill of acquiring new skills.
              Familiar with most major tech stacks and platforms. Immense care
              for user experience and accessibility. Believe communication is
              the key to every successful project delivered.
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
                <div className="italic">Front-End Developing</div>
                <ul className="list-inside list-disc space-y-1">
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
            <div className="flex flex-col md:flex-row space-y-1 md:space-y-0">
              <div className="space-y-1 md:space-y-2 md:w-1/3">
                <h2 className="font-bold">Apple</h2>
                <div className="text-[#757d94]">2020 - 2022</div>
              </div>
              <div className="space-y-2 md:w-2/3">
                <div className="italic">Front-End Developing</div>
                <ul className="list-inside list-disc space-y-1">
                  <li>
                    Growth marketing consulting, with a focus on customer
                    acquisition.
                  </li>
                  <li>
                    Projects covered landing page optimization, paid
                    advertising, content marketing, and search engine
                    optimization.
                  </li>
                  <li>
                    Clients included Google, Microsoft, Casper, Away, and
                    Stripe.
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
                    (Osaka Metropolitan University)
                  </ExternalLink>
                </h2>
                <div className="text-[#757d94]">2015 - 2020</div>
              </div>
              <div className="space-y-2 md:w-2/3">
                <div className="italic">
                  College of Life, Environment, and Advanced Sciences
                </div>
                <ul className="list-inside list-disc space-y-1">
                  <li>
                    Leave of absence and year of study abroad at personal
                    expense.
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
}

function JpResume() {
  return (
    <>
      <div className="text-gray-500 bg-white px-6 py-12 md:p-14 lg:py-20 lg:px-24 overflow-hidden">
        <div className="space-y-10 md:gap-16 grid md:grid-cols-3">
          <header className="block space-y-4 md:col-span-3 md:flex md:items-center md:justify-center md:gap-12">
            <div className="space-y-2 text-hs">
              <h1 className="text-3xl font-bold md:text-5xl">
                Shoma
                <br />
                Yamamoto
              </h1>
              <div className="flex items-center space-x-2">
                <HeadingLine />
                <div className="text-lg font-medium">Web Developer</div>
              </div>
            </div>
            <p className="">
              Digital marketing specialist with six years of experience working
              as a teacher, consultant, and employee. Familiar with most major
              digital marketing techniques and platforms.
            </p>
          </header>

          <div className="space-y-10 md:col-span-2">
            <section className="space-y-4">
              <HeadingTitle>Work Experience</HeadingTitle>
              <div className="space-y-2">
                <h2 className="text-hs font-bold text-3xl">Freelance</h2>
                <div className="font-bold">
                  Front-End Developing | Apr 2020 - Current
                </div>
              </div>
              <div>
                <ul>
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
              <div>
                <ul>
                  <li>
                    Growth marketing consulting, with a focus on customer
                    acquisition.
                  </li>
                  <li>
                    Projects covered landing page optimization, paid
                    advertising, content marketing, and search engine
                    optimization.
                  </li>
                  <li>
                    Clients included Google, Microsoft, Casper, Away, and
                    Stripe.
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    Helped existing Google Ads customers increase spend
                    efficiency by up to 200%.
                  </li>
                  <li>
                    Signed new clients totaling over three million dollars in
                    yearly spend.
                  </li>
                </ul>
              </div>
            </section>
            <section className="space-y-4">
              <HeadingTitle>Education</HeadingTitle>
              <div className="space-y-2">
                <h2 className="text-hs font-bold text-3xl">
                  Osaka Prefecture University
                </h2>
                <div className="font-bold">
                  BS Business - Marketing Focus | 2015 - 2020
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-12 md:col-span-1 md:row-start-2">
            <section className="space-y-4">
              <HeadingMiniTitle>Contact Info</HeadingMiniTitle>
              <ul>
                <li>Osaka, JP</li>
                <li>
                  <ExternalLink href="http://github.com/6plusjp">
                    github.com/6plusjp
                  </ExternalLink>
                </li>
                <li>6plusjp@email.com</li>
              </ul>
            </section>
            <section className="space-y-4">
              <HeadingMiniTitle>Skills</HeadingMiniTitle>
              <div>
                <div className="font-semibold">General</div>
                <ul>
                  <li>Google Ads</li>
                  <li>Facebook Ads</li>
                  <li>LinkedIn Ads</li>
                  <li></li>
                </ul>
              </div>
              <div>
                <div className="font-semibold">Languages</div>
                <ul>
                  <li>JavaScript, TypeScript</li>
                  <li>Python</li>
                  <li>Rust</li>
                  <li>PHP</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold">Libraries</div>
                <ul>
                  <li>Google Ads</li>
                  <li>Facebook Ads</li>
                  <li>LinkedIn Ads</li>
                  <li></li>
                </ul>
              </div>
              <div>
                <div className="font-semibold">Other</div>
                <ul>
                  <li>Git</li>
                  <li>Linux</li>
                  <li>Unit testing</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

function HeadingTitle({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex items-center text-hs space-x-2">
        <HeadingLine />
        <h2 className="text-xl font-bold">{children}</h2>
        <HeadingLine />
      </div>
    </>
  );
}
function HeadingMiniTitle({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex items-center text-hs text-lg">
        <HeadingMiniLine />
        <h2 className="font-bold">{children}</h2>
      </div>
    </>
  );
}

function HeadingLine() {
  return (
    <>
      <div className="h-0.5 w-14 bg-hs" />
    </>
  );
}
function HeadingMiniLine() {
  return (
    <>
      <div className="h-0.5 w-6 mr-2 bg-hs" />
    </>
  );
}
