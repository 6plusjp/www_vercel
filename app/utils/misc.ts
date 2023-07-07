import { createContext } from "react";

import { isBrowser, __DEV__ } from "./assertion";

const noop = () => {};

const doc = {
  body: {
    classList: {
      add() {},
      remove() {},
    },
  },
  addEventListener() {},
  removeEventListener() {},
  activeElement: {
    blur() {},
    nodeName: "",
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
      initEvent() {},
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
};
const ssrDocument = doc as unknown as Document;

const win = {
  document: ssrDocument,
  navigator: {
    userAgent: "",
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
      },
    };
  },
  matchMedia() {
    return {
      matches: false,
      addListener: noop,
      removeListener: noop,
    };
  },
  requestAnimationFrame(callback: () => void) {
    if (typeof setTimeout === "undefined") {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame(id: number) {
    if (typeof setTimeout === "undefined") return;
    clearTimeout(id);
  },
  setTimeout: () => 0,
  clearTimeout: noop,
  setInterval: () => 0,
  clearInterval: noop,
};
const ssrWindow = win as unknown as Window;

interface Environment {
  window: Window;
  document: Document;
}

const mockEnv = {
  window: ssrWindow,
  document: ssrDocument,
};

const defaultEnv: Environment = isBrowser ? { window, document } : mockEnv;

const EnvironmentContext = createContext(defaultEnv);
if (__DEV__) {
  EnvironmentContext.displayName = "EnvironmentContext";
}

function getDomainUrl(request: Request) {
  const host =
    request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  if (!host) {
    throw new Error("Could not determine domain URL.");
  }
  const protocol = host.includes("localhost") ? "http" : "https";

  return `${protocol}://${host}`;
}

function getUrl(requestInfo?: { origin: string; path: string }) {
  return removeTrailingSlash(
    `${requestInfo?.origin ?? "https://6plus.tech"}${requestInfo?.path ?? ""}`
  );
}

function removeTrailingSlash(s: string) {
  return s.endsWith("/") ? s.slice(0, -1) : s;
}

export {
  noop,
  ssrDocument,
  ssrWindow,
  EnvironmentContext,
  getDomainUrl,
  getUrl,
  removeTrailingSlash,
};
