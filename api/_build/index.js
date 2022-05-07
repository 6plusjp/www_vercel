var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return node.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return node.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());

// app/other-routes.server.ts
init_react();

// app/utils/seo.ts
init_react();
var import_lodash = require("lodash");

// app/utils/misc.ts
init_react();
var import_react = require("react");

// app/utils/assertion.ts
init_react();
var __DEV__ = true;
var isBrowser = canUseDOM();
function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}

// app/utils/misc.ts
var noop = () => {
};
var doc = {
  body: {
    classList: {
      add() {
      },
      remove() {
      }
    }
  },
  addEventListener() {
  },
  removeEventListener() {
  },
  activeElement: {
    blur() {
    },
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {
      }
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {
      },
      getElementsByTagName() {
        return [];
      }
    };
  }
};
var ssrDocument = doc;
var win = {
  document: ssrDocument,
  navigator: {
    userAgent: ""
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener: noop,
  removeEventListener: noop,
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  matchMedia() {
    return {
      matches: false,
      addListener: noop,
      removeListener: noop
    };
  },
  requestAnimationFrame(callback) {
    if (typeof setTimeout === "undefined") {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame(id) {
    if (typeof setTimeout === "undefined")
      return;
    clearTimeout(id);
  },
  setTimeout: () => 0,
  clearTimeout: noop,
  setInterval: () => 0,
  clearInterval: noop
};
var ssrWindow = win;
var mockEnv = {
  window: ssrWindow,
  document: ssrDocument
};
var defaultEnv = isBrowser ? { window, document } : mockEnv;
var EnvironmentContext = (0, import_react.createContext)(defaultEnv);
if (__DEV__) {
  EnvironmentContext.displayName = "EnvironmentContext";
}
function getDomainUrl(request) {
  const host = request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  if (!host) {
    throw new Error("Could not determine domain URL.");
  }
  const protocol = host.includes("localhost") ? "http" : "https";
  return `${protocol}://${host}`;
}
function getUrl(requestInfo) {
  return removeTrailingSlash(`${(requestInfo == null ? void 0 : requestInfo.origin) ?? "https://6-plus.jp"}${(requestInfo == null ? void 0 : requestInfo.path) ?? ""}`);
}
function removeTrailingSlash(s) {
  return s.endsWith("/") ? s.slice(0, -1) : s;
}

// app/utils/seo.ts
async function getSitemapXml(request, remixContext) {
  const domainUrl = getDomainUrl(request);
  function getEntry({
    route,
    lastmod,
    changefreq,
    priority = 0.7
  }) {
    return `
  <url>
    <loc>${domainUrl}${route}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}
    ${changefreq ? `<changefreq>${changefreq}</changefreq>` : ""}
    ${typeof priority === "number" ? `<priority>${priority}</priority>` : ""}
  </url>
    `.trim();
  }
  const rawSitemapEntries = (await Promise.all(Object.entries(remixContext.routeModules).map(async ([id, mod]) => {
    if (id === "root")
      return;
    const handle = mod.handle;
    if (handle == null ? void 0 : handle.getSitemapEntries) {
      return handle.getSitemapEntries(request);
    }
    if (!("default" in mod))
      return;
    const manifestEntry = remixContext.manifest.routes[id];
    if (!manifestEntry) {
      console.warn(`Could not find a manifest entry for ${id}`);
      return;
    }
    let parentId = manifestEntry.parentId;
    let parent = parentId ? remixContext.manifest.routes[parentId] : null;
    let path;
    if (manifestEntry.path) {
      path = removeTrailingSlash(manifestEntry.path);
    } else if (manifestEntry.index) {
      path = "";
    } else {
      return;
    }
    while (parent) {
      const parentPath = parent.path ? removeTrailingSlash(parent.path) : "";
      path = `${parentPath}/${path}`;
      parentId = parent.parentId;
      parent = parentId ? remixContext.manifest.routes[parentId] : null;
    }
    if (path.includes(":"))
      return;
    if (id === "root")
      return;
    const entry2 = { route: removeTrailingSlash(path) };
    return entry2;
  }))).flatMap((z3) => z3).filter(typedBoolean);
  const sitemapEntries = [];
  for (const entry2 of rawSitemapEntries) {
    const existingEntryForRoute = sitemapEntries.find((e) => e.route === entry2.route);
    if (existingEntryForRoute) {
      if (!(0, import_lodash.isEqual)(existingEntryForRoute, entry2)) {
        console.warn(`Duplicate route for ${entry2.route} with different sitemap data`, { entry: entry2, existingEntryForRoute });
      }
    } else {
      sitemapEntries.push(entry2);
    }
  }
  return `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
  >
    ${sitemapEntries.map((entry2) => getEntry(entry2)).join("")}
  </urlset>
    `.trim();
}
function typedBoolean(value) {
  return Boolean(value);
}
var typeTextMap = {
  userAgent: "User-agent",
  allow: "Allow",
  disallow: "Disallow",
  sitemap: "Sitemap",
  crawlDelay: "Crawl-delay"
};
function getRobotsText(request) {
  const policies = [
    {
      type: "userAgent",
      value: "*"
    },
    {
      type: "allow",
      value: "/"
    },
    { type: "sitemap", value: `${getDomainUrl(request)}/sitemap.xml` },
    { type: "disallow", value: "/admin" }
  ];
  return policies.reduce((acc, policy) => {
    const { type, value } = policy;
    return `${acc}${typeTextMap[type]}: ${value}
`;
  }, "");
}
function getMeta({
  url,
  title = "6+ | Front-End Developer",
  description = "Make the world better with software",
  origin,
  image = getMetaImage({
    origin,
    url,
    words: title
  }),
  keywords = ""
}) {
  return {
    title,
    description,
    keywords,
    image,
    "og:url": url,
    "og:title": title,
    "og:description": description,
    "og:image": image,
    "twitter:card": image ? "summary_large_image" : "summary",
    "twitter:creator": "@6plusjp",
    "twitter:site": "@6plusjp",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
    "twitter:alt": title
  };
}
function getMetaImage({
  origin,
  words,
  url
}) {
  const params = new URLSearchParams({
    type: "1",
    words,
    url
  });
  return `${origin}/public/images/social?${params.toString()}`;
}
function clearMeta(meta8) {
  const entries = Object.entries(meta8).filter(([key, value]) => typeof value !== "undefined" && value.trim() !== "");
  return Object.fromEntries(entries);
}
var enhanceMeta = createMetaEnhancer({
  siteName: "6-plus.jp",
  baseURL: "https://6-plus.jp",
  author: "Shoma Yamamoto",
  type: "website",
  twitterCard: "summary",
  twitterSite: "@6plusjp"
});
function createMetaEnhancer(defaultOptions) {
  return (meta8, options = {}) => {
    const {
      siteName,
      baseURL,
      pathname,
      author,
      type,
      twitterCard,
      twitterSite
    } = __spreadValues(__spreadValues({}, defaultOptions), options);
    const title = meta8.title ? `${meta8.title} - ${siteName}` : siteName;
    const url = pathname === "/" ? baseURL : `${baseURL}${pathname}`;
    return clearMeta(__spreadProps(__spreadValues({}, meta8), {
      title,
      author: meta8.author ?? author,
      "og:title": title,
      "og:description": meta8.description,
      "og:image": meta8.image,
      "og:type": type,
      "og:site_name": siteName,
      "og:url": url,
      "twitter:card": twitterCard,
      "twitter:site": twitterSite,
      "twitter:title": title,
      "twitter:description": meta8.description,
      "twitter:image": meta8.image
    }));
  };
}

// app/other-routes.server.ts
var pathedRoutes = {
  "/sitemap.xml": async (request, remixContext) => {
    const sitemap = await getSitemapXml(request, remixContext);
    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml",
        "Content-Length": String(Buffer.byteLength(sitemap))
      }
    });
  },
  "/robots.txt": async (request) => {
    const robotsText = await getRobotsText(request);
    return new Response(robotsText, {
      headers: {
        "Content-Type": "text/plain",
        "Content-Length": String(Buffer.byteLength(robotsText))
      }
    });
  }
};
var otherRoutes = [
  ...Object.entries(pathedRoutes).map(([path, handler]) => {
    return (request, remixContext) => {
      if (new URL(request.url).pathname !== path)
        return null;
      return handler(request, remixContext);
    };
  })
];

// app/entry.server.tsx
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  for (const handler of otherRoutes) {
    const otherRouteResponse = await handler(request, remixContext);
    if (otherRouteResponse)
      return otherRouteResponse;
  }
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  const html = `<!DOCTYPE html>${markup}`;
  responseHeaders.set("Content-Type", "text/html");
  responseHeaders.set("Content-Length", String(Buffer.byteLength(html)));
  return new Response(html, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/home/shoma/src/www_vercel/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_remix4 = __toESM(require_remix());

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-Y3JZKC47.css";

// app/styles/global.css
var global_default = "/build/_assets/global-7YSQU27M.css";

// app/styles/no-script.css
var no_script_default = "/build/_assets/no-script-DDOW263I.css";

// app/styles/vendors.css
var vendors_default = "/build/_assets/vendors-V7DKJDHD.css";

// app/utils/env.server.ts
init_react();
function getEnv() {
  return {
    NODE_ENV: "development",
    SESSION_SECRET: process.env.SESSION_SECRET,
    MAILERSEND_API_KEY: process.env.MAILERSEND_API_KEY
  };
}
function getRequiredEnvVarFromObj(obj, key, devValue = `${key}-dev-value`) {
  let value = devValue;
  const envVal = obj[key];
  if (envVal) {
    value = envVal;
  } else if (obj.NODE_ENV === "production") {
    throw new Error(`${key} is a required env variable`);
  }
  return value;
}
function getRequiredServerEnvVar(key, devValue) {
  return getRequiredEnvVarFromObj(process.env, key, devValue);
}

// app/utils/theme.tsx
init_react();
var import_react2 = require("react");
var import_remix3 = __toESM(require_remix());

// app/utils/session.server.ts
init_react();
var import_remix2 = __toESM(require_remix());
var import_tiny_invariant = __toESM(require("tiny-invariant"));
require("dotenv").config();
var sessionStorageKey = "6+__session";
(0, import_tiny_invariant.default)(process.env.SESSION_SECRET, "SESSION_SECRET must be set");
var sessionStorage = (0, import_remix2.createCookieSessionStorage)({
  cookie: {
    name: sessionStorageKey,
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: [getRequiredServerEnvVar(process.env.SESSION_SECRET)],
    secure: true
  }
});
async function getSession(request) {
  const cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}

// app/utils/theme.tsx
var themes = ["light", "dark"];
var queries = {
  light: "(prefers-color-scheme: light)",
  dark: "(prefers-color-scheme: dark)"
};
var getPreferredTheme = () => window.matchMedia(queries.light).matches ? themes[0] : themes[1];
async function getThemeSession(request) {
  const session = await getSession(request);
  return {
    getTheme: () => {
      const themeValue = session.get("theme");
      return isTheme(themeValue) ? themeValue : themes[1];
    },
    setTheme: (theme) => session.set("theme", theme),
    commit: () => sessionStorage.commitSession(session)
  };
}
var setScriptCode = () => {
  const theme = getPreferredTheme();
  const root = document.documentElement;
  const cl = root.classList;
  const isThemeApplied = cl.contains(themes[0]) || cl.contains(themes[1]);
  if (isThemeApplied) {
    console.warn("Theme is already applied!?");
  } else {
    cl.add(theme);
  }
  const meta8 = document.querySelector("meta[name=color-scheme]");
  if (meta8) {
    if (theme === themes[1]) {
      meta8.content = "dark light";
    } else if (theme === themes[0]) {
      meta8.content = "light dark";
    }
  } else {
    console.warn("Meta is not available!?");
  }
};
var themeStylesCode = `
  /* default light, but app-preference is "dark" */
  html.dark {
    light-mode {
      display: none;
    }
  }
  /* default light, and no app-preference */
  html:not(.dark) {
    dark-mode {
      display: none;
    }
  }
  @media (prefers-color-scheme: dark) {
    /* prefers dark, but app-preference is "light" */
    html.light {
      dark-mode {
        display: none;
      }
    }
    /* prefers dark, and app-preference is "dark" */
    html.dark,
    /* prefers dark and no app-preference */
    html:not(.light) {
      light-mode {
        display: none;
      }
    }
  }
`;
var ThemeScript = ({ ssrTheme }) => {
  const [theme] = useTheme();
  const html = `(${String(setScriptCode)})`;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("meta", {
    name: "color-scheme",
    content: theme === themes[1] ? "dark light" : "light dark"
  }), ssrTheme ? null : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("script", {
    dangerouslySetInnerHTML: { __html: html }
  }), /* @__PURE__ */ React.createElement("style", {
    dangerouslySetInnerHTML: { __html: themeStylesCode }
  })));
};
var setElsCode = () => {
  var _a, _b;
  const theme = getPreferredTheme();
  const darkEls = document.querySelectorAll("dark-mode");
  const lightEls = document.querySelectorAll("light-mode");
  for (const darkEl of darkEls) {
    if (theme === "dark") {
      for (const child of darkEl.childNodes) {
        (_a = darkEl.parentElement) == null ? void 0 : _a.append(child);
      }
    }
    darkEl.remove();
  }
  for (const lightEl of lightEls) {
    if (theme === "light") {
      for (const child of lightEl.childNodes) {
        (_b = lightEl.parentElement) == null ? void 0 : _b.append(child);
      }
    }
    lightEl.remove();
  }
};
function ThemeBody({ ssrTheme }) {
  const html = `(${String(setElsCode)})`;
  return ssrTheme ? null : /* @__PURE__ */ React.createElement("script", {
    dangerouslySetInnerHTML: { __html: html }
  });
}
var ThemeContext = (0, import_react2.createContext)({});
if (__DEV__) {
  ThemeContext.displayName = "ThemeContext";
}
function useTheme() {
  const context = (0, import_react2.useContext)(ThemeContext);
  if (context === void 0) {
    throw new Error("useTheme must be used within a ThemeProvider!");
  }
  return context;
}
function ThemeProvider(props) {
  const { children, specifiedTheme } = props;
  const [theme, setTheme] = (0, import_react2.useState)(() => {
    if (specifiedTheme) {
      if (themes.includes(specifiedTheme))
        return specifiedTheme;
      else
        return null;
    }
    if (typeof window !== "object")
      return null;
    return getPreferredTheme();
  });
  const persistTheme = (0, import_remix3.useFetcher)();
  const persistThemeRef = (0, import_react2.useRef)(persistTheme);
  (0, import_react2.useEffect)(() => {
    persistThemeRef.current = persistTheme;
  }, [persistTheme]);
  const mountRun = (0, import_react2.useRef)(false);
  (0, import_react2.useEffect)(() => {
    if (!mountRun.current) {
      mountRun.current = true;
      return;
    }
    if (!theme)
      return;
    persistThemeRef.current.submit({ theme }, { action: "action/set-theme", method: "post" });
  }, [theme]);
  (0, import_react2.useEffect)(() => {
    const mediaQuery = window.matchMedia(queries.light);
    const handleChange = () => {
      setTheme(mediaQuery.matches ? themes[0] : themes[1]);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  return /* @__PURE__ */ React.createElement(ThemeContext.Provider, {
    value: [theme, setTheme]
  }, children);
}
if (__DEV__) {
  ThemeProvider.displayName = "ThemeProvider";
}
function Themed({
  dark,
  light,
  initialOnly = false
}) {
  const [theme] = useTheme();
  const [initialTheme] = (0, import_react2.useState)(theme);
  const themeToReference = initialOnly ? initialTheme : theme;
  const serverRenderWithUnknownTheme = !theme && typeof window !== "object";
  if (serverRenderWithUnknownTheme) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, (0, import_react2.createElement)("dark-mode", null, dark), (0, import_react2.createElement)("light-mode", null, light));
  } else {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, themeToReference === "light" ? light : dark);
  }
}
function isTheme(value) {
  return typeof value === "string" && themes.includes(value);
}

// route:/home/shoma/src/www_vercel/app/root.tsx
var import_clsx2 = __toESM(require("clsx"));

// app/components/external-link.tsx
init_react();
var import_react3 = __toESM(require("react"));
var import_clsx = __toESM(require("clsx"));
function ExternalLink({
  href,
  children,
  className
}) {
  return /* @__PURE__ */ import_react3.default.createElement("a", {
    className: (0, import_clsx.default)(className, "flex items-center"),
    href,
    target: "_blank",
    rel: "noopener noreferrer"
  }, children);
}

// route:/home/shoma/src/www_vercel/app/root.tsx
var loader = async ({ request }) => {
  const { getTheme } = await getThemeSession(request);
  const data = {
    ENV: getEnv(),
    requestInfo: {
      origin: getDomainUrl(request),
      path: new URL(request.url).pathname
    },
    theme: getTheme()
  };
  return (0, import_remix4.json)(data);
};
var meta = ({ data }) => {
  const requestInfo = data == null ? void 0 : data.requestInfo;
  return __spreadValues({
    viewport: "width=device-width,initial-scale=1,viewport-fit=cover"
  }, getMeta({
    origin: (requestInfo == null ? void 0 : requestInfo.origin) ?? "",
    url: getUrl(requestInfo),
    keywords: "React, JavaScript, TypeScript"
  }));
};
var links = () => {
  return [
    {
      rel: "preload",
      as: "font",
      href: "/fonts/inter/Inter-Regular.woff2",
      type: "font/woff2",
      crossOrigin: "anonymous"
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicons/apple-touch-icon.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicons/favicon-32x32.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicons/favicon-16x16.png"
    },
    { rel: "manifest", href: "/site.webmanifest" },
    { rel: "icon", href: "/favicon.ico" },
    { rel: "stylesheet", href: vendors_default },
    { rel: "stylesheet", href: global_default },
    { rel: "stylesheet", href: tailwind_default }
  ];
};
function App() {
  const data = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ React.createElement(ThemeProvider, {
    specifiedTheme: data.theme
  }, /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(import_remix4.Outlet, null), /* @__PURE__ */ React.createElement(ThemeBody, {
    ssrTheme: Boolean(data.theme)
  })));
}
function Document({ children }) {
  const data = (0, import_remix4.useLoaderData)();
  const [theme] = useTheme();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "ja",
    className: (0, import_clsx2.default)("font-display", theme)
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement(import_remix4.Meta, null), /* @__PURE__ */ React.createElement("script", {
    async: true,
    defer: true,
    "data-website-id": "37cf2507-a08a-46af-97fb-2a27fa9fcda4",
    src: "https://umami-6plus.up.railway.app/umami.js"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "canonical",
    href: removeTrailingSlash(`${data.requestInfo.origin}${data.requestInfo.path}`)
  }), /* @__PURE__ */ React.createElement(import_remix4.Links, null), /* @__PURE__ */ React.createElement("noscript", null, /* @__PURE__ */ React.createElement("link", {
    rel: "stylesheet",
    href: no_script_default
  })), /* @__PURE__ */ React.createElement(ThemeScript, {
    ssrTheme: Boolean(data.theme)
  })), /* @__PURE__ */ React.createElement("body", {
    className: "w-full antialiased"
  }, children, /* @__PURE__ */ React.createElement(import_remix4.ScrollRestoration, null), /* @__PURE__ */ React.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `window.ENV = ${JSON.stringify(data.ENV)}`
    }
  }), /* @__PURE__ */ React.createElement(import_remix4.Scripts, null), /* @__PURE__ */ React.createElement(import_remix4.LiveReload, null)));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement("html", {
    lang: "ja"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, "Oh no..."), /* @__PURE__ */ React.createElement(import_remix4.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "flex min-h-screen w-full flex-col overflow-x-hidden bg-gray-900 text-gray-200"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", {
    className: "space-y-8"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "bold text-4xl"
  }, "There was an error!"), /* @__PURE__ */ React.createElement("p", {
    className: "text-xl"
  }, error.message), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("p", null, "Hey, developer, you should replace this with what you want your users to see.")))));
}
function CatchBoundary() {
  let caught = (0, import_remix4.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React.createElement("p", {
        className: "text-xl"
      }, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ React.createElement("p", {
        className: "text-xl"
      }, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React.createElement("html", {
    lang: "ja"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, `${caught.status} ${caught.statusText}`), /* @__PURE__ */ React.createElement(import_remix4.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "flex min-h-screen w-full flex-col overflow-x-hidden bg-gray-900 text-gray-200"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("h1", {
    className: "bold mb-8 text-4xl"
  }, caught.status, ": ", caught.statusText), message)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex h-full flex-1 flex-col"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "flex items-center justify-between px-6 py-9 lg:px-12"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container mx-auto flex justify-between"
  }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/",
    title: "Remix",
    className: ""
  }, /* @__PURE__ */ React.createElement(RemixLogo, null)), /* @__PURE__ */ React.createElement("nav", {
    "aria-label": "Main navigation",
    className: "flex items-center gap-6"
  }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    className: "mx-2 text-sm font-semibold opacity-80 last:mr-0 hover:opacity-100 sm:mx-4",
    to: "/"
  }, "Home"), /* @__PURE__ */ React.createElement(ExternalLink, {
    className: "mx-2 text-sm font-semibold opacity-80 last:mr-0 hover:opacity-100 sm:mx-4",
    href: "https://remix.run/docs"
  }, "Remix Docs"), /* @__PURE__ */ React.createElement(ExternalLink, {
    className: "mx-2 text-sm font-semibold opacity-80 last:mr-0 hover:opacity-100 sm:mx-4",
    href: "https://github.com/remix-run/remix"
  }, "GitHub")))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-1 flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container mx-auto text-base"
  }, children)), /* @__PURE__ */ React.createElement("footer", {
    className: "flex items-center justify-between px-6 py-9 text-sm lg:px-12"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container mx-auto flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("span", null, "Copyright \xA9 2022 6+ All rights reserved. "))));
}
function RemixLogo() {
  return /* @__PURE__ */ React.createElement("svg", {
    viewBox: "0 0 659 165",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    "aria-labelledby": "remix-run-logo-title",
    role: "img",
    width: "106",
    height: "30",
    fill: "currentColor"
  }, /* @__PURE__ */ React.createElement("title", {
    id: "remix-run-logo-title"
  }, "Remix Logo"), /* @__PURE__ */ React.createElement("path", {
    d: "M0 161V136H45.5416C53.1486 136 54.8003 141.638 54.8003 145V161H0Z M133.85 124.16C135.3 142.762 135.3 151.482 135.3 161H92.2283C92.2283 158.927 92.2653 157.03 92.3028 155.107C92.4195 149.128 92.5411 142.894 91.5717 130.304C90.2905 111.872 82.3473 107.776 67.7419 107.776H54.8021H0V74.24H69.7918C88.2407 74.24 97.4651 68.632 97.4651 53.784C97.4651 40.728 88.2407 32.816 69.7918 32.816H0V0H77.4788C119.245 0 140 19.712 140 51.2C140 74.752 125.395 90.112 105.665 92.672C122.32 96 132.057 105.472 133.85 124.16Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M229.43 120.576C225.59 129.536 218.422 133.376 207.158 133.376C194.614 133.376 184.374 126.72 183.35 112.64H263.478V101.12C263.478 70.1437 243.254 44.0317 205.11 44.0317C169.526 44.0317 142.902 69.8877 142.902 105.984C142.902 142.336 169.014 164.352 205.622 164.352C235.83 164.352 256.822 149.76 262.71 123.648L229.43 120.576ZM183.862 92.6717C185.398 81.9197 191.286 73.7277 204.598 73.7277C216.886 73.7277 223.542 82.4317 224.054 92.6717H183.862Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M385.256 66.5597C380.392 53.2477 369.896 44.0317 349.672 44.0317C332.52 44.0317 320.232 51.7117 314.088 64.2557V47.1037H272.616V161.28H314.088V105.216C314.088 88.0638 318.952 76.7997 332.52 76.7997C345.064 76.7997 348.136 84.9917 348.136 100.608V161.28H389.608V105.216C389.608 88.0638 394.216 76.7997 408.04 76.7997C420.584 76.7997 423.4 84.9917 423.4 100.608V161.28H464.872V89.5997C464.872 65.7917 455.656 44.0317 424.168 44.0317C404.968 44.0317 391.4 53.7597 385.256 66.5597Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M478.436 47.104V161.28H519.908V47.104H478.436ZM478.18 36.352H520.164V0H478.18V36.352Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M654.54 47.1035H611.788L592.332 74.2395L573.388 47.1035H527.564L568.78 103.168L523.98 161.28H566.732L589.516 130.304L612.3 161.28H658.124L613.068 101.376L654.54 47.1035Z"
  }));
}

// route:/home/shoma/src/www_vercel/app/routes/action/form-validation.tsx
var form_validation_exports = {};
__export(form_validation_exports, {
  action: () => action,
  default: () => NoJsFormRoute
});
init_react();
var import_remix5 = __toESM(require_remix());
var import_zod = require("zod");
var import_remix_validated_form = require("remix-validated-form");
var import_with_zod = require("@remix-validated-form/with-zod");
var schema = (0, import_with_zod.withZod)(import_zod.z.object({
  name: import_zod.z.string().nonempty("\u304A\u540D\u524D / \u4F1A\u793E\u540D\u306F\u5FC5\u9808\u3067\u3059"),
  email: import_zod.z.string().nonempty("\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u306F\u5FC5\u9808\u3067\u3059").email("\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u306E\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093"),
  subject: import_zod.z.string().nonempty("\u4EF6\u540D\u306F\u5FC5\u9808\u3067\u3059"),
  body: import_zod.z.string().nonempty("\u672C\u6587\u306F\u5FC5\u9808\u3067\u3059")
}));
var action = async ({ request }) => {
  const formData = await schema.validate(await request.formData());
  if (formData.error)
    return (0, import_remix_validated_form.validationError)(formData.error);
  return (0, import_remix5.json)({ status: "success", fields: formData.data, errors: {} });
};
function NoJsFormRoute() {
  const actionData = (0, import_remix5.useActionData)();
  return /* @__PURE__ */ React.createElement(import_remix5.Form, {
    method: "post",
    action: "/newsletter/subscribe"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "email"
  }), " ", /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "\u9001\u4FE1")), actionData.status === "success" ? /* @__PURE__ */ React.createElement("p", null, "Thanks for subscribing!") : actionData.status === "error" ? /* @__PURE__ */ React.createElement("p", {
    "data-error": true
  }, actionData.data.error) : null);
}

// route:/home/shoma/src/www_vercel/app/routes/action/set-theme.ts
var set_theme_exports = {};
__export(set_theme_exports, {
  action: () => action2,
  loader: () => loader2
});
init_react();
var import_remix6 = __toESM(require_remix());
var action2 = async ({ request }) => {
  const session = await getThemeSession(request);
  const requestText = await request.text();
  const form = new URLSearchParams(requestText);
  const theme = form.get("theme");
  if (!isTheme(theme))
    return (0, import_remix6.json)({
      success: false,
      message: `theme value of ${theme} is not a valid theme.`
    });
  session.setTheme(theme);
  return (0, import_remix6.json)({ success: true }, {
    headers: { "Set-Cookie": await session.commit() }
  });
};
var loader2 = () => (0, import_remix6.redirect)("/", { status: 404 });

// route:/home/shoma/src/www_vercel/app/routes/blog.$slug.tsx
var blog_slug_exports = {};
__export(blog_slug_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary2,
  default: () => MdxScreen,
  loader: () => loader3,
  meta: () => meta2
});
init_react();
var React10 = __toESM(require("react"));
var import_remix7 = __toESM(require_remix());
var import_client = require("mdx-bundler/client");
var dateFns = __toESM(require("date-fns"));
var import_framer_motion2 = require("framer-motion");
var import_outline2 = require("@heroicons/react/outline");

// app/utils/format.ts
init_react();
var import_date_fns = require("date-fns");
function formatDate(dateString, shortOptions) {
  return shortOptions ? (0, import_date_fns.format)((0, import_date_fns.add)((0, import_date_fns.parseISO)(dateString), {
    minutes: new Date().getTimezoneOffset()
  }), "PP") : (0, import_date_fns.format)((0, import_date_fns.add)((0, import_date_fns.parseISO)(dateString), {
    minutes: new Date().getTimezoneOffset()
  }), "PPP");
}

// app/utils/post.server.ts
init_react();
var import_mdx_bundler = require("mdx-bundler");
var matter = __toESM(require("gray-matter"));

// app/utils/unified.ts
init_react();
var KS_RE = /{{([^}]*)}}/g;
async function m2toc(md) {
  const { unified } = await import("unified");
  const { default: remarkParse } = await import("remark-parse");
  const { default: remarkGfm } = await import("remark-gfm");
  const { default: remark2rehype } = await import("remark-rehype");
  const { default: rehypeRaw } = await import("rehype-raw");
  const { default: rehypeStringify } = await import("rehype-stringify");
  const { default: rehypeFormat } = await import("rehype-format");
  const ksEncoded = encodeKS(md);
  const processor = unified().use(remarkParse).use(remarkGfm).use(mdast2toc).use(remark2rehype, {
    allowDangerousHtml: true
  }).use(rehypeRaw).use(rehypeStringify, { allowDangerousHtml: true }).use(rehypeFormat);
  const file = await processor.process(ksEncoded);
  return decodeKS(String(file));
}
function mdast2toc() {
  const findExistingToc = (root) => {
    let addToToc = false;
    let toc = null;
    root.children.forEach((node) => {
      var _a;
      if (node.type === "heading" && ((_a = node.data) == null ? void 0 : _a.id) === "table-of-contents") {
        addToToc = true;
        toc = [];
      } else if (addToToc) {
        if (node.type !== "heading") {
          toc.push(node);
        } else {
          addToToc = false;
        }
      }
    });
    return toc;
  };
  return async function transformer(node) {
    const { toc } = await import("mdast-util-toc");
    const existingToc = findExistingToc(node);
    if (existingToc) {
      node.children = existingToc;
    } else {
      const result = toc(node, {
        maxDepth: 3,
        tight: true
      });
      if (result.map) {
        node.children = [result.map];
      } else {
        node.children = [];
      }
    }
  };
}
function encodeKS(raw) {
  return raw.replace(KS_RE, (_, ks) => `{{${Buffer.from(ks).toString("base64")}}}`);
}
function decodeKS(raw) {
  return raw.replace(KS_RE, (_, ks) => `{{${Buffer.from(ks, "base64").toString()}}}`);
}

// app/utils/fs.server.ts
init_react();
var import_promises = __toESM(require("fs/promises"));
var CONTENT = `${__dirname}/../app/content`;
var readContentDir = async (contentDir) => {
  const content = `${CONTENT}/${contentDir}`;
  return import_promises.default.readdir(content);
};
var readContentFile = async (contentDir, file) => {
  const content = `${CONTENT}/${contentDir}/${file}`;
  return import_promises.default.readFile(content, "utf-8");
};

// app/utils/post.server.ts
async function getBlogPost(slug) {
  const [remarkGfm, rehypeSlug, rehypeAutolinkHeadings] = await Promise.all([
    import("remark-gfm").then((mod) => mod.default),
    import("rehype-slug").then((mod) => mod.default),
    import("rehype-autolink-headings").then((mod) => mod.default)
  ]);
  const source = await readContentFile("blog", `${slug}/index.mdx`);
  if (!source) {
    throw new Response("Not Found", { status: 404 });
  }
  const rehypeAutolinkHeadingsOptions = {
    behavior: "before",
    properties: {
      ariaHidden: true,
      tabIndex: -1,
      className: [
        "absolute",
        "inset-y-0",
        "-left-6",
        "flex",
        "items-center",
        "border-0",
        "group-hover:opacity-100",
        "opacity-0"
      ]
    },
    content: {
      type: "element",
      tagName: "svg",
      properties: {
        xmlns: "http://www.w3.org/2000/svg",
        className: ["h-6", "w-6"],
        fill: "currentColor",
        viewBox: "0 0 20 20"
      },
      children: [
        {
          type: "element",
          tagName: "path",
          properties: {
            d: "M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z",
            "fill-rule": "evenodd",
            "clip-rule": "evenodd"
          }
        }
      ]
    },
    group: {
      type: "element",
      tagName: "div",
      properties: {
        className: ["group", "flex", "whitespace-pre-wrap", "relative"]
      }
    }
  };
  try {
    const { frontmatter, code } = await (0, import_mdx_bundler.bundleMDX)({
      source,
      mdxOptions: (options) => {
        options.remarkPlugins = [...options.remarkPlugins ?? [], remarkGfm];
        options.rehypePlugins = [
          ...options.rehypePlugins ?? [],
          rehypeSlug,
          [rehypeAutolinkHeadings, rehypeAutolinkHeadingsOptions]
        ];
        return options;
      },
      esbuildOptions: (options) => {
        options.minify = true;
        options.loader = __spreadProps(__spreadValues({}, options.loader), {
          ".png": "file",
          ".jpg": "file",
          ".jpeg": "file"
        });
        return options;
      }
    });
    const toc = await m2toc(matter.default(source).content);
    return { frontmatter, code, toc };
  } catch (e) {
    console.error(`Compilation error for slug: `, slug);
    throw e;
  }
}
async function getBlogPages(contentDir) {
  const files = await readContentDir(contentDir);
  const posts = await Promise.all(files.map(async (filename) => {
    const source = await readContentFile(contentDir, `${filename}/index.mdx`);
    if (!source) {
      throw new Response("Not Found", { status: 404 });
    }
    const { frontmatter } = await (0, import_mdx_bundler.bundleMDX)({
      source
    });
    return __spreadValues({
      slug: filename.replace(/\.mdx$/, "")
    }, frontmatter);
  }));
  return posts.sort((a, z3) => {
    const aTime = new Date(a.updated ?? a.published ?? "").getTime();
    const zTime = new Date(z3.updated ?? z3.published ?? "").getTime();
    return aTime > zTime ? -1 : aTime === zTime ? 0 : 1;
  });
}

// app/components/sidebar.tsx
init_react();
var React3 = __toESM(require("react"));
var import_react4 = require("@remix-run/react");

// app/components/icons/github-icon.tsx
init_react();
var import_clsx3 = __toESM(require("clsx"));
function GitHubIcon({ size = 24, className }) {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: (0, import_clsx3.default)(className),
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    "aria-label": "github icon"
  }, /* @__PURE__ */ React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
  }));
}

// app/components/icons/rss-icon.tsx
init_react();
var import_clsx4 = __toESM(require("clsx"));
function RssIcon({ size = 24, className }) {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: (0, import_clsx4.default)(className),
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    "aria-label": "rss icon"
  }, /* @__PURE__ */ React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3 17a4 4 0 0 1 4 4H3v-4zm0-7c6.075 0 11 4.925 11 11h-2a9 9 0 0 0-9-9v-2zm0-7c9.941 0 18 8.059 18 18h-2c0-8.837-7.163-16-16-16V3z"
  }));
}

// app/components/icons/twitter-icon.tsx
init_react();
var import_clsx5 = __toESM(require("clsx"));
function TwitterIcon({ size = 24, className }) {
  return /* @__PURE__ */ React.createElement("svg", {
    className: (0, import_clsx5.default)(className),
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": "twitter icon"
  }, /* @__PURE__ */ React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
  }));
}

// app/components/toggle.tsx
init_react();
var import_clsx6 = __toESM(require("clsx"));
var import_outline = require("@heroicons/react/outline");
function ThemeToggle({
  className,
  size = "md"
}) {
  const [theme, setTheme] = useTheme();
  return /* @__PURE__ */ React.createElement("button", {
    onClick: () => setTheme(theme === themes[1] ? themes[0] : themes[1]),
    className: (0, import_clsx6.default)(className, "inline-flex items-center justify-center overflow-hidden rounded-sm border-2 border-slate-400 outline-none transition hover:border-hp focus:border-hp", { "h-14 w-14": size === "md", "h-12 w-12": size === "sm" })
  }, /* @__PURE__ */ React.createElement("div", {
    className: (0, import_clsx6.default)("relative ", {
      "h-8 w-8": size === "md",
      "h-7 w-7": size === "sm"
    })
  }, /* @__PURE__ */ React.createElement("span", {
    className: "absolute inset-0 origin-[50%_100px] rotate-90 transform text-black transition duration-700 motion-reduce:duration-[0s] dark:rotate-0 dark:text-white"
  }, /* @__PURE__ */ React.createElement(import_outline.MoonIcon, null)), /* @__PURE__ */ React.createElement("span", {
    className: "absolute inset-0 origin-[50%_100px] rotate-0 transform text-black transition duration-700 motion-reduce:duration-[0s] dark:-rotate-90 dark:text-white"
  }, /* @__PURE__ */ React.createElement(import_outline.SunIcon, null))), /* @__PURE__ */ React.createElement("span", {
    className: "sr-only text-tp"
  }, /* @__PURE__ */ React.createElement(Themed, {
    dark: "switch to light mode",
    light: "switch to dark mode"
  })));
}

// app/components/sidebar.tsx
function Sidebar({ children }) {
  return /* @__PURE__ */ React3.createElement("aside", {
    className: "sticky top-0 h-full max-h-screen w-64 overflow-y-auto overflow-x-hidden py-10 pl-6 pr-3 xl:w-80 xl:pr-5 2xl:w-96 2xl:pr-6"
  }, children, /* @__PURE__ */ React3.createElement(Desktop, null));
}
var NAV_LIST = [
  { name: "Home", to: "/" },
  { name: "Works", to: "/works" },
  { name: "Contact", to: "/contact" },
  { name: "Blog", to: "/blog" }
];
var LEGAL_LIST = [
  { name: "Privacy Policy", to: "/policy" },
  { name: "Terms of Use", to: "/service" }
];
function Desktop() {
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement("nav", {
    className: "mb-8 text-tp"
  }, /* @__PURE__ */ React3.createElement("h4", {
    className: "mb-2 py-1 pt-0 text-base font-medium uppercase"
  }, "Navigation"), /* @__PURE__ */ React3.createElement("ul", {
    className: "mb-3"
  }, NAV_LIST.map((link) => {
    return /* @__PURE__ */ React3.createElement("li", {
      key: link.name,
      className: "py-1 pl-2 text-sm"
    }, /* @__PURE__ */ React3.createElement(import_react4.NavLink, {
      to: link.to,
      prefetch: "intent",
      className: ({ isActive }) => isActive ? "w-auto text-slate-500 focus:text-hp focus:outline-none dark:text-slate-400 dark:focus:text-hp" : "w-auto hover:text-hp focus:text-hp focus:outline-none"
    }, link.name));
  }))), /* @__PURE__ */ React3.createElement("nav", {
    className: "mb-12 text-tp"
  }, /* @__PURE__ */ React3.createElement("h4", {
    className: "mb-2 py-1 pt-0 text-base font-medium uppercase"
  }, "Legal"), /* @__PURE__ */ React3.createElement("ul", {
    className: "mb-3"
  }, LEGAL_LIST.map((link) => {
    return /* @__PURE__ */ React3.createElement("li", {
      key: link.name,
      className: "py-1 pl-2 text-sm"
    }, /* @__PURE__ */ React3.createElement(import_react4.NavLink, {
      to: link.to,
      prefetch: "intent",
      className: "w-auto hover:text-hp focus:text-hp focus:outline-none"
    }, link.name));
  }), /* @__PURE__ */ React3.createElement("li", {
    className: "py-1 pl-2 text-sm"
  }, /* @__PURE__ */ React3.createElement("a", {
    className: "hover:text-hp focus:text-hp focus:outline-none",
    href: "/sitemap.xml"
  }, "Sitemap.xml")))), /* @__PURE__ */ React3.createElement("div", {
    className: "mb-12 flex items-center gap-4"
  }, /* @__PURE__ */ React3.createElement(ExternalLink, {
    className: "ring-hp focus:outline-none focus:ring-2",
    "aria-label": "GitHub",
    href: "https://github.com/6plusjp"
  }, /* @__PURE__ */ React3.createElement("span", {
    className: "sr-only"
  }, " View on GitHub "), /* @__PURE__ */ React3.createElement(GitHubIcon, {
    size: 32,
    className: "fill-slate-500 hover:fill-[#333] focus:fill-[#333]"
  })), /* @__PURE__ */ React3.createElement(ExternalLink, {
    className: "ring-hp focus:outline-none focus:ring-2",
    "aria-label": "Twitter",
    href: "https://twitter.com"
  }, /* @__PURE__ */ React3.createElement("span", {
    className: "sr-only"
  }, " View on Twitter "), /* @__PURE__ */ React3.createElement(TwitterIcon, {
    size: 32,
    className: "fill-slate-500 hover:fill-[#1DA1F2] focus:fill-[#1DA1F2]"
  })), /* @__PURE__ */ React3.createElement(import_react4.Link, {
    className: "ring-hp focus:outline-none focus:ring-2",
    "aria-label": "RSS",
    target: "_blank",
    to: "/blog/rss[.]xml"
  }, /* @__PURE__ */ React3.createElement("span", {
    className: "sr-only"
  }, " View RSS "), /* @__PURE__ */ React3.createElement(RssIcon, {
    size: 32,
    className: "fill-slate-500 hover:fill-[#f26522] focus:fill-[#f26522]"
  }))), /* @__PURE__ */ React3.createElement("div", {
    className: "noscript-hidden mx-auto"
  }, /* @__PURE__ */ React3.createElement(ThemeToggle, {
    size: "sm"
  })));
}

// app/components/alert.tsx
init_react();
var import_clsx7 = __toESM(require("clsx"));
var React4 = __toESM(require("react"));
function Alert({ state, children, className }) {
  return /* @__PURE__ */ React4.createElement("div", {
    className: (0, import_clsx7.default)(className, "alert relative rounded-r-lg border-l-4 px-4 py-2 text-base lg:text-lg", {
      "border-info bg-info/20 text-info": state === "info",
      "border-success bg-success/20 text-success": state === "success",
      "border-warning bg-warning/20 text-warning": state === "warning",
      "border-error bg-error/20 text-error": state === "error"
    })
  }, children);
}

// app/components/spacer.tsx
init_react();
var React5 = __toESM(require("react"));
var spacerSizes = {
  "3xs": "h-6 lg:h-8",
  "2xs": "h-10 lg:h-12",
  xs: "h-20 lg:h-24",
  sm: "h-32 lg:h-36",
  base: "h-40 lg:h-48",
  lg: "h-56 lg:h-64"
};
function Spacer({
  size,
  className = ""
}) {
  return /* @__PURE__ */ React5.createElement("div", {
    className: `${className} ${spacerSizes[size]}`
  });
}

// app/components/post-image.tsx
init_react();
var import_cloudinary_build_url = require("cloudinary-build-url");
var import_clsx9 = __toESM(require("clsx"));
var React7 = __toESM(require("react"));

// app/components/skeleton.tsx
init_react();
var React6 = __toESM(require("react"));
var import_clsx8 = __toESM(require("clsx"));
var Skeleton = React6.forwardRef(function Skeleton2(props, ref) {
  const _a = props, { animation = "pulse", className, variant = "text" } = _a, rest = __objRest(_a, ["animation", "className", "variant"]);
  return /* @__PURE__ */ React6.createElement("span", __spreadValues({
    ref,
    className: (0, import_clsx8.default)(className, "block", {
      "animate-pulse": animation === "pulse",
      "animate-wave": animation === "wave",
      "my-0 h-auto rounded": variant === "text",
      "rounded-full": variant === "circular"
    })
  }, rest));
});

// app/components/post-image.tsx
(0, import_cloudinary_build_url.setConfig)({
  cloudName: "six-plus-jp"
});
function PostImage(_a) {
  var _b = _a, {
    imgId,
    alt,
    className,
    page
  } = _b, rest = __objRest(_b, [
    "imgId",
    "alt",
    "className",
    "page"
  ]);
  const [visible, setVisible] = React7.useState(false);
  const imgRef = React7.useRef(null);
  const options = {
    widths: [],
    sizes: [],
    transformations: {
      resize: {
        type: "fill",
        aspectRatio: "16:9"
      }
    }
  };
  if (page === "blog") {
    options.widths = [280, 560, 840];
    options.sizes = [
      "(max-width:767px) 0vw",
      "(min-width:768px) and (max-width:1023px) 45vw",
      "(min-width:1024px) and (max-width:1535px) 30vw",
      "25vw"
    ];
  }
  if (page === "post") {
    options.widths = [280, 560, 840, 1100];
    options.sizes = [
      "(max-width:767px) 95vw",
      "(min-width:768px) and (max-width:1023px) 740px",
      "(min-width:1024px) and (max-width:1279px) 80vw",
      "900px"
    ];
  }
  const { widths, sizes, transformations } = options;
  const averageSize = Math.ceil(widths.reduce((a, s) => a + s) / widths.length);
  return /* @__PURE__ */ React7.createElement(React7.Fragment, null, /* @__PURE__ */ React7.createElement("div", {
    className: "aspect-none md:aspect-w-16 md:aspect-h-9"
  }, !visible && /* @__PURE__ */ React7.createElement(Skeleton, {
    animation: "wave",
    className: (0, import_clsx9.default)("h-full w-full bg-slate-300 transition-opacity dark:bg-slate-700")
  }), /* @__PURE__ */ React7.createElement("img", __spreadValues({
    ref: imgRef,
    src: (0, import_cloudinary_build_url.buildImageUrl)(imgId, __spreadProps(__spreadValues({
      quality: "auto",
      format: "auto"
    }, transformations), {
      transformations: {
        resize: __spreadValues({ width: averageSize }, transformations == null ? void 0 : transformations.resize)
      }
    })),
    alt: alt ?? "",
    onLoad: () => setVisible(true),
    srcSet: widths.map((width) => [
      (0, import_cloudinary_build_url.buildImageUrl)(imgId, __spreadProps(__spreadValues({
        quality: "auto",
        format: "auto"
      }, transformations), {
        transformations: {
          resize: __spreadValues({ width }, transformations == null ? void 0 : transformations.resize)
        }
      })),
      `${width}w`
    ].join(" ")).join(", "),
    sizes: sizes.join(", "),
    className: (0, import_clsx9.default)(className, "h-full w-full object-cover object-center text-transparent")
  }, rest)), /* @__PURE__ */ React7.createElement("noscript", null, /* @__PURE__ */ React7.createElement("img", __spreadValues({
    srcSet: widths.map((width) => [
      (0, import_cloudinary_build_url.buildImageUrl)(imgId, __spreadProps(__spreadValues({
        quality: "auto",
        format: "auto"
      }, transformations), {
        transformations: {
          resize: __spreadValues({ width }, transformations == null ? void 0 : transformations.resize)
        }
      })),
      `${width}w`
    ].join(" ")).join(", "),
    sizes: sizes.join(", "),
    alt: alt ?? "",
    src: (0, import_cloudinary_build_url.buildImageUrl)(imgId, __spreadProps(__spreadValues({
      quality: "auto",
      format: "auto"
    }, transformations), {
      transformations: {
        resize: __spreadValues({ width: averageSize }, transformations == null ? void 0 : transformations.resize)
      }
    })),
    className: (0, import_clsx9.default)(className, "h-full w-full object-cover object-center text-center transition")
  }, rest)))));
}

// app/components/navbar.tsx
init_react();
var React9 = __toESM(require("react"));
var import_react5 = require("@remix-run/react");
var import_clsx11 = __toESM(require("clsx"));
var import_framer_motion = require("framer-motion");
var import_menu_button = require("@reach/menu-button");

// app/components/icons/menu-icon.tsx
init_react();
var React8 = __toESM(require("react"));
var import_clsx10 = __toESM(require("clsx"));
function MenuIcon({ className }) {
  return /* @__PURE__ */ React8.createElement("svg", {
    className: (0, import_clsx10.default)(className, " select-none stroke-current stroke-2 duration-300 ease-in-out hover:delay-500 hover:duration-700"),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100",
    width: "80",
    "aria-label": "menu icon",
    height: "80"
  }, /* @__PURE__ */ React8.createElement("path", {
    className: "top",
    d: "M30 33h40c13.1 0 14.38 31.803 6.9 33.422-24.612 5.327 9.016-52.338-12.758-30.564L35.858 64.142"
  }), /* @__PURE__ */ React8.createElement("path", {
    className: "middle",
    d: "M70 50H30c-7.787 0-6.429-4.64-6.429-8.571 0-5.896 6.074-11.784 12.287-5.571l28.284 28.284"
  }), /* @__PURE__ */ React8.createElement("path", {
    className: "bottom",
    d: "M69.575 67.074h-40c-13.1 0-14.38-31.803-6.9-33.422 24.613-5.327-9.015 52.338 12.758 30.564l28.285-28.284"
  }));
}

// app/components/navbar.tsx
var LINKS = [
  { name: "Home", to: "/" },
  { name: "Works", to: "/works" },
  { name: "Contact", to: "/contact" },
  { name: "Blog", to: "/blog" }
];
function Navbar({ className }) {
  return /* @__PURE__ */ React9.createElement("div", {
    className: (0, import_clsx11.default)(className, "px-[5vw] py-4 sm:py-8 lg:py-12")
  }, /* @__PURE__ */ React9.createElement("nav", {
    className: "mx-auto flex max-w-screen-2xl items-center justify-between text-tp"
  }, /* @__PURE__ */ React9.createElement("div", {
    className: "basis-1/2 whitespace-nowrap text-4xl font-medium"
  }, /* @__PURE__ */ React9.createElement(import_react5.NavLink, {
    to: "/",
    className: ({ isActive }) => isActive ? "text-ts" : "hover:text-hp"
  }, "6+")), /* @__PURE__ */ React9.createElement("ul", {
    className: "hidden lg:flex"
  }, LINKS.map((link) => {
    return /* @__PURE__ */ React9.createElement("li", {
      key: link.name,
      className: " whitespace-nowrap px-5 py-2 text-lg font-medium"
    }, /* @__PURE__ */ React9.createElement(import_react5.NavLink, {
      to: link.to,
      prefetch: "intent",
      className: ({ isActive }) => isActive ? "text-slate-500 focus:text-hp focus:outline-none dark:text-slate-400 dark:focus:text-hp" : "underline-animation text-tp focus:outline-none"
    }, link.name));
  })), /* @__PURE__ */ React9.createElement("div", {
    className: "flex lg:hidden"
  }, /* @__PURE__ */ React9.createElement(MobileMenu, null)), /* @__PURE__ */ React9.createElement("div", {
    className: "noscript-hidden hidden lg:flex"
  }, /* @__PURE__ */ React9.createElement(ThemeToggle, {
    className: " self-center"
  }))));
}
function MobileMenu() {
  return /* @__PURE__ */ React9.createElement(import_menu_button.Menu, null, ({ isExpanded }) => {
    const state = isExpanded ? "active" : "";
    return /* @__PURE__ */ React9.createElement(React9.Fragment, null, /* @__PURE__ */ React9.createElement(import_menu_button.MenuButton, {
      className: (0, import_clsx11.default)(state, "menu-toggle my-auto inline-flex items-center justify-center ring-hp transition focus:outline-none focus:ring-2")
    }, /* @__PURE__ */ React9.createElement("span", {
      className: "sr-only"
    }, "menu toggle"), /* @__PURE__ */ React9.createElement(MenuIcon, {
      className: "text-tp"
    })), /* @__PURE__ */ React9.createElement(MobileMenuList, null));
  });
}
function MobileMenuList() {
  const { isExpanded } = (0, import_menu_button.useMenuButtonContext)();
  const shouldReduceMotion = (0, import_framer_motion.useReducedMotion)();
  const duration = shouldReduceMotion ? 0 : 0.15;
  const easing = "linear";
  React9.useEffect(() => {
    if (isExpanded) {
      document.body.classList.add("fixed");
      document.body.classList.add("overflow-y-scroll");
      document.body.style.height = "100vh";
    } else {
      document.body.classList.remove("fixed");
      document.body.classList.remove("overflow-y-scroll");
      document.body.style.removeProperty("height");
    }
  }, [isExpanded]);
  return /* @__PURE__ */ React9.createElement(import_framer_motion.AnimatePresence, null, isExpanded ? /* @__PURE__ */ React9.createElement(import_menu_button.MenuPopover, {
    position: (r) => ({
      top: `calc(${Number(r == null ? void 0 : r.top) + Number(r == null ? void 0 : r.height)}px + 2.25rem)`,
      bottom: 0,
      right: 0
    }),
    className: "z-50 block"
  }, /* @__PURE__ */ React9.createElement(import_framer_motion.motion.div, {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 },
    transition: {
      duration,
      ease: easing
    },
    className: "h-full pb-8"
  }, /* @__PURE__ */ React9.createElement(import_menu_button.MenuItems, {
    className: "flex min-w-[30vw] flex-col bg-bs text-center shadow-xl outline-none"
  }, LINKS.map((link) => /* @__PURE__ */ React9.createElement(import_menu_button.MenuLink, {
    key: link.to,
    as: import_react5.NavLink,
    to: link.to,
    prefetch: "intent",
    className: ({ isActive }) => isActive ? "py-3 text-lg text-slate-500 focus:outline-none dark:text-slate-300" : "py-3 text-lg text-tp hover:text-hp focus:outline-none"
  }, link.name)), /* @__PURE__ */ React9.createElement("div", {
    className: "noscript-hidden py-6"
  }, /* @__PURE__ */ React9.createElement(ThemeToggle, null))))) : null);
}

// route:/home/shoma/src/www_vercel/app/routes/blog.$slug.tsx
var loader3 = async ({ request, params }) => {
  const slug = params.slug || "index";
  if (slug === "rss[.]xml") {
    let cdata = function(s) {
      return `<![CDATA[${s}]]>`;
    };
    const posts = await getBlogPages("blog");
    const blogUrl = `${getDomainUrl(request)}/blog`;
    const rss = `
    <rss xmlns:blogChannel="${blogUrl}" version="2.0">
      <channel>
        <title>6+ Blog</title>
        <link>${blogUrl}</link>
        <description>The 6+ Blog</description>
        <language>ja</language>
        <ttl>40</ttl>
        ${posts.map((post) => `
            <item>
              <title>${cdata(post.title ?? "Untitled Post")}</title>
              <description>${cdata(post.description ?? "This post is... indescribable")}</description>
              <pubDate>${dateFns.format(dateFns.add(post.updated ? dateFns.parseISO(post.updated) : post.published ? dateFns.parseISO(post.published) : Date.now(), { minutes: new Date().getTimezoneOffset() }), "yyyy-MM-ii")}</pubDate>
              <link>${blogUrl}/${post.slug}</link>
              <guid>${blogUrl}/${post.slug}</guid>
            </item>
          `.trim()).join("\n")}
      </channel>
    </rss>
  `.trim();
    return new Response(rss, {
      headers: {
        "Content-Type": "application/xml",
        "Content-Length": String(Buffer.byteLength(rss))
      }
    });
  }
  const { frontmatter, code, toc } = await getBlogPost(slug);
  const headers = {
    "Cache-Control": "private, max-age=3600",
    Vary: "Cookie"
  };
  const data = {
    frontmatter,
    code,
    toc
  };
  return (0, import_remix7.json)(data, { status: 200, headers });
};
var meta2 = ({ data, parentsData }) => {
  const { requestInfo } = parentsData.root;
  if (data == null ? void 0 : data.frontmatter) {
    const _a = data.frontmatter.meta ?? {}, { keywords = [] } = _a, extraMeta = __objRest(_a, ["keywords"]);
    let title = data.frontmatter.title;
    const isDraft = data.frontmatter.draft;
    if (isDraft)
      title = `\u4E0B\u66F8\u304D: ${title ?? "No Title"} | 6+ blog`;
    else
      title = `${title ?? "No Title"} | 6+ blog`;
    return __spreadValues(__spreadValues(__spreadValues({}, isDraft ? { robots: "noindex" } : null), getMeta({
      origin: requestInfo.origin,
      url: getUrl(requestInfo),
      title,
      description: data.frontmatter.description,
      keywords: keywords.join(", ")
    })), extraMeta);
  } else {
    return {
      title: "\u304A\u63A2\u3057\u306E\u30D6\u30ED\u30B0\u30DA\u30FC\u30B8\u306F\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F",
      description: "\u304A\u63A2\u3057\u306E\u30D6\u30ED\u30B0\u30DA\u30FC\u30B8\u306F\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u{1F622}"
    };
  }
};
function MdxScreen() {
  const { frontmatter, code, toc } = (0, import_remix7.useLoaderData)();
  const { slug } = (0, import_remix7.useParams)();
  const isDraft = Boolean(frontmatter.draft);
  const Component = React10.useMemo(() => (0, import_client.getMDXComponent)(code), [code]);
  const shouldReduceMotion = (0, import_framer_motion2.useReducedMotion)();
  const duration = shouldReduceMotion ? 0 : 0.5;
  const easing = [0.175, 0.85, 0.42, 0.96];
  const motionVariants = {
    text: {
      exit: {
        y: 100,
        opacity: 0,
        transition: { duration, ease: easing }
      },
      enter: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.1, duration, ease: easing }
      }
    },
    image: {
      exit: {
        y: -150,
        opacity: 0,
        transition: { duration, ease: easing }
      },
      enter: {
        y: 0,
        opacity: 1,
        transition: {
          duration,
          ease: easing
        }
      }
    },
    back: {
      exit: {
        x: 100,
        opacity: 0,
        transition: {
          duration,
          ease: easing
        }
      },
      enter: {
        x: 0,
        opacity: 1,
        transition: {
          delay: 0.5,
          duration,
          ease: easing
        }
      }
    },
    code: {
      exit: {
        y: 100,
        opacity: 0,
        transition: {
          duration,
          ease: easing
        }
      },
      enter: {
        y: 0,
        opacity: 1,
        transition: {
          delay: 0.5,
          duration,
          ease: easing
        }
      }
    }
  };
  return /* @__PURE__ */ React10.createElement(React10.Fragment, null, /* @__PURE__ */ React10.createElement("div", {
    className: "min-h-screen bg-slate-200 px-6 duration-500 dark:bg-slate-800 lg:flex"
  }, /* @__PURE__ */ React10.createElement("div", {
    className: "hidden flex-shrink-0 lg:block"
  }, /* @__PURE__ */ React10.createElement(Sidebar, null, toc ? /* @__PURE__ */ React10.createElement("nav", {
    className: "mb-8 text-tp"
  }, /* @__PURE__ */ React10.createElement("h4", {
    className: "mb-2 py-1 pt-0 text-base font-medium uppercase"
  }, "Contents"), /* @__PURE__ */ React10.createElement("div", {
    className: "toc",
    dangerouslySetInnerHTML: { __html: toc }
  })) : null)), /* @__PURE__ */ React10.createElement("div", {
    className: "flex-grow pb-12 lg:h-full lg:py-12"
  }, /* @__PURE__ */ React10.createElement("div", {
    className: "flex items-center justify-end px-[5vw] py-4 sm:py-8 lg:hidden lg:py-12"
  }, /* @__PURE__ */ React10.createElement(MobileMenu, null)), /* @__PURE__ */ React10.createElement(import_framer_motion2.motion.div, {
    initial: "exit",
    animate: "enter",
    exit: "exit",
    className: "prose mx-auto dark:prose-invert sm:prose-lg lg:prose-xl lg:max-w-4xl"
  }, /* @__PURE__ */ React10.createElement(import_framer_motion2.motion.header, {
    layoutId: `card-${slug}`,
    className: "not-prose pt-0 pb-12 lg:py-16"
  }, isDraft ? /* @__PURE__ */ React10.createElement(Alert, {
    state: "warning",
    className: "mb-12"
  }, "\u3053\u306E\u30D6\u30ED\u30B0\u8A18\u4E8B\u306F\u4E0B\u66F8\u304D\u306E\u72B6\u614B\u3067\u3059\u3002\u30EA\u30F3\u30AF\u3084\u5185\u5BB9\u7B49\u304C\u5909\u66F4\u3055\u308C\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002") : null, /* @__PURE__ */ React10.createElement(import_framer_motion2.motion.div, {
    variants: motionVariants.text
  }, /* @__PURE__ */ React10.createElement("dl", null, /* @__PURE__ */ React10.createElement("dt", {
    className: "sr-only"
  }, "Date"), /* @__PURE__ */ React10.createElement("dd", {
    className: "text-sm leading-6 text-slate-700 dark:text-slate-400 sm:text-center"
  }, /* @__PURE__ */ React10.createElement("time", {
    dateTime: frontmatter.updated || frontmatter.published
  }, frontmatter.updated ? `\u66F4\u65B0\u65E5: ${formatDate(frontmatter.updated)}` : frontmatter.published ? `\u516C\u958B\u65E5: ${formatDate(frontmatter.published)}` : null))), /* @__PURE__ */ React10.createElement("h1", {
    className: "col-span-full mb-8 py-12 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-center sm:text-4xl"
  }, frontmatter.title)), /* @__PURE__ */ React10.createElement(import_framer_motion2.motion.div, {
    variants: motionVariants.image,
    className: "not-prose relative rounded shadow-md",
    layoutId: `image-container-${slug}`
  }, frontmatter.bannerImgId ? /* @__PURE__ */ React10.createElement(PostImage, {
    page: "post",
    className: "rounded",
    imgId: frontmatter.bannerImgId,
    alt: frontmatter.bannerAlt
  }) : null), /* @__PURE__ */ React10.createElement(import_framer_motion2.motion.div, {
    variants: motionVariants.back,
    className: "not-prose mt-8"
  }, /* @__PURE__ */ React10.createElement(import_remix7.Link, {
    className: "group flex gap-2 text-black dark:text-white",
    prefetch: "intent",
    to: "/blog"
  }, /* @__PURE__ */ React10.createElement(import_outline2.ArrowLeftIcon, {
    className: "h-6 w-6 transition-transform duration-300 group-hover:-translate-x-1"
  }), /* @__PURE__ */ React10.createElement("span", {
    className: "text-base"
  }, "Back to blog")))), /* @__PURE__ */ React10.createElement(import_framer_motion2.motion.article, {
    variants: motionVariants.code
  }, toc ? /* @__PURE__ */ React10.createElement("nav", {
    className: "mb-8 text-tp lg:hidden"
  }, /* @__PURE__ */ React10.createElement("h2", {
    className: "mb-2"
  }, "Contents"), /* @__PURE__ */ React10.createElement("div", {
    className: "toc",
    dangerouslySetInnerHTML: { __html: toc }
  })) : null, /* @__PURE__ */ React10.createElement(Component, null)), /* @__PURE__ */ React10.createElement("section", {
    title: "If you found this article helpful."
  })), /* @__PURE__ */ React10.createElement(Spacer, {
    size: "lg"
  }))));
}
function ErrorBoundary2({ error }) {
  console.error(error);
  return /* @__PURE__ */ React10.createElement("div", {
    className: "min-h-screen bg-slate-200 px-6 duration-500 dark:bg-slate-800 lg:flex"
  }, /* @__PURE__ */ React10.createElement("div", {
    className: "hidden flex-shrink-0 lg:block"
  }, /* @__PURE__ */ React10.createElement(Sidebar, null)), /* @__PURE__ */ React10.createElement("div", {
    className: "flex-grow rounded lg:z-[1] lg:h-full"
  }, error));
}
function CatchBoundary2() {
  const caught = (0, import_remix7.useCatch)();
  console.error("CatchBoundary", caught);
  throw new Error(`Unhandled error: ${caught.status}`);
}

// route:/home/shoma/src/www_vercel/app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  action: () => action3,
  default: () => Contact,
  meta: () => meta3
});
init_react();
var React14 = __toESM(require("react"));
var import_remix8 = __toESM(require_remix());
var import_remix9 = __toESM(require_remix());
var import_clsx15 = __toESM(require("clsx"));
var import_zod2 = require("zod");
var import_remix_validated_form3 = require("remix-validated-form");
var import_with_zod2 = require("@remix-validated-form/with-zod");

// app/components/form.tsx
init_react();
var React11 = __toESM(require("react"));
var import_clsx12 = __toESM(require("clsx"));
var import_auto_id = require("@reach/auto-id");
var import_remix_validated_form2 = require("remix-validated-form");
var import_outline3 = require("@heroicons/react/outline");
function Label(_a) {
  var _b = _a, { className } = _b, labelProps = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React11.createElement("label", __spreadProps(__spreadValues({}, labelProps), {
    className: (0, import_clsx12.default)("inline-block text-lg text-tp", className)
  }));
}
var Input = React11.forwardRef(function Input2(_a, ref) {
  var _b = _a, { defaultValue, name, label, className, description, id } = _b, props = __objRest(_b, ["defaultValue", "name", "label", "className", "description", "id"]);
  const prefix = (0, import_auto_id.useId)();
  const inputId = id ?? `${prefix}-${name}`;
  const errorId = `${inputId}-error`;
  const descriptionId = `${inputId}-description`;
  const { getInputProps, error } = (0, import_remix_validated_form2.useField)(name);
  return /* @__PURE__ */ React11.createElement("div", {
    className: (0, import_clsx12.default)("mb-8", className)
  }, /* @__PURE__ */ React11.createElement("div", {
    className: "mb-4 flex items-baseline justify-between gap-2"
  }, /* @__PURE__ */ React11.createElement(Label, {
    htmlFor: inputId,
    className: ""
  }, label), error ? /* @__PURE__ */ React11.createElement(InputError, {
    id: errorId
  }, error) : description ? /* @__PURE__ */ React11.createElement("div", {
    id: descriptionId,
    className: "text-lg text-tp"
  }, description) : null), /* @__PURE__ */ React11.createElement("input", __spreadValues(__spreadProps(__spreadValues({
    className: "w-full rounded-lg bg-bs px-8 py-6 text-lg font-medium text-tp placeholder-slate-400 ring-hp ring-offset-4 ring-offset-bp transition duration-300 focus:outline-none focus:ring-2 disabled:text-ts sm:px-10 sm:py-8"
  }, props), {
    required: true,
    defaultValue,
    "aria-required": "true",
    "aria-describedby": error ? errorId : description ? descriptionId : void 0,
    autoComplete: name === "name" ? "name organization" : name === "email" ? name : "off"
  }), getInputProps({ ref, id: inputId }))));
});
var Textarea = React11.forwardRef(function Textarea2(_a, ref) {
  var _b = _a, { defaultValue, name, label, className, description, id } = _b, props = __objRest(_b, ["defaultValue", "name", "label", "className", "description", "id"]);
  const prefix = (0, import_auto_id.useId)();
  const inputId = id ?? `${prefix}-${name}`;
  const errorId = `${inputId}-error`;
  const descriptionId = `${inputId}-description`;
  const { getInputProps, error } = (0, import_remix_validated_form2.useField)(name);
  return /* @__PURE__ */ React11.createElement("div", {
    className: (0, import_clsx12.default)("mb-8", className)
  }, /* @__PURE__ */ React11.createElement("div", {
    className: "mb-4 flex items-baseline justify-between gap-2"
  }, /* @__PURE__ */ React11.createElement(Label, {
    htmlFor: inputId,
    className: ""
  }, label), error ? /* @__PURE__ */ React11.createElement(InputError, {
    id: errorId
  }, error) : description ? /* @__PURE__ */ React11.createElement("div", {
    id: descriptionId,
    className: "text-lg text-tp"
  }, description) : null), /* @__PURE__ */ React11.createElement("textarea", __spreadValues(__spreadProps(__spreadValues({
    className: (0, import_clsx12.default)("w-full rounded-lg bg-bs px-8 py-6 text-lg font-medium text-tp placeholder-slate-400 ring-hp ring-offset-4 ring-offset-bp transition duration-300 focus:outline-none focus:ring-2 disabled:text-ts sm:px-10 sm:py-8")
  }, props), {
    required: true,
    defaultValue,
    "aria-required": "true",
    "aria-describedby": error ? errorId : description ? descriptionId : void 0
  }), getInputProps({ ref, id: inputId }))));
});
var Select = React11.forwardRef(function Select2(_a, ref) {
  var _b = _a, { defaultValue, name, label, className, description, id } = _b, props = __objRest(_b, ["defaultValue", "name", "label", "className", "description", "id"]);
  const prefix = (0, import_auto_id.useId)();
  const inputId = id ?? `${prefix}-${name}`;
  const errorId = `${inputId}-error`;
  const descriptionId = `${inputId}-description`;
  const { getInputProps, error } = (0, import_remix_validated_form2.useField)(name);
  return /* @__PURE__ */ React11.createElement("div", {
    className: (0, import_clsx12.default)("mb-8", className)
  }, /* @__PURE__ */ React11.createElement("div", {
    className: "mb-4 flex items-baseline justify-between gap-2"
  }, /* @__PURE__ */ React11.createElement(Label, {
    htmlFor: inputId,
    className: ""
  }, label), error ? /* @__PURE__ */ React11.createElement(InputError, {
    id: errorId
  }, error) : description ? /* @__PURE__ */ React11.createElement("div", {
    id: descriptionId,
    className: "text-lg text-tp"
  }, description) : null), /* @__PURE__ */ React11.createElement("select", __spreadValues(__spreadProps(__spreadValues({
    className: (0, import_clsx12.default)("w-full rounded-lg bg-bs px-8 py-6 text-lg font-medium text-tp placeholder-slate-400 ring-hp ring-offset-4 ring-offset-bp transition duration-300 focus:outline-none focus:ring-2 disabled:text-ts sm:px-10 sm:py-8")
  }, props), {
    required: true,
    defaultValue,
    "aria-required": "true",
    "aria-describedby": error ? errorId : description ? descriptionId : void 0
  }), getInputProps({ ref, id: inputId }))));
});
function InputError({ children, id }) {
  if (!children) {
    return null;
  }
  return /* @__PURE__ */ React11.createElement("p", {
    role: "alert",
    id,
    className: "inline-flex text-sm text-error"
  }, /* @__PURE__ */ React11.createElement(import_outline3.ExclamationCircleIcon, {
    className: "h-5 w-5"
  }), children);
}

// app/components/footer.tsx
init_react();
var React12 = __toESM(require("react"));
var import_clsx13 = __toESM(require("clsx"));
var import_react6 = require("@remix-run/react");
var NAV_LIST2 = [
  { name: "Home", to: "/" },
  { name: "Works", to: "/works" },
  { name: "Contact", to: "/contact" },
  { name: "Blog", to: "/blog" }
];
var LEGAL_LIST2 = [
  { name: "Privacy Policy", to: "/policy" },
  { name: "Terms of Use", to: "/service" }
];
function Footer({ className }) {
  return /* @__PURE__ */ React12.createElement("footer", {
    className: (0, import_clsx13.default)(className, "relative w-full py-8"),
    role: "contentinfo"
  }, /* @__PURE__ */ React12.createElement("div", {
    className: "container mx-auto grid justify-evenly gap-8 px-[5vw] py-10 sm:grid-flow-col-dense"
  }, /* @__PURE__ */ React12.createElement("nav", {
    className: "flex flex-col whitespace-nowrap text-base text-tp"
  }, /* @__PURE__ */ React12.createElement("h2", {
    className: "mb-3"
  }, "NAVIGATION"), NAV_LIST2.map((link) => {
    return /* @__PURE__ */ React12.createElement(import_react6.NavLink, {
      to: link.to,
      key: link.name,
      prefetch: "intent",
      className: ({ isActive }) => isActive ? "pl-2 text-slate-500 focus:text-hp focus:outline-none dark:text-slate-400 dark:focus:text-hp" : "pl-2 hover:text-hp focus:text-hp focus:outline-none"
    }, link.name);
  })), /* @__PURE__ */ React12.createElement("nav", {
    className: "flex flex-col whitespace-nowrap text-base text-tp"
  }, /* @__PURE__ */ React12.createElement("h2", {
    className: "mb-3"
  }, "LEGAL"), LEGAL_LIST2.map((link) => {
    return /* @__PURE__ */ React12.createElement(import_react6.NavLink, {
      to: link.to,
      key: link.name,
      prefetch: "intent",
      className: ({ isActive }) => isActive ? "pl-2 text-slate-500 dark:text-slate-400" : "pl-2 hover:text-hp focus:text-hp focus:outline-none"
    }, link.name);
  }), /* @__PURE__ */ React12.createElement("a", {
    className: "pl-2 text-tp hover:text-hp focus:text-hp focus:outline-none",
    href: "/sitemap.xml"
  }, "Sitemap.xml")), /* @__PURE__ */ React12.createElement("div", {
    className: "col-span-2 flex gap-8 sm:col-span-1 sm:flex-col"
  }, /* @__PURE__ */ React12.createElement("div", {
    className: "flex items-center justify-center gap-4"
  }, /* @__PURE__ */ React12.createElement(ExternalLink, {
    className: "ring-hp focus:outline-none focus:ring-2",
    "aria-label": "GitHub",
    href: "https://github.com/6plusjp"
  }, /* @__PURE__ */ React12.createElement("span", {
    className: "sr-only"
  }, " View on GitHub "), /* @__PURE__ */ React12.createElement(GitHubIcon, {
    size: 32,
    className: "fill-slate-500 hover:fill-[#333] focus:fill-[#333]"
  })), /* @__PURE__ */ React12.createElement(ExternalLink, {
    className: "ring-hp focus:outline-none focus:ring-2",
    "aria-label": "Twitter",
    href: "https://twitter.com"
  }, /* @__PURE__ */ React12.createElement("span", {
    className: "sr-only"
  }, " View on Twitter "), /* @__PURE__ */ React12.createElement(TwitterIcon, {
    size: 32,
    className: "fill-slate-500 hover:fill-[#1DA1F2] focus:fill-[#1DA1F2]"
  })), /* @__PURE__ */ React12.createElement(import_react6.Link, {
    className: "ring-hp focus:outline-none focus:ring-2",
    "aria-label": "RSS",
    target: "_blank",
    to: "/blog/rss[.]xml"
  }, /* @__PURE__ */ React12.createElement("span", {
    className: "sr-only"
  }, " View RSS "), /* @__PURE__ */ React12.createElement(RssIcon, {
    size: 32,
    className: "fill-slate-500 hover:fill-[#f26522] focus:fill-[#f26522]"
  }))), /* @__PURE__ */ React12.createElement("div", {
    className: "noscript-hidden mx-auto"
  }, /* @__PURE__ */ React12.createElement(ThemeToggle, {
    size: "sm"
  })))), /* @__PURE__ */ React12.createElement("div", {
    className: "mt-8 flex items-center justify-center text-sm text-tp"
  }, /* @__PURE__ */ React12.createElement("span", {
    className: ""
  }, "Copyright \xA9 2022 6+ All rights reserved. ")));
}

// app/utils/hydrated.ts
init_react();
var import_react7 = require("react");
var import_react8 = require("@remix-run/react");
var hydrating = true;
function useHydrated() {
  const [hydrated, setHydrated] = (0, import_react7.useState)(() => !hydrating);
  (0, import_react7.useEffect)(function hydrate() {
    hydrating = false;
    setHydrated(true);
  }, []);
  return hydrated;
}

// app/utils/email.server.ts
init_react();
var import_tiny_invariant2 = __toESM(require("tiny-invariant"));
require("dotenv").config();
async function sendEmail(data) {
  (0, import_tiny_invariant2.default)(process.env.MAILERSEND_API_KEY, "MAILERSEND_API_KEY\u304C\u5FC5\u8981\u3067\u3059!");
  const apiKey = process.env.MAILERSEND_API_KEY;
  const auth = `Bearer ${apiKey}`;
  const { name, email, subject, text } = data;
  const textContent = `
  ${name} \u69D8
  \u304A\u554F\u3044\u5408\u308F\u305B\u3044\u305F\u3060\u304D\u8AA0\u306B\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002
  \u4E0B\u8A18\u306E\u5185\u5BB9\u3067\u78BA\u304B\u306B\u627F\u308A\u307E\u3057\u305F\u3002

  \u3010\u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9\u3011
  \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501

  \u25A0\u4EF6\u540D : ${subject}
  \u25A0\u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9 : ${text}

  \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501

  \u6570\u65E5\u55B6\u696D\u65E5\u4EE5\u5185\u306B6plusjp6gmail.com\uFF082\u3064\u76EE\u306E6\u3092@\u306B\uFF09\u304B\u3089\u8FD4\u4FE1\u3055\u305B\u3066\u3044\u305F\u3060\u304D\u307E\u3059\u3002\u3057\u3070\u3089\u304F\u304A\u5F85\u3061\u304F\u3060\u3055\u3044\u3002

  \u203B\u3053\u306E\u30E1\u30FC\u30EB\u306B\u304A\u5FC3\u5F53\u305F\u308A\u306E\u306A\u3044\u5834\u5408\u306F\u3001\u8AA0\u306B\u6050\u308C\u5165\u308A\u307E\u3059\u304C\u7834\u68C4\u3044\u305F\u3060\u304D\u307E\u3059\u3088\u3046\u3001\u304A\u9858\u3044\u7533\u3057\u4E0A\u3052\u307E\u3059\u3002
  \u203B\u672C\u30E1\u30FC\u30EB\u306E\u9001\u4FE1\u5143\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u306F\u3001\u9001\u4FE1\u5C02\u7528\u30A2\u30C9\u30EC\u30B9\u3068\u306A\u3063\u3066\u304A\u308A\u307E\u3059\u3002\u3053\u306E\u30E1\u30FC\u30EB\u306B\u8FD4\u4FE1\u3055\u308C\u3066\u3082\u3001\u8FD4\u4FE1\u5185\u5BB9\u306E\u78BA\u8A8D\u304A\u3088\u3073\u3054\u8FD4\u7B54\u306F\u3067\u304D\u307E\u305B\u3093\u3002\u4E88\u3081\u3054\u4E86\u627F\u304F\u3060\u3055\u3044\u3002

  \u25A1\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8 \u21D2 https://6plus.tech
  `.trim();
  const htmlContent = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>

<head>
  <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
</head>

<body style="font-family: 'Noto Sans JP', Helvetica, Arial, sans-serif;">
  <div style="margin: 0 auto; max-width: 450px;">
    <h2>
      ${name} \u69D8
    </h2>
    <h3>
      \u304A\u554F\u3044\u5408\u308F\u305B\u3044\u305F\u3060\u304D\u8AA0\u306B\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002
    </h3>

    <svg style="max-width: 450px;" viewBox="0 0 900 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="transparent" d="M0 0h900v600H0z" />
      <circle cx="495.273" cy="114.942" r="43.942" fill="#63a18f" />
      <path d="M506.303 520.49V353.279a12.864 12.864 0 0 0-17.378-12.005l-64.321 24.081a12.856 12.856 0 0 0-8.344 12.066V520.49" stroke="#E1E4E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <path clip-rule="evenodd" d="M359.983 362.914h22.511c6.216 0 11.255 5.039 11.255 11.255v22.511h-45.021v-22.511c0-6.216 5.039-11.255 11.255-11.255v0z" stroke="#E1E4E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M371.238 340.403v22.511M326.217 520.49V407.936c0-6.216 5.039-11.256 11.255-11.256h67.533c6.216 0 11.255 5.04 11.255 11.256V520.49m-61.9-56.278h33.767m-33.767 0h33.767m-33.767-33.765h33.767m58.147-29.445v79.468m30.015-79.468v79.468" stroke="#E1E4E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <path clip-rule="evenodd" d="M156.168 360.414h20.01c5.525 0 10.005 4.479 10.005 10.005v20.009h-40.019v-20.009c0-5.526 4.479-10.005 10.004-10.005z" stroke="#E1E4E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M166.173 340.403v20.009M126.154 520.49V400.433c0-5.526 4.48-10.005 10.005-10.005h60.029c5.525 0 10.005 4.479 10.005 10.005v30.014m30.014-.001v-70.034a10.006 10.006 0 0 1 13.517-9.365l50.023 18.759a10.007 10.007 0 0 1 6.494 9.375v141.308" stroke="#E1E4E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M176.178 520.488V440.45c0-5.526 4.479-10.005 10.005-10.005h60.028c5.526 0 10.005 4.479 10.005 10.005v80.038m-55.026-33.013h30.014m-30.014-27.014h30.014M870 523.846H29m617.233-71.96 60.029-51.455 60.028 51.455" stroke="#E1E4E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M757.716 520.489V400.431h-25.733v22.011m-40.729 98.047v-42.88h30.014v42.88m-66.461-75.956v75.956m-73.646-30.013v30.014m250.309-30.014v30.014M71.03 490.476v30.014" stroke="#E1E4E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <rect x="556.219" y="420.442" width="50.024" height="70.034" rx="20.483" stroke="#E1E4E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <rect x="806.528" y="420.442" width="50.024" height="70.034" rx="20.483" stroke="#E1E4E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <rect x="46.088" y="420.442" width="50.024" height="70.034" rx="20.483" stroke="#E1E4E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M355.547 135.95c11.707 0 6.23-18.564-8.602-14.13-.822-25.778-42.838-44.638-60.212-9.871-4.912-3.887-15.942 3.455-13.5 9.871-5.456.465-9.749 1.096-13.089 1.932-7.711 1.93-6.185 12.111 1.764 12.04l93.639.158zm450.114 102.273c17.396 0 9.256-27.416-12.782-20.867-1.22-38.068-63.652-65.922-89.467-14.577-7.299-5.74-23.689 5.102-20.059 14.577-8.108.686-14.486 1.619-19.448 2.853-11.459 2.851-9.191 17.886 2.62 17.781l139.136.233zm-643.878-70.379h63.01c5.634 0 8.061-7.349 3.451-10.609-.064-.047-.13-.093-.195-.139-6.564-4.545-15.179-4.132-15.179-4.132s-1.229-24.595-24.406-24.595c-20.955 0-29.311 20.723-32.325 32.14-.979 3.709 1.835 7.335 5.644 7.335zm462.611 0h63.01c5.634 0 8.061-7.349 3.451-10.609-.064-.047-.13-.093-.195-.139-6.564-4.545-15.178-4.132-15.178-4.132s-1.23-24.595-24.407-24.595c-20.954 0-29.31 20.723-32.325 32.14-.979 3.709 1.835 7.335 5.644 7.335zm-187.598 14.231h-51.464c-4.602 0-6.584-5.908-2.819-8.529.053-.037.106-.075.16-.111 5.361-3.654 12.397-3.322 12.397-3.322s1.004-19.773 19.934-19.773c17.115 0 23.94 16.66 26.402 25.838.799 2.982-1.499 5.897-4.61 5.897zm-300.265 58.732H52.003c-6.843 0-9.795-8.662-4.192-12.506l.237-.162c7.975-5.358 18.44-4.872 18.44-4.872s1.496-28.986 29.656-28.986c13.922 0 25.173 23.263 25.173 23.263s18.939 0 22.073 14.616c.948 4.428-2.229 8.647-6.859 8.647zm462.611 0h-84.528c-6.843 0-9.795-8.662-4.193-12.506l.238-.162c7.975-5.358 18.441-4.872 18.441-4.872s1.495-28.986 29.654-28.986c13.922 0 25.174 23.263 25.174 23.263s18.939 0 22.073 14.616c.947 4.428-2.229 8.647-6.859 8.647zm-384.553 2.968h187.398c17.591 0 16.784-14.56 11.038-19.633-5.889-5.199-17.526-3.091-17.526-3.091s-3.464-9.793-14.867-14.56c-10.087-4.218-20.654-2.211-20.654-2.211s0-6.721-6.458-12.287c-6.459-5.567-15.07-5.026-15.07-5.026s-5.92-37.061-45.477-37.061c-39.558 0-44.133 34.896-44.133 34.896s-8.88 0-15.339 5.952c-6.458 5.952-7.266 12.714-7.266 12.714s-21.599-2.925-27.987 15.804c-3.806 11.163 4.015 24.503 16.341 24.503z" fill="#fff" stroke="#E1E4E5" stroke-width="4" />
    </svg>

    <h3 style="text-align: center">\u4E0B\u8A18\u306E\u5185\u5BB9\u3067\u78BA\u304B\u306B\u627F\u308A\u307E\u3057\u305F\u3002</h3>

    <div>
      <h5>\u4EF6\u540D :</h5>
      <p style="padding: 1rem; color: #63A18F; font-size: 1.1rem; overflow-wrap:break-word;">${subject}</p>
      <h5>\u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9 :</h5>
      <p style="padding: 1rem; color: #63A18F; font-size: 1.1rem; overflow-wrap:break-word;">${text}</p>
    </div>

    <hr style="width: 60%; height: 0px; border: 1px solid lightgrey; margin-top: 3rem; margin-bottom: 3rem">

    <div style="color: grey; font-size: .8rem; line-height: 1.2rem; margin-bottom: 3rem">
      <ul>
        <li>\u6570\u65E5\u55B6\u696D\u65E5\u4EE5\u5185\u306B6plusjp6gmail.com\uFF082\u3064\u76EE\u306E6\u3092@\u306B\uFF09\u304B\u3089\u8FD4\u4FE1\u3055\u305B\u3066\u3044\u305F\u3060\u304D\u307E\u3059\u3002\u3057\u3070\u3089\u304F\u304A\u5F85\u3061\u304F\u3060\u3055\u3044\u3002</li>
        <li>\u3053\u306E\u30E1\u30FC\u30EB\u306B\u304A\u5FC3\u5F53\u305F\u308A\u306E\u306A\u3044\u5834\u5408\u306F\u3001\u8AA0\u306B\u6050\u308C\u5165\u308A\u307E\u3059\u304C\u7834\u68C4\u3044\u305F\u3060\u304D\u307E\u3059\u3088\u3046\u3001\u304A\u9858\u3044\u7533\u3057\u4E0A\u3052\u307E\u3059\u3002</li>
        <li>\u672C\u30E1\u30FC\u30EB\u306E\u9001\u4FE1\u5143\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u306F\u3001\u9001\u4FE1\u5C02\u7528\u30A2\u30C9\u30EC\u30B9\u3068\u306A\u3063\u3066\u304A\u308A\u307E\u3059\u3002\u3053\u306E\u30E1\u30FC\u30EB\u306B\u8FD4\u4FE1\u3055\u308C\u3066\u3082\u3001\u8FD4\u4FE1\u5185\u5BB9\u306E\u78BA\u8A8D\u304A\u3088\u3073\u3054\u8FD4\u7B54\u306F\u3067\u304D\u307E\u305B\u3093\u3002\u4E88\u3081\u3054\u4E86\u627F\u304F\u3060\u3055\u3044\u3002</li>
      </ul>
      <p style="text-align: center; color: black; margin-top: 2rem;">Copyright &copy; 2022 <a style="color: #63A18F;" href="https://6plus.tech" target="_blank" rel="noopener noreferrer">6+</a> All rights reserved.</p>
    </div>
  </div>
</body>

</html>
`;
  const body = {
    from: {
      email: "info@6plus.tech",
      name: "6+"
    },
    to: [
      {
        email,
        name
      }
    ],
    subject: "[6+] \u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9\u306E\u3054\u78BA\u8A8D",
    text: textContent,
    html: htmlContent
  };
  return fetch(`https://api.mailersend.com/v1/email`, {
    method: "post",
    body: body && JSON.stringify(body),
    headers: {
      Authorization: auth,
      "X-Requested-With": "XMLHttpRequest",
      "Content-type": "application/json"
    }
  });
}
async function sendEmailToOwner(data) {
  (0, import_tiny_invariant2.default)(process.env.MAILERSEND_API_KEY, "MAILERSEND_API_KEY\u304C\u5FC5\u8981\u3067\u3059!");
  const apiKey = process.env.MAILERSEND_API_KEY;
  const auth = `Bearer ${apiKey}`;
  const { name, email, subject, text } = data;
  const textContent = `
  \u3010\u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9\u3011
  \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501

  \u25A0\u304A\u540D\u524D/\u4F1A\u793E\u540D : ${name}
  \u25A0\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9 : ${email}
  \u25A0\u4EF6\u540D : ${subject}
  \u25A0\u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9 : ${text}

  \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
  `.trim();
  const body = {
    from: {
      email: "info@6plus.tech",
      name: "6+"
    },
    to: [
      {
        email: "6plusjp@gmail.com",
        name: "Shoma Yamamoto"
      }
    ],
    subject: `${name}\u69D8 ${subject}`,
    text: textContent
  };
  return fetch(`https://api.mailersend.com/v1/email`, {
    method: "post",
    body: body && JSON.stringify(body),
    headers: {
      Authorization: auth,
      "X-Requested-With": "XMLHttpRequest",
      "Content-type": "application/json"
    }
  });
}

// app/components/button.tsx
init_react();
var import_clsx14 = __toESM(require("clsx"));
var React13 = __toESM(require("react"));
function getClassName({ className }) {
  return (0, import_clsx14.default)("group relative inline-flex text-lg font-medium focus:outline-none opacity-100 disabled:opacity-50 transition", className);
}
function ButtonInner({
  children,
  variant,
  size
}) {
  return /* @__PURE__ */ React13.createElement(React13.Fragment, null, /* @__PURE__ */ React13.createElement("div", {
    className: (0, import_clsx14.default)("focus-ring absolute inset-0 transform rounded-full opacity-100 transition disabled:opacity-50", {
      "border-secondary bg-primary border-2 group-hover:border-transparent group-focus:border-transparent": variant === "secondary" || variant === "danger",
      danger: variant === "danger",
      "bg-inverse": variant === "primary"
    })
  }), /* @__PURE__ */ React13.createElement("div", {
    className: (0, import_clsx14.default)("relative flex h-full w-full items-center justify-center whitespace-nowrap", {
      "text-primary": variant === "secondary",
      "text-inverse": variant === "primary",
      "text-danger": variant === "danger",
      "space-x-5 px-11 py-6": size !== "medium",
      "space-x-3 px-8 py-4": size === "medium"
    })
  }, children));
}
function Button(_a) {
  var _b = _a, {
    children,
    variant = "primary",
    size = "large",
    className
  } = _b, buttonProps = __objRest(_b, [
    "children",
    "variant",
    "size",
    "className"
  ]);
  return /* @__PURE__ */ React13.createElement("button", __spreadProps(__spreadValues({}, buttonProps), {
    className: getClassName({ className })
  }), /* @__PURE__ */ React13.createElement(ButtonInner, {
    variant,
    size
  }, children));
}

// route:/home/shoma/src/www_vercel/app/routes/contact.tsx
var schema2 = import_zod2.z.object({
  name: import_zod2.z.string().nonempty("\u304A\u540D\u524D / \u4F1A\u793E\u540D\u306F\u5FC5\u9808\u3067\u3059").max(30, "\u304A\u540D\u524D / \u4F1A\u793E\u540D\u304C\u9577\u3059\u304E\u307E\u3059"),
  email: import_zod2.z.string().nonempty("\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u306F\u5FC5\u9808\u3067\u3059").email("\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u306E\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093"),
  subject: import_zod2.z.enum(["\u4ED5\u4E8B\u306E\u3054\u4F9D\u983C", "\u3054\u8CEA\u554F", "\u305D\u306E\u4ED6"]),
  text: import_zod2.z.string().nonempty("\u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9\u306F\u5FC5\u9808\u3067\u3059").min(5, "\u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9\u304C\u77ED\u3059\u304E\u307E\u3059").max(1e3, "\u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9\u304C\u9577\u3059\u304E\u307E\u3059")
});
var clientValidator = (0, import_with_zod2.withZod)(schema2);
var meta3 = ({ parentsData }) => {
  const { requestInfo } = parentsData.root;
  const title = "Contact Me | 6+";
  const description = "\u3053\u3061\u3089\u306F\u304A\u554F\u3044\u5408\u308F\u305B\u30D5\u30A9\u30FC\u30E0\u306B\u306A\u308A\u307E\u3059\u3002\u4ED5\u4E8B\u306E\u3054\u4F9D\u983C\u3001\u3054\u8CEA\u554F\u3001\u305D\u306E\u4ED6\u4F55\u3067\u3082\u69CB\u3044\u307E\u305B\u3093\u3002\u6C17\u8EFD\u306B\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002";
  return __spreadValues({}, getMeta({
    origin: requestInfo.origin,
    url: getUrl(requestInfo),
    title,
    description
  }));
};
var action3 = async ({ request }) => {
  const result = await clientValidator.validate(await request.formData());
  if (result.error)
    return (0, import_remix_validated_form3.validationError)(result.error, result.submittedData);
  const response = await sendEmailToOwner(result.data);
  if (response.ok) {
    const response2 = await sendEmail(result.data);
    if (response2.ok) {
      return (0, import_remix9.json)({
        status: "success",
        fields: result.data
      });
    } else {
      return (0, import_remix9.json)({
        status: "error",
        fields: result.data
      });
    }
  } else {
    return (0, import_remix9.json)({
      status: "error",
      fields: result.data
    });
  }
};
function Contact() {
  const data = (0, import_remix8.useActionData)();
  const isHydrated = useHydrated();
  return /* @__PURE__ */ React14.createElement("div", {
    className: "bg-bp duration-500"
  }, /* @__PURE__ */ React14.createElement(Navbar, null), /* @__PURE__ */ React14.createElement("main", {
    className: "px-[5vw]"
  }, /* @__PURE__ */ React14.createElement(import_remix_validated_form3.ValidatedForm, {
    id: "validatedForm",
    method: "post",
    resetAfterSubmit: true,
    name: "contact",
    validator: clientValidator,
    className: "mx-auto max-w-xl py-12 lg:max-w-7xl",
    noValidate: isHydrated,
    defaultValues: {
      name: (data == null ? void 0 : data.fields.name) ?? "",
      email: (data == null ? void 0 : data.fields.email) ?? "",
      subject: data == null ? void 0 : data.fields.subject,
      text: (data == null ? void 0 : data.fields.text) ?? ""
    }
  }, /* @__PURE__ */ React14.createElement("h1", {
    className: "mb-12 py-8 text-3xl font-bold text-tp sm:text-4xl"
  }, "\u304A\u554F\u3044\u5408\u308F\u305B"), /* @__PURE__ */ React14.createElement("div", {
    className: "grid gap-x-12 gap-y-4 lg:grid-cols-2"
  }, /* @__PURE__ */ React14.createElement(Input, {
    name: "name",
    label: "\u304A\u540D\u524D / \u4F1A\u793E\u540D",
    placeholder: "6+"
  }), /* @__PURE__ */ React14.createElement(Input, {
    type: "email",
    label: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
    placeholder: "6plusjp@example.com",
    name: "email"
  }), /* @__PURE__ */ React14.createElement(Select, {
    name: "subject",
    label: "\u4EF6\u540D"
  }, /* @__PURE__ */ React14.createElement("option", {
    value: "\u4ED5\u4E8B\u306E\u3054\u4F9D\u983C"
  }, "\u4ED5\u4E8B\u306E\u3054\u4F9D\u983C"), /* @__PURE__ */ React14.createElement("option", {
    value: "\u3054\u8CEA\u554F"
  }, "\u3054\u8CEA\u554F"), /* @__PURE__ */ React14.createElement("option", {
    value: "\u305D\u306E\u4ED6"
  }, "\u305D\u306E\u4ED6")), /* @__PURE__ */ React14.createElement(Textarea, {
    name: "text",
    label: "\u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9",
    placeholder: "I am writing to ask you to send us your company brochure and product catalog.",
    rows: 8
  }), (data == null ? void 0 : data.status) === "success" ? /* @__PURE__ */ React14.createElement(React14.Fragment, null, /* @__PURE__ */ React14.createElement(Alert, {
    state: "success",
    className: "w-max"
  }, "\u5B8C\u4E86\u3057\u307E\u3057\u305F!", /* @__PURE__ */ React14.createElement("br", null), "\u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9\u78BA\u8A8D\u306E\u70BA\u3001\u81EA\u52D5\u9001\u4FE1\u30E1\u30FC\u30EB\u3092\u304A\u9001\u308A\u3044\u305F\u3057\u307E\u3059\u3002")) : /* @__PURE__ */ React14.createElement("div", {
    className: "my-8 flex items-end justify-center gap-4 sm:justify-between lg:col-span-2"
  }, /* @__PURE__ */ React14.createElement("div", {
    className: "hidden w-28 sm:block"
  }), /* @__PURE__ */ React14.createElement(SubmitButton, null), /* @__PURE__ */ React14.createElement(ResetButton, null)), (data == null ? void 0 : data.status) === "error" ? /* @__PURE__ */ React14.createElement(Alert, {
    state: "error",
    className: "w-max"
  }, "\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u305F\u305F\u3081\u3001\u9001\u4FE1\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F!", /* @__PURE__ */ React14.createElement("br", null), "\u304A\u624B\u6570\u3067\u3059\u304C\u3057\u3070\u3089\u304F\u3057\u3066\u518D\u5EA6\u304A\u8A66\u3057\u306B\u306A\u308B\u304B\u30016plusjp6gmail.com\uFF082\u3064\u76EE\u306E6\u3092@\u306B\uFF09\u307E\u3067\u76F4\u63A5\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002") : null))), /* @__PURE__ */ React14.createElement(Footer, {
    className: "bg-bs duration-500"
  }));
}
var SubmitButton = () => {
  const isSubmitting = (0, import_remix_validated_form3.useIsSubmitting)();
  return /* @__PURE__ */ React14.createElement(Button, {
    type: "submit",
    className: (0, import_clsx15.default)("btn w-28 bg-hp text-base shadow sm:text-lg", isSubmitting ? "text-ts" : "text-tp transition duration-300 hover:-translate-y-0.5 hover:border hover:border-black hover:bg-transparent hover:text-hp hover:shadow-inner focus:-translate-y-0.5 focus:border focus:bg-transparent focus:text-hp focus:shadow-inner focus:outline-none dark:hover:border-white"),
    disabled: isSubmitting
  }, isSubmitting ? "\u9001\u4FE1\u4E2D..." : "\u9001\u4FE1");
};
var ResetButton = () => {
  return /* @__PURE__ */ React14.createElement(Button, {
    type: "reset",
    className: "btn w-28 bg-bs text-base text-tp shadow transition duration-300 hover:-translate-y-0.5 hover:border hover:border-black hover:bg-transparent hover:shadow-inner focus:border dark:hover:border-white sm:text-lg"
  }, "\u30EA\u30BB\u30C3\u30C8");
};

// route:/home/shoma/src/www_vercel/app/routes/policy.tsx
var policy_exports = {};
__export(policy_exports, {
  default: () => Policy,
  meta: () => meta4
});
init_react();
var meta4 = ({ parentsData }) => {
  const { requestInfo } = parentsData.root;
  const title = "Privacy Policy | 6+";
  const description = "\u306F\u3058\u3081\u307E\u3057\u3066\u3002";
  return __spreadValues({}, getMeta({
    origin: requestInfo.origin,
    url: getUrl(requestInfo),
    title,
    description
  }));
};
function Policy() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "min-h-screen bg-bp duration-500"
  }, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-6xl space-y-12 py-12 px-[5vw] leading-loose text-ts"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "block space-y-4 py-8 text-tp sm:flex sm:items-center sm:justify-between"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl font-bold sm:text-4xl"
  }, "\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC"), /* @__PURE__ */ React.createElement("p", {
    className: "text-sm sm:self-end sm:text-base"
  }, "\u4EE4\u548C3\u5E748\u670823\u65E5 \u7B56\u5B9A")), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-4"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "border-b border-hp text-xl text-tp sm:text-2xl"
  }, "\u500B\u4EBA\u60C5\u5831\u53D6\u308A\u6271\u3044\u306B\u95A2\u3059\u308B\u57FA\u672C\u65B9\u91DD"), /* @__PURE__ */ React.createElement("p", {
    className: "mb-2"
  }, "6+\uFF08\u4EE5\u4E0B\u300C\u5F53\u30B5\u30A4\u30C8\u300D\uFF09\u306F\u500B\u4EBA\u60C5\u5831\u306E\u91CD\u8981\u6027\u3092\u8A8D\u8B58\u3057\u3001\u305D\u306E\u4FDD\u8B77\u3092\u56F3\u308B\u3053\u3068\u304C\u91CD\u8981\u306A\u793E\u4F1A\u7684\u8CAC\u52D9\u3067\u3042\u308B\u3068\u8003\u3048\u3001\u500B\u4EBA\u60C5\u5831\u306B\u95A2\u3059\u308B\u6CD5\u4EE4\u7B49\u3092\u9075\u5B88\u3057\u3001\u500B\u4EBA\u60C5\u5831\u3092\u4EE5\u4E0B\u306E\u65B9\u91DD\u306B\u5F93\u3063\u3066\u9069\u5207\u306B\u53D6\u308A\u6271\u3044\u307E\u3059\u3002"), /* @__PURE__ */ React.createElement("p", {
    className: "mb-8"
  }, "\u307E\u305F\u3001\u3053\u306E\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC\uFF08\u4EE5\u4E0B\u300C\u672C\u30DD\u30EA\u30B7\u30FC\u300D\uFF09\u306E\u5F53\u4E8B\u8005\u306F\u3001\u5F53\u30B5\u30A4\u30C8\u3068\u3001\u672C\u30DD\u30EA\u30B7\u30FC\u306B\u7F72\u540D\u3059\u308B\u8005\uFF08\u4EE5\u4E0B\u300C\u304A\u5BA2\u69D8\u300D\uFF09\u3067\u3059\u3002\u672C\u30DD\u30EA\u30B7\u30FC\u306F\u3001\u304A\u5BA2\u69D8\u306B\u3088\u308B\u5F53\u30B5\u30A4\u30C8\u306E\u5229\u7528\u306B\u9069\u7528\u3055\u308C\u307E\u3059\u3002\u5F53\u30B5\u30A4\u30C8\u3092\u3054\u5229\u7528\u306B\u306A\u308B\u3053\u3068\u306B\u3088\u308A\u3001\u304A\u5BA2\u69D8\u306F\u672C\u30DD\u30EA\u30B7\u30FC\u306E\u5185\u5BB9\u3092\u78BA\u8A8D\u3057\u305F\u3053\u3068\u3001\u672C\u30DD\u30EA\u30B7\u30FC\u306B\u540C\u610F\u3057\u305F\u3082\u306E\u3068\u306A\u308A\u307E\u3059\u3002")), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-4"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "border-b border-hp text-xl text-tp sm:text-2xl"
  }, "\u500B\u4EBA\u60C5\u5831\u306E\u53D6\u5F97\u3068\u5229\u7528\u76EE\u7684"), /* @__PURE__ */ React.createElement("p", {
    className: "mb-2"
  }, "\u5F53\u30B5\u30A4\u30C8\u304C\u53CE\u96C6\u3059\u308B\u500B\u4EBA\u60C5\u5831\u3068\u305D\u306E\u5229\u7528\u76EE\u7684\u306F\u3001\u4EE5\u4E0B\u306E\u3068\u304A\u308A\u3067\u3059\u3002\u304A\u5BA2\u69D8\u306E\u540C\u610F\u306A\u304F\u60C5\u5831\u306E\u53CE\u96C6\u3001\u76EE\u7684\u5916\u306E\u5229\u7528\u3092\u884C\u3046\u3053\u3068\u306F\u3042\u308A\u307E\u305B\u3093\u3002"), /* @__PURE__ */ React.createElement("ul", {
    className: "mb-8"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "mb-2"
  }, /* @__PURE__ */ React.createElement("h4", null, "(1) \u304A\u5BA2\u69D8\u304B\u3089\u3054\u63D0\u4F9B\u3044\u305F\u3060\u304F\u60C5\u5831"), /* @__PURE__ */ React.createElement("ul", {
    className: "list-inside list-disc"
  }, /* @__PURE__ */ React.createElement("li", null, "\u5F53\u30B5\u30A4\u30C8\u306E\u5229\u7528\u306B\u4F34\u3046\u9023\u7D61\u30FB\u5404\u7A2E\u304A\u77E5\u3089\u305B\u7B49\u306E\u914D\u4FE1\u30FB\u9001\u4ED8\u306E\u305F\u3081"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("h4", null, "(2) \u304A\u5BA2\u69D8\u304C\u5229\u7528\u3059\u308B\u306B\u3042\u305F\u3063\u3066\u5F53\u30B5\u30A4\u30C8\u304C\u53CE\u96C6\u3059\u308B\u60C5\u5831"), /* @__PURE__ */ React.createElement("ul", {
    className: "list-inside list-disc"
  }, /* @__PURE__ */ React.createElement("li", null, "\u5F53\u30B5\u30A4\u30C8\u306E\u6539\u5584\u30FB\u958B\u767A\u304A\u3088\u3073\u30DE\u30FC\u30B1\u30C6\u30A3\u30F3\u30B0\u306E\u305F\u3081"), /* @__PURE__ */ React.createElement("li", null, "\u898F\u7D04\u7B49\u3067\u7981\u3058\u3066\u3044\u308B\u884C\u70BA\u306A\u3069\u306E\u8ABF\u67FB\u306E\u305F\u3081"))))), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-4"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "border-b border-hp text-xl text-tp sm:text-2xl"
  }, "\u500B\u4EBA\u60C5\u5831\u306E\u7B2C\u4E09\u8005\u3078\u306E\u63D0\u4F9B"), /* @__PURE__ */ React.createElement("p", {
    className: "mb-2"
  }, "\u5F53\u30B5\u30A4\u30C8\u306F\u500B\u4EBA\u60C5\u5831\u306B\u3064\u3044\u3066\u3001\u500B\u4EBA\u60C5\u5831\u4FDD\u8B77\u6CD5\u305D\u306E\u4ED6\u306E\u6CD5\u4EE4\u306B\u57FA\u3065\u304D\u958B\u793A\u304C\u8A8D\u3081\u3089\u308C\u308B\u5834\u5408\u3092\u9664\u304F\u307B\u304B\u3001\u3042\u3089\u304B\u3058\u3081\u304A\u5BA2\u69D8\u306E\u540C\u610F\u3092\u5F97\u306A\u3044\u3067\u7B2C\u4E09\u8005\u306B\u63D0\u4F9B\u3057\u307E\u305B\u3093\u3002\u305F\u3060\u3057\u3001\u6B21\u306E\u5834\u5408\u306F\u3053\u306E\u9650\u308A\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002"), /* @__PURE__ */ React.createElement("ul", {
    className: "mb-8 list-inside list-disc"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "mb-1"
  }, "\u5F53\u30B5\u30A4\u30C8\u304C\u5229\u7528\u76EE\u7684\u306E\u9054\u6210\u306B\u5FC5\u8981\u306A\u7BC4\u56F2\u5185\u306B\u304A\u3044\u3066\u5229\u7528\u8005\u60C5\u5831\u306E\u53D6\u6271\u3044\u306E\u5168\u90E8\u307E\u305F\u306F\u4E00\u90E8\u3092\u59D4\u8A17\u3059\u308B\u5834\u5408"), /* @__PURE__ */ React.createElement("li", null, "\u5229\u7528\u8005\u60C5\u5831\u3092\u7279\u5B9A\u306E\u8005\u3068\u306E\u9593\u3067\u5171\u540C\u3057\u3066\u5229\u7528\u3059\u308B\u5834\u5408\u3067\u3042\u3063\u3066\u3001\u305D\u306E\u65E8\u306A\u3089\u3073\u306B\u5171\u540C\u3057\u3066\u5229\u7528\u3055\u308C\u308B\u5229\u7528\u8005\u60C5\u5831\u306E\u9805\u76EE\u3001\u5171\u540C\u3057\u3066\u5229\u7528\u3059\u308B\u8005\u306E\u7BC4\u56F2\u3001\u5229\u7528\u3059\u308B\u8005\u306E\u5229\u7528\u76EE\u7684\u304A\u3088\u3073\u5F53\u8A72\u5229\u7528\u8005\u60C5\u5831\u306E\u7BA1\u7406\u306B\u3064\u3044\u3066\u8CAC\u4EFB\u3092\u6709\u3059\u308B\u8005\u306E\u6C0F\u540D\u53C8\u306F\u540D\u79F0\u306B\u3064\u3044\u3066\u3001\u3042\u3089\u304B\u3058\u3081\u3054\u672C\u4EBA\u306B\u901A\u77E5\u3057\u3001\u53C8\u306F\u3054\u672C\u4EBA\u304C\u5BB9\u6613\u306B\u77E5\u308A\u5F97\u308B\u72B6\u614B\u306B\u7F6E\u3044\u3066\u3044\u308B\u3068\u304D"))), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-4"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "border-b border-hp text-xl text-tp sm:text-2xl"
  }, "\u500B\u4EBA\u60C5\u5831\u306E\u958B\u793A"), /* @__PURE__ */ React.createElement("p", {
    className: "mb-2"
  }, "(1) \u500B\u4EBA\u60C5\u5831\u4FDD\u8B77\u6CD5\u306E\u5B9A\u3081\u306B\u57FA\u3065\u304D\u500B\u4EBA\u60C5\u5831\u306E\u958B\u793A\u3092\u8ACB\u6C42\u3055\u308C\u305F\u3068\u304D\u306F\u3001\u304A\u5BA2\u69D8\u3054\u672C\u4EBA\u304B\u3089\u306E\u8ACB\u6C42\u3067\u3042\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u305F\u4E0A\u3067\u3001\u304A\u5BA2\u69D8\u306B\u5BFE\u3057\u3001\u9045\u6EDE\u306A\u304F\u500B\u4EBA\u60C5\u5831\u3092\u958B\u793A\u3057\u307E\u3059\uFF08\u5F53\u8A72\u500B\u4EBA\u60C5\u5831\u304C\u5B58\u5728\u3057\u306A\u3044\u3068\u304D\u306F\u305D\u306E\u65E8\u3092\u901A\u77E5\u3057\u307E\u3059\uFF09\u3002\u305F\u3060\u3057\u3001\u500B\u4EBA\u60C5\u5831\u4FDD\u8B77\u6CD5\u305D\u306E\u4ED6\u306E\u6CD5\u4EE4\u306B\u3088\u308A\u3001\u5F53\u793E\u304C\u958B\u793A\u306E\u7FA9\u52D9\u3092\u8CA0\u308F\u306A\u3044\u5834\u5408\u306F\u3001\u3053\u306E\u9650\u308A\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u307E\u305F\u3001\u500B\u4EBA\u60C5\u5831\u306B\u8A72\u5F53\u3057\u306A\u3044\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\u3001\u539F\u5247\u3068\u3057\u3066\u958B\u793A\u3044\u305F\u3057\u307E\u305B\u3093\u3002"), /* @__PURE__ */ React.createElement("p", {
    className: "mb-8"
  }, "(2) \u500B\u4EBA\u60C5\u5831\u306E\u958B\u793A\u306B\u3064\u304D\u307E\u3057\u3066\u306F\u3001\u624B\u6570\u6599\uFF08\uFF11\u4EF6\u3042\u305F\u308A\uFF11\uFF10\uFF10\uFF10\u5186\uFF09\u3092\u3044\u305F\u3060\u304D\u307E\u3059\u3002")), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-4"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "border-b border-hp text-xl text-tp sm:text-2xl"
  }, "\u514D\u8CAC\u4E8B\u9805"), /* @__PURE__ */ React.createElement("p", {
    className: "mb-2"
  }, "\u5F53\u30B5\u30A4\u30C8\u306B\u63B2\u8F09\u3059\u308B\u60C5\u5831\u306B\u3064\u3044\u3066\u3001\u3067\u304D\u308B\u9650\u308A\u6B63\u78BA\u306A\u60C5\u5831\u3092\u63D0\u4F9B\u3059\u308B\u3088\u3046\u306B\u52AA\u3081\u3066\u304A\u308A\u307E\u3059\u304C\u3001\u305D\u306E\u5185\u5BB9\u306E\u6B63\u78BA\u6027\u3001\u5B89\u5168\u6027\u3092\u4FDD\u8A3C\u3059\u308B\u3082\u306E\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002"), /* @__PURE__ */ React.createElement("p", {
    className: "mb-2"
  }, "\u307E\u305F\u3001\u5F53\u30B5\u30A4\u30C8\u304B\u3089\u30EA\u30F3\u30AF\u3059\u308B\u4ED6\u793E\u304C\u7BA1\u7406\u3059\u308B\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\uFF08\u4EE5\u4E0B\u300C\u30EA\u30F3\u30AF\u5148\u300D\uFF09\u306B\u304A\u3051\u308B\u500B\u4EBA\u60C5\u5831\u306E\u5B89\u5168\u78BA\u4FDD\u306B\u3064\u3044\u3066\u306F\u8CAC\u4EFB\u3092\u8CA0\u3046\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002\u30EA\u30F3\u30AF\u5148\u306E\u500B\u4EBA\u60C5\u5831\u4FDD\u8B77\u306B\u3064\u304D\u307E\u3057\u3066\u306F\u3001\u5F53\u8A72\u30EA\u30F3\u30AF\u5148\u306B\u304A\u3051\u308B\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC\u7B49\u3092\u304A\u5BA2\u3055\u307E\u3054\u81EA\u8EAB\u3067\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u307E\u3059\u3088\u3046\u304A\u9858\u3044\u3057\u307E\u3059\u3002"), /* @__PURE__ */ React.createElement("p", {
    className: "mb-8"
  }, "\u5F53\u30B5\u30A4\u30C8\u3067\u63B2\u8F09\u3057\u3066\u3044\u308B\u753B\u50CF\u306E\u8457\u4F5C\u6A29\u30FB\u8096\u50CF\u6A29\u7B49\u306F\u5404\u6A29\u5229\u6240\u6709\u8005\u306B\u5E30\u5C5E\u3057\u307E\u3059\u3002 \u8457\u4F5C\u6A29\u3084\u8096\u50CF\u6A29\u306B\u95A2\u3057\u3066\u554F\u984C\u304C\u3042\u308A\u307E\u3057\u305F\u3089\u3001\u304A\u554F\u3044\u5408\u308F\u305B\u30D5\u30A9\u30FC\u30E0\u3088\u308A\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002\u78BA\u8A8D\u5F8C\u3001\u8FC5\u901F\u306B\u5BFE\u5FDC\u3044\u305F\u3057\u307E\u3059\u3002")), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-4"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "border-b border-hp text-xl text-tp sm:text-2xl"
  }, "\u6539\u8A02"), /* @__PURE__ */ React.createElement("p", {
    className: "mb-2"
  }, "\u500B\u4EBA\u60C5\u5831\u306E\u53D6\u6271\u3044\u306B\u95A2\u3059\u308B\u904B\u7528\u72B6\u6CC1\u3092\u9069\u5B9C\u898B\u76F4\u3057\u3001\u7D99\u7D9A\u7684\u306A\u6539\u5584\u306B\u52AA\u3081\u308B\u3082\u306E\u3068\u3057\u3001\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u672C\u30DD\u30EA\u30B7\u30FC\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002"))), /* @__PURE__ */ React.createElement(Footer, {
    className: "bg-bs duration-500"
  }));
}

// route:/home/shoma/src/www_vercel/app/routes/admin.tsx
var admin_exports = {};
__export(admin_exports, {
  default: () => Admin
});
init_react();
function Admin() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "admin"
  }, /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("h1", null, "Admin")), /* @__PURE__ */ React.createElement("main", null, "..."));
}

// route:/home/shoma/src/www_vercel/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  meta: () => meta5
});
init_react();
var React19 = __toESM(require("react"));

// app/components/sections/home-title.tsx
init_react();
var React15 = __toESM(require("react"));
function HomeTitle() {
  return /* @__PURE__ */ React15.createElement("header", {
    className: "flex min-h-[76vh] px-[8vw] text-tp lg:px-[16vw]"
  }, /* @__PURE__ */ React15.createElement("div", {
    className: "container mx-auto flex flex-col items-start justify-center"
  }, /* @__PURE__ */ React15.createElement("h3", {
    className: " max-w-prose text-base font-semibold text-tp sm:text-xl md:text-2xl"
  }, "\u306F\u3058\u3081\u307E\u3057\u3066\u3002"), /* @__PURE__ */ React15.createElement("h2", {
    className: "py-2 text-3xl font-bold text-ts sm:text-5xl md:text-6xl"
  }, "Front-End Developer"), /* @__PURE__ */ React15.createElement("h1", {
    className: "py-6 text-5xl font-extrabold text-slate-600 dark:text-slate-100 sm:text-7xl md:text-8xl"
  }, "6+", /* @__PURE__ */ React15.createElement("span", {
    className: "ml-4 animate-pulse text-2xl text-hp md:ml-12 md:text-4xl"
  }, "\u30ED\u30AF\u30BF\u30B9")), /* @__PURE__ */ React15.createElement("p", {
    className: "mb-12 max-w-md py-6 text-base font-semibold text-ts md:text-lg"
  }, "I'm a front-end engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.")));
}

// app/components/sections/skills-section.tsx
init_react();
var React16 = __toESM(require("react"));
var import_accordion = require("@reach/accordion");
var import_clsx17 = __toESM(require("clsx"));
var import_outline4 = require("@heroicons/react/outline");

// app/components/icons/chevron-icon.tsx
init_react();
var import_clsx16 = __toESM(require("clsx"));
var rotationMap = {
  up: "rotate-180",
  right: "-rotate-90",
  down: "rotate-0",
  left: "rotate-90",
  "top-right": "-rotate-135"
};
function ChevronIcon({ direction, size = 24, className }) {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: (0, import_clsx16.default)(className, "transform", rotationMap[direction]),
    fill: "none",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19 9l-7 7-7-7"
  }));
}

// app/components/sections/skills-section.tsx
var LINKS2 = [
  {
    svg: /* @__PURE__ */ React16.createElement(import_outline4.DesktopComputerIcon, {
      className: "h-7 w-7"
    }),
    title: "Coding",
    paragraphs: [
      "HTML\u3001CSS\u3001JavaScript\uFF08TypeScript\uFF09",
      "React\u3001Vue.js\u3001Svelte\u306A\u3069\u306E\u591A\u69D8\u306A\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF",
      "\u53EF\u8AAD\u6027\u3084\u4FDD\u5B88\u6027\u306E\u9AD8\u3044\u8A2D\u8A08"
    ]
  },
  {
    svg: /* @__PURE__ */ React16.createElement(import_outline4.TerminalIcon, {
      className: "h-7 w-7"
    }),
    title: "UI/UX",
    paragraphs: [
      "\u3042\u3089\u3086\u308B\u30E6\u30FC\u30B6\u30FC\u3092\u8003\u616E\u3057\u305F\u3001\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3\u3092\u4E3B\u8EF8\u306B\u7F6E\u3044\u305F\u8A2D\u8A08",
      "\u30CB\u30FC\u30BA\u306B\u5408\u308F\u305B\u305F\u30D7\u30ED\u30C8\u30BF\u30A4\u30D7\u306E\u8A66\u7528\u3001\u307E\u305F\u305D\u306E\u30D5\u30A3\u30FC\u30C9\u30D0\u30C3\u30AF\u3084\u30C7\u30FC\u30BF\u304B\u3089\u306E\u6539\u5584"
    ]
  },
  {
    svg: /* @__PURE__ */ React16.createElement(import_outline4.BriefcaseIcon, {
      className: "h-7 w-7"
    }),
    title: "Business Branding",
    paragraphs: [
      "SEO\u306E\u5185\u90E8\u65BD\u7B56\u3092\u7406\u89E3\u3057\u305FURL\u8A2D\u8A08\u3001\u30DA\u30FC\u30B8\u30CD\u30FC\u30B7\u30E7\u30F3\u3001\u52D5\u7684\u306A\u30BF\u30B0\u4ED8\u3051",
      "\u30B3\u30F3\u30C6\u30F3\u30C4\u306B\u6CBF\u3063\u305F\u30AD\u30FC\u30EF\u30FC\u30C9\u9078\u5B9A\u3068\u30DA\u30FC\u30B8\u30B9\u30D4\u30FC\u30C9\u306E\u6539\u5584"
    ]
  },
  {
    svg: /* @__PURE__ */ React16.createElement(import_outline4.PencilAltIcon, {
      className: "h-7 w-7"
    }),
    title: "Content Writing",
    paragraphs: [
      "\u30D6\u30ED\u30B0\u306E\u30E9\u30A4\u30C6\u30A3\u30F3\u30B0",
      "Contentful\u3084wordpress\u7B49\u306ECMS\u304B\u3089\u3001\u81EA\u5206\u3067\u4E00\u5143\u7BA1\u7406\u51FA\u6765\u308B\u3088\u3046\u306B\u5909\u66F4\u3057\u307E\u3057\u305F\u3002"
    ]
  },
  {
    svg: /* @__PURE__ */ React16.createElement(import_outline4.TrendingUpIcon, {
      className: "h-7 w-7"
    }),
    title: "Trending",
    paragraphs: [
      "RSS\u3092\u99C6\u4F7F\u3057\u305F\u60C5\u5831\u53CE\u96C6",
      "\u76EE\u307E\u3050\u308B\u3057\u304F\u79FB\u308A\u5909\u308F\u308B\u30C8\u30EC\u30F3\u30C9\u306B\u5BFE\u5FDC\u3059\u308B\u305F\u3081\u306E\u30DF\u30CB\u30DE\u30E0\u306A\u8A2D\u8A08"
    ]
  },
  {
    svg: /* @__PURE__ */ React16.createElement(import_outline4.GlobeIcon, {
      className: "h-7 w-7"
    }),
    title: "Overseas Experience",
    paragraphs: [
      "\u30AB\u30CA\u30C0\u3067\u306E\u5C31\u696D\u7D4C\u9A13",
      "\u65E5\u672C\u8A9E\u30EA\u30BD\u30FC\u30B9\u306E\u5C11\u306A\u3044\u6D77\u5916\u30B5\u30FC\u30D3\u30B9\u306E\u65E9\u671F\u7FD2\u719F"
    ]
  }
];
function SkillsSection() {
  return /* @__PURE__ */ React16.createElement("section", {
    className: "bg-bs py-16 px-[5vw] duration-500"
  }, /* @__PURE__ */ React16.createElement("div", {
    className: "container mx-auto"
  }, /* @__PURE__ */ React16.createElement("h2", {
    className: "py-4 text-center text-3xl font-bold text-tp sm:text-4xl"
  }, "My Skills"), /* @__PURE__ */ React16.createElement("div", {
    className: "py-16"
  }, /* @__PURE__ */ React16.createElement(Desktop2, null), /* @__PURE__ */ React16.createElement(Mobile, null))));
}
function Desktop2() {
  return /* @__PURE__ */ React16.createElement("div", {
    className: "hidden gap-12 sm:grid md:grid-cols-2 lg:grid-cols-3"
  }, LINKS2.map((link, index) => /* @__PURE__ */ React16.createElement("div", {
    className: "rounded bg-bp px-8 py-10 ring-2 ring-hp ring-offset-4 ring-offset-bs",
    key: index
  }, /* @__PURE__ */ React16.createElement("h3", {
    className: "mb-4 flex gap-4 text-xl text-tp"
  }, link.svg, link.title), /* @__PURE__ */ React16.createElement("ul", {
    className: "list-inside list-disc space-y-2 px-2 text-base text-ts"
  }, link.paragraphs.map((paragraph, index2) => /* @__PURE__ */ React16.createElement("li", {
    key: index2
  }, paragraph))))));
}
function Mobile() {
  const [activeItem, setActiveItem] = React16.useState(0);
  return /* @__PURE__ */ React16.createElement(import_accordion.Accordion, {
    index: activeItem,
    onChange: (index) => setActiveItem(index),
    className: "flex flex-col space-y-6 sm:hidden"
  }, LINKS2.map((link, index) => /* @__PURE__ */ React16.createElement(import_accordion.AccordionItem, {
    className: "space-y-4",
    key: index
  }, /* @__PURE__ */ React16.createElement(ArrowButton, {
    active: activeItem === index
  }, link.svg, link.title), /* @__PURE__ */ React16.createElement(import_accordion.AccordionPanel, {
    as: "ul",
    className: "list-inside list-disc space-y-2 p-2 text-base text-ts"
  }, link.paragraphs.map((paragraph, index2) => /* @__PURE__ */ React16.createElement("li", {
    key: index2
  }, paragraph))))));
}
function ArrowButton({ children, active }) {
  return /* @__PURE__ */ React16.createElement(import_accordion.AccordionButton, {
    className: (0, import_clsx17.default)("flex w-full justify-between rounded-sm bg-bp px-6 py-3 text-lg text-tp outline-none focus:text-hp", { "hover:text-hp": !active })
  }, /* @__PURE__ */ React16.createElement("h4", {
    className: "inline-flex gap-2"
  }, children), /* @__PURE__ */ React16.createElement(ChevronIcon, {
    direction: active ? "up" : "down",
    size: 18,
    className: "self-center ease-out"
  }));
}

// app/components/sections/tools-section.tsx
init_react();
var React17 = __toESM(require("react"));
var import_tabs = require("@reach/tabs");
var import_framer_motion3 = require("framer-motion");
var import_accordion2 = require("@reach/accordion");
var import_clsx25 = __toESM(require("clsx"));
var import_outline5 = require("@heroicons/react/outline");

// app/components/icons/js-icon.tsx
init_react();
var import_clsx18 = __toESM(require("clsx"));
function JSIcon({ size = 24, className }) {
  return /* @__PURE__ */ React.createElement("svg", {
    className: (0, import_clsx18.default)(className),
    width: size,
    height: size,
    viewBox: "0 0 256 256",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": "js icon"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M0 0h256v256H0V0Z",
    fill: "#F7DF1E"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m67.312 213.932 19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"
  }));
}

// app/components/icons/python-icon.tsx
init_react();
var import_clsx19 = __toESM(require("clsx"));
function PythonIcon({ size = 24, className }) {
  return /* @__PURE__ */ React.createElement("svg", {
    className: (0, import_clsx19.default)(className),
    width: size,
    height: size,
    viewBox: "0 0 256 255",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": "python icon"
  }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    x1: "12.959%",
    y1: "12.039%",
    x2: "79.639%",
    y2: "78.201%",
    id: "a"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#387EB8",
    offset: "0%"
  }), /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#366994",
    offset: "100%"
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    x1: "19.128%",
    y1: "20.579%",
    x2: "90.742%",
    y2: "88.429%",
    id: "b"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#FFE052",
    offset: "0%"
  }), /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#FFC331",
    offset: "100%"
  }))), /* @__PURE__ */ React.createElement("path", {
    d: "M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072ZM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13Z",
    fill: "url(#a)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897Zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13Z",
    fill: "url(#b)"
  }));
}

// app/components/icons/php-icon.tsx
init_react();
var import_clsx20 = __toESM(require("clsx"));
function PHPIcon({ size = 24, className }) {
  return /* @__PURE__ */ React.createElement("svg", {
    className: (0, import_clsx20.default)(className),
    width: size,
    height: size,
    viewBox: "0 0 256 135",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": "php icon"
  }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("radialGradient", {
    id: "a",
    cx: ".837",
    cy: "-125.811",
    r: "363.057",
    gradientTransform: "matrix(.463 0 0 .463 76.464 81.918)",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    offset: "0",
    stopColor: "#fff"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: ".5",
    stopColor: "#4c6b97"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#231f20"
  }))), /* @__PURE__ */ React.createElement("ellipse", {
    fill: "url(#a)",
    cx: "128",
    cy: "67.3",
    rx: "128",
    ry: "67.3"
  }), /* @__PURE__ */ React.createElement("ellipse", {
    fill: "#6181B6",
    cx: "128",
    cy: "67.3",
    rx: "123",
    ry: "62.3"
  }), /* @__PURE__ */ React.createElement("g", {
    fill: "#FFF"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m152.9 87.5 6.1-31.4c1.4-7.1.2-12.4-3.4-15.7-3.5-3.2-9.5-4.8-18.3-4.8h-10.6l3-15.6c.1-.6 0-1.2-.4-1.7s-.9-.7-1.5-.7h-14.6c-1 0-1.8.7-2 1.6l-6.5 33.3c-.6-3.8-2-7-4.4-9.6-4.3-4.9-11-7.4-20.1-7.4H52.1c-1 0-1.8.7-2 1.6L37 104.7c-.1.6 0 1.2.4 1.7s.9.7 1.5.7h14.7c1 0 1.8-.7 2-1.6l3.2-16.3h10.9c5.7 0 10.6-.6 14.3-1.8 3.9-1.3 7.4-3.4 10.5-6.3 2.5-2.3 4.6-4.9 6.2-7.7l-2.6 13.5c-.1.6 0 1.2.4 1.7s.9.7 1.5.7h14.6c1 0 1.8-.7 2-1.6l7.2-37h10c4.3 0 5.5.8 5.9 1.2.3.3.9 1.5.2 5.2L134.1 87c-.1.6 0 1.2.4 1.7s.9.7 1.5.7h15c.9-.3 1.7-1 1.9-1.9zm-67.6-26c-.9 4.7-2.6 8.1-5.1 10-2.5 1.9-6.6 2.9-12 2.9h-6.5l4.7-24.2h8.4c6.2 0 8.7 1.3 9.7 2.4 1.3 1.6 1.6 4.7.8 8.9zM215.3 42.9c-4.3-4.9-11-7.4-20.1-7.4h-28.3c-1 0-1.8.7-2 1.6l-13.1 67.5c-.1.6 0 1.2.4 1.7s.9.7 1.5.7h14.7c1 0 1.8-.7 2-1.6l3.2-16.3h10.9c5.7 0 10.6-.6 14.3-1.8 3.9-1.3 7.4-3.4 10.5-6.3 2.6-2.4 4.8-5.1 6.4-8 1.6-2.9 2.8-6.1 3.5-9.6 1.7-8.7.4-15.5-3.9-20.5zM200 61.5c-.9 4.7-2.6 8.1-5.1 10-2.5 1.9-6.6 2.9-12 2.9h-6.5l4.7-24.2h8.4c6.2 0 8.7 1.3 9.7 2.4 1.4 1.6 1.7 4.7.8 8.9z"
  })), /* @__PURE__ */ React.createElement("g", {
    fill: "#000004"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M74.8 48.2c5.6 0 9.3 1 11.2 3.1 1.9 2.1 2.3 5.6 1.3 10.6-1 5.2-3 9-5.9 11.2-2.9 2.2-7.3 3.3-13.2 3.3h-8.9l5.5-28.2h10zM39 105h14.7l3.5-17.9h12.6c5.6 0 10.1-.6 13.7-1.8 3.6-1.2 6.8-3.1 9.8-5.9 2.5-2.3 4.5-4.8 6-7.5s2.6-5.7 3.2-9c1.6-8 .4-14.2-3.5-18.7s-10.1-6.7-18.6-6.7H52.1L39 105zM113.3 19.6h14.6l-3.5 17.9h13c8.2 0 13.8 1.4 16.9 4.3 3.1 2.9 4 7.5 2.8 13.9L151 87.1h-14.8l5.8-29.9c.7-3.4.4-5.7-.7-6.9-1.1-1.2-3.6-1.9-7.3-1.9h-11.7l-7.5 38.7h-14.6l13.1-67.5zM189.5 48.2c5.6 0 9.3 1 11.2 3.1 1.9 2.1 2.3 5.6 1.3 10.6-1 5.2-3 9-5.9 11.2-2.9 2.2-7.3 3.3-13.2 3.3H174l5.5-28.2h10zM153.7 105h14.7l3.5-17.9h12.6c5.6 0 10.1-.6 13.7-1.8 3.6-1.2 6.8-3.1 9.8-5.9 2.5-2.3 4.5-4.8 6-7.5s2.6-5.7 3.2-9c1.6-8 .4-14.2-3.5-18.7s-10.1-6.7-18.6-6.7h-28.3L153.7 105z"
  })));
}

// app/components/icons/react-icon.tsx
init_react();
var import_clsx21 = __toESM(require("clsx"));
function ReactIcon({ size = 24, className }) {
  return /* @__PURE__ */ React.createElement("svg", {
    className: (0, import_clsx21.default)(className),
    width: size,
    height: size,
    viewBox: "0 0 256 228",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": "react icon"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z",
    fill: "#00D8FF"
  }));
}

// app/components/icons/vue-icon.tsx
init_react();
var import_clsx22 = __toESM(require("clsx"));
function VueIcon({ size = 24, className }) {
  return /* @__PURE__ */ React.createElement("svg", {
    className: (0, import_clsx22.default)(className),
    width: size,
    height: size,
    viewBox: "0 0 256 221",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": "vue icon"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z",
    fill: "#41B883"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z",
    fill: "#41B883"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z",
    fill: "#35495E"
  }));
}

// app/components/icons/slack-icon.tsx
init_react();
var import_clsx23 = __toESM(require("clsx"));
function SlackIcon({ size = 24, className }) {
  return /* @__PURE__ */ React.createElement("svg", {
    className: (0, import_clsx23.default)(className),
    width: size,
    height: size,
    viewBox: "0 0 256 256",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": "slack icon"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M53.841 161.32c0 14.832-11.987 26.82-26.819 26.82-14.832 0-26.819-11.988-26.819-26.82 0-14.831 11.987-26.818 26.82-26.818H53.84v26.819Zm13.41 0c0-14.831 11.987-26.818 26.819-26.818 14.832 0 26.819 11.987 26.819 26.819v67.047c0 14.832-11.987 26.82-26.82 26.82-14.83 0-26.818-11.988-26.818-26.82v-67.047Z",
    fill: "#E01E5A"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M94.07 53.638c-14.832 0-26.82-11.987-26.82-26.819C67.25 11.987 79.239 0 94.07 0s26.819 11.987 26.819 26.819v26.82h-26.82Zm0 13.613c14.832 0 26.819 11.987 26.819 26.819 0 14.832-11.987 26.819-26.82 26.819H26.82C11.987 120.889 0 108.902 0 94.069c0-14.83 11.987-26.818 26.819-26.818h67.25Z",
    fill: "#36C5F0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M201.55 94.07c0-14.832 11.987-26.82 26.818-26.82 14.832 0 26.82 11.988 26.82 26.82s-11.988 26.819-26.82 26.819H201.55v-26.82Zm-13.41 0c0 14.832-11.988 26.819-26.82 26.819-14.831 0-26.818-11.987-26.818-26.82V26.82C134.502 11.987 146.489 0 161.32 0c14.831 0 26.819 11.987 26.819 26.819v67.25Z",
    fill: "#2EB67D"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M161.32 201.55c14.832 0 26.82 11.987 26.82 26.818 0 14.832-11.988 26.82-26.82 26.82-14.831 0-26.818-11.988-26.818-26.82V201.55h26.819Zm0-13.41c-14.831 0-26.818-11.988-26.818-26.82 0-14.831 11.987-26.818 26.819-26.818h67.25c14.832 0 26.82 11.987 26.82 26.819 0 14.831-11.988 26.819-26.82 26.819h-67.25Z",
    fill: "#ECB22E"
  }));
}

// app/components/icons/figma-icon.tsx
init_react();
var import_clsx24 = __toESM(require("clsx"));
function FigmaIcon({ size = 24, className }) {
  return /* @__PURE__ */ React.createElement("svg", {
    className: (0, import_clsx24.default)(className),
    width: size,
    height: size,
    viewBox: "0 0 256 384",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": "figma icon"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64Z",
    fill: "#0ACF83"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64Z",
    fill: "#A259FF"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64Z",
    fill: "#F24E1E"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64V0Z",
    fill: "#FF7262"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64 28.672-64 64-64 64 28.672 64 64Z",
    fill: "#1ABCFE"
  }));
}

// app/components/sections/tools-section.tsx
var TAB_DATA = [
  {
    label: "Language",
    svg: /* @__PURE__ */ React17.createElement(import_outline5.CodeIcon, {
      className: "h-7 w-7"
    }),
    tool: [
      {
        name: "JavaScript",
        svg: /* @__PURE__ */ React17.createElement(ExternalLink, {
          href: "https://developer.mozilla.org/ja/docs/Web/JavaScript",
          className: "ring-hp focus:outline-none focus:ring-2"
        }, /* @__PURE__ */ React17.createElement(JSIcon, {
          className: "mx-auto h-8 w-8 sm:h-24 sm:w-24"
        })),
        link: "https://developer.mozilla.org/ja/docs/Web/JavaScript"
      },
      {
        name: "Python",
        svg: /* @__PURE__ */ React17.createElement(ExternalLink, {
          href: "https://www.python.org/",
          className: "ring-hp focus:outline-none focus:ring-2"
        }, /* @__PURE__ */ React17.createElement(PythonIcon, {
          className: "mx-auto h-8 w-8 sm:h-24 sm:w-24"
        })),
        link: "https://www.python.org/"
      },
      {
        name: "PHP",
        svg: /* @__PURE__ */ React17.createElement(ExternalLink, {
          href: "https://www.php.net/",
          className: "ring-hp focus:outline-none focus:ring-2"
        }, /* @__PURE__ */ React17.createElement(PHPIcon, {
          className: "mx-auto h-8 w-8 sm:h-24 sm:w-24"
        })),
        link: "https://www.php.net/"
      }
    ]
  },
  {
    label: "Framework",
    svg: /* @__PURE__ */ React17.createElement(import_outline5.ArchiveIcon, {
      className: "h-7 w-7"
    }),
    tool: [
      {
        name: "React",
        svg: /* @__PURE__ */ React17.createElement(ExternalLink, {
          href: "https://reactjs.org/",
          className: "ring-hp focus:outline-none focus:ring-2"
        }, /* @__PURE__ */ React17.createElement(ReactIcon, {
          className: "mx-auto h-8 w-8 sm:h-24 sm:w-24"
        })),
        link: "https://reactjs.org/"
      },
      {
        name: "Vue.js",
        svg: /* @__PURE__ */ React17.createElement(ExternalLink, {
          href: "https://vuejs.org/",
          className: "ring-hp focus:outline-none focus:ring-2"
        }, /* @__PURE__ */ React17.createElement(VueIcon, {
          className: "mx-auto h-8 w-8 sm:h-24 sm:w-24"
        })),
        link: "https://vuejs.org/"
      }
    ]
  },
  {
    label: "Design",
    svg: /* @__PURE__ */ React17.createElement(import_outline5.ColorSwatchIcon, {
      className: "h-7 w-7"
    }),
    tool: [
      {
        name: "Figma",
        svg: /* @__PURE__ */ React17.createElement(ExternalLink, {
          href: "https://www.figma.com/",
          className: "ring-hp focus:outline-none focus:ring-2"
        }, /* @__PURE__ */ React17.createElement(FigmaIcon, {
          className: "mx-auto h-8 w-8 sm:h-24 sm:w-24"
        })),
        link: "https://www.figma.com/"
      }
    ]
  },
  {
    label: "Chat",
    svg: /* @__PURE__ */ React17.createElement(import_outline5.ChatAltIcon, {
      className: "h-7 w-7"
    }),
    tool: [
      {
        name: "slack",
        svg: /* @__PURE__ */ React17.createElement(ExternalLink, {
          href: "https://slack.com/",
          className: "ring-hp focus:outline-none focus:ring-2"
        }, /* @__PURE__ */ React17.createElement(SlackIcon, {
          className: "mx-auto h-8 w-8 sm:h-24 sm:w-24"
        })),
        link: "https://slack.com/"
      }
    ]
  }
];
function ToolsSection() {
  return /* @__PURE__ */ React17.createElement("section", {
    className: "py-16 px-[5vw]"
  }, /* @__PURE__ */ React17.createElement("div", {
    className: "container mx-auto"
  }, /* @__PURE__ */ React17.createElement("h2", {
    className: "py-4 text-center text-3xl font-bold text-tp sm:text-4xl"
  }, "My Tools"), /* @__PURE__ */ React17.createElement("div", {
    className: "py-16"
  }, /* @__PURE__ */ React17.createElement(Desktop3, null), /* @__PURE__ */ React17.createElement(Mobile2, null))));
}
function Desktop3() {
  return /* @__PURE__ */ React17.createElement(import_tabs.Tabs, {
    className: "hidden flex-col items-center justify-center space-y-8 sm:flex",
    orientation: import_tabs.TabsOrientation.Horizontal
  }, /* @__PURE__ */ React17.createElement(import_tabs.TabList, {
    className: "group flex gap-2 rounded bg-bs p-2"
  }, TAB_DATA.map((tab, index) => /* @__PURE__ */ React17.createElement(import_tabs.Tab, {
    className: "flex w-36 items-center justify-center gap-1 rounded-2xl bg-transparent py-2 text-lg text-tp ring-tp hover:bg-bp focus:outline-none focus:ring-2",
    key: index
  }, tab.svg, tab.label))), /* @__PURE__ */ React17.createElement(import_tabs.TabPanels, {
    className: "w-full text-ts"
  }, TAB_DATA.map((tab, index) => /* @__PURE__ */ React17.createElement(import_tabs.TabPanel, {
    key: index,
    className: "rounded bg-bs ring-hp ring-offset-4 ring-offset-bp duration-300 focus:outline-none focus:ring-2"
  }, /* @__PURE__ */ React17.createElement(import_framer_motion3.motion.div, {
    animate: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 20 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.15 },
    className: "flex items-center justify-center"
  }, tab.tool.map((tool, index2) => /* @__PURE__ */ React17.createElement("div", {
    key: index2,
    className: "p-6"
  }, tool.svg, /* @__PURE__ */ React17.createElement("h4", {
    className: "text-center"
  }, tool.name))))))));
}
function Mobile2() {
  const [activeItem, setActiveItem] = React17.useState(0);
  return /* @__PURE__ */ React17.createElement(import_accordion2.Accordion, {
    index: activeItem,
    onChange: (index) => setActiveItem(index),
    className: "flex flex-col space-y-6 sm:hidden"
  }, TAB_DATA.map((tab, index) => /* @__PURE__ */ React17.createElement(import_accordion2.AccordionItem, {
    className: "space-y-4",
    key: index
  }, /* @__PURE__ */ React17.createElement(ArrowButton2, {
    active: activeItem === index
  }, tab.svg, tab.label), /* @__PURE__ */ React17.createElement(import_accordion2.AccordionPanel, {
    as: "ul",
    className: "list-inside list-disc space-y-2 p-2 text-base text-ts"
  }, tab.tool.map((tool, index2) => /* @__PURE__ */ React17.createElement(ExternalLink, {
    href: tool.link,
    key: index2,
    className: "hover:text-hp focus:text-hp focus:outline-none"
  }, /* @__PURE__ */ React17.createElement("li", null, tool.name)))))));
}
function ArrowButton2({ children, active }) {
  return /* @__PURE__ */ React17.createElement(import_accordion2.AccordionButton, {
    className: (0, import_clsx25.default)("flex w-full justify-between rounded-sm bg-bs px-6 py-3 text-lg text-tp outline-none focus:text-hp", { "hover:text-hp": !active })
  }, /* @__PURE__ */ React17.createElement("h4", {
    className: "inline-flex gap-2"
  }, children), /* @__PURE__ */ React17.createElement(ChevronIcon, {
    direction: active ? "up" : "down",
    size: 18,
    className: "self-center ease-out"
  }));
}

// app/components/sections/contact-section.tsx
init_react();
var React18 = __toESM(require("react"));
var import_remix10 = __toESM(require_remix());
var import_clsx26 = __toESM(require("clsx"));
function ContactSection({ className }) {
  return /* @__PURE__ */ React18.createElement("section", {
    className: (0, import_clsx26.default)(className, "bg-bs py-16 text-center text-ts duration-500")
  }, /* @__PURE__ */ React18.createElement("div", {
    className: "container mx-auto"
  }, /* @__PURE__ */ React18.createElement("div", {
    className: "flex flex-col justify-center"
  }, /* @__PURE__ */ React18.createElement("h2", {
    className: "py-4 text-3xl font-bold text-tp sm:text-4xl"
  }, "Get In Touch"), /* @__PURE__ */ React18.createElement("p", {
    className: "mb-8 text-sm sm:text-base lg:text-lg"
  }, "\u3054\u8CEA\u554F\u3060\u3051\u3067\u3082\u69CB\u3044\u307E\u305B\u3093\u3002\u9023\u7D61\u3092\u304A\u5F85\u3061\u3057\u3066\u3044\u307E\u3059\u3002"), /* @__PURE__ */ React18.createElement(import_remix10.Link, {
    className: "btn my-8 mx-auto bg-hp text-base text-tp shadow transition duration-300 hover:-translate-y-0.5 hover:border hover:bg-transparent hover:text-hp hover:shadow-inner focus:-translate-y-0.5 focus:border focus:bg-transparent focus:text-hp focus:shadow-inner focus:outline-none sm:text-lg",
    to: "/contact"
  }, "\u304A\u554F\u3044\u5408\u308F\u305B"))));
}

// route:/home/shoma/src/www_vercel/app/routes/index.tsx
var meta5 = ({ parentsData }) => {
  const { requestInfo } = parentsData.root;
  const description = "\u306F\u3058\u3081\u307E\u3057\u3066\u3002";
  return __spreadValues({}, getMeta({
    origin: requestInfo.origin,
    url: getUrl(requestInfo),
    description
  }));
};
function Index() {
  return /* @__PURE__ */ React19.createElement("div", {
    className: "bg-bp duration-500"
  }, /* @__PURE__ */ React19.createElement(Navbar, null), /* @__PURE__ */ React19.createElement("main", null, /* @__PURE__ */ React19.createElement(HomeTitle, null), /* @__PURE__ */ React19.createElement(SkillsSection, null), /* @__PURE__ */ React19.createElement(ToolsSection, null), /* @__PURE__ */ React19.createElement(ContactSection, null)), /* @__PURE__ */ React19.createElement(Footer, null));
}

// route:/home/shoma/src/www_vercel/app/routes/works.tsx
var works_exports = {};
__export(works_exports, {
  default: () => Works,
  meta: () => meta6
});
init_react();
var React20 = __toESM(require("react"));
var meta6 = ({ parentsData }) => {
  const { requestInfo } = parentsData.root;
  const title = "Works | 6+";
  return __spreadValues({}, getMeta({
    origin: requestInfo.origin,
    url: getUrl(requestInfo),
    title
  }));
};
function Works() {
  return /* @__PURE__ */ React20.createElement("div", {
    className: "relative h-screen bg-bp duration-500"
  }, /* @__PURE__ */ React20.createElement(Navbar, null), /* @__PURE__ */ React20.createElement("h2", {
    className: "absolute top-1/2 w-full text-center text-lg text-tp sm:text-2xl lg:text-4xl"
  }, "\u6E96\u5099\u4E2D\u3067\u3059\u3002\u4ECA\u3057\u3070\u3089\u304F\u304A\u5F85\u3061\u304F\u3060\u3055\u3044\u3002"));
}

// route:/home/shoma/src/www_vercel/app/routes/blog.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Blog,
  loader: () => loader4,
  meta: () => meta7
});
init_react();
var React23 = __toESM(require("react"));
var import_remix11 = __toESM(require_remix());
var import_clsx28 = __toESM(require("clsx"));
var import_framer_motion5 = require("framer-motion");
var import_outline6 = require("@heroicons/react/outline");

// app/utils/search.ts
init_react();
var import_match_sorter = require("match-sorter");
function filterPosts(posts, searchString) {
  if (!searchString)
    return posts;
  const options = {
    keys: [
      {
        key: "title",
        threshold: import_match_sorter.rankings.CONTAINS
      },
      {
        key: "categories",
        threshold: import_match_sorter.rankings.CONTAINS,
        maxRanking: import_match_sorter.rankings.CONTAINS
      },
      {
        key: "meta.keywords",
        threshold: import_match_sorter.rankings.CONTAINS,
        maxRanking: import_match_sorter.rankings.CONTAINS
      },
      {
        key: "description",
        threshold: import_match_sorter.rankings.CONTAINS,
        maxRanking: import_match_sorter.rankings.CONTAINS
      }
    ]
  };
  const allResults = (0, import_match_sorter.matchSorter)(posts, searchString, options);
  const searches = new Set(searchString.split(" "));
  if (searches.size < 2) {
    return allResults;
  }
  const [firstWord, ...restWords] = searches.values();
  if (!firstWord) {
    return [];
  }
  const individualWordOptions = __spreadProps(__spreadValues({}, options), {
    keys: options.keys.map((key) => {
      return __spreadProps(__spreadValues({}, key), {
        maxRanking: import_match_sorter.rankings.CASE_SENSITIVE_EQUAL,
        threshold: import_match_sorter.rankings.WORD_STARTS_WITH
      });
    })
  });
  let individualWordResults = (0, import_match_sorter.matchSorter)(posts, firstWord, individualWordOptions);
  for (const word of restWords) {
    const searchResult = (0, import_match_sorter.matchSorter)(individualWordResults, word, individualWordOptions);
    individualWordResults = individualWordResults.filter((r) => searchResult.includes(r));
  }
  return Array.from(/* @__PURE__ */ new Set([...allResults, ...individualWordResults]));
}

// app/components/card.tsx
init_react();
var React21 = __toESM(require("react"));
var import_framer_motion4 = require("framer-motion");
var import_react9 = require("@remix-run/react");
var postVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] }
  },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};
function Card({ frontmatter }) {
  var _a;
  return /* @__PURE__ */ React21.createElement(import_framer_motion4.motion.article, {
    variants: postVariants,
    layoutId: `card-${frontmatter.slug}`
  }, /* @__PURE__ */ React21.createElement(import_react9.Link, {
    to: `/blog/${frontmatter.slug}`,
    prefetch: "intent",
    className: "group flex w-full focus:outline-none md:block md:flex-col"
  }, /* @__PURE__ */ React21.createElement(import_framer_motion4.motion.div, {
    className: "relative hidden rounded shadow-md ring-hp ring-offset-4 ring-offset-slate-200 transition duration-300 group-hover:ring-2 group-focus:ring-2 group-focus:ring-hp dark:ring-offset-slate-800 md:mb-6 md:block",
    layoutId: `image-container-${frontmatter.slug}`
  }, frontmatter.bannerImgId ? /* @__PURE__ */ React21.createElement(PostImage, {
    className: "rounded",
    page: "blog",
    imgId: frontmatter.bannerImgId,
    alt: frontmatter.bannerAlt ?? frontmatter.title
  }) : /* @__PURE__ */ React21.createElement("div", {
    className: "aspect-none rounded bg-gradient-to-br from-slate-600 to-slate-500 md:aspect-h-9 md:aspect-w-16"
  }, /* @__PURE__ */ React21.createElement("span", {
    className: "flex items-center justify-center"
  }, "No Image"))), /* @__PURE__ */ React21.createElement("div", {
    className: "w-full rounded bg-bp p-8 shadow ring-hp ring-offset-4 ring-offset-slate-200 duration-300 group-hover:ring-2 group-focus:ring-2 dark:ring-offset-slate-800 sm:p-12 md:bg-transparent md:p-0 md:shadow-none md:ring-transparent"
  }, /* @__PURE__ */ React21.createElement("div", null, /* @__PURE__ */ React21.createElement("h3", {
    className: "mb-4 text-2xl font-bold tracking-tight text-slate-900 line-clamp-2 dark:text-slate-200"
  }, frontmatter.title), /* @__PURE__ */ React21.createElement("p", {
    className: "mb-6 text-base text-slate-800 line-clamp-3 dark:text-slate-300"
  }, frontmatter.description)), /* @__PURE__ */ React21.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ React21.createElement("div", {
    className: "flex items-center space-x-2"
  }, (_a = frontmatter.categories) == null ? void 0 : _a.map((category) => {
    return /* @__PURE__ */ React21.createElement("span", {
      key: category,
      className: "badge rounded-full bg-slate-300 text-black"
    }, category);
  })), /* @__PURE__ */ React21.createElement("dl", {
    className: ""
  }, /* @__PURE__ */ React21.createElement("dt", {
    className: "sr-only"
  }, "Date"), /* @__PURE__ */ React21.createElement("dd", {
    className: "text-right text-sm leading-6 text-slate-700 dark:text-slate-400 lg:whitespace-nowrap"
  }, /* @__PURE__ */ React21.createElement("time", {
    dateTime: frontmatter.updated || frontmatter.published
  }, frontmatter.updated ? `\u66F4\u65B0\u65E5: ${formatDate(frontmatter.updated, true)}` : frontmatter.published ? `\u516C\u958B\u65E5: ${formatDate(frontmatter.published, true)}` : null)))))));
}

// app/components/tag.tsx
init_react();
var import_clsx27 = __toESM(require("clsx"));
var React22 = __toESM(require("react"));
var import_checkbox = require("@reach/checkbox");
function Tag({ tag, selected, onClick, disabled }) {
  return /* @__PURE__ */ React22.createElement(import_checkbox.CustomCheckboxContainer, {
    as: "label",
    checked: selected,
    onChange: onClick,
    className: (0, import_clsx27.default)("relative block h-auto w-auto cursor-pointer py-1 pl-2 text-sm focus:shadow-none", {
      "text-tp": !selected,
      "text-hp": selected,
      "hover:opacity-50": !disabled,
      "line-through opacity-25": disabled
    }),
    disabled
  }, /* @__PURE__ */ React22.createElement(import_checkbox.CustomCheckboxInput, {
    checked: selected,
    value: tag,
    className: "sr-only"
  }), /* @__PURE__ */ React22.createElement("span", null, tag));
}

// route:/home/shoma/src/www_vercel/app/routes/blog.tsx
var meta7 = () => {
  return {
    title: "Blog | 6+",
    description: "Remix jokes app. Learn Remix and laugh at the same time!"
  };
};
var loader4 = async ({ request }) => {
  const posts = await getBlogPages("blog");
  const tags = /* @__PURE__ */ new Set();
  for (const post of posts) {
    for (const category of post.categories ?? []) {
      tags.add(category);
    }
  }
  const data = {
    posts,
    tags: Array.from(tags)
  };
  return (0, import_remix11.json)(data, {
    headers: {
      "Cache-Control": "private, max-age=3600",
      Vary: "Cookie"
    }
  });
};
function Blog() {
  const PAGE_SIZE = 6;
  const queryKey = "q";
  const [searchParams] = (0, import_remix11.useSearchParams)();
  const searchInputRef = React23.useRef(null);
  const ignoreInputKeyUp = React23.useRef(false);
  const [queryValue, setQuery] = React23.useState(() => {
    return searchParams.get(queryKey) ?? "";
  });
  const query = queryValue.trim();
  React23.useEffect(() => {
    const currentSearchParams = new URLSearchParams(window.location.search);
    const oldQuery = currentSearchParams.get(queryKey) ?? "";
    if (queryValue === oldQuery)
      return;
    if (queryValue) {
      currentSearchParams.set(queryKey, queryValue);
    } else {
      currentSearchParams.delete(queryKey);
    }
    const newUrl = [window.location.pathname, currentSearchParams.toString()].filter(Boolean).join("?");
    window.history.replaceState(null, "", newUrl);
  }, [queryKey, queryValue]);
  const data = (0, import_remix11.useLoaderData)();
  const regularQuery = query;
  const matchingPosts = React23.useMemo(() => {
    const filteredPosts = data.posts;
    return filterPosts(filteredPosts, regularQuery);
  }, [data.posts, query, regularQuery]);
  const initialIndexToShow = PAGE_SIZE;
  const [indexToShow, setIndexToShow] = React23.useState(initialIndexToShow);
  React23.useEffect(() => {
    setIndexToShow(initialIndexToShow);
  }, [query]);
  function toggleTag(tag) {
    setQuery((q) => {
      const expression = new RegExp(tag, "ig");
      const newQuery = expression.test(q) ? q.replace(expression, "") : `${q} ${tag}`;
      return newQuery.replace(/\s+/g, " ").trim();
    });
  }
  const isSearching = query.length > 0;
  const posts = isSearching ? matchingPosts.slice(0, indexToShow) : matchingPosts.slice(0, indexToShow);
  const hasMorePosts = isSearching ? indexToShow < matchingPosts.length : indexToShow < matchingPosts.length;
  const visibleTags = isSearching ? new Set(matchingPosts.flatMap((post) => post.categories).filter(Boolean)) : new Set(data.tags);
  return /* @__PURE__ */ React23.createElement(React23.Fragment, null, /* @__PURE__ */ React23.createElement("div", {
    className: "bg-slate-200 px-[5vw] py-4 duration-500 dark:bg-slate-800 sm:py-8 lg:hidden"
  }, /* @__PURE__ */ React23.createElement("div", {
    className: "flex max-w-screen-2xl items-center justify-between text-tp"
  }, /* @__PURE__ */ React23.createElement("form", {
    action: "/blog",
    className: "",
    method: "GET",
    onSubmit: (e) => e.preventDefault()
  }, /* @__PURE__ */ React23.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ React23.createElement("button", {
    title: query === "" ? "Search" : "Clear search",
    type: "button",
    onClick: () => {
      var _a;
      setQuery("");
      ignoreInputKeyUp.current = true;
      (_a = searchInputRef.current) == null ? void 0 : _a.focus();
    },
    onKeyDown: () => {
      ignoreInputKeyUp.current = true;
    },
    onKeyUp: () => {
      ignoreInputKeyUp.current = false;
    },
    className: (0, import_clsx28.default)("absolute inset-y-1 left-1 flex h-12 w-12 items-center justify-center outline-hp focus:outline-dotted", {
      "cursor-pointer": query !== "",
      "cursor-default": query === ""
    })
  }, /* @__PURE__ */ React23.createElement(import_outline6.SearchIcon, {
    className: "h-4 w-4 text-ts"
  })), /* @__PURE__ */ React23.createElement("input", {
    ref: searchInputRef,
    type: "search",
    value: queryValue,
    onChange: (e) => setQuery(e.currentTarget.value.toLowerCase()),
    onKeyUp: () => {
      ignoreInputKeyUp.current = false;
    },
    name: "q",
    placeholder: "Search posts",
    className: "h-14 w-full border-2 border-slate-400 bg-bp py-4 px-12 text-lg font-medium text-tp focus:border-hp focus:outline-none"
  }), /* @__PURE__ */ React23.createElement("span", {
    className: "absolute inset-y-0 right-4 flex h-full items-center justify-between text-lg font-medium text-hp"
  }, matchingPosts.length))), /* @__PURE__ */ React23.createElement("div", null, /* @__PURE__ */ React23.createElement(MobileMenu, null)))), /* @__PURE__ */ React23.createElement("div", {
    className: "min-h-screen bg-slate-200 px-6 duration-500 dark:bg-slate-800 lg:flex"
  }, /* @__PURE__ */ React23.createElement("div", {
    className: "hidden flex-shrink-0 lg:block"
  }, /* @__PURE__ */ React23.createElement(Sidebar, null, /* @__PURE__ */ React23.createElement("form", {
    action: "/blog",
    className: "mb-12",
    method: "GET",
    onSubmit: (e) => e.preventDefault()
  }, /* @__PURE__ */ React23.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ React23.createElement("button", {
    title: query === "" ? "Search" : "Clear search",
    type: "button",
    onClick: () => {
      var _a;
      setQuery("");
      ignoreInputKeyUp.current = true;
      (_a = searchInputRef.current) == null ? void 0 : _a.focus();
    },
    onKeyDown: () => {
      ignoreInputKeyUp.current = true;
    },
    onKeyUp: () => {
      ignoreInputKeyUp.current = false;
    },
    className: (0, import_clsx28.default)("absolute inset-y-1 left-1 flex h-12 w-12 items-center justify-center outline-hp focus:outline-dotted", {
      "cursor-pointer": query !== "",
      "cursor-default": query === ""
    })
  }, /* @__PURE__ */ React23.createElement(import_outline6.SearchIcon, {
    className: "h-4 w-4 text-ts"
  })), /* @__PURE__ */ React23.createElement("label", null, /* @__PURE__ */ React23.createElement("input", {
    ref: searchInputRef,
    type: "search",
    value: queryValue,
    onChange: (e) => setQuery(e.currentTarget.value.toLowerCase()),
    onKeyUp: () => {
      ignoreInputKeyUp.current = false;
    },
    name: "q",
    placeholder: "Search posts",
    className: "h-14 w-full border-2 border-slate-400 bg-bp py-4 px-12 text-lg font-medium text-tp focus:border-hp focus:outline-none"
  })), /* @__PURE__ */ React23.createElement("span", {
    className: "absolute inset-y-0 right-4 flex h-full items-center justify-between text-lg font-medium text-hp"
  }, matchingPosts.length))), data.tags.length > 0 ? /* @__PURE__ */ React23.createElement(React23.Fragment, null, /* @__PURE__ */ React23.createElement("nav", {
    className: "mb-8 text-tp"
  }, /* @__PURE__ */ React23.createElement("h4", {
    className: "mb-2 py-1 pt-0 text-base font-medium uppercase"
  }, "Tags"), /* @__PURE__ */ React23.createElement("div", {
    className: "mb-3"
  }, data.tags.map((tag) => {
    const selected = regularQuery.includes(tag);
    return /* @__PURE__ */ React23.createElement(Tag, {
      key: tag,
      tag,
      onClick: () => toggleTag(tag),
      selected,
      disabled: !visibleTags.has(tag) && !selected
    });
  })))) : null)), /* @__PURE__ */ React23.createElement("div", {
    className: "flex-grow pb-12 lg:h-full lg:py-12"
  }, /* @__PURE__ */ React23.createElement("header", {
    className: "py-16"
  }, /* @__PURE__ */ React23.createElement("h1", {
    className: "mb-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-center sm:text-4xl xl:mb-8"
  }, "Welcome to 6+ blog"), /* @__PURE__ */ React23.createElement("p", {
    className: "text-lg text-slate-700 dark:text-slate-400 sm:text-center"
  }, "All the latest Tailwind CSS news, straight from the\xA0team.")), /* @__PURE__ */ React23.createElement(Spacer, {
    size: "2xs"
  }), posts.length === 0 ? /* @__PURE__ */ React23.createElement("div", {
    className: "flex items-center justify-center"
  }, /* @__PURE__ */ React23.createElement("p", {
    className: "text-tp"
  }, `\u6761\u4EF6\u3068\u4E00\u81F4\u3059\u308B\u8A18\u4E8B\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002`)) : /* @__PURE__ */ React23.createElement(import_framer_motion5.motion.div, {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants: { exit: { transition: { staggerChildren: 0.1 } } },
    className: "grid gap-x-8 gap-y-16 md:grid-cols-2 2xl:grid-cols-3"
  }, posts.map((post) => /* @__PURE__ */ React23.createElement(Card, {
    frontmatter: post,
    key: post.slug
  }))), /* @__PURE__ */ React23.createElement(Spacer, {
    size: "2xs"
  }), hasMorePosts ? /* @__PURE__ */ React23.createElement("div", {
    className: "my-12 w-full text-center"
  }, /* @__PURE__ */ React23.createElement("button", {
    className: "btn group gap-2 rounded-full text-lg text-tp transition focus:outline-none",
    onClick: () => setIndexToShow((i) => i + PAGE_SIZE)
  }, /* @__PURE__ */ React23.createElement("span", null, "\u3055\u3089\u306B\u8868\u793A"), /* @__PURE__ */ React23.createElement(import_outline6.PlusIcon, {
    className: "h-6 w-6 duration-300 group-hover:rotate-90 group-focus:rotate-90"
  }))) : null)));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "f605736a", "entry": { "module": "/build/entry.client-NN57IWXP.js", "imports": ["/build/_shared/chunk-TF7DY7FC.js", "/build/_shared/chunk-5GZEI4AI.js", "/build/_shared/chunk-XV23MX66.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-4TITNWTG.js", "imports": ["/build/_shared/chunk-DMPKICIQ.js", "/build/_shared/chunk-VCT23PCD.js", "/build/_shared/chunk-BAHDNUPA.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/action/form-validation": { "id": "routes/action/form-validation", "parentId": "root", "path": "action/form-validation", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/action/form-validation-QNPAQHIQ.js", "imports": ["/build/_shared/chunk-64HUUNDY.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/action/set-theme": { "id": "routes/action/set-theme", "parentId": "root", "path": "action/set-theme", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/action/set-theme-BMPIHMFJ.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/admin": { "id": "routes/admin", "parentId": "root", "path": "admin", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/admin-A33VDPUW.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog": { "id": "routes/blog", "parentId": "root", "path": "blog", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog-4OT2IGUP.js", "imports": ["/build/_shared/chunk-WOB4O3XF.js", "/build/_shared/chunk-LGUOWHYT.js", "/build/_shared/chunk-WUEGSNBP.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog.$slug": { "id": "routes/blog.$slug", "parentId": "root", "path": "blog/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog.$slug-QGHJW7ZA.js", "imports": ["/build/_shared/chunk-WOB4O3XF.js", "/build/_shared/chunk-RP6GYJCK.js", "/build/_shared/chunk-LGUOWHYT.js", "/build/_shared/chunk-WUEGSNBP.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/contact-4VEKQNJE.js", "imports": ["/build/_shared/chunk-64HUUNDY.js", "/build/_shared/chunk-RP6GYJCK.js", "/build/_shared/chunk-OKB4NXCF.js", "/build/_shared/chunk-LGUOWHYT.js", "/build/_shared/chunk-WUEGSNBP.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-DTJT34ZM.js", "imports": ["/build/_shared/chunk-OKB4NXCF.js", "/build/_shared/chunk-LGUOWHYT.js", "/build/_shared/chunk-WUEGSNBP.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/policy": { "id": "routes/policy", "parentId": "root", "path": "policy", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/policy-HVUW3SPL.js", "imports": ["/build/_shared/chunk-OKB4NXCF.js", "/build/_shared/chunk-LGUOWHYT.js", "/build/_shared/chunk-WUEGSNBP.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/works": { "id": "routes/works", "parentId": "root", "path": "works", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/works-ER3EBM2J.js", "imports": ["/build/_shared/chunk-WUEGSNBP.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-F605736A.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/action/form-validation": {
    id: "routes/action/form-validation",
    parentId: "root",
    path: "action/form-validation",
    index: void 0,
    caseSensitive: void 0,
    module: form_validation_exports
  },
  "routes/action/set-theme": {
    id: "routes/action/set-theme",
    parentId: "root",
    path: "action/set-theme",
    index: void 0,
    caseSensitive: void 0,
    module: set_theme_exports
  },
  "routes/blog.$slug": {
    id: "routes/blog.$slug",
    parentId: "root",
    path: "blog/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: blog_slug_exports
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/policy": {
    id: "routes/policy",
    parentId: "root",
    path: "policy",
    index: void 0,
    caseSensitive: void 0,
    module: policy_exports
  },
  "routes/admin": {
    id: "routes/admin",
    parentId: "root",
    path: "admin",
    index: void 0,
    caseSensitive: void 0,
    module: admin_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/works": {
    id: "routes/works",
    parentId: "root",
    path: "works",
    index: void 0,
    caseSensitive: void 0,
    module: works_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=index.js.map
