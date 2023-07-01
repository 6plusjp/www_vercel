import type {
  LoaderFunction,
  LinksFunction,
  MetaFunction,
} from "@vercel/remix";
import { json } from "@vercel/remix";
import {
  Links,
  Meta,
  Scripts,
  LiveReload,
  ScrollRestoration,
  Outlet,
  useLoaderData,
  Link,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
import { cssBundleHref } from "@remix-run/css-bundle";

import { Analytics } from "@vercel/analytics/react";
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
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1,viewport-fit=cover",
    ...getMeta({
      url: getUrl(requestInfo),
      keywords: "6+,ロクタス,React,JavaScript,TypeScript",
      image: "/images/og.png",
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
      href: "/favicon-black.ico",
    },
    {
      rel: "icon",
      href: "/favicon-white.ico",
      media: "(prefers-color-scheme: dark)",
    },
    { rel: "stylesheet", href: reachUi },
    { rel: "stylesheet", href: global },
    { rel: "stylesheet", href: tailwind },
    ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
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
        <Meta />
        <Links />
        {/* <style
          dangerouslySetInnerHTML={{
            __html: `@font-face{font-family:'Inter'}`,
          }}
        /> */}
        <link
          rel="canonical"
          href={removeTrailingSlash(
            `${data.requestInfo.origin}${data.requestInfo.path}`
          )}
        />
        <noscript>
          <link rel="stylesheet" href={noScriptCSS} />
        </noscript>
        <ThemeScript ssrTheme={Boolean(data.theme)} />
      </head>
      <body className="w-full antialiased">
        {children}
        <ScrollRestoration />
        {/* <script
          async
          data-website-id="37cf2507-a08a-46af-97fb-2a27fa9fcda4"
          src="https://umami-6plus.up.railway.app/umami.js"
          data-excluded-domains="localhost"
          data-spa="history"
        /> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
          }}
        />
        <Scripts />
        <LiveReload />
        <Analytics />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <html lang="ja">
        <head>
          <meta charSet="utf-8" />
          <title>{error.statusText}</title>
          <Links />
        </head>
        <body className="flex min-h-screen w-full flex-col overflow-x-hidden bg-gray-900 text-gray-200">
          <Layout>
            <main className="mx-auto max-w-3xl space-y-8 px-4 py-12 sm:p-12">
              <div className="flex">
                <h1 className="mr-4 border-r border-gray-500 pr-4 text-2xl font-bold sm:text-4xl">
                  {error.status}
                </h1>
                <h2 className="text-2xl sm:text-4xl">{error.statusText}</h2>
              </div>
              <p className="text-lg">{error.data}</p>
              <p className="text-lg">
                <Link
                  className="text-blue-500 underline hover:no-underline focus:no-underline"
                  to="/"
                >
                  Go back to the home page
                </Link>
              </p>
            </main>
          </Layout>
        </body>
      </html>
    );
  } else if (error instanceof Error) {
    return (
      <html lang="ja">
        <head>
          <meta charSet="utf-8" />
          <title>Error</title>
          <Links />
        </head>
        <body className="flex min-h-screen w-full flex-col overflow-x-hidden bg-gray-900 text-gray-200">
          <Layout>
            <main className="mx-auto max-w-3xl space-y-8 px-4 py-12 sm:p-12">
              <h1 className="text-2xl underline underline-offset-8 sm:text-4xl">
                There was an error!
              </h1>
              <p className="text-lg">{error.message}</p>
              <div className="text-lg">
                <p>The stack trace is:</p>
                <pre>{error.stack}</pre>
              </div>
              <p className="text-lg">
                <Link
                  className="text-blue-500 underline hover:no-underline focus:no-underline"
                  to="/"
                >
                  Go back to the home page
                </Link>
              </p>
            </main>
          </Layout>
        </body>
      </html>
    );
  } else {
    return (
      <html lang="ja">
        <head>
          <meta charSet="utf-8" />
          <title>Unknown Error</title>
          <Links />
        </head>
        <body className="flex min-h-screen w-full flex-col overflow-x-hidden bg-gray-900 text-gray-200">
          <Layout>
            <main className="mx-auto max-w-3xl space-y-8 px-4 py-12 sm:p-12">
              <h1 className="text-2xl underline underline-offset-8 sm:text-4xl">
                Unknown Error
              </h1>
              <p className="text-lg">
                <Link
                  className="text-blue-500 underline hover:no-underline focus:no-underline"
                  to="/"
                >
                  Go back to the home page
                </Link>
              </p>
            </main>
          </Layout>
        </body>
      </html>
    );
  }
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-1 flex-col">
      <header className="flex items-center justify-between px-6 py-9 lg:px-12">
        <div className="container mx-auto flex justify-between">
          <Link to="/">
            <Icon size={50} />
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
              Remix GitHub
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

function Icon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1500 1500"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>6+</title>
      <path d="m1066.43 749-299.997.25V1097h-500L166 1270.46l1200.43-.46-299.56-520.75m-600.87.365L766 230m-.067.25L766 749.615l-299.567.135" />
    </svg>
  );
}
