import {
  Links,
  Meta,
  Scripts,
  LiveReload,
  ScrollRestoration,
  Outlet,
  useLoaderData,
  useCatch,
  Link,
  json,
} from "remix";
import type { LoaderFunction, LinksFunction, MetaFunction } from "remix";
import clsx from "clsx";

import tailwind from "~/styles/tailwind.css";
import global from "~/styles/global.css";
import noScriptCSS from "~/styles/no-script.css";
import reachUi from "~/styles/vendors.css";

import { getEnv } from "./utils/env.server";
import type { Theme } from "./utils/theme";
import {
  getThemeSession,
  ThemeBody,
  ThemeProvider,
  ThemeScript,
  useTheme,
} from "./utils/theme";
import { getDomainUrl, getUrl, removeTrailingSlash } from "./utils/misc";
import type { SEOHandle } from "./utils/seo";
import { getMeta } from "./utils/seo";
import { ExternalLink } from "./components/external-link";

export const handle: SEOHandle & { id: string } = {
  id: "root",
};

export type RootLoaderData = {
  ENV: ReturnType<typeof getEnv>;
  requestInfo: {
    origin: string;
    path: string;
  };
  theme: Theme | null;
};
export const loader: LoaderFunction = async ({ request }) => {
  const { getTheme } = await getThemeSession(request);

  const data: RootLoaderData = {
    ENV: getEnv(),
    requestInfo: {
      origin: getDomainUrl(request),
      path: new URL(request.url).pathname,
    },
    theme: getTheme(),
  };

  return json(data);
};

export const meta: MetaFunction = ({ data }) => {
  const requestInfo = data?.requestInfo;
  return {
    viewport: "width=device-width,initial-scale=1,viewport-fit=cover",
    ...getMeta({
      origin: requestInfo?.origin ?? "",
      url: getUrl(requestInfo),
      keywords: "6+,ロクタス,React,JavaScript,TypeScript",
      image: "/images/portfolio-v3-2022-05.png",
    }),
  };
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "preload",
      as: "font",
      href: "/fonts/inter/Inter-Regular.woff2",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicons/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicons/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicons/favicon-16x16.png",
    },
    { rel: "manifest", href: "/site.webmanifest" },
    {
      rel: "icon",
      href: "/favicon.svg",
      // media:"(prefers-color-scheme: dark)"
    },
    { rel: "stylesheet", href: reachUi },
    { rel: "stylesheet", href: global },
    { rel: "stylesheet", href: tailwind },
  ];
};

export default function App() {
  const data = useLoaderData<RootLoaderData>();
  return (
    <ThemeProvider specifiedTheme={data.theme}>
      <Document>
        <Outlet />
        <ThemeBody ssrTheme={Boolean(data.theme)} />
      </Document>
    </ThemeProvider>
  );
}

function Document({ children }: { children: React.ReactNode }) {
  const data = useLoaderData();
  const [theme] = useTheme();
  return (
    <html lang="ja" className={clsx("font-display", theme)}>
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <link
          rel="canonical"
          href={removeTrailingSlash(
            `${data.requestInfo.origin}${data.requestInfo.path}`
          )}
        />
        <Links />
        <noscript>
          <link rel="stylesheet" href={noScriptCSS} />
        </noscript>
        <script
          async
          data-website-id="37cf2507-a08a-46af-97fb-2a27fa9fcda4"
          src="https://umami-6plus.up.railway.app/umami.js"
          data-excluded-domains="localhost"
        />
        <ThemeScript ssrTheme={Boolean(data.theme)} />
      </head>
      <body className="w-full antialiased">
        {children}
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
          }}
        />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <html lang="ja">
      <head>
        <title>Oh no...</title>
        <Links />
      </head>
      <body className="flex min-h-screen w-full flex-col overflow-x-hidden bg-gray-900 text-gray-200">
        <Layout>
          <h1 className="bold my-12 text-4xl">There was an error!</h1>
          <p className="mt-12 text-xl">{error.message}</p>
          <hr className="my-8" />
          <p>for users : 現在、何らかの理由でこのページは使用できません。</p>
        </Layout>
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = <p className="mt-12 text-xl">アクセス権が必要なページです。</p>;
      break;
    case 404:
      message = <p className="mt-12 text-xl">存在しないページです。</p>;
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <html lang="ja">
      <head>
        <title>{`${caught.status} ${caught.statusText}`}</title>
        <Links />
      </head>
      <body className="flex min-h-screen w-full flex-col overflow-x-hidden bg-gray-900 text-gray-200">
        <Layout>
          <h1 className="bold my-12 mb-8 text-4xl">
            {caught.status}: {caught.statusText}
          </h1>
          {message}
        </Layout>
      </body>
    </html>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-1 flex-col">
      <header className="flex items-center justify-between px-6 py-9 lg:px-12">
        <div className="container mx-auto flex justify-between">
          <Link to="/" title="Remix" className="">
            <RemixLogo />
          </Link>
          <nav aria-label="Main navigation" className="flex items-center gap-6">
            <Link
              className="mx-2 text-sm font-semibold opacity-80 last:mr-0 hover:opacity-100 sm:mx-4"
              to="/"
            >
              Home
            </Link>
            <ExternalLink
              className="mx-2 text-sm font-semibold opacity-80 last:mr-0 hover:opacity-100 sm:mx-4"
              href="https://remix.run/docs"
            >
              Remix Docs
            </ExternalLink>
            <ExternalLink
              className="mx-2 text-sm font-semibold opacity-80 last:mr-0 hover:opacity-100 sm:mx-4"
              href="https://github.com/remix-run/remix"
            >
              GitHub
            </ExternalLink>
          </nav>
        </div>
      </header>
      <div className="flex flex-1 flex-col">
        <div className="container mx-auto text-base">{children}</div>
      </div>
      <footer className="flex items-center justify-between px-6 py-9 text-sm lg:px-12">
        <div className="container mx-auto flex items-center justify-center">
          <span>Copyright &copy; 6+ All rights reserved. </span>
        </div>
      </footer>
    </div>
  );
}

function RemixLogo() {
  return (
    <svg
      viewBox="0 0 659 165"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby="remix-run-logo-title"
      role="img"
      width="106"
      height="30"
      fill="currentColor"
    >
      <title id="remix-run-logo-title">Remix Logo</title>
      <path d="M0 161V136H45.5416C53.1486 136 54.8003 141.638 54.8003 145V161H0Z M133.85 124.16C135.3 142.762 135.3 151.482 135.3 161H92.2283C92.2283 158.927 92.2653 157.03 92.3028 155.107C92.4195 149.128 92.5411 142.894 91.5717 130.304C90.2905 111.872 82.3473 107.776 67.7419 107.776H54.8021H0V74.24H69.7918C88.2407 74.24 97.4651 68.632 97.4651 53.784C97.4651 40.728 88.2407 32.816 69.7918 32.816H0V0H77.4788C119.245 0 140 19.712 140 51.2C140 74.752 125.395 90.112 105.665 92.672C122.32 96 132.057 105.472 133.85 124.16Z" />
      <path d="M229.43 120.576C225.59 129.536 218.422 133.376 207.158 133.376C194.614 133.376 184.374 126.72 183.35 112.64H263.478V101.12C263.478 70.1437 243.254 44.0317 205.11 44.0317C169.526 44.0317 142.902 69.8877 142.902 105.984C142.902 142.336 169.014 164.352 205.622 164.352C235.83 164.352 256.822 149.76 262.71 123.648L229.43 120.576ZM183.862 92.6717C185.398 81.9197 191.286 73.7277 204.598 73.7277C216.886 73.7277 223.542 82.4317 224.054 92.6717H183.862Z" />
      <path d="M385.256 66.5597C380.392 53.2477 369.896 44.0317 349.672 44.0317C332.52 44.0317 320.232 51.7117 314.088 64.2557V47.1037H272.616V161.28H314.088V105.216C314.088 88.0638 318.952 76.7997 332.52 76.7997C345.064 76.7997 348.136 84.9917 348.136 100.608V161.28H389.608V105.216C389.608 88.0638 394.216 76.7997 408.04 76.7997C420.584 76.7997 423.4 84.9917 423.4 100.608V161.28H464.872V89.5997C464.872 65.7917 455.656 44.0317 424.168 44.0317C404.968 44.0317 391.4 53.7597 385.256 66.5597Z" />
      <path d="M478.436 47.104V161.28H519.908V47.104H478.436ZM478.18 36.352H520.164V0H478.18V36.352Z" />
      <path d="M654.54 47.1035H611.788L592.332 74.2395L573.388 47.1035H527.564L568.78 103.168L523.98 161.28H566.732L589.516 130.304L612.3 161.28H658.124L613.068 101.376L654.54 47.1035Z" />
    </svg>
  );
}
