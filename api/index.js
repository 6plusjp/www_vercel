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
var __export = (target, all8) => {
  for (var name in all8)
    __defProp(target, name, { get: all8[name], enumerable: true });
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
    var react2 = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react2.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react2.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react2.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react2.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react2.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react2.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react2.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react2.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react2.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react2.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react2.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react2.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react2.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react2.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react2.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react2.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react2.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react2.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react2.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react2.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react2.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react2.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react2.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react2.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react2.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react2.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react2.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react2.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react2.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react2.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react2.useTransition;
      }
    });
  }
});

// node_modules/unified/lib/index.js
function base() {
  const transformers = (0, import_trough.trough)();
  const attachers = [];
  let namespace = {};
  let frozen;
  let freezeIndex = -1;
  processor.data = data;
  processor.Parser = void 0;
  processor.Compiler = void 0;
  processor.freeze = freeze;
  processor.attachers = attachers;
  processor.use = use;
  processor.parse = parse2;
  processor.stringify = stringify;
  processor.run = run;
  processor.runSync = runSync;
  processor.process = process2;
  processor.processSync = processSync;
  return processor;
  function processor() {
    const destination = base();
    let index2 = -1;
    while (++index2 < attachers.length) {
      destination.use(...attachers[index2]);
    }
    destination.data((0, import_extend.default)(true, {}, namespace));
    return destination;
  }
  function data(key, value) {
    if (typeof key === "string") {
      if (arguments.length === 2) {
        assertUnfrozen("data", frozen);
        namespace[key] = value;
        return processor;
      }
      return own.call(namespace, key) && namespace[key] || null;
    }
    if (key) {
      assertUnfrozen("data", frozen);
      namespace = key;
      return processor;
    }
    return namespace;
  }
  function freeze() {
    if (frozen) {
      return processor;
    }
    while (++freezeIndex < attachers.length) {
      const [attacher, ...options] = attachers[freezeIndex];
      if (options[0] === false) {
        continue;
      }
      if (options[0] === true) {
        options[0] = void 0;
      }
      const transformer = attacher.call(processor, ...options);
      if (typeof transformer === "function") {
        transformers.use(transformer);
      }
    }
    frozen = true;
    freezeIndex = Number.POSITIVE_INFINITY;
    return processor;
  }
  function use(value, ...options) {
    let settings;
    assertUnfrozen("use", frozen);
    if (value === null || value === void 0) {
    } else if (typeof value === "function") {
      addPlugin(value, ...options);
    } else if (typeof value === "object") {
      if (Array.isArray(value)) {
        addList(value);
      } else {
        addPreset(value);
      }
    } else {
      throw new TypeError("Expected usable value, not `" + value + "`");
    }
    if (settings) {
      namespace.settings = Object.assign(namespace.settings || {}, settings);
    }
    return processor;
    function add3(value2) {
      if (typeof value2 === "function") {
        addPlugin(value2);
      } else if (typeof value2 === "object") {
        if (Array.isArray(value2)) {
          const [plugin, ...options2] = value2;
          addPlugin(plugin, ...options2);
        } else {
          addPreset(value2);
        }
      } else {
        throw new TypeError("Expected usable value, not `" + value2 + "`");
      }
    }
    function addPreset(result) {
      addList(result.plugins);
      if (result.settings) {
        settings = Object.assign(settings || {}, result.settings);
      }
    }
    function addList(plugins) {
      let index2 = -1;
      if (plugins === null || plugins === void 0) {
      } else if (Array.isArray(plugins)) {
        while (++index2 < plugins.length) {
          const thing = plugins[index2];
          add3(thing);
        }
      } else {
        throw new TypeError("Expected a list of plugins, not `" + plugins + "`");
      }
    }
    function addPlugin(plugin, value2) {
      let index2 = -1;
      let entry2;
      while (++index2 < attachers.length) {
        if (attachers[index2][0] === plugin) {
          entry2 = attachers[index2];
          break;
        }
      }
      if (entry2) {
        if ((0, import_is_plain_obj.default)(entry2[1]) && (0, import_is_plain_obj.default)(value2)) {
          value2 = (0, import_extend.default)(true, entry2[1], value2);
        }
        entry2[1] = value2;
      } else {
        attachers.push([...arguments]);
      }
    }
  }
  function parse2(doc2) {
    processor.freeze();
    const file = vfile(doc2);
    const Parser2 = processor.Parser;
    assertParser("parse", Parser2);
    if (newable(Parser2, "parse")) {
      return new Parser2(String(file), file).parse();
    }
    return Parser2(String(file), file);
  }
  function stringify(node, doc2) {
    processor.freeze();
    const file = vfile(doc2);
    const Compiler = processor.Compiler;
    assertCompiler("stringify", Compiler);
    assertNode(node);
    if (newable(Compiler, "compile")) {
      return new Compiler(node, file).compile();
    }
    return Compiler(node, file);
  }
  function run(node, doc2, callback) {
    assertNode(node);
    processor.freeze();
    if (!callback && typeof doc2 === "function") {
      callback = doc2;
      doc2 = void 0;
    }
    if (!callback) {
      return new Promise(executor);
    }
    executor(null, callback);
    function executor(resolve, reject) {
      transformers.run(node, vfile(doc2), done);
      function done(error, tree, file) {
        tree = tree || node;
        if (error) {
          reject(error);
        } else if (resolve) {
          resolve(tree);
        } else {
          callback(null, tree, file);
        }
      }
    }
  }
  function runSync(node, file) {
    let result;
    let complete;
    processor.run(node, file, done);
    assertDone("runSync", "run", complete);
    return result;
    function done(error, tree) {
      (0, import_bail.bail)(error);
      result = tree;
      complete = true;
    }
  }
  function process2(doc2, callback) {
    processor.freeze();
    assertParser("process", processor.Parser);
    assertCompiler("process", processor.Compiler);
    if (!callback) {
      return new Promise(executor);
    }
    executor(null, callback);
    function executor(resolve, reject) {
      const file = vfile(doc2);
      processor.run(processor.parse(file), file, (error, tree, file2) => {
        if (error || !tree || !file2) {
          done(error);
        } else {
          const result = processor.stringify(tree, file2);
          if (result === void 0 || result === null) {
          } else if (looksLikeAVFileValue(result)) {
            file2.value = result;
          } else {
            file2.result = result;
          }
          done(error, file2);
        }
      });
      function done(error, file2) {
        if (error || !file2) {
          reject(error);
        } else if (resolve) {
          resolve(file2);
        } else {
          callback(null, file2);
        }
      }
    }
  }
  function processSync(doc2) {
    let complete;
    processor.freeze();
    assertParser("processSync", processor.Parser);
    assertCompiler("processSync", processor.Compiler);
    const file = vfile(doc2);
    processor.process(file, done);
    assertDone("processSync", "process", complete);
    return file;
    function done(error) {
      complete = true;
      (0, import_bail.bail)(error);
    }
  }
}
function newable(value, name) {
  return typeof value === "function" && value.prototype && (keys(value.prototype) || name in value.prototype);
}
function keys(value) {
  let key;
  for (key in value) {
    if (own.call(value, key)) {
      return true;
    }
  }
  return false;
}
function assertParser(name, value) {
  if (typeof value !== "function") {
    throw new TypeError("Cannot `" + name + "` without `Parser`");
  }
}
function assertCompiler(name, value) {
  if (typeof value !== "function") {
    throw new TypeError("Cannot `" + name + "` without `Compiler`");
  }
}
function assertUnfrozen(name, frozen) {
  if (frozen) {
    throw new Error("Cannot call `" + name + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
  }
}
function assertNode(node) {
  if (!(0, import_is_plain_obj.default)(node) || typeof node.type !== "string") {
    throw new TypeError("Expected node, got `" + node + "`");
  }
}
function assertDone(name, asyncName, complete) {
  if (!complete) {
    throw new Error("`" + name + "` finished async. Use `" + asyncName + "` instead");
  }
}
function vfile(value) {
  return looksLikeAVFile(value) ? value : new import_vfile.VFile(value);
}
function looksLikeAVFile(value) {
  return Boolean(value && typeof value === "object" && "message" in value && "messages" in value);
}
function looksLikeAVFileValue(value) {
  return typeof value === "string" || (0, import_is_buffer.default)(value);
}
var import_bail, import_is_buffer, import_extend, import_is_plain_obj, import_trough, import_vfile, unified, own;
var init_lib = __esm({
  "node_modules/unified/lib/index.js"() {
    init_react();
    import_bail = require("bail");
    import_is_buffer = __toESM(require("is-buffer"), 1);
    import_extend = __toESM(require("extend"), 1);
    import_is_plain_obj = __toESM(require("is-plain-obj"), 1);
    import_trough = require("trough");
    import_vfile = require("vfile");
    unified = base().freeze();
    own = {}.hasOwnProperty;
  }
});

// node_modules/unified/index.js
var unified_exports = {};
__export(unified_exports, {
  unified: () => unified
});
var init_unified = __esm({
  "node_modules/unified/index.js"() {
    init_react();
    init_lib();
  }
});

// node_modules/mdast-util-to-string/index.js
function toString(node, options) {
  var { includeImageAlt = true } = options || {};
  return one(node, includeImageAlt);
}
function one(node, includeImageAlt) {
  return node && typeof node === "object" && (node.value || (includeImageAlt ? node.alt : "") || "children" in node && all(node.children, includeImageAlt) || Array.isArray(node) && all(node, includeImageAlt)) || "";
}
function all(values, includeImageAlt) {
  var result = [];
  var index2 = -1;
  while (++index2 < values.length) {
    result[index2] = one(values[index2], includeImageAlt);
  }
  return result.join("");
}
var init_mdast_util_to_string = __esm({
  "node_modules/mdast-util-to-string/index.js"() {
    init_react();
  }
});

// node_modules/micromark-util-chunked/index.js
function splice(list3, start, remove, items) {
  const end = list3.length;
  let chunkStart = 0;
  let parameters;
  if (start < 0) {
    start = -start > end ? 0 : end + start;
  } else {
    start = start > end ? end : start;
  }
  remove = remove > 0 ? remove : 0;
  if (items.length < 1e4) {
    parameters = Array.from(items);
    parameters.unshift(start, remove);
    [].splice.apply(list3, parameters);
  } else {
    if (remove)
      [].splice.apply(list3, [start, remove]);
    while (chunkStart < items.length) {
      parameters = items.slice(chunkStart, chunkStart + 1e4);
      parameters.unshift(start, 0);
      [].splice.apply(list3, parameters);
      chunkStart += 1e4;
      start += 1e4;
    }
  }
}
function push(list3, items) {
  if (list3.length > 0) {
    splice(list3, list3.length, 0, items);
    return list3;
  }
  return items;
}
var init_micromark_util_chunked = __esm({
  "node_modules/micromark-util-chunked/index.js"() {
    init_react();
  }
});

// node_modules/micromark-util-combine-extensions/index.js
function combineExtensions(extensions) {
  const all8 = {};
  let index2 = -1;
  while (++index2 < extensions.length) {
    syntaxExtension(all8, extensions[index2]);
  }
  return all8;
}
function syntaxExtension(all8, extension2) {
  let hook;
  for (hook in extension2) {
    const maybe = hasOwnProperty.call(all8, hook) ? all8[hook] : void 0;
    const left = maybe || (all8[hook] = {});
    const right = extension2[hook];
    let code3;
    for (code3 in right) {
      if (!hasOwnProperty.call(left, code3))
        left[code3] = [];
      const value = right[code3];
      constructs(left[code3], Array.isArray(value) ? value : value ? [value] : []);
    }
  }
}
function constructs(existing, list3) {
  let index2 = -1;
  const before = [];
  while (++index2 < list3.length) {
    ;
    (list3[index2].add === "after" ? existing : before).push(list3[index2]);
  }
  splice(existing, 0, 0, before);
}
var hasOwnProperty;
var init_micromark_util_combine_extensions = __esm({
  "node_modules/micromark-util-combine-extensions/index.js"() {
    init_react();
    init_micromark_util_chunked();
    hasOwnProperty = {}.hasOwnProperty;
  }
});

// node_modules/micromark-util-character/lib/unicode-punctuation-regex.js
var unicodePunctuationRegex;
var init_unicode_punctuation_regex = __esm({
  "node_modules/micromark-util-character/lib/unicode-punctuation-regex.js"() {
    init_react();
    unicodePunctuationRegex = /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
  }
});

// node_modules/micromark-util-character/index.js
function asciiControl(code3) {
  return code3 !== null && (code3 < 32 || code3 === 127);
}
function markdownLineEndingOrSpace(code3) {
  return code3 !== null && (code3 < 0 || code3 === 32);
}
function markdownLineEnding(code3) {
  return code3 !== null && code3 < -2;
}
function markdownSpace(code3) {
  return code3 === -2 || code3 === -1 || code3 === 32;
}
function regexCheck(regex) {
  return check;
  function check(code3) {
    return code3 !== null && regex.test(String.fromCharCode(code3));
  }
}
var asciiAlpha, asciiDigit, asciiHexDigit, asciiAlphanumeric, asciiPunctuation, asciiAtext, unicodeWhitespace, unicodePunctuation;
var init_micromark_util_character = __esm({
  "node_modules/micromark-util-character/index.js"() {
    init_react();
    init_unicode_punctuation_regex();
    asciiAlpha = regexCheck(/[A-Za-z]/);
    asciiDigit = regexCheck(/\d/);
    asciiHexDigit = regexCheck(/[\dA-Fa-f]/);
    asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
    asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
    asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
    unicodeWhitespace = regexCheck(/\s/);
    unicodePunctuation = regexCheck(unicodePunctuationRegex);
  }
});

// node_modules/micromark-factory-space/index.js
function factorySpace(effects, ok2, type, max) {
  const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
  let size = 0;
  return start;
  function start(code3) {
    if (markdownSpace(code3)) {
      effects.enter(type);
      return prefix(code3);
    }
    return ok2(code3);
  }
  function prefix(code3) {
    if (markdownSpace(code3) && size++ < limit) {
      effects.consume(code3);
      return prefix;
    }
    effects.exit(type);
    return ok2(code3);
  }
}
var init_micromark_factory_space = __esm({
  "node_modules/micromark-factory-space/index.js"() {
    init_react();
    init_micromark_util_character();
  }
});

// node_modules/micromark/lib/initialize/content.js
function initializeContent(effects) {
  const contentStart = effects.attempt(this.parser.constructs.contentInitial, afterContentStartConstruct, paragraphInitial);
  let previous3;
  return contentStart;
  function afterContentStartConstruct(code3) {
    if (code3 === null) {
      effects.consume(code3);
      return;
    }
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    return factorySpace(effects, contentStart, "linePrefix");
  }
  function paragraphInitial(code3) {
    effects.enter("paragraph");
    return lineStart(code3);
  }
  function lineStart(code3) {
    const token = effects.enter("chunkText", {
      contentType: "text",
      previous: previous3
    });
    if (previous3) {
      previous3.next = token;
    }
    previous3 = token;
    return data(code3);
  }
  function data(code3) {
    if (code3 === null) {
      effects.exit("chunkText");
      effects.exit("paragraph");
      effects.consume(code3);
      return;
    }
    if (markdownLineEnding(code3)) {
      effects.consume(code3);
      effects.exit("chunkText");
      return lineStart;
    }
    effects.consume(code3);
    return data;
  }
}
var content;
var init_content = __esm({
  "node_modules/micromark/lib/initialize/content.js"() {
    init_react();
    init_micromark_factory_space();
    init_micromark_util_character();
    content = {
      tokenize: initializeContent
    };
  }
});

// node_modules/micromark/lib/initialize/document.js
function initializeDocument(effects) {
  const self = this;
  const stack = [];
  let continued = 0;
  let childFlow;
  let childToken;
  let lineStartOffset;
  return start;
  function start(code3) {
    if (continued < stack.length) {
      const item = stack[continued];
      self.containerState = item[1];
      return effects.attempt(item[0].continuation, documentContinue, checkNewContainers)(code3);
    }
    return checkNewContainers(code3);
  }
  function documentContinue(code3) {
    continued++;
    if (self.containerState._closeFlow) {
      self.containerState._closeFlow = void 0;
      if (childFlow) {
        closeFlow();
      }
      const indexBeforeExits = self.events.length;
      let indexBeforeFlow = indexBeforeExits;
      let point4;
      while (indexBeforeFlow--) {
        if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
          point4 = self.events[indexBeforeFlow][1].end;
          break;
        }
      }
      exitContainers(continued);
      let index2 = indexBeforeExits;
      while (index2 < self.events.length) {
        self.events[index2][1].end = Object.assign({}, point4);
        index2++;
      }
      splice(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits));
      self.events.length = index2;
      return checkNewContainers(code3);
    }
    return start(code3);
  }
  function checkNewContainers(code3) {
    if (continued === stack.length) {
      if (!childFlow) {
        return documentContinued(code3);
      }
      if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
        return flowStart(code3);
      }
      self.interrupt = Boolean(childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack);
    }
    self.containerState = {};
    return effects.check(containerConstruct, thereIsANewContainer, thereIsNoNewContainer)(code3);
  }
  function thereIsANewContainer(code3) {
    if (childFlow)
      closeFlow();
    exitContainers(continued);
    return documentContinued(code3);
  }
  function thereIsNoNewContainer(code3) {
    self.parser.lazy[self.now().line] = continued !== stack.length;
    lineStartOffset = self.now().offset;
    return flowStart(code3);
  }
  function documentContinued(code3) {
    self.containerState = {};
    return effects.attempt(containerConstruct, containerContinue, flowStart)(code3);
  }
  function containerContinue(code3) {
    continued++;
    stack.push([self.currentConstruct, self.containerState]);
    return documentContinued(code3);
  }
  function flowStart(code3) {
    if (code3 === null) {
      if (childFlow)
        closeFlow();
      exitContainers(0);
      effects.consume(code3);
      return;
    }
    childFlow = childFlow || self.parser.flow(self.now());
    effects.enter("chunkFlow", {
      contentType: "flow",
      previous: childToken,
      _tokenizer: childFlow
    });
    return flowContinue(code3);
  }
  function flowContinue(code3) {
    if (code3 === null) {
      writeToChild(effects.exit("chunkFlow"), true);
      exitContainers(0);
      effects.consume(code3);
      return;
    }
    if (markdownLineEnding(code3)) {
      effects.consume(code3);
      writeToChild(effects.exit("chunkFlow"));
      continued = 0;
      self.interrupt = void 0;
      return start;
    }
    effects.consume(code3);
    return flowContinue;
  }
  function writeToChild(token, eof) {
    const stream = self.sliceStream(token);
    if (eof)
      stream.push(null);
    token.previous = childToken;
    if (childToken)
      childToken.next = token;
    childToken = token;
    childFlow.defineSkip(token.start);
    childFlow.write(stream);
    if (self.parser.lazy[token.start.line]) {
      let index2 = childFlow.events.length;
      while (index2--) {
        if (childFlow.events[index2][1].start.offset < lineStartOffset && (!childFlow.events[index2][1].end || childFlow.events[index2][1].end.offset > lineStartOffset)) {
          return;
        }
      }
      const indexBeforeExits = self.events.length;
      let indexBeforeFlow = indexBeforeExits;
      let seen;
      let point4;
      while (indexBeforeFlow--) {
        if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
          if (seen) {
            point4 = self.events[indexBeforeFlow][1].end;
            break;
          }
          seen = true;
        }
      }
      exitContainers(continued);
      index2 = indexBeforeExits;
      while (index2 < self.events.length) {
        self.events[index2][1].end = Object.assign({}, point4);
        index2++;
      }
      splice(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits));
      self.events.length = index2;
    }
  }
  function exitContainers(size) {
    let index2 = stack.length;
    while (index2-- > size) {
      const entry2 = stack[index2];
      self.containerState = entry2[1];
      entry2[0].exit.call(self, effects);
    }
    stack.length = size;
  }
  function closeFlow() {
    childFlow.write([null]);
    childToken = void 0;
    childFlow = void 0;
    self.containerState._closeFlow = void 0;
  }
}
function tokenizeContainer(effects, ok2, nok) {
  return factorySpace(effects, effects.attempt(this.parser.constructs.document, ok2, nok), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
var document2, containerConstruct;
var init_document = __esm({
  "node_modules/micromark/lib/initialize/document.js"() {
    init_react();
    init_micromark_factory_space();
    init_micromark_util_character();
    init_micromark_util_chunked();
    document2 = {
      tokenize: initializeDocument
    };
    containerConstruct = {
      tokenize: tokenizeContainer
    };
  }
});

// node_modules/micromark-util-classify-character/index.js
function classifyCharacter(code3) {
  if (code3 === null || markdownLineEndingOrSpace(code3) || unicodeWhitespace(code3)) {
    return 1;
  }
  if (unicodePunctuation(code3)) {
    return 2;
  }
}
var init_micromark_util_classify_character = __esm({
  "node_modules/micromark-util-classify-character/index.js"() {
    init_react();
    init_micromark_util_character();
  }
});

// node_modules/micromark-util-resolve-all/index.js
function resolveAll(constructs2, events, context) {
  const called = [];
  let index2 = -1;
  while (++index2 < constructs2.length) {
    const resolve = constructs2[index2].resolveAll;
    if (resolve && !called.includes(resolve)) {
      events = resolve(events, context);
      called.push(resolve);
    }
  }
  return events;
}
var init_micromark_util_resolve_all = __esm({
  "node_modules/micromark-util-resolve-all/index.js"() {
    init_react();
  }
});

// node_modules/micromark-core-commonmark/lib/attention.js
function resolveAllAttention(events, context) {
  let index2 = -1;
  let open;
  let group;
  let text9;
  let openingSequence;
  let closingSequence;
  let use;
  let nextEvents;
  let offset;
  while (++index2 < events.length) {
    if (events[index2][0] === "enter" && events[index2][1].type === "attentionSequence" && events[index2][1]._close) {
      open = index2;
      while (open--) {
        if (events[open][0] === "exit" && events[open][1].type === "attentionSequence" && events[open][1]._open && context.sliceSerialize(events[open][1]).charCodeAt(0) === context.sliceSerialize(events[index2][1]).charCodeAt(0)) {
          if ((events[open][1]._close || events[index2][1]._open) && (events[index2][1].end.offset - events[index2][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index2][1].end.offset - events[index2][1].start.offset) % 3)) {
            continue;
          }
          use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index2][1].end.offset - events[index2][1].start.offset > 1 ? 2 : 1;
          const start = Object.assign({}, events[open][1].end);
          const end = Object.assign({}, events[index2][1].start);
          movePoint(start, -use);
          movePoint(end, use);
          openingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start,
            end: Object.assign({}, events[open][1].end)
          };
          closingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start: Object.assign({}, events[index2][1].start),
            end
          };
          text9 = {
            type: use > 1 ? "strongText" : "emphasisText",
            start: Object.assign({}, events[open][1].end),
            end: Object.assign({}, events[index2][1].start)
          };
          group = {
            type: use > 1 ? "strong" : "emphasis",
            start: Object.assign({}, openingSequence.start),
            end: Object.assign({}, closingSequence.end)
          };
          events[open][1].end = Object.assign({}, openingSequence.start);
          events[index2][1].start = Object.assign({}, closingSequence.end);
          nextEvents = [];
          if (events[open][1].end.offset - events[open][1].start.offset) {
            nextEvents = push(nextEvents, [
              ["enter", events[open][1], context],
              ["exit", events[open][1], context]
            ]);
          }
          nextEvents = push(nextEvents, [
            ["enter", group, context],
            ["enter", openingSequence, context],
            ["exit", openingSequence, context],
            ["enter", text9, context]
          ]);
          nextEvents = push(nextEvents, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + 1, index2), context));
          nextEvents = push(nextEvents, [
            ["exit", text9, context],
            ["enter", closingSequence, context],
            ["exit", closingSequence, context],
            ["exit", group, context]
          ]);
          if (events[index2][1].end.offset - events[index2][1].start.offset) {
            offset = 2;
            nextEvents = push(nextEvents, [
              ["enter", events[index2][1], context],
              ["exit", events[index2][1], context]
            ]);
          } else {
            offset = 0;
          }
          splice(events, open - 1, index2 - open + 3, nextEvents);
          index2 = open + nextEvents.length - offset - 2;
          break;
        }
      }
    }
  }
  index2 = -1;
  while (++index2 < events.length) {
    if (events[index2][1].type === "attentionSequence") {
      events[index2][1].type = "data";
    }
  }
  return events;
}
function tokenizeAttention(effects, ok2) {
  const attentionMarkers2 = this.parser.constructs.attentionMarkers.null;
  const previous3 = this.previous;
  const before = classifyCharacter(previous3);
  let marker;
  return start;
  function start(code3) {
    effects.enter("attentionSequence");
    marker = code3;
    return sequence(code3);
  }
  function sequence(code3) {
    if (code3 === marker) {
      effects.consume(code3);
      return sequence;
    }
    const token = effects.exit("attentionSequence");
    const after = classifyCharacter(code3);
    const open = !after || after === 2 && before || attentionMarkers2.includes(code3);
    const close = !before || before === 2 && after || attentionMarkers2.includes(previous3);
    token._open = Boolean(marker === 42 ? open : open && (before || !close));
    token._close = Boolean(marker === 42 ? close : close && (after || !open));
    return ok2(code3);
  }
}
function movePoint(point4, offset) {
  point4.column += offset;
  point4.offset += offset;
  point4._bufferIndex += offset;
}
var attention;
var init_attention = __esm({
  "node_modules/micromark-core-commonmark/lib/attention.js"() {
    init_react();
    init_micromark_util_chunked();
    init_micromark_util_classify_character();
    init_micromark_util_resolve_all();
    attention = {
      name: "attention",
      tokenize: tokenizeAttention,
      resolveAll: resolveAllAttention
    };
  }
});

// node_modules/micromark-core-commonmark/lib/autolink.js
function tokenizeAutolink(effects, ok2, nok) {
  let size = 1;
  return start;
  function start(code3) {
    effects.enter("autolink");
    effects.enter("autolinkMarker");
    effects.consume(code3);
    effects.exit("autolinkMarker");
    effects.enter("autolinkProtocol");
    return open;
  }
  function open(code3) {
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      return schemeOrEmailAtext;
    }
    return asciiAtext(code3) ? emailAtext(code3) : nok(code3);
  }
  function schemeOrEmailAtext(code3) {
    return code3 === 43 || code3 === 45 || code3 === 46 || asciiAlphanumeric(code3) ? schemeInsideOrEmailAtext(code3) : emailAtext(code3);
  }
  function schemeInsideOrEmailAtext(code3) {
    if (code3 === 58) {
      effects.consume(code3);
      return urlInside;
    }
    if ((code3 === 43 || code3 === 45 || code3 === 46 || asciiAlphanumeric(code3)) && size++ < 32) {
      effects.consume(code3);
      return schemeInsideOrEmailAtext;
    }
    return emailAtext(code3);
  }
  function urlInside(code3) {
    if (code3 === 62) {
      effects.exit("autolinkProtocol");
      return end(code3);
    }
    if (code3 === null || code3 === 32 || code3 === 60 || asciiControl(code3)) {
      return nok(code3);
    }
    effects.consume(code3);
    return urlInside;
  }
  function emailAtext(code3) {
    if (code3 === 64) {
      effects.consume(code3);
      size = 0;
      return emailAtSignOrDot;
    }
    if (asciiAtext(code3)) {
      effects.consume(code3);
      return emailAtext;
    }
    return nok(code3);
  }
  function emailAtSignOrDot(code3) {
    return asciiAlphanumeric(code3) ? emailLabel(code3) : nok(code3);
  }
  function emailLabel(code3) {
    if (code3 === 46) {
      effects.consume(code3);
      size = 0;
      return emailAtSignOrDot;
    }
    if (code3 === 62) {
      effects.exit("autolinkProtocol").type = "autolinkEmail";
      return end(code3);
    }
    return emailValue(code3);
  }
  function emailValue(code3) {
    if ((code3 === 45 || asciiAlphanumeric(code3)) && size++ < 63) {
      effects.consume(code3);
      return code3 === 45 ? emailValue : emailLabel;
    }
    return nok(code3);
  }
  function end(code3) {
    effects.enter("autolinkMarker");
    effects.consume(code3);
    effects.exit("autolinkMarker");
    effects.exit("autolink");
    return ok2;
  }
}
var autolink;
var init_autolink = __esm({
  "node_modules/micromark-core-commonmark/lib/autolink.js"() {
    init_react();
    init_micromark_util_character();
    autolink = {
      name: "autolink",
      tokenize: tokenizeAutolink
    };
  }
});

// node_modules/micromark-core-commonmark/lib/blank-line.js
function tokenizeBlankLine(effects, ok2, nok) {
  return factorySpace(effects, afterWhitespace, "linePrefix");
  function afterWhitespace(code3) {
    return code3 === null || markdownLineEnding(code3) ? ok2(code3) : nok(code3);
  }
}
var blankLine;
var init_blank_line = __esm({
  "node_modules/micromark-core-commonmark/lib/blank-line.js"() {
    init_react();
    init_micromark_factory_space();
    init_micromark_util_character();
    blankLine = {
      tokenize: tokenizeBlankLine,
      partial: true
    };
  }
});

// node_modules/micromark-core-commonmark/lib/block-quote.js
function tokenizeBlockQuoteStart(effects, ok2, nok) {
  const self = this;
  return start;
  function start(code3) {
    if (code3 === 62) {
      const state = self.containerState;
      if (!state.open) {
        effects.enter("blockQuote", {
          _container: true
        });
        state.open = true;
      }
      effects.enter("blockQuotePrefix");
      effects.enter("blockQuoteMarker");
      effects.consume(code3);
      effects.exit("blockQuoteMarker");
      return after;
    }
    return nok(code3);
  }
  function after(code3) {
    if (markdownSpace(code3)) {
      effects.enter("blockQuotePrefixWhitespace");
      effects.consume(code3);
      effects.exit("blockQuotePrefixWhitespace");
      effects.exit("blockQuotePrefix");
      return ok2;
    }
    effects.exit("blockQuotePrefix");
    return ok2(code3);
  }
}
function tokenizeBlockQuoteContinuation(effects, ok2, nok) {
  return factorySpace(effects, effects.attempt(blockQuote, ok2, nok), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function exit(effects) {
  effects.exit("blockQuote");
}
var blockQuote;
var init_block_quote = __esm({
  "node_modules/micromark-core-commonmark/lib/block-quote.js"() {
    init_react();
    init_micromark_factory_space();
    init_micromark_util_character();
    blockQuote = {
      name: "blockQuote",
      tokenize: tokenizeBlockQuoteStart,
      continuation: {
        tokenize: tokenizeBlockQuoteContinuation
      },
      exit
    };
  }
});

// node_modules/micromark-core-commonmark/lib/character-escape.js
function tokenizeCharacterEscape(effects, ok2, nok) {
  return start;
  function start(code3) {
    effects.enter("characterEscape");
    effects.enter("escapeMarker");
    effects.consume(code3);
    effects.exit("escapeMarker");
    return open;
  }
  function open(code3) {
    if (asciiPunctuation(code3)) {
      effects.enter("characterEscapeValue");
      effects.consume(code3);
      effects.exit("characterEscapeValue");
      effects.exit("characterEscape");
      return ok2;
    }
    return nok(code3);
  }
}
var characterEscape;
var init_character_escape = __esm({
  "node_modules/micromark-core-commonmark/lib/character-escape.js"() {
    init_react();
    init_micromark_util_character();
    characterEscape = {
      name: "characterEscape",
      tokenize: tokenizeCharacterEscape
    };
  }
});

// node_modules/micromark-core-commonmark/lib/character-reference.js
function tokenizeCharacterReference(effects, ok2, nok) {
  const self = this;
  let size = 0;
  let max;
  let test;
  return start;
  function start(code3) {
    effects.enter("characterReference");
    effects.enter("characterReferenceMarker");
    effects.consume(code3);
    effects.exit("characterReferenceMarker");
    return open;
  }
  function open(code3) {
    if (code3 === 35) {
      effects.enter("characterReferenceMarkerNumeric");
      effects.consume(code3);
      effects.exit("characterReferenceMarkerNumeric");
      return numeric;
    }
    effects.enter("characterReferenceValue");
    max = 31;
    test = asciiAlphanumeric;
    return value(code3);
  }
  function numeric(code3) {
    if (code3 === 88 || code3 === 120) {
      effects.enter("characterReferenceMarkerHexadecimal");
      effects.consume(code3);
      effects.exit("characterReferenceMarkerHexadecimal");
      effects.enter("characterReferenceValue");
      max = 6;
      test = asciiHexDigit;
      return value;
    }
    effects.enter("characterReferenceValue");
    max = 7;
    test = asciiDigit;
    return value(code3);
  }
  function value(code3) {
    let token;
    if (code3 === 59 && size) {
      token = effects.exit("characterReferenceValue");
      if (test === asciiAlphanumeric && !(0, import_decode_named_character_reference.decodeNamedCharacterReference)(self.sliceSerialize(token))) {
        return nok(code3);
      }
      effects.enter("characterReferenceMarker");
      effects.consume(code3);
      effects.exit("characterReferenceMarker");
      effects.exit("characterReference");
      return ok2;
    }
    if (test(code3) && size++ < max) {
      effects.consume(code3);
      return value;
    }
    return nok(code3);
  }
}
var import_decode_named_character_reference, characterReference;
var init_character_reference = __esm({
  "node_modules/micromark-core-commonmark/lib/character-reference.js"() {
    init_react();
    import_decode_named_character_reference = require("decode-named-character-reference");
    init_micromark_util_character();
    characterReference = {
      name: "characterReference",
      tokenize: tokenizeCharacterReference
    };
  }
});

// node_modules/micromark-core-commonmark/lib/code-fenced.js
function tokenizeCodeFenced(effects, ok2, nok) {
  const self = this;
  const closingFenceConstruct = {
    tokenize: tokenizeClosingFence,
    partial: true
  };
  const nonLazyLine = {
    tokenize: tokenizeNonLazyLine,
    partial: true
  };
  const tail = this.events[this.events.length - 1];
  const initialPrefix = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
  let sizeOpen = 0;
  let marker;
  return start;
  function start(code3) {
    effects.enter("codeFenced");
    effects.enter("codeFencedFence");
    effects.enter("codeFencedFenceSequence");
    marker = code3;
    return sequenceOpen(code3);
  }
  function sequenceOpen(code3) {
    if (code3 === marker) {
      effects.consume(code3);
      sizeOpen++;
      return sequenceOpen;
    }
    effects.exit("codeFencedFenceSequence");
    return sizeOpen < 3 ? nok(code3) : factorySpace(effects, infoOpen, "whitespace")(code3);
  }
  function infoOpen(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      return openAfter(code3);
    }
    effects.enter("codeFencedFenceInfo");
    effects.enter("chunkString", {
      contentType: "string"
    });
    return info(code3);
  }
  function info(code3) {
    if (code3 === null || markdownLineEndingOrSpace(code3)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceInfo");
      return factorySpace(effects, infoAfter, "whitespace")(code3);
    }
    if (code3 === 96 && code3 === marker)
      return nok(code3);
    effects.consume(code3);
    return info;
  }
  function infoAfter(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      return openAfter(code3);
    }
    effects.enter("codeFencedFenceMeta");
    effects.enter("chunkString", {
      contentType: "string"
    });
    return meta9(code3);
  }
  function meta9(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceMeta");
      return openAfter(code3);
    }
    if (code3 === 96 && code3 === marker)
      return nok(code3);
    effects.consume(code3);
    return meta9;
  }
  function openAfter(code3) {
    effects.exit("codeFencedFence");
    return self.interrupt ? ok2(code3) : contentStart(code3);
  }
  function contentStart(code3) {
    if (code3 === null) {
      return after(code3);
    }
    if (markdownLineEnding(code3)) {
      return effects.attempt(nonLazyLine, effects.attempt(closingFenceConstruct, after, initialPrefix ? factorySpace(effects, contentStart, "linePrefix", initialPrefix + 1) : contentStart), after)(code3);
    }
    effects.enter("codeFlowValue");
    return contentContinue(code3);
  }
  function contentContinue(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("codeFlowValue");
      return contentStart(code3);
    }
    effects.consume(code3);
    return contentContinue;
  }
  function after(code3) {
    effects.exit("codeFenced");
    return ok2(code3);
  }
  function tokenizeNonLazyLine(effects2, ok3, nok2) {
    const self2 = this;
    return start2;
    function start2(code3) {
      effects2.enter("lineEnding");
      effects2.consume(code3);
      effects2.exit("lineEnding");
      return lineStart;
    }
    function lineStart(code3) {
      return self2.parser.lazy[self2.now().line] ? nok2(code3) : ok3(code3);
    }
  }
  function tokenizeClosingFence(effects2, ok3, nok2) {
    let size = 0;
    return factorySpace(effects2, closingSequenceStart, "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
    function closingSequenceStart(code3) {
      effects2.enter("codeFencedFence");
      effects2.enter("codeFencedFenceSequence");
      return closingSequence(code3);
    }
    function closingSequence(code3) {
      if (code3 === marker) {
        effects2.consume(code3);
        size++;
        return closingSequence;
      }
      if (size < sizeOpen)
        return nok2(code3);
      effects2.exit("codeFencedFenceSequence");
      return factorySpace(effects2, closingSequenceEnd, "whitespace")(code3);
    }
    function closingSequenceEnd(code3) {
      if (code3 === null || markdownLineEnding(code3)) {
        effects2.exit("codeFencedFence");
        return ok3(code3);
      }
      return nok2(code3);
    }
  }
}
var codeFenced;
var init_code_fenced = __esm({
  "node_modules/micromark-core-commonmark/lib/code-fenced.js"() {
    init_react();
    init_micromark_factory_space();
    init_micromark_util_character();
    codeFenced = {
      name: "codeFenced",
      tokenize: tokenizeCodeFenced,
      concrete: true
    };
  }
});

// node_modules/micromark-core-commonmark/lib/code-indented.js
function tokenizeCodeIndented(effects, ok2, nok) {
  const self = this;
  return start;
  function start(code3) {
    effects.enter("codeIndented");
    return factorySpace(effects, afterStartPrefix, "linePrefix", 4 + 1)(code3);
  }
  function afterStartPrefix(code3) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? afterPrefix(code3) : nok(code3);
  }
  function afterPrefix(code3) {
    if (code3 === null) {
      return after(code3);
    }
    if (markdownLineEnding(code3)) {
      return effects.attempt(indentedContent, afterPrefix, after)(code3);
    }
    effects.enter("codeFlowValue");
    return content5(code3);
  }
  function content5(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("codeFlowValue");
      return afterPrefix(code3);
    }
    effects.consume(code3);
    return content5;
  }
  function after(code3) {
    effects.exit("codeIndented");
    return ok2(code3);
  }
}
function tokenizeIndentedContent(effects, ok2, nok) {
  const self = this;
  return start;
  function start(code3) {
    if (self.parser.lazy[self.now().line]) {
      return nok(code3);
    }
    if (markdownLineEnding(code3)) {
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      return start;
    }
    return factorySpace(effects, afterPrefix, "linePrefix", 4 + 1)(code3);
  }
  function afterPrefix(code3) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? ok2(code3) : markdownLineEnding(code3) ? start(code3) : nok(code3);
  }
}
var codeIndented, indentedContent;
var init_code_indented = __esm({
  "node_modules/micromark-core-commonmark/lib/code-indented.js"() {
    init_react();
    init_micromark_factory_space();
    init_micromark_util_character();
    codeIndented = {
      name: "codeIndented",
      tokenize: tokenizeCodeIndented
    };
    indentedContent = {
      tokenize: tokenizeIndentedContent,
      partial: true
    };
  }
});

// node_modules/micromark-core-commonmark/lib/code-text.js
function resolveCodeText(events) {
  let tailExitIndex = events.length - 4;
  let headEnterIndex = 3;
  let index2;
  let enter;
  if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === "space") && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === "space")) {
    index2 = headEnterIndex;
    while (++index2 < tailExitIndex) {
      if (events[index2][1].type === "codeTextData") {
        events[headEnterIndex][1].type = "codeTextPadding";
        events[tailExitIndex][1].type = "codeTextPadding";
        headEnterIndex += 2;
        tailExitIndex -= 2;
        break;
      }
    }
  }
  index2 = headEnterIndex - 1;
  tailExitIndex++;
  while (++index2 <= tailExitIndex) {
    if (enter === void 0) {
      if (index2 !== tailExitIndex && events[index2][1].type !== "lineEnding") {
        enter = index2;
      }
    } else if (index2 === tailExitIndex || events[index2][1].type === "lineEnding") {
      events[enter][1].type = "codeTextData";
      if (index2 !== enter + 2) {
        events[enter][1].end = events[index2 - 1][1].end;
        events.splice(enter + 2, index2 - enter - 2);
        tailExitIndex -= index2 - enter - 2;
        index2 = enter + 2;
      }
      enter = void 0;
    }
  }
  return events;
}
function previous(code3) {
  return code3 !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function tokenizeCodeText(effects, ok2, nok) {
  const self = this;
  let sizeOpen = 0;
  let size;
  let token;
  return start;
  function start(code3) {
    effects.enter("codeText");
    effects.enter("codeTextSequence");
    return openingSequence(code3);
  }
  function openingSequence(code3) {
    if (code3 === 96) {
      effects.consume(code3);
      sizeOpen++;
      return openingSequence;
    }
    effects.exit("codeTextSequence");
    return gap(code3);
  }
  function gap(code3) {
    if (code3 === null) {
      return nok(code3);
    }
    if (code3 === 96) {
      token = effects.enter("codeTextSequence");
      size = 0;
      return closingSequence(code3);
    }
    if (code3 === 32) {
      effects.enter("space");
      effects.consume(code3);
      effects.exit("space");
      return gap;
    }
    if (markdownLineEnding(code3)) {
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      return gap;
    }
    effects.enter("codeTextData");
    return data(code3);
  }
  function data(code3) {
    if (code3 === null || code3 === 32 || code3 === 96 || markdownLineEnding(code3)) {
      effects.exit("codeTextData");
      return gap(code3);
    }
    effects.consume(code3);
    return data;
  }
  function closingSequence(code3) {
    if (code3 === 96) {
      effects.consume(code3);
      size++;
      return closingSequence;
    }
    if (size === sizeOpen) {
      effects.exit("codeTextSequence");
      effects.exit("codeText");
      return ok2(code3);
    }
    token.type = "codeTextData";
    return data(code3);
  }
}
var codeText;
var init_code_text = __esm({
  "node_modules/micromark-core-commonmark/lib/code-text.js"() {
    init_react();
    init_micromark_util_character();
    codeText = {
      name: "codeText",
      tokenize: tokenizeCodeText,
      resolve: resolveCodeText,
      previous
    };
  }
});

// node_modules/micromark-util-subtokenize/index.js
function subtokenize(events) {
  const jumps = {};
  let index2 = -1;
  let event;
  let lineIndex;
  let otherIndex;
  let otherEvent;
  let parameters;
  let subevents;
  let more;
  while (++index2 < events.length) {
    while (index2 in jumps) {
      index2 = jumps[index2];
    }
    event = events[index2];
    if (index2 && event[1].type === "chunkFlow" && events[index2 - 1][1].type === "listItemPrefix") {
      subevents = event[1]._tokenizer.events;
      otherIndex = 0;
      if (otherIndex < subevents.length && subevents[otherIndex][1].type === "lineEndingBlank") {
        otherIndex += 2;
      }
      if (otherIndex < subevents.length && subevents[otherIndex][1].type === "content") {
        while (++otherIndex < subevents.length) {
          if (subevents[otherIndex][1].type === "content") {
            break;
          }
          if (subevents[otherIndex][1].type === "chunkText") {
            subevents[otherIndex][1]._isInFirstContentOfListItem = true;
            otherIndex++;
          }
        }
      }
    }
    if (event[0] === "enter") {
      if (event[1].contentType) {
        Object.assign(jumps, subcontent(events, index2));
        index2 = jumps[index2];
        more = true;
      }
    } else if (event[1]._container) {
      otherIndex = index2;
      lineIndex = void 0;
      while (otherIndex--) {
        otherEvent = events[otherIndex];
        if (otherEvent[1].type === "lineEnding" || otherEvent[1].type === "lineEndingBlank") {
          if (otherEvent[0] === "enter") {
            if (lineIndex) {
              events[lineIndex][1].type = "lineEndingBlank";
            }
            otherEvent[1].type = "lineEnding";
            lineIndex = otherIndex;
          }
        } else {
          break;
        }
      }
      if (lineIndex) {
        event[1].end = Object.assign({}, events[lineIndex][1].start);
        parameters = events.slice(lineIndex, index2);
        parameters.unshift(event);
        splice(events, lineIndex, index2 - lineIndex + 1, parameters);
      }
    }
  }
  return !more;
}
function subcontent(events, eventIndex) {
  const token = events[eventIndex][1];
  const context = events[eventIndex][2];
  let startPosition = eventIndex - 1;
  const startPositions = [];
  const tokenizer = token._tokenizer || context.parser[token.contentType](token.start);
  const childEvents = tokenizer.events;
  const jumps = [];
  const gaps = {};
  let stream;
  let previous3;
  let index2 = -1;
  let current = token;
  let adjust = 0;
  let start = 0;
  const breaks = [start];
  while (current) {
    while (events[++startPosition][1] !== current) {
    }
    startPositions.push(startPosition);
    if (!current._tokenizer) {
      stream = context.sliceStream(current);
      if (!current.next) {
        stream.push(null);
      }
      if (previous3) {
        tokenizer.defineSkip(current.start);
      }
      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = true;
      }
      tokenizer.write(stream);
      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = void 0;
      }
    }
    previous3 = current;
    current = current.next;
  }
  current = token;
  while (++index2 < childEvents.length) {
    if (childEvents[index2][0] === "exit" && childEvents[index2 - 1][0] === "enter" && childEvents[index2][1].type === childEvents[index2 - 1][1].type && childEvents[index2][1].start.line !== childEvents[index2][1].end.line) {
      start = index2 + 1;
      breaks.push(start);
      current._tokenizer = void 0;
      current.previous = void 0;
      current = current.next;
    }
  }
  tokenizer.events = [];
  if (current) {
    current._tokenizer = void 0;
    current.previous = void 0;
  } else {
    breaks.pop();
  }
  index2 = breaks.length;
  while (index2--) {
    const slice = childEvents.slice(breaks[index2], breaks[index2 + 1]);
    const start2 = startPositions.pop();
    jumps.unshift([start2, start2 + slice.length - 1]);
    splice(events, start2, 2, slice);
  }
  index2 = -1;
  while (++index2 < jumps.length) {
    gaps[adjust + jumps[index2][0]] = adjust + jumps[index2][1];
    adjust += jumps[index2][1] - jumps[index2][0] - 1;
  }
  return gaps;
}
var init_micromark_util_subtokenize = __esm({
  "node_modules/micromark-util-subtokenize/index.js"() {
    init_react();
    init_micromark_util_chunked();
  }
});

// node_modules/micromark-core-commonmark/lib/content.js
function resolveContent(events) {
  subtokenize(events);
  return events;
}
function tokenizeContent(effects, ok2) {
  let previous3;
  return start;
  function start(code3) {
    effects.enter("content");
    previous3 = effects.enter("chunkContent", {
      contentType: "content"
    });
    return data(code3);
  }
  function data(code3) {
    if (code3 === null) {
      return contentEnd(code3);
    }
    if (markdownLineEnding(code3)) {
      return effects.check(continuationConstruct, contentContinue, contentEnd)(code3);
    }
    effects.consume(code3);
    return data;
  }
  function contentEnd(code3) {
    effects.exit("chunkContent");
    effects.exit("content");
    return ok2(code3);
  }
  function contentContinue(code3) {
    effects.consume(code3);
    effects.exit("chunkContent");
    previous3.next = effects.enter("chunkContent", {
      contentType: "content",
      previous: previous3
    });
    previous3 = previous3.next;
    return data;
  }
}
function tokenizeContinuation(effects, ok2, nok) {
  const self = this;
  return startLookahead;
  function startLookahead(code3) {
    effects.exit("chunkContent");
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    return factorySpace(effects, prefixed, "linePrefix");
  }
  function prefixed(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      return nok(code3);
    }
    const tail = self.events[self.events.length - 1];
    if (!self.parser.constructs.disable.null.includes("codeIndented") && tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4) {
      return ok2(code3);
    }
    return effects.interrupt(self.parser.constructs.flow, nok, ok2)(code3);
  }
}
var content2, continuationConstruct;
var init_content2 = __esm({
  "node_modules/micromark-core-commonmark/lib/content.js"() {
    init_react();
    init_micromark_factory_space();
    init_micromark_util_character();
    init_micromark_util_subtokenize();
    content2 = {
      tokenize: tokenizeContent,
      resolve: resolveContent
    };
    continuationConstruct = {
      tokenize: tokenizeContinuation,
      partial: true
    };
  }
});

// node_modules/micromark-factory-destination/index.js
function factoryDestination(effects, ok2, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
  const limit = max || Number.POSITIVE_INFINITY;
  let balance = 0;
  return start;
  function start(code3) {
    if (code3 === 60) {
      effects.enter(type);
      effects.enter(literalType);
      effects.enter(literalMarkerType);
      effects.consume(code3);
      effects.exit(literalMarkerType);
      return destinationEnclosedBefore;
    }
    if (code3 === null || code3 === 41 || asciiControl(code3)) {
      return nok(code3);
    }
    effects.enter(type);
    effects.enter(rawType);
    effects.enter(stringType);
    effects.enter("chunkString", {
      contentType: "string"
    });
    return destinationRaw(code3);
  }
  function destinationEnclosedBefore(code3) {
    if (code3 === 62) {
      effects.enter(literalMarkerType);
      effects.consume(code3);
      effects.exit(literalMarkerType);
      effects.exit(literalType);
      effects.exit(type);
      return ok2;
    }
    effects.enter(stringType);
    effects.enter("chunkString", {
      contentType: "string"
    });
    return destinationEnclosed(code3);
  }
  function destinationEnclosed(code3) {
    if (code3 === 62) {
      effects.exit("chunkString");
      effects.exit(stringType);
      return destinationEnclosedBefore(code3);
    }
    if (code3 === null || code3 === 60 || markdownLineEnding(code3)) {
      return nok(code3);
    }
    effects.consume(code3);
    return code3 === 92 ? destinationEnclosedEscape : destinationEnclosed;
  }
  function destinationEnclosedEscape(code3) {
    if (code3 === 60 || code3 === 62 || code3 === 92) {
      effects.consume(code3);
      return destinationEnclosed;
    }
    return destinationEnclosed(code3);
  }
  function destinationRaw(code3) {
    if (code3 === 40) {
      if (++balance > limit)
        return nok(code3);
      effects.consume(code3);
      return destinationRaw;
    }
    if (code3 === 41) {
      if (!balance--) {
        effects.exit("chunkString");
        effects.exit(stringType);
        effects.exit(rawType);
        effects.exit(type);
        return ok2(code3);
      }
      effects.consume(code3);
      return destinationRaw;
    }
    if (code3 === null || markdownLineEndingOrSpace(code3)) {
      if (balance)
        return nok(code3);
      effects.exit("chunkString");
      effects.exit(stringType);
      effects.exit(rawType);
      effects.exit(type);
      return ok2(code3);
    }
    if (asciiControl(code3))
      return nok(code3);
    effects.consume(code3);
    return code3 === 92 ? destinationRawEscape : destinationRaw;
  }
  function destinationRawEscape(code3) {
    if (code3 === 40 || code3 === 41 || code3 === 92) {
      effects.consume(code3);
      return destinationRaw;
    }
    return destinationRaw(code3);
  }
}
var init_micromark_factory_destination = __esm({
  "node_modules/micromark-factory-destination/index.js"() {
    init_react();
    init_micromark_util_character();
  }
});

// node_modules/micromark-factory-label/index.js
function factoryLabel(effects, ok2, nok, type, markerType, stringType) {
  const self = this;
  let size = 0;
  let data;
  return start;
  function start(code3) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code3);
    effects.exit(markerType);
    effects.enter(stringType);
    return atBreak;
  }
  function atBreak(code3) {
    if (code3 === null || code3 === 91 || code3 === 93 && !data || code3 === 94 && !size && "_hiddenFootnoteSupport" in self.parser.constructs || size > 999) {
      return nok(code3);
    }
    if (code3 === 93) {
      effects.exit(stringType);
      effects.enter(markerType);
      effects.consume(code3);
      effects.exit(markerType);
      effects.exit(type);
      return ok2;
    }
    if (markdownLineEnding(code3)) {
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      return atBreak;
    }
    effects.enter("chunkString", {
      contentType: "string"
    });
    return label(code3);
  }
  function label(code3) {
    if (code3 === null || code3 === 91 || code3 === 93 || markdownLineEnding(code3) || size++ > 999) {
      effects.exit("chunkString");
      return atBreak(code3);
    }
    effects.consume(code3);
    data = data || !markdownSpace(code3);
    return code3 === 92 ? labelEscape : label;
  }
  function labelEscape(code3) {
    if (code3 === 91 || code3 === 92 || code3 === 93) {
      effects.consume(code3);
      size++;
      return label;
    }
    return label(code3);
  }
}
var init_micromark_factory_label = __esm({
  "node_modules/micromark-factory-label/index.js"() {
    init_react();
    init_micromark_util_character();
  }
});

// node_modules/micromark-factory-title/index.js
function factoryTitle(effects, ok2, nok, type, markerType, stringType) {
  let marker;
  return start;
  function start(code3) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code3);
    effects.exit(markerType);
    marker = code3 === 40 ? 41 : code3;
    return atFirstTitleBreak;
  }
  function atFirstTitleBreak(code3) {
    if (code3 === marker) {
      effects.enter(markerType);
      effects.consume(code3);
      effects.exit(markerType);
      effects.exit(type);
      return ok2;
    }
    effects.enter(stringType);
    return atTitleBreak(code3);
  }
  function atTitleBreak(code3) {
    if (code3 === marker) {
      effects.exit(stringType);
      return atFirstTitleBreak(marker);
    }
    if (code3 === null) {
      return nok(code3);
    }
    if (markdownLineEnding(code3)) {
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      return factorySpace(effects, atTitleBreak, "linePrefix");
    }
    effects.enter("chunkString", {
      contentType: "string"
    });
    return title(code3);
  }
  function title(code3) {
    if (code3 === marker || code3 === null || markdownLineEnding(code3)) {
      effects.exit("chunkString");
      return atTitleBreak(code3);
    }
    effects.consume(code3);
    return code3 === 92 ? titleEscape : title;
  }
  function titleEscape(code3) {
    if (code3 === marker || code3 === 92) {
      effects.consume(code3);
      return title;
    }
    return title(code3);
  }
}
var init_micromark_factory_title = __esm({
  "node_modules/micromark-factory-title/index.js"() {
    init_react();
    init_micromark_factory_space();
    init_micromark_util_character();
  }
});

// node_modules/micromark-factory-whitespace/index.js
function factoryWhitespace(effects, ok2) {
  let seen;
  return start;
  function start(code3) {
    if (markdownLineEnding(code3)) {
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      seen = true;
      return start;
    }
    if (markdownSpace(code3)) {
      return factorySpace(effects, start, seen ? "linePrefix" : "lineSuffix")(code3);
    }
    return ok2(code3);
  }
}
var init_micromark_factory_whitespace = __esm({
  "node_modules/micromark-factory-whitespace/index.js"() {
    init_react();
    init_micromark_factory_space();
    init_micromark_util_character();
  }
});

// node_modules/micromark-util-normalize-identifier/index.js
function normalizeIdentifier(value) {
  return value.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
var init_micromark_util_normalize_identifier = __esm({
  "node_modules/micromark-util-normalize-identifier/index.js"() {
    init_react();
  }
});

// node_modules/micromark-core-commonmark/lib/definition.js
function tokenizeDefinition(effects, ok2, nok) {
  const self = this;
  let identifier;
  return start;
  function start(code3) {
    effects.enter("definition");
    return factoryLabel.call(self, effects, labelAfter, nok, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(code3);
  }
  function labelAfter(code3) {
    identifier = normalizeIdentifier(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1));
    if (code3 === 58) {
      effects.enter("definitionMarker");
      effects.consume(code3);
      effects.exit("definitionMarker");
      return factoryWhitespace(effects, factoryDestination(effects, effects.attempt(titleConstruct, factorySpace(effects, after, "whitespace"), factorySpace(effects, after, "whitespace")), nok, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"));
    }
    return nok(code3);
  }
  function after(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("definition");
      if (!self.parser.defined.includes(identifier)) {
        self.parser.defined.push(identifier);
      }
      return ok2(code3);
    }
    return nok(code3);
  }
}
function tokenizeTitle(effects, ok2, nok) {
  return start;
  function start(code3) {
    return markdownLineEndingOrSpace(code3) ? factoryWhitespace(effects, before)(code3) : nok(code3);
  }
  function before(code3) {
    if (code3 === 34 || code3 === 39 || code3 === 40) {
      return factoryTitle(effects, factorySpace(effects, after, "whitespace"), nok, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(code3);
    }
    return nok(code3);
  }
  function after(code3) {
    return code3 === null || markdownLineEnding(code3) ? ok2(code3) : nok(code3);
  }
}
var definition, titleConstruct;
var init_definition = __esm({
  "node_modules/micromark-core-commonmark/lib/definition.js"() {
    init_react();
    init_micromark_factory_destination();
    init_micromark_factory_label();
    init_micromark_factory_space();
    init_micromark_factory_title();
    init_micromark_factory_whitespace();
    init_micromark_util_normalize_identifier();
    init_micromark_util_character();
    definition = {
      name: "definition",
      tokenize: tokenizeDefinition
    };
    titleConstruct = {
      tokenize: tokenizeTitle,
      partial: true
    };
  }
});

// node_modules/micromark-core-commonmark/lib/hard-break-escape.js
function tokenizeHardBreakEscape(effects, ok2, nok) {
  return start;
  function start(code3) {
    effects.enter("hardBreakEscape");
    effects.enter("escapeMarker");
    effects.consume(code3);
    return open;
  }
  function open(code3) {
    if (markdownLineEnding(code3)) {
      effects.exit("escapeMarker");
      effects.exit("hardBreakEscape");
      return ok2(code3);
    }
    return nok(code3);
  }
}
var hardBreakEscape;
var init_hard_break_escape = __esm({
  "node_modules/micromark-core-commonmark/lib/hard-break-escape.js"() {
    init_react();
    init_micromark_util_character();
    hardBreakEscape = {
      name: "hardBreakEscape",
      tokenize: tokenizeHardBreakEscape
    };
  }
});

// node_modules/micromark-core-commonmark/lib/heading-atx.js
function resolveHeadingAtx(events, context) {
  let contentEnd = events.length - 2;
  let contentStart = 3;
  let content5;
  let text9;
  if (events[contentStart][1].type === "whitespace") {
    contentStart += 2;
  }
  if (contentEnd - 2 > contentStart && events[contentEnd][1].type === "whitespace") {
    contentEnd -= 2;
  }
  if (events[contentEnd][1].type === "atxHeadingSequence" && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === "whitespace")) {
    contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
  }
  if (contentEnd > contentStart) {
    content5 = {
      type: "atxHeadingText",
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end
    };
    text9 = {
      type: "chunkText",
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end,
      contentType: "text"
    };
    splice(events, contentStart, contentEnd - contentStart + 1, [
      ["enter", content5, context],
      ["enter", text9, context],
      ["exit", text9, context],
      ["exit", content5, context]
    ]);
  }
  return events;
}
function tokenizeHeadingAtx(effects, ok2, nok) {
  const self = this;
  let size = 0;
  return start;
  function start(code3) {
    effects.enter("atxHeading");
    effects.enter("atxHeadingSequence");
    return fenceOpenInside(code3);
  }
  function fenceOpenInside(code3) {
    if (code3 === 35 && size++ < 6) {
      effects.consume(code3);
      return fenceOpenInside;
    }
    if (code3 === null || markdownLineEndingOrSpace(code3)) {
      effects.exit("atxHeadingSequence");
      return self.interrupt ? ok2(code3) : headingBreak(code3);
    }
    return nok(code3);
  }
  function headingBreak(code3) {
    if (code3 === 35) {
      effects.enter("atxHeadingSequence");
      return sequence(code3);
    }
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("atxHeading");
      return ok2(code3);
    }
    if (markdownSpace(code3)) {
      return factorySpace(effects, headingBreak, "whitespace")(code3);
    }
    effects.enter("atxHeadingText");
    return data(code3);
  }
  function sequence(code3) {
    if (code3 === 35) {
      effects.consume(code3);
      return sequence;
    }
    effects.exit("atxHeadingSequence");
    return headingBreak(code3);
  }
  function data(code3) {
    if (code3 === null || code3 === 35 || markdownLineEndingOrSpace(code3)) {
      effects.exit("atxHeadingText");
      return headingBreak(code3);
    }
    effects.consume(code3);
    return data;
  }
}
var headingAtx;
var init_heading_atx = __esm({
  "node_modules/micromark-core-commonmark/lib/heading-atx.js"() {
    init_react();
    init_micromark_factory_space();
    init_micromark_util_character();
    init_micromark_util_chunked();
    headingAtx = {
      name: "headingAtx",
      tokenize: tokenizeHeadingAtx,
      resolve: resolveHeadingAtx
    };
  }
});

// node_modules/micromark-util-html-tag-name/index.js
var htmlBlockNames, htmlRawNames;
var init_micromark_util_html_tag_name = __esm({
  "node_modules/micromark-util-html-tag-name/index.js"() {
    init_react();
    htmlBlockNames = [
      "address",
      "article",
      "aside",
      "base",
      "basefont",
      "blockquote",
      "body",
      "caption",
      "center",
      "col",
      "colgroup",
      "dd",
      "details",
      "dialog",
      "dir",
      "div",
      "dl",
      "dt",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "frame",
      "frameset",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hr",
      "html",
      "iframe",
      "legend",
      "li",
      "link",
      "main",
      "menu",
      "menuitem",
      "nav",
      "noframes",
      "ol",
      "optgroup",
      "option",
      "p",
      "param",
      "section",
      "source",
      "summary",
      "table",
      "tbody",
      "td",
      "tfoot",
      "th",
      "thead",
      "title",
      "tr",
      "track",
      "ul"
    ];
    htmlRawNames = ["pre", "script", "style", "textarea"];
  }
});

// node_modules/micromark-core-commonmark/lib/html-flow.js
function resolveToHtmlFlow(events) {
  let index2 = events.length;
  while (index2--) {
    if (events[index2][0] === "enter" && events[index2][1].type === "htmlFlow") {
      break;
    }
  }
  if (index2 > 1 && events[index2 - 2][1].type === "linePrefix") {
    events[index2][1].start = events[index2 - 2][1].start;
    events[index2 + 1][1].start = events[index2 - 2][1].start;
    events.splice(index2 - 2, 2);
  }
  return events;
}
function tokenizeHtmlFlow(effects, ok2, nok) {
  const self = this;
  let kind;
  let startTag2;
  let buffer;
  let index2;
  let marker;
  return start;
  function start(code3) {
    effects.enter("htmlFlow");
    effects.enter("htmlFlowData");
    effects.consume(code3);
    return open;
  }
  function open(code3) {
    if (code3 === 33) {
      effects.consume(code3);
      return declarationStart;
    }
    if (code3 === 47) {
      effects.consume(code3);
      return tagCloseStart;
    }
    if (code3 === 63) {
      effects.consume(code3);
      kind = 3;
      return self.interrupt ? ok2 : continuationDeclarationInside;
    }
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      buffer = String.fromCharCode(code3);
      startTag2 = true;
      return tagName;
    }
    return nok(code3);
  }
  function declarationStart(code3) {
    if (code3 === 45) {
      effects.consume(code3);
      kind = 2;
      return commentOpenInside;
    }
    if (code3 === 91) {
      effects.consume(code3);
      kind = 5;
      buffer = "CDATA[";
      index2 = 0;
      return cdataOpenInside;
    }
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      kind = 4;
      return self.interrupt ? ok2 : continuationDeclarationInside;
    }
    return nok(code3);
  }
  function commentOpenInside(code3) {
    if (code3 === 45) {
      effects.consume(code3);
      return self.interrupt ? ok2 : continuationDeclarationInside;
    }
    return nok(code3);
  }
  function cdataOpenInside(code3) {
    if (code3 === buffer.charCodeAt(index2++)) {
      effects.consume(code3);
      return index2 === buffer.length ? self.interrupt ? ok2 : continuation : cdataOpenInside;
    }
    return nok(code3);
  }
  function tagCloseStart(code3) {
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      buffer = String.fromCharCode(code3);
      return tagName;
    }
    return nok(code3);
  }
  function tagName(code3) {
    if (code3 === null || code3 === 47 || code3 === 62 || markdownLineEndingOrSpace(code3)) {
      if (code3 !== 47 && startTag2 && htmlRawNames.includes(buffer.toLowerCase())) {
        kind = 1;
        return self.interrupt ? ok2(code3) : continuation(code3);
      }
      if (htmlBlockNames.includes(buffer.toLowerCase())) {
        kind = 6;
        if (code3 === 47) {
          effects.consume(code3);
          return basicSelfClosing;
        }
        return self.interrupt ? ok2(code3) : continuation(code3);
      }
      kind = 7;
      return self.interrupt && !self.parser.lazy[self.now().line] ? nok(code3) : startTag2 ? completeAttributeNameBefore(code3) : completeClosingTagAfter(code3);
    }
    if (code3 === 45 || asciiAlphanumeric(code3)) {
      effects.consume(code3);
      buffer += String.fromCharCode(code3);
      return tagName;
    }
    return nok(code3);
  }
  function basicSelfClosing(code3) {
    if (code3 === 62) {
      effects.consume(code3);
      return self.interrupt ? ok2 : continuation;
    }
    return nok(code3);
  }
  function completeClosingTagAfter(code3) {
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return completeClosingTagAfter;
    }
    return completeEnd(code3);
  }
  function completeAttributeNameBefore(code3) {
    if (code3 === 47) {
      effects.consume(code3);
      return completeEnd;
    }
    if (code3 === 58 || code3 === 95 || asciiAlpha(code3)) {
      effects.consume(code3);
      return completeAttributeName;
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return completeAttributeNameBefore;
    }
    return completeEnd(code3);
  }
  function completeAttributeName(code3) {
    if (code3 === 45 || code3 === 46 || code3 === 58 || code3 === 95 || asciiAlphanumeric(code3)) {
      effects.consume(code3);
      return completeAttributeName;
    }
    return completeAttributeNameAfter(code3);
  }
  function completeAttributeNameAfter(code3) {
    if (code3 === 61) {
      effects.consume(code3);
      return completeAttributeValueBefore;
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return completeAttributeNameAfter;
    }
    return completeAttributeNameBefore(code3);
  }
  function completeAttributeValueBefore(code3) {
    if (code3 === null || code3 === 60 || code3 === 61 || code3 === 62 || code3 === 96) {
      return nok(code3);
    }
    if (code3 === 34 || code3 === 39) {
      effects.consume(code3);
      marker = code3;
      return completeAttributeValueQuoted;
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return completeAttributeValueBefore;
    }
    marker = null;
    return completeAttributeValueUnquoted(code3);
  }
  function completeAttributeValueQuoted(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      return nok(code3);
    }
    if (code3 === marker) {
      effects.consume(code3);
      return completeAttributeValueQuotedAfter;
    }
    effects.consume(code3);
    return completeAttributeValueQuoted;
  }
  function completeAttributeValueUnquoted(code3) {
    if (code3 === null || code3 === 34 || code3 === 39 || code3 === 60 || code3 === 61 || code3 === 62 || code3 === 96 || markdownLineEndingOrSpace(code3)) {
      return completeAttributeNameAfter(code3);
    }
    effects.consume(code3);
    return completeAttributeValueUnquoted;
  }
  function completeAttributeValueQuotedAfter(code3) {
    if (code3 === 47 || code3 === 62 || markdownSpace(code3)) {
      return completeAttributeNameBefore(code3);
    }
    return nok(code3);
  }
  function completeEnd(code3) {
    if (code3 === 62) {
      effects.consume(code3);
      return completeAfter;
    }
    return nok(code3);
  }
  function completeAfter(code3) {
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return completeAfter;
    }
    return code3 === null || markdownLineEnding(code3) ? continuation(code3) : nok(code3);
  }
  function continuation(code3) {
    if (code3 === 45 && kind === 2) {
      effects.consume(code3);
      return continuationCommentInside;
    }
    if (code3 === 60 && kind === 1) {
      effects.consume(code3);
      return continuationRawTagOpen;
    }
    if (code3 === 62 && kind === 4) {
      effects.consume(code3);
      return continuationClose;
    }
    if (code3 === 63 && kind === 3) {
      effects.consume(code3);
      return continuationDeclarationInside;
    }
    if (code3 === 93 && kind === 5) {
      effects.consume(code3);
      return continuationCharacterDataInside;
    }
    if (markdownLineEnding(code3) && (kind === 6 || kind === 7)) {
      return effects.check(nextBlankConstruct, continuationClose, continuationAtLineEnding)(code3);
    }
    if (code3 === null || markdownLineEnding(code3)) {
      return continuationAtLineEnding(code3);
    }
    effects.consume(code3);
    return continuation;
  }
  function continuationAtLineEnding(code3) {
    effects.exit("htmlFlowData");
    return htmlContinueStart(code3);
  }
  function htmlContinueStart(code3) {
    if (code3 === null) {
      return done(code3);
    }
    if (markdownLineEnding(code3)) {
      return effects.attempt({
        tokenize: htmlLineEnd,
        partial: true
      }, htmlContinueStart, done)(code3);
    }
    effects.enter("htmlFlowData");
    return continuation(code3);
  }
  function htmlLineEnd(effects2, ok3, nok2) {
    return start2;
    function start2(code3) {
      effects2.enter("lineEnding");
      effects2.consume(code3);
      effects2.exit("lineEnding");
      return lineStart;
    }
    function lineStart(code3) {
      return self.parser.lazy[self.now().line] ? nok2(code3) : ok3(code3);
    }
  }
  function continuationCommentInside(code3) {
    if (code3 === 45) {
      effects.consume(code3);
      return continuationDeclarationInside;
    }
    return continuation(code3);
  }
  function continuationRawTagOpen(code3) {
    if (code3 === 47) {
      effects.consume(code3);
      buffer = "";
      return continuationRawEndTag;
    }
    return continuation(code3);
  }
  function continuationRawEndTag(code3) {
    if (code3 === 62 && htmlRawNames.includes(buffer.toLowerCase())) {
      effects.consume(code3);
      return continuationClose;
    }
    if (asciiAlpha(code3) && buffer.length < 8) {
      effects.consume(code3);
      buffer += String.fromCharCode(code3);
      return continuationRawEndTag;
    }
    return continuation(code3);
  }
  function continuationCharacterDataInside(code3) {
    if (code3 === 93) {
      effects.consume(code3);
      return continuationDeclarationInside;
    }
    return continuation(code3);
  }
  function continuationDeclarationInside(code3) {
    if (code3 === 62) {
      effects.consume(code3);
      return continuationClose;
    }
    if (code3 === 45 && kind === 2) {
      effects.consume(code3);
      return continuationDeclarationInside;
    }
    return continuation(code3);
  }
  function continuationClose(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("htmlFlowData");
      return done(code3);
    }
    effects.consume(code3);
    return continuationClose;
  }
  function done(code3) {
    effects.exit("htmlFlow");
    return ok2(code3);
  }
}
function tokenizeNextBlank(effects, ok2, nok) {
  return start;
  function start(code3) {
    effects.exit("htmlFlowData");
    effects.enter("lineEndingBlank");
    effects.consume(code3);
    effects.exit("lineEndingBlank");
    return effects.attempt(blankLine, ok2, nok);
  }
}
var htmlFlow, nextBlankConstruct;
var init_html_flow = __esm({
  "node_modules/micromark-core-commonmark/lib/html-flow.js"() {
    init_react();
    init_micromark_util_character();
    init_micromark_util_html_tag_name();
    init_blank_line();
    htmlFlow = {
      name: "htmlFlow",
      tokenize: tokenizeHtmlFlow,
      resolveTo: resolveToHtmlFlow,
      concrete: true
    };
    nextBlankConstruct = {
      tokenize: tokenizeNextBlank,
      partial: true
    };
  }
});

// node_modules/micromark-core-commonmark/lib/html-text.js
function tokenizeHtmlText(effects, ok2, nok) {
  const self = this;
  let marker;
  let buffer;
  let index2;
  let returnState;
  return start;
  function start(code3) {
    effects.enter("htmlText");
    effects.enter("htmlTextData");
    effects.consume(code3);
    return open;
  }
  function open(code3) {
    if (code3 === 33) {
      effects.consume(code3);
      return declarationOpen;
    }
    if (code3 === 47) {
      effects.consume(code3);
      return tagCloseStart;
    }
    if (code3 === 63) {
      effects.consume(code3);
      return instruction;
    }
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      return tagOpen;
    }
    return nok(code3);
  }
  function declarationOpen(code3) {
    if (code3 === 45) {
      effects.consume(code3);
      return commentOpen;
    }
    if (code3 === 91) {
      effects.consume(code3);
      buffer = "CDATA[";
      index2 = 0;
      return cdataOpen;
    }
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      return declaration;
    }
    return nok(code3);
  }
  function commentOpen(code3) {
    if (code3 === 45) {
      effects.consume(code3);
      return commentStart;
    }
    return nok(code3);
  }
  function commentStart(code3) {
    if (code3 === null || code3 === 62) {
      return nok(code3);
    }
    if (code3 === 45) {
      effects.consume(code3);
      return commentStartDash;
    }
    return comment5(code3);
  }
  function commentStartDash(code3) {
    if (code3 === null || code3 === 62) {
      return nok(code3);
    }
    return comment5(code3);
  }
  function comment5(code3) {
    if (code3 === null) {
      return nok(code3);
    }
    if (code3 === 45) {
      effects.consume(code3);
      return commentClose;
    }
    if (markdownLineEnding(code3)) {
      returnState = comment5;
      return atLineEnding(code3);
    }
    effects.consume(code3);
    return comment5;
  }
  function commentClose(code3) {
    if (code3 === 45) {
      effects.consume(code3);
      return end;
    }
    return comment5(code3);
  }
  function cdataOpen(code3) {
    if (code3 === buffer.charCodeAt(index2++)) {
      effects.consume(code3);
      return index2 === buffer.length ? cdata : cdataOpen;
    }
    return nok(code3);
  }
  function cdata(code3) {
    if (code3 === null) {
      return nok(code3);
    }
    if (code3 === 93) {
      effects.consume(code3);
      return cdataClose;
    }
    if (markdownLineEnding(code3)) {
      returnState = cdata;
      return atLineEnding(code3);
    }
    effects.consume(code3);
    return cdata;
  }
  function cdataClose(code3) {
    if (code3 === 93) {
      effects.consume(code3);
      return cdataEnd;
    }
    return cdata(code3);
  }
  function cdataEnd(code3) {
    if (code3 === 62) {
      return end(code3);
    }
    if (code3 === 93) {
      effects.consume(code3);
      return cdataEnd;
    }
    return cdata(code3);
  }
  function declaration(code3) {
    if (code3 === null || code3 === 62) {
      return end(code3);
    }
    if (markdownLineEnding(code3)) {
      returnState = declaration;
      return atLineEnding(code3);
    }
    effects.consume(code3);
    return declaration;
  }
  function instruction(code3) {
    if (code3 === null) {
      return nok(code3);
    }
    if (code3 === 63) {
      effects.consume(code3);
      return instructionClose;
    }
    if (markdownLineEnding(code3)) {
      returnState = instruction;
      return atLineEnding(code3);
    }
    effects.consume(code3);
    return instruction;
  }
  function instructionClose(code3) {
    return code3 === 62 ? end(code3) : instruction(code3);
  }
  function tagCloseStart(code3) {
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      return tagClose;
    }
    return nok(code3);
  }
  function tagClose(code3) {
    if (code3 === 45 || asciiAlphanumeric(code3)) {
      effects.consume(code3);
      return tagClose;
    }
    return tagCloseBetween(code3);
  }
  function tagCloseBetween(code3) {
    if (markdownLineEnding(code3)) {
      returnState = tagCloseBetween;
      return atLineEnding(code3);
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return tagCloseBetween;
    }
    return end(code3);
  }
  function tagOpen(code3) {
    if (code3 === 45 || asciiAlphanumeric(code3)) {
      effects.consume(code3);
      return tagOpen;
    }
    if (code3 === 47 || code3 === 62 || markdownLineEndingOrSpace(code3)) {
      return tagOpenBetween(code3);
    }
    return nok(code3);
  }
  function tagOpenBetween(code3) {
    if (code3 === 47) {
      effects.consume(code3);
      return end;
    }
    if (code3 === 58 || code3 === 95 || asciiAlpha(code3)) {
      effects.consume(code3);
      return tagOpenAttributeName;
    }
    if (markdownLineEnding(code3)) {
      returnState = tagOpenBetween;
      return atLineEnding(code3);
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return tagOpenBetween;
    }
    return end(code3);
  }
  function tagOpenAttributeName(code3) {
    if (code3 === 45 || code3 === 46 || code3 === 58 || code3 === 95 || asciiAlphanumeric(code3)) {
      effects.consume(code3);
      return tagOpenAttributeName;
    }
    return tagOpenAttributeNameAfter(code3);
  }
  function tagOpenAttributeNameAfter(code3) {
    if (code3 === 61) {
      effects.consume(code3);
      return tagOpenAttributeValueBefore;
    }
    if (markdownLineEnding(code3)) {
      returnState = tagOpenAttributeNameAfter;
      return atLineEnding(code3);
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return tagOpenAttributeNameAfter;
    }
    return tagOpenBetween(code3);
  }
  function tagOpenAttributeValueBefore(code3) {
    if (code3 === null || code3 === 60 || code3 === 61 || code3 === 62 || code3 === 96) {
      return nok(code3);
    }
    if (code3 === 34 || code3 === 39) {
      effects.consume(code3);
      marker = code3;
      return tagOpenAttributeValueQuoted;
    }
    if (markdownLineEnding(code3)) {
      returnState = tagOpenAttributeValueBefore;
      return atLineEnding(code3);
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return tagOpenAttributeValueBefore;
    }
    effects.consume(code3);
    marker = void 0;
    return tagOpenAttributeValueUnquoted;
  }
  function tagOpenAttributeValueQuoted(code3) {
    if (code3 === marker) {
      effects.consume(code3);
      return tagOpenAttributeValueQuotedAfter;
    }
    if (code3 === null) {
      return nok(code3);
    }
    if (markdownLineEnding(code3)) {
      returnState = tagOpenAttributeValueQuoted;
      return atLineEnding(code3);
    }
    effects.consume(code3);
    return tagOpenAttributeValueQuoted;
  }
  function tagOpenAttributeValueQuotedAfter(code3) {
    if (code3 === 62 || code3 === 47 || markdownLineEndingOrSpace(code3)) {
      return tagOpenBetween(code3);
    }
    return nok(code3);
  }
  function tagOpenAttributeValueUnquoted(code3) {
    if (code3 === null || code3 === 34 || code3 === 39 || code3 === 60 || code3 === 61 || code3 === 96) {
      return nok(code3);
    }
    if (code3 === 62 || markdownLineEndingOrSpace(code3)) {
      return tagOpenBetween(code3);
    }
    effects.consume(code3);
    return tagOpenAttributeValueUnquoted;
  }
  function atLineEnding(code3) {
    effects.exit("htmlTextData");
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    return factorySpace(effects, afterPrefix, "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
  }
  function afterPrefix(code3) {
    effects.enter("htmlTextData");
    return returnState(code3);
  }
  function end(code3) {
    if (code3 === 62) {
      effects.consume(code3);
      effects.exit("htmlTextData");
      effects.exit("htmlText");
      return ok2;
    }
    return nok(code3);
  }
}
var htmlText;
var init_html_text = __esm({
  "node_modules/micromark-core-commonmark/lib/html-text.js"() {
    init_react();
    init_micromark_factory_space();
    init_micromark_util_character();
    htmlText = {
      name: "htmlText",
      tokenize: tokenizeHtmlText
    };
  }
});

// node_modules/micromark-core-commonmark/lib/label-end.js
function resolveAllLabelEnd(events) {
  let index2 = -1;
  let token;
  while (++index2 < events.length) {
    token = events[index2][1];
    if (token.type === "labelImage" || token.type === "labelLink" || token.type === "labelEnd") {
      events.splice(index2 + 1, token.type === "labelImage" ? 4 : 2);
      token.type = "data";
      index2++;
    }
  }
  return events;
}
function resolveToLabelEnd(events, context) {
  let index2 = events.length;
  let offset = 0;
  let token;
  let open;
  let close;
  let media;
  while (index2--) {
    token = events[index2][1];
    if (open) {
      if (token.type === "link" || token.type === "labelLink" && token._inactive) {
        break;
      }
      if (events[index2][0] === "enter" && token.type === "labelLink") {
        token._inactive = true;
      }
    } else if (close) {
      if (events[index2][0] === "enter" && (token.type === "labelImage" || token.type === "labelLink") && !token._balanced) {
        open = index2;
        if (token.type !== "labelLink") {
          offset = 2;
          break;
        }
      }
    } else if (token.type === "labelEnd") {
      close = index2;
    }
  }
  const group = {
    type: events[open][1].type === "labelLink" ? "link" : "image",
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  const label = {
    type: "label",
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[close][1].end)
  };
  const text9 = {
    type: "labelText",
    start: Object.assign({}, events[open + offset + 2][1].end),
    end: Object.assign({}, events[close - 2][1].start)
  };
  media = [
    ["enter", group, context],
    ["enter", label, context]
  ];
  media = push(media, events.slice(open + 1, open + offset + 3));
  media = push(media, [["enter", text9, context]]);
  media = push(media, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + offset + 4, close - 3), context));
  media = push(media, [
    ["exit", text9, context],
    events[close - 2],
    events[close - 1],
    ["exit", label, context]
  ]);
  media = push(media, events.slice(close + 1));
  media = push(media, [["exit", group, context]]);
  splice(events, open, events.length, media);
  return events;
}
function tokenizeLabelEnd(effects, ok2, nok) {
  const self = this;
  let index2 = self.events.length;
  let labelStart;
  let defined;
  while (index2--) {
    if ((self.events[index2][1].type === "labelImage" || self.events[index2][1].type === "labelLink") && !self.events[index2][1]._balanced) {
      labelStart = self.events[index2][1];
      break;
    }
  }
  return start;
  function start(code3) {
    if (!labelStart) {
      return nok(code3);
    }
    if (labelStart._inactive)
      return balanced(code3);
    defined = self.parser.defined.includes(normalizeIdentifier(self.sliceSerialize({
      start: labelStart.end,
      end: self.now()
    })));
    effects.enter("labelEnd");
    effects.enter("labelMarker");
    effects.consume(code3);
    effects.exit("labelMarker");
    effects.exit("labelEnd");
    return afterLabelEnd;
  }
  function afterLabelEnd(code3) {
    if (code3 === 40) {
      return effects.attempt(resourceConstruct, ok2, defined ? ok2 : balanced)(code3);
    }
    if (code3 === 91) {
      return effects.attempt(fullReferenceConstruct, ok2, defined ? effects.attempt(collapsedReferenceConstruct, ok2, balanced) : balanced)(code3);
    }
    return defined ? ok2(code3) : balanced(code3);
  }
  function balanced(code3) {
    labelStart._balanced = true;
    return nok(code3);
  }
}
function tokenizeResource(effects, ok2, nok) {
  return start;
  function start(code3) {
    effects.enter("resource");
    effects.enter("resourceMarker");
    effects.consume(code3);
    effects.exit("resourceMarker");
    return factoryWhitespace(effects, open);
  }
  function open(code3) {
    if (code3 === 41) {
      return end(code3);
    }
    return factoryDestination(effects, destinationAfter, nok, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(code3);
  }
  function destinationAfter(code3) {
    return markdownLineEndingOrSpace(code3) ? factoryWhitespace(effects, between)(code3) : end(code3);
  }
  function between(code3) {
    if (code3 === 34 || code3 === 39 || code3 === 40) {
      return factoryTitle(effects, factoryWhitespace(effects, end), nok, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(code3);
    }
    return end(code3);
  }
  function end(code3) {
    if (code3 === 41) {
      effects.enter("resourceMarker");
      effects.consume(code3);
      effects.exit("resourceMarker");
      effects.exit("resource");
      return ok2;
    }
    return nok(code3);
  }
}
function tokenizeFullReference(effects, ok2, nok) {
  const self = this;
  return start;
  function start(code3) {
    return factoryLabel.call(self, effects, afterLabel, nok, "reference", "referenceMarker", "referenceString")(code3);
  }
  function afterLabel(code3) {
    return self.parser.defined.includes(normalizeIdentifier(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1))) ? ok2(code3) : nok(code3);
  }
}
function tokenizeCollapsedReference(effects, ok2, nok) {
  return start;
  function start(code3) {
    effects.enter("reference");
    effects.enter("referenceMarker");
    effects.consume(code3);
    effects.exit("referenceMarker");
    return open;
  }
  function open(code3) {
    if (code3 === 93) {
      effects.enter("referenceMarker");
      effects.consume(code3);
      effects.exit("referenceMarker");
      effects.exit("reference");
      return ok2;
    }
    return nok(code3);
  }
}
var labelEnd, resourceConstruct, fullReferenceConstruct, collapsedReferenceConstruct;
var init_label_end = __esm({
  "node_modules/micromark-core-commonmark/lib/label-end.js"() {
    init_react();
    init_micromark_factory_destination();
    init_micromark_factory_label();
    init_micromark_factory_title();
    init_micromark_factory_whitespace();
    init_micromark_util_character();
    init_micromark_util_chunked();
    init_micromark_util_normalize_identifier();
    init_micromark_util_resolve_all();
    labelEnd = {
      name: "labelEnd",
      tokenize: tokenizeLabelEnd,
      resolveTo: resolveToLabelEnd,
      resolveAll: resolveAllLabelEnd
    };
    resourceConstruct = {
      tokenize: tokenizeResource
    };
    fullReferenceConstruct = {
      tokenize: tokenizeFullReference
    };
    collapsedReferenceConstruct = {
      tokenize: tokenizeCollapsedReference
    };
  }
});

// node_modules/micromark-core-commonmark/lib/label-start-image.js
function tokenizeLabelStartImage(effects, ok2, nok) {
  const self = this;
  return start;
  function start(code3) {
    effects.enter("labelImage");
    effects.enter("labelImageMarker");
    effects.consume(code3);
    effects.exit("labelImageMarker");
    return open;
  }
  function open(code3) {
    if (code3 === 91) {
      effects.enter("labelMarker");
      effects.consume(code3);
      effects.exit("labelMarker");
      effects.exit("labelImage");
      return after;
    }
    return nok(code3);
  }
  function after(code3) {
    return code3 === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code3) : ok2(code3);
  }
}
var labelStartImage;
var init_label_start_image = __esm({
  "node_modules/micromark-core-commonmark/lib/label-start-image.js"() {
    init_react();
    init_label_end();
    labelStartImage = {
      name: "labelStartImage",
      tokenize: tokenizeLabelStartImage,
      resolveAll: labelEnd.resolveAll
    };
  }
});

// node_modules/micromark-core-commonmark/lib/label-start-link.js
function tokenizeLabelStartLink(effects, ok2, nok) {
  const self = this;
  return start;
  function start(code3) {
    effects.enter("labelLink");
    effects.enter("labelMarker");
    effects.consume(code3);
    effects.exit("labelMarker");
    effects.exit("labelLink");
    return after;
  }
  function after(code3) {
    return code3 === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code3) : ok2(code3);
  }
}
var labelStartLink;
var init_label_start_link = __esm({
  "node_modules/micromark-core-commonmark/lib/label-start-link.js"() {
    init_react();
    init_label_end();
    labelStartLink = {
      name: "labelStartLink",
      tokenize: tokenizeLabelStartLink,
      resolveAll: labelEnd.resolveAll
    };
  }
});

// node_modules/micromark-core-commonmark/lib/line-ending.js
function tokenizeLineEnding(effects, ok2) {
  return start;
  function start(code3) {
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    return factorySpace(effects, ok2, "linePrefix");
  }
}
var lineEnding;
var init_line_ending = __esm({
  "node_modules/micromark-core-commonmark/lib/line-ending.js"() {
    init_react();
    init_micromark_factory_space();
    lineEnding = {
      name: "lineEnding",
      tokenize: tokenizeLineEnding
    };
  }
});

// node_modules/micromark-core-commonmark/lib/thematic-break.js
function tokenizeThematicBreak(effects, ok2, nok) {
  let size = 0;
  let marker;
  return start;
  function start(code3) {
    effects.enter("thematicBreak");
    marker = code3;
    return atBreak(code3);
  }
  function atBreak(code3) {
    if (code3 === marker) {
      effects.enter("thematicBreakSequence");
      return sequence(code3);
    }
    if (markdownSpace(code3)) {
      return factorySpace(effects, atBreak, "whitespace")(code3);
    }
    if (size < 3 || code3 !== null && !markdownLineEnding(code3)) {
      return nok(code3);
    }
    effects.exit("thematicBreak");
    return ok2(code3);
  }
  function sequence(code3) {
    if (code3 === marker) {
      effects.consume(code3);
      size++;
      return sequence;
    }
    effects.exit("thematicBreakSequence");
    return atBreak(code3);
  }
}
var thematicBreak;
var init_thematic_break = __esm({
  "node_modules/micromark-core-commonmark/lib/thematic-break.js"() {
    init_react();
    init_micromark_factory_space();
    init_micromark_util_character();
    thematicBreak = {
      name: "thematicBreak",
      tokenize: tokenizeThematicBreak
    };
  }
});

// node_modules/micromark-core-commonmark/lib/list.js
function tokenizeListStart(effects, ok2, nok) {
  const self = this;
  const tail = self.events[self.events.length - 1];
  let initialSize = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
  let size = 0;
  return start;
  function start(code3) {
    const kind = self.containerState.type || (code3 === 42 || code3 === 43 || code3 === 45 ? "listUnordered" : "listOrdered");
    if (kind === "listUnordered" ? !self.containerState.marker || code3 === self.containerState.marker : asciiDigit(code3)) {
      if (!self.containerState.type) {
        self.containerState.type = kind;
        effects.enter(kind, {
          _container: true
        });
      }
      if (kind === "listUnordered") {
        effects.enter("listItemPrefix");
        return code3 === 42 || code3 === 45 ? effects.check(thematicBreak, nok, atMarker)(code3) : atMarker(code3);
      }
      if (!self.interrupt || code3 === 49) {
        effects.enter("listItemPrefix");
        effects.enter("listItemValue");
        return inside(code3);
      }
    }
    return nok(code3);
  }
  function inside(code3) {
    if (asciiDigit(code3) && ++size < 10) {
      effects.consume(code3);
      return inside;
    }
    if ((!self.interrupt || size < 2) && (self.containerState.marker ? code3 === self.containerState.marker : code3 === 41 || code3 === 46)) {
      effects.exit("listItemValue");
      return atMarker(code3);
    }
    return nok(code3);
  }
  function atMarker(code3) {
    effects.enter("listItemMarker");
    effects.consume(code3);
    effects.exit("listItemMarker");
    self.containerState.marker = self.containerState.marker || code3;
    return effects.check(blankLine, self.interrupt ? nok : onBlank, effects.attempt(listItemPrefixWhitespaceConstruct, endOfPrefix, otherPrefix));
  }
  function onBlank(code3) {
    self.containerState.initialBlankLine = true;
    initialSize++;
    return endOfPrefix(code3);
  }
  function otherPrefix(code3) {
    if (markdownSpace(code3)) {
      effects.enter("listItemPrefixWhitespace");
      effects.consume(code3);
      effects.exit("listItemPrefixWhitespace");
      return endOfPrefix;
    }
    return nok(code3);
  }
  function endOfPrefix(code3) {
    self.containerState.size = initialSize + self.sliceSerialize(effects.exit("listItemPrefix"), true).length;
    return ok2(code3);
  }
}
function tokenizeListContinuation(effects, ok2, nok) {
  const self = this;
  self.containerState._closeFlow = void 0;
  return effects.check(blankLine, onBlank, notBlank);
  function onBlank(code3) {
    self.containerState.furtherBlankLines = self.containerState.furtherBlankLines || self.containerState.initialBlankLine;
    return factorySpace(effects, ok2, "listItemIndent", self.containerState.size + 1)(code3);
  }
  function notBlank(code3) {
    if (self.containerState.furtherBlankLines || !markdownSpace(code3)) {
      self.containerState.furtherBlankLines = void 0;
      self.containerState.initialBlankLine = void 0;
      return notInCurrentItem(code3);
    }
    self.containerState.furtherBlankLines = void 0;
    self.containerState.initialBlankLine = void 0;
    return effects.attempt(indentConstruct, ok2, notInCurrentItem)(code3);
  }
  function notInCurrentItem(code3) {
    self.containerState._closeFlow = true;
    self.interrupt = void 0;
    return factorySpace(effects, effects.attempt(list, ok2, nok), "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code3);
  }
}
function tokenizeIndent(effects, ok2, nok) {
  const self = this;
  return factorySpace(effects, afterPrefix, "listItemIndent", self.containerState.size + 1);
  function afterPrefix(code3) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "listItemIndent" && tail[2].sliceSerialize(tail[1], true).length === self.containerState.size ? ok2(code3) : nok(code3);
  }
}
function tokenizeListEnd(effects) {
  effects.exit(this.containerState.type);
}
function tokenizeListItemPrefixWhitespace(effects, ok2, nok) {
  const self = this;
  return factorySpace(effects, afterPrefix, "listItemPrefixWhitespace", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1);
  function afterPrefix(code3) {
    const tail = self.events[self.events.length - 1];
    return !markdownSpace(code3) && tail && tail[1].type === "listItemPrefixWhitespace" ? ok2(code3) : nok(code3);
  }
}
var list, listItemPrefixWhitespaceConstruct, indentConstruct;
var init_list = __esm({
  "node_modules/micromark-core-commonmark/lib/list.js"() {
    init_react();
    init_micromark_factory_space();
    init_micromark_util_character();
    init_blank_line();
    init_thematic_break();
    list = {
      name: "list",
      tokenize: tokenizeListStart,
      continuation: {
        tokenize: tokenizeListContinuation
      },
      exit: tokenizeListEnd
    };
    listItemPrefixWhitespaceConstruct = {
      tokenize: tokenizeListItemPrefixWhitespace,
      partial: true
    };
    indentConstruct = {
      tokenize: tokenizeIndent,
      partial: true
    };
  }
});

// node_modules/micromark-core-commonmark/lib/setext-underline.js
function resolveToSetextUnderline(events, context) {
  let index2 = events.length;
  let content5;
  let text9;
  let definition2;
  while (index2--) {
    if (events[index2][0] === "enter") {
      if (events[index2][1].type === "content") {
        content5 = index2;
        break;
      }
      if (events[index2][1].type === "paragraph") {
        text9 = index2;
      }
    } else {
      if (events[index2][1].type === "content") {
        events.splice(index2, 1);
      }
      if (!definition2 && events[index2][1].type === "definition") {
        definition2 = index2;
      }
    }
  }
  const heading2 = {
    type: "setextHeading",
    start: Object.assign({}, events[text9][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  events[text9][1].type = "setextHeadingText";
  if (definition2) {
    events.splice(text9, 0, ["enter", heading2, context]);
    events.splice(definition2 + 1, 0, ["exit", events[content5][1], context]);
    events[content5][1].end = Object.assign({}, events[definition2][1].end);
  } else {
    events[content5][1] = heading2;
  }
  events.push(["exit", heading2, context]);
  return events;
}
function tokenizeSetextUnderline(effects, ok2, nok) {
  const self = this;
  let index2 = self.events.length;
  let marker;
  let paragraph2;
  while (index2--) {
    if (self.events[index2][1].type !== "lineEnding" && self.events[index2][1].type !== "linePrefix" && self.events[index2][1].type !== "content") {
      paragraph2 = self.events[index2][1].type === "paragraph";
      break;
    }
  }
  return start;
  function start(code3) {
    if (!self.parser.lazy[self.now().line] && (self.interrupt || paragraph2)) {
      effects.enter("setextHeadingLine");
      effects.enter("setextHeadingLineSequence");
      marker = code3;
      return closingSequence(code3);
    }
    return nok(code3);
  }
  function closingSequence(code3) {
    if (code3 === marker) {
      effects.consume(code3);
      return closingSequence;
    }
    effects.exit("setextHeadingLineSequence");
    return factorySpace(effects, closingSequenceEnd, "lineSuffix")(code3);
  }
  function closingSequenceEnd(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("setextHeadingLine");
      return ok2(code3);
    }
    return nok(code3);
  }
}
var setextUnderline;
var init_setext_underline = __esm({
  "node_modules/micromark-core-commonmark/lib/setext-underline.js"() {
    init_react();
    init_micromark_factory_space();
    init_micromark_util_character();
    setextUnderline = {
      name: "setextUnderline",
      tokenize: tokenizeSetextUnderline,
      resolveTo: resolveToSetextUnderline
    };
  }
});

// node_modules/micromark-core-commonmark/index.js
var init_micromark_core_commonmark = __esm({
  "node_modules/micromark-core-commonmark/index.js"() {
    init_react();
    init_attention();
    init_autolink();
    init_blank_line();
    init_block_quote();
    init_character_escape();
    init_character_reference();
    init_code_fenced();
    init_code_indented();
    init_code_text();
    init_content2();
    init_definition();
    init_hard_break_escape();
    init_heading_atx();
    init_html_flow();
    init_html_text();
    init_label_end();
    init_label_start_image();
    init_label_start_link();
    init_line_ending();
    init_list();
    init_setext_underline();
    init_thematic_break();
  }
});

// node_modules/micromark/lib/initialize/flow.js
function initializeFlow(effects) {
  const self = this;
  const initial = effects.attempt(blankLine, atBlankEnding, effects.attempt(this.parser.constructs.flowInitial, afterConstruct, factorySpace(effects, effects.attempt(this.parser.constructs.flow, afterConstruct, effects.attempt(content2, afterConstruct)), "linePrefix")));
  return initial;
  function atBlankEnding(code3) {
    if (code3 === null) {
      effects.consume(code3);
      return;
    }
    effects.enter("lineEndingBlank");
    effects.consume(code3);
    effects.exit("lineEndingBlank");
    self.currentConstruct = void 0;
    return initial;
  }
  function afterConstruct(code3) {
    if (code3 === null) {
      effects.consume(code3);
      return;
    }
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    self.currentConstruct = void 0;
    return initial;
  }
}
var flow;
var init_flow = __esm({
  "node_modules/micromark/lib/initialize/flow.js"() {
    init_react();
    init_micromark_core_commonmark();
    init_micromark_factory_space();
    flow = {
      tokenize: initializeFlow
    };
  }
});

// node_modules/micromark/lib/initialize/text.js
function initializeFactory(field) {
  return {
    tokenize: initializeText,
    resolveAll: createResolver(field === "text" ? resolveAllLineSuffixes : void 0)
  };
  function initializeText(effects) {
    const self = this;
    const constructs2 = this.parser.constructs[field];
    const text9 = effects.attempt(constructs2, start, notText);
    return start;
    function start(code3) {
      return atBreak(code3) ? text9(code3) : notText(code3);
    }
    function notText(code3) {
      if (code3 === null) {
        effects.consume(code3);
        return;
      }
      effects.enter("data");
      effects.consume(code3);
      return data;
    }
    function data(code3) {
      if (atBreak(code3)) {
        effects.exit("data");
        return text9(code3);
      }
      effects.consume(code3);
      return data;
    }
    function atBreak(code3) {
      if (code3 === null) {
        return true;
      }
      const list3 = constructs2[code3];
      let index2 = -1;
      if (list3) {
        while (++index2 < list3.length) {
          const item = list3[index2];
          if (!item.previous || item.previous.call(self, self.previous)) {
            return true;
          }
        }
      }
      return false;
    }
  }
}
function createResolver(extraResolver) {
  return resolveAllText;
  function resolveAllText(events, context) {
    let index2 = -1;
    let enter;
    while (++index2 <= events.length) {
      if (enter === void 0) {
        if (events[index2] && events[index2][1].type === "data") {
          enter = index2;
          index2++;
        }
      } else if (!events[index2] || events[index2][1].type !== "data") {
        if (index2 !== enter + 2) {
          events[enter][1].end = events[index2 - 1][1].end;
          events.splice(enter + 2, index2 - enter - 2);
          index2 = enter + 2;
        }
        enter = void 0;
      }
    }
    return extraResolver ? extraResolver(events, context) : events;
  }
}
function resolveAllLineSuffixes(events, context) {
  let eventIndex = 0;
  while (++eventIndex <= events.length) {
    if ((eventIndex === events.length || events[eventIndex][1].type === "lineEnding") && events[eventIndex - 1][1].type === "data") {
      const data = events[eventIndex - 1][1];
      const chunks = context.sliceStream(data);
      let index2 = chunks.length;
      let bufferIndex = -1;
      let size = 0;
      let tabs;
      while (index2--) {
        const chunk = chunks[index2];
        if (typeof chunk === "string") {
          bufferIndex = chunk.length;
          while (chunk.charCodeAt(bufferIndex - 1) === 32) {
            size++;
            bufferIndex--;
          }
          if (bufferIndex)
            break;
          bufferIndex = -1;
        } else if (chunk === -2) {
          tabs = true;
          size++;
        } else if (chunk === -1) {
        } else {
          index2++;
          break;
        }
      }
      if (size) {
        const token = {
          type: eventIndex === events.length || tabs || size < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            line: data.end.line,
            column: data.end.column - size,
            offset: data.end.offset - size,
            _index: data.start._index + index2,
            _bufferIndex: index2 ? bufferIndex : data.start._bufferIndex + bufferIndex
          },
          end: Object.assign({}, data.end)
        };
        data.end = Object.assign({}, token.start);
        if (data.start.offset === data.end.offset) {
          Object.assign(data, token);
        } else {
          events.splice(eventIndex, 0, ["enter", token, context], ["exit", token, context]);
          eventIndex += 2;
        }
      }
      eventIndex++;
    }
  }
  return events;
}
var resolver, string, text;
var init_text = __esm({
  "node_modules/micromark/lib/initialize/text.js"() {
    init_react();
    resolver = {
      resolveAll: createResolver()
    };
    string = initializeFactory("string");
    text = initializeFactory("text");
  }
});

// node_modules/micromark/lib/create-tokenizer.js
function createTokenizer(parser, initialize, from) {
  let point4 = Object.assign(from ? Object.assign({}, from) : {
    line: 1,
    column: 1,
    offset: 0
  }, {
    _index: 0,
    _bufferIndex: -1
  });
  const columnStart = {};
  const resolveAllConstructs = [];
  let chunks = [];
  let stack = [];
  let consumed = true;
  const effects = {
    consume,
    enter,
    exit: exit3,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  const context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  };
  let state = initialize.tokenize.call(context, effects);
  let expectedCode;
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context;
  function write(slice) {
    chunks = push(chunks, slice);
    main();
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);
    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    return Object.assign({}, point4);
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    while (point4._index < chunks.length) {
      const chunk = chunks[point4._index];
      if (typeof chunk === "string") {
        chunkIndex = point4._index;
        if (point4._bufferIndex < 0) {
          point4._bufferIndex = 0;
        }
        while (point4._index === chunkIndex && point4._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point4._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  function go(code3) {
    consumed = void 0;
    expectedCode = code3;
    state = state(code3);
  }
  function consume(code3) {
    if (markdownLineEnding(code3)) {
      point4.line++;
      point4.column = 1;
      point4.offset += code3 === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code3 !== -1) {
      point4.column++;
      point4.offset++;
    }
    if (point4._bufferIndex < 0) {
      point4._index++;
    } else {
      point4._bufferIndex++;
      if (point4._bufferIndex === chunks[point4._index].length) {
        point4._bufferIndex = -1;
        point4._index++;
      }
    }
    context.previous = code3;
    consumed = true;
  }
  function enter(type, fields) {
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(["enter", token, context]);
    stack.push(token);
    return token;
  }
  function exit3(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(["exit", token, context]);
    return token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs2, returnState, bogusState) {
      let listOfConstructs;
      let constructIndex;
      let currentConstruct;
      let info;
      return Array.isArray(constructs2) ? handleListOfConstructs(constructs2) : "tokenize" in constructs2 ? handleListOfConstructs([constructs2]) : handleMapOfConstructs(constructs2);
      function handleMapOfConstructs(map2) {
        return start;
        function start(code3) {
          const def = code3 !== null && map2[code3];
          const all8 = code3 !== null && map2.null;
          const list3 = [
            ...Array.isArray(def) ? def : def ? [def] : [],
            ...Array.isArray(all8) ? all8 : all8 ? [all8] : []
          ];
          return handleListOfConstructs(list3)(code3);
        }
      }
      function handleListOfConstructs(list3) {
        listOfConstructs = list3;
        constructIndex = 0;
        if (list3.length === 0) {
          return bogusState;
        }
        return handleConstruct(list3[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code3) {
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }
          if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
            return nok(code3);
          }
          return construct.tokenize.call(fields ? Object.assign(Object.create(context), fields) : context, effects, ok2, nok)(code3);
        }
      }
      function ok2(code3) {
        consumed = true;
        onreturn(currentConstruct, info);
        return returnState;
      }
      function nok(code3) {
        consumed = true;
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice(context.events, from2, context.events.length - from2, construct.resolve(context.events.slice(from2), context));
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    function restore() {
      point4 = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    if (point4.line in columnStart && point4.column < 2) {
      point4.column = columnStart[point4.line];
      point4.offset += columnStart[point4.line] - 1;
    }
  }
}
function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  let view;
  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      view[0] = view[0].slice(startBufferIndex);
    }
    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
function serializeChunks(chunks, expandTabs) {
  let index2 = -1;
  const result = [];
  let atTab;
  while (++index2 < chunks.length) {
    const chunk = chunks[index2];
    let value;
    if (typeof chunk === "string") {
      value = chunk;
    } else
      switch (chunk) {
        case -5: {
          value = "\r";
          break;
        }
        case -4: {
          value = "\n";
          break;
        }
        case -3: {
          value = "\r\n";
          break;
        }
        case -2: {
          value = expandTabs ? " " : "	";
          break;
        }
        case -1: {
          if (!expandTabs && atTab)
            continue;
          value = " ";
          break;
        }
        default: {
          value = String.fromCharCode(chunk);
        }
      }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join("");
}
var init_create_tokenizer = __esm({
  "node_modules/micromark/lib/create-tokenizer.js"() {
    init_react();
    init_micromark_util_character();
    init_micromark_util_chunked();
    init_micromark_util_resolve_all();
  }
});

// node_modules/micromark/lib/constructs.js
var constructs_exports = {};
__export(constructs_exports, {
  attentionMarkers: () => attentionMarkers,
  contentInitial: () => contentInitial,
  disable: () => disable,
  document: () => document3,
  flow: () => flow2,
  flowInitial: () => flowInitial,
  insideSpan: () => insideSpan,
  string: () => string2,
  text: () => text2
});
var document3, contentInitial, flowInitial, flow2, string2, text2, insideSpan, attentionMarkers, disable;
var init_constructs = __esm({
  "node_modules/micromark/lib/constructs.js"() {
    init_react();
    init_micromark_core_commonmark();
    init_text();
    document3 = {
      [42]: list,
      [43]: list,
      [45]: list,
      [48]: list,
      [49]: list,
      [50]: list,
      [51]: list,
      [52]: list,
      [53]: list,
      [54]: list,
      [55]: list,
      [56]: list,
      [57]: list,
      [62]: blockQuote
    };
    contentInitial = {
      [91]: definition
    };
    flowInitial = {
      [-2]: codeIndented,
      [-1]: codeIndented,
      [32]: codeIndented
    };
    flow2 = {
      [35]: headingAtx,
      [42]: thematicBreak,
      [45]: [setextUnderline, thematicBreak],
      [60]: htmlFlow,
      [61]: setextUnderline,
      [95]: thematicBreak,
      [96]: codeFenced,
      [126]: codeFenced
    };
    string2 = {
      [38]: characterReference,
      [92]: characterEscape
    };
    text2 = {
      [-5]: lineEnding,
      [-4]: lineEnding,
      [-3]: lineEnding,
      [33]: labelStartImage,
      [38]: characterReference,
      [42]: attention,
      [60]: [autolink, htmlText],
      [91]: labelStartLink,
      [92]: [hardBreakEscape, characterEscape],
      [93]: labelEnd,
      [95]: attention,
      [96]: codeText
    };
    insideSpan = {
      null: [attention, resolver]
    };
    attentionMarkers = {
      null: [42, 95]
    };
    disable = {
      null: []
    };
  }
});

// node_modules/micromark/lib/parse.js
function parse(options = {}) {
  const constructs2 = combineExtensions([constructs_exports].concat(options.extensions || []));
  const parser = {
    defined: [],
    lazy: {},
    constructs: constructs2,
    content: create(content),
    document: create(document2),
    flow: create(flow),
    string: create(string),
    text: create(text)
  };
  return parser;
  function create(initial) {
    return creator;
    function creator(from) {
      return createTokenizer(parser, initial, from);
    }
  }
}
var init_parse = __esm({
  "node_modules/micromark/lib/parse.js"() {
    init_react();
    init_micromark_util_combine_extensions();
    init_content();
    init_document();
    init_flow();
    init_text();
    init_create_tokenizer();
    init_constructs();
  }
});

// node_modules/micromark/lib/preprocess.js
function preprocess() {
  let column = 1;
  let buffer = "";
  let start = true;
  let atCarriageReturn;
  return preprocessor;
  function preprocessor(value, encoding, end) {
    const chunks = [];
    let match;
    let next;
    let startPosition;
    let endPosition;
    let code3;
    value = buffer + value.toString(encoding);
    startPosition = 0;
    buffer = "";
    if (start) {
      if (value.charCodeAt(0) === 65279) {
        startPosition++;
      }
      start = void 0;
    }
    while (startPosition < value.length) {
      search.lastIndex = startPosition;
      match = search.exec(value);
      endPosition = match && match.index !== void 0 ? match.index : value.length;
      code3 = value.charCodeAt(endPosition);
      if (!match) {
        buffer = value.slice(startPosition);
        break;
      }
      if (code3 === 10 && startPosition === endPosition && atCarriageReturn) {
        chunks.push(-3);
        atCarriageReturn = void 0;
      } else {
        if (atCarriageReturn) {
          chunks.push(-5);
          atCarriageReturn = void 0;
        }
        if (startPosition < endPosition) {
          chunks.push(value.slice(startPosition, endPosition));
          column += endPosition - startPosition;
        }
        switch (code3) {
          case 0: {
            chunks.push(65533);
            column++;
            break;
          }
          case 9: {
            next = Math.ceil(column / 4) * 4;
            chunks.push(-2);
            while (column++ < next)
              chunks.push(-1);
            break;
          }
          case 10: {
            chunks.push(-4);
            column = 1;
            break;
          }
          default: {
            atCarriageReturn = true;
            column = 1;
          }
        }
      }
      startPosition = endPosition + 1;
    }
    if (end) {
      if (atCarriageReturn)
        chunks.push(-5);
      if (buffer)
        chunks.push(buffer);
      chunks.push(null);
    }
    return chunks;
  }
}
var search;
var init_preprocess = __esm({
  "node_modules/micromark/lib/preprocess.js"() {
    init_react();
    search = /[\0\t\n\r]/g;
  }
});

// node_modules/micromark/lib/postprocess.js
function postprocess(events) {
  while (!subtokenize(events)) {
  }
  return events;
}
var init_postprocess = __esm({
  "node_modules/micromark/lib/postprocess.js"() {
    init_react();
    init_micromark_util_subtokenize();
  }
});

// node_modules/micromark-util-decode-numeric-character-reference/index.js
function decodeNumericCharacterReference(value, base2) {
  const code3 = Number.parseInt(value, base2);
  if (code3 < 9 || code3 === 11 || code3 > 13 && code3 < 32 || code3 > 126 && code3 < 160 || code3 > 55295 && code3 < 57344 || code3 > 64975 && code3 < 65008 || (code3 & 65535) === 65535 || (code3 & 65535) === 65534 || code3 > 1114111) {
    return "\uFFFD";
  }
  return String.fromCharCode(code3);
}
var init_micromark_util_decode_numeric_character_reference = __esm({
  "node_modules/micromark-util-decode-numeric-character-reference/index.js"() {
    init_react();
  }
});

// node_modules/micromark-util-decode-string/index.js
function decodeString(value) {
  return value.replace(characterEscapeOrReference, decode);
}
function decode($0, $1, $2) {
  if ($1) {
    return $1;
  }
  const head2 = $2.charCodeAt(0);
  if (head2 === 35) {
    const head3 = $2.charCodeAt(1);
    const hex = head3 === 120 || head3 === 88;
    return decodeNumericCharacterReference($2.slice(hex ? 2 : 1), hex ? 16 : 10);
  }
  return (0, import_decode_named_character_reference2.decodeNamedCharacterReference)($2) || $0;
}
var import_decode_named_character_reference2, characterEscapeOrReference;
var init_micromark_util_decode_string = __esm({
  "node_modules/micromark-util-decode-string/index.js"() {
    init_react();
    import_decode_named_character_reference2 = require("decode-named-character-reference");
    init_micromark_util_decode_numeric_character_reference();
    characterEscapeOrReference = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
  }
});

// node_modules/unist-util-stringify-position/index.js
function stringifyPosition(value) {
  if (!value || typeof value !== "object") {
    return "";
  }
  if ("position" in value || "type" in value) {
    return position(value.position);
  }
  if ("start" in value || "end" in value) {
    return position(value);
  }
  if ("line" in value || "column" in value) {
    return point(value);
  }
  return "";
}
function point(point4) {
  return index(point4 && point4.line) + ":" + index(point4 && point4.column);
}
function position(pos) {
  return point(pos && pos.start) + "-" + point(pos && pos.end);
}
function index(value) {
  return value && typeof value === "number" ? value : 1;
}
var init_unist_util_stringify_position = __esm({
  "node_modules/unist-util-stringify-position/index.js"() {
    init_react();
  }
});

// node_modules/mdast-util-from-markdown/lib/index.js
function compiler(options = {}) {
  const config = configure({
    transforms: [],
    canContainEols: [
      "emphasis",
      "fragment",
      "heading",
      "paragraph",
      "strong"
    ],
    enter: {
      autolink: opener(link2),
      autolinkProtocol: onenterdata,
      autolinkEmail: onenterdata,
      atxHeading: opener(heading2),
      blockQuote: opener(blockQuote2),
      characterEscape: onenterdata,
      characterReference: onenterdata,
      codeFenced: opener(codeFlow),
      codeFencedFenceInfo: buffer,
      codeFencedFenceMeta: buffer,
      codeIndented: opener(codeFlow, buffer),
      codeText: opener(codeText2, buffer),
      codeTextData: onenterdata,
      data: onenterdata,
      codeFlowValue: onenterdata,
      definition: opener(definition2),
      definitionDestinationString: buffer,
      definitionLabelString: buffer,
      definitionTitleString: buffer,
      emphasis: opener(emphasis2),
      hardBreakEscape: opener(hardBreak2),
      hardBreakTrailing: opener(hardBreak2),
      htmlFlow: opener(html9, buffer),
      htmlFlowData: onenterdata,
      htmlText: opener(html9, buffer),
      htmlTextData: onenterdata,
      image: opener(image2),
      label: buffer,
      link: opener(link2),
      listItem: opener(listItem3),
      listItemValue: onenterlistitemvalue,
      listOrdered: opener(list3, onenterlistordered),
      listUnordered: opener(list3),
      paragraph: opener(paragraph2),
      reference: onenterreference,
      referenceString: buffer,
      resourceDestinationString: buffer,
      resourceTitleString: buffer,
      setextHeading: opener(heading2),
      strong: opener(strong2),
      thematicBreak: opener(thematicBreak3)
    },
    exit: {
      atxHeading: closer(),
      atxHeadingSequence: onexitatxheadingsequence,
      autolink: closer(),
      autolinkEmail: onexitautolinkemail,
      autolinkProtocol: onexitautolinkprotocol,
      blockQuote: closer(),
      characterEscapeValue: onexitdata,
      characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
      characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
      characterReferenceValue: onexitcharacterreferencevalue,
      codeFenced: closer(onexitcodefenced),
      codeFencedFence: onexitcodefencedfence,
      codeFencedFenceInfo: onexitcodefencedfenceinfo,
      codeFencedFenceMeta: onexitcodefencedfencemeta,
      codeFlowValue: onexitdata,
      codeIndented: closer(onexitcodeindented),
      codeText: closer(onexitcodetext),
      codeTextData: onexitdata,
      data: onexitdata,
      definition: closer(),
      definitionDestinationString: onexitdefinitiondestinationstring,
      definitionLabelString: onexitdefinitionlabelstring,
      definitionTitleString: onexitdefinitiontitlestring,
      emphasis: closer(),
      hardBreakEscape: closer(onexithardbreak),
      hardBreakTrailing: closer(onexithardbreak),
      htmlFlow: closer(onexithtmlflow),
      htmlFlowData: onexitdata,
      htmlText: closer(onexithtmltext),
      htmlTextData: onexitdata,
      image: closer(onexitimage),
      label: onexitlabel,
      labelText: onexitlabeltext,
      lineEnding: onexitlineending,
      link: closer(onexitlink),
      listItem: closer(),
      listOrdered: closer(),
      listUnordered: closer(),
      paragraph: closer(),
      referenceString: onexitreferencestring,
      resourceDestinationString: onexitresourcedestinationstring,
      resourceTitleString: onexitresourcetitlestring,
      resource: onexitresource,
      setextHeading: closer(onexitsetextheading),
      setextHeadingLineSequence: onexitsetextheadinglinesequence,
      setextHeadingText: onexitsetextheadingtext,
      strong: closer(),
      thematicBreak: closer()
    }
  }, options.mdastExtensions || []);
  const data = {};
  return compile;
  function compile(events) {
    let tree = {
      type: "root",
      children: []
    };
    const stack = [tree];
    const tokenStack = [];
    const listStack = [];
    const context = {
      stack,
      tokenStack,
      config,
      enter,
      exit: exit3,
      buffer,
      resume,
      setData,
      getData
    };
    let index2 = -1;
    while (++index2 < events.length) {
      if (events[index2][1].type === "listOrdered" || events[index2][1].type === "listUnordered") {
        if (events[index2][0] === "enter") {
          listStack.push(index2);
        } else {
          const tail = listStack.pop();
          index2 = prepareList(events, tail, index2);
        }
      }
    }
    index2 = -1;
    while (++index2 < events.length) {
      const handler = config[events[index2][0]];
      if (own2.call(handler, events[index2][1].type)) {
        handler[events[index2][1].type].call(Object.assign({
          sliceSerialize: events[index2][2].sliceSerialize
        }, context), events[index2][1]);
      }
    }
    if (tokenStack.length > 0) {
      const tail = tokenStack[tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, void 0, tail[0]);
    }
    tree.position = {
      start: point4(events.length > 0 ? events[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: point4(events.length > 0 ? events[events.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    };
    index2 = -1;
    while (++index2 < config.transforms.length) {
      tree = config.transforms[index2](tree) || tree;
    }
    return tree;
  }
  function prepareList(events, start, length) {
    let index2 = start - 1;
    let containerBalance = -1;
    let listSpread = false;
    let listItem4;
    let lineIndex;
    let firstBlankLineIndex;
    let atMarker;
    while (++index2 <= length) {
      const event = events[index2];
      if (event[1].type === "listUnordered" || event[1].type === "listOrdered" || event[1].type === "blockQuote") {
        if (event[0] === "enter") {
          containerBalance++;
        } else {
          containerBalance--;
        }
        atMarker = void 0;
      } else if (event[1].type === "lineEndingBlank") {
        if (event[0] === "enter") {
          if (listItem4 && !atMarker && !containerBalance && !firstBlankLineIndex) {
            firstBlankLineIndex = index2;
          }
          atMarker = void 0;
        }
      } else if (event[1].type === "linePrefix" || event[1].type === "listItemValue" || event[1].type === "listItemMarker" || event[1].type === "listItemPrefix" || event[1].type === "listItemPrefixWhitespace") {
      } else {
        atMarker = void 0;
      }
      if (!containerBalance && event[0] === "enter" && event[1].type === "listItemPrefix" || containerBalance === -1 && event[0] === "exit" && (event[1].type === "listUnordered" || event[1].type === "listOrdered")) {
        if (listItem4) {
          let tailIndex = index2;
          lineIndex = void 0;
          while (tailIndex--) {
            const tailEvent = events[tailIndex];
            if (tailEvent[1].type === "lineEnding" || tailEvent[1].type === "lineEndingBlank") {
              if (tailEvent[0] === "exit")
                continue;
              if (lineIndex) {
                events[lineIndex][1].type = "lineEndingBlank";
                listSpread = true;
              }
              tailEvent[1].type = "lineEnding";
              lineIndex = tailIndex;
            } else if (tailEvent[1].type === "linePrefix" || tailEvent[1].type === "blockQuotePrefix" || tailEvent[1].type === "blockQuotePrefixWhitespace" || tailEvent[1].type === "blockQuoteMarker" || tailEvent[1].type === "listItemIndent") {
            } else {
              break;
            }
          }
          if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) {
            listItem4._spread = true;
          }
          listItem4.end = Object.assign({}, lineIndex ? events[lineIndex][1].start : event[1].end);
          events.splice(lineIndex || index2, 0, ["exit", listItem4, event[2]]);
          index2++;
          length++;
        }
        if (event[1].type === "listItemPrefix") {
          listItem4 = {
            type: "listItem",
            _spread: false,
            start: Object.assign({}, event[1].start)
          };
          events.splice(index2, 0, ["enter", listItem4, event[2]]);
          index2++;
          length++;
          firstBlankLineIndex = void 0;
          atMarker = true;
        }
      }
    }
    events[start][1]._spread = listSpread;
    return length;
  }
  function setData(key, value) {
    data[key] = value;
  }
  function getData(key) {
    return data[key];
  }
  function point4(d) {
    return {
      line: d.line,
      column: d.column,
      offset: d.offset
    };
  }
  function opener(create, and) {
    return open;
    function open(token) {
      enter.call(this, create(token), token);
      if (and)
        and.call(this, token);
    }
  }
  function buffer() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function enter(node, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    parent.children.push(node);
    this.stack.push(node);
    this.tokenStack.push([token, errorHandler]);
    node.position = {
      start: point4(token.start)
    };
    return node;
  }
  function closer(and) {
    return close;
    function close(token) {
      if (and)
        and.call(this, token);
      exit3.call(this, token);
    }
  }
  function exit3(token, onExitError) {
    const node = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error("Cannot close `" + token.type + "` (" + stringifyPosition({
        start: token.start,
        end: token.end
      }) + "): it\u2019s not open");
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    node.position.end = point4(token.end);
    return node;
  }
  function resume() {
    return toString(this.stack.pop());
  }
  function onenterlistordered() {
    setData("expectingFirstListItemValue", true);
  }
  function onenterlistitemvalue(token) {
    if (getData("expectingFirstListItemValue")) {
      const ancestor = this.stack[this.stack.length - 2];
      ancestor.start = Number.parseInt(this.sliceSerialize(token), 10);
      setData("expectingFirstListItemValue");
    }
  }
  function onexitcodefencedfenceinfo() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.lang = data2;
  }
  function onexitcodefencedfencemeta() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.meta = data2;
  }
  function onexitcodefencedfence() {
    if (getData("flowCodeInside"))
      return;
    this.buffer();
    setData("flowCodeInside", true);
  }
  function onexitcodefenced() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data2.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
    setData("flowCodeInside");
  }
  function onexitcodeindented() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data2.replace(/(\r?\n|\r)$/g, "");
  }
  function onexitdefinitionlabelstring(token) {
    const label = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.label = label;
    node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
  }
  function onexitdefinitiontitlestring() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.title = data2;
  }
  function onexitdefinitiondestinationstring() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.url = data2;
  }
  function onexitatxheadingsequence(token) {
    const node = this.stack[this.stack.length - 1];
    if (!node.depth) {
      const depth = this.sliceSerialize(token).length;
      node.depth = depth;
    }
  }
  function onexitsetextheadingtext() {
    setData("setextHeadingSlurpLineEnding", true);
  }
  function onexitsetextheadinglinesequence(token) {
    const node = this.stack[this.stack.length - 1];
    node.depth = this.sliceSerialize(token).charCodeAt(0) === 61 ? 1 : 2;
  }
  function onexitsetextheading() {
    setData("setextHeadingSlurpLineEnding");
  }
  function onenterdata(token) {
    const parent = this.stack[this.stack.length - 1];
    let tail = parent.children[parent.children.length - 1];
    if (!tail || tail.type !== "text") {
      tail = text9();
      tail.position = {
        start: point4(token.start)
      };
      parent.children.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token);
    tail.position.end = point4(token.end);
  }
  function onexitlineending(token) {
    const context = this.stack[this.stack.length - 1];
    if (getData("atHardBreak")) {
      const tail = context.children[context.children.length - 1];
      tail.position.end = point4(token.end);
      setData("atHardBreak");
      return;
    }
    if (!getData("setextHeadingSlurpLineEnding") && config.canContainEols.includes(context.type)) {
      onenterdata.call(this, token);
      onexitdata.call(this, token);
    }
  }
  function onexithardbreak() {
    setData("atHardBreak", true);
  }
  function onexithtmlflow() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data2;
  }
  function onexithtmltext() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data2;
  }
  function onexitcodetext() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data2;
  }
  function onexitlink() {
    const context = this.stack[this.stack.length - 1];
    if (getData("inReference")) {
      context.type += "Reference";
      context.referenceType = getData("referenceType") || "shortcut";
      delete context.url;
      delete context.title;
    } else {
      delete context.identifier;
      delete context.label;
    }
    setData("referenceType");
  }
  function onexitimage() {
    const context = this.stack[this.stack.length - 1];
    if (getData("inReference")) {
      context.type += "Reference";
      context.referenceType = getData("referenceType") || "shortcut";
      delete context.url;
      delete context.title;
    } else {
      delete context.identifier;
      delete context.label;
    }
    setData("referenceType");
  }
  function onexitlabeltext(token) {
    const ancestor = this.stack[this.stack.length - 2];
    const string3 = this.sliceSerialize(token);
    ancestor.label = decodeString(string3);
    ancestor.identifier = normalizeIdentifier(string3).toLowerCase();
  }
  function onexitlabel() {
    const fragment2 = this.stack[this.stack.length - 1];
    const value = this.resume();
    const node = this.stack[this.stack.length - 1];
    setData("inReference", true);
    if (node.type === "link") {
      node.children = fragment2.children;
    } else {
      node.alt = value;
    }
  }
  function onexitresourcedestinationstring() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.url = data2;
  }
  function onexitresourcetitlestring() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.title = data2;
  }
  function onexitresource() {
    setData("inReference");
  }
  function onenterreference() {
    setData("referenceType", "collapsed");
  }
  function onexitreferencestring(token) {
    const label = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.label = label;
    node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
    setData("referenceType", "full");
  }
  function onexitcharacterreferencemarker(token) {
    setData("characterReferenceType", token.type);
  }
  function onexitcharacterreferencevalue(token) {
    const data2 = this.sliceSerialize(token);
    const type = getData("characterReferenceType");
    let value;
    if (type) {
      value = decodeNumericCharacterReference(data2, type === "characterReferenceMarkerNumeric" ? 10 : 16);
      setData("characterReferenceType");
    } else {
      value = (0, import_decode_named_character_reference3.decodeNamedCharacterReference)(data2);
    }
    const tail = this.stack.pop();
    tail.value += value;
    tail.position.end = point4(token.end);
  }
  function onexitautolinkprotocol(token) {
    onexitdata.call(this, token);
    const node = this.stack[this.stack.length - 1];
    node.url = this.sliceSerialize(token);
  }
  function onexitautolinkemail(token) {
    onexitdata.call(this, token);
    const node = this.stack[this.stack.length - 1];
    node.url = "mailto:" + this.sliceSerialize(token);
  }
  function blockQuote2() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function codeFlow() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function codeText2() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function definition2() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function emphasis2() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function heading2() {
    return {
      type: "heading",
      depth: void 0,
      children: []
    };
  }
  function hardBreak2() {
    return {
      type: "break"
    };
  }
  function html9() {
    return {
      type: "html",
      value: ""
    };
  }
  function image2() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function link2() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function list3(token) {
    return {
      type: "list",
      ordered: token.type === "listOrdered",
      start: null,
      spread: token._spread,
      children: []
    };
  }
  function listItem3(token) {
    return {
      type: "listItem",
      spread: token._spread,
      checked: null,
      children: []
    };
  }
  function paragraph2() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function strong2() {
    return {
      type: "strong",
      children: []
    };
  }
  function text9() {
    return {
      type: "text",
      value: ""
    };
  }
  function thematicBreak3() {
    return {
      type: "thematicBreak"
    };
  }
}
function configure(combined, extensions) {
  let index2 = -1;
  while (++index2 < extensions.length) {
    const value = extensions[index2];
    if (Array.isArray(value)) {
      configure(combined, value);
    } else {
      extension(combined, value);
    }
  }
  return combined;
}
function extension(combined, extension2) {
  let key;
  for (key in extension2) {
    if (own2.call(extension2, key)) {
      const list3 = key === "canContainEols" || key === "transforms";
      const maybe = own2.call(combined, key) ? combined[key] : void 0;
      const left = maybe || (combined[key] = list3 ? [] : {});
      const right = extension2[key];
      if (right) {
        if (list3) {
          combined[key] = [...left, ...right];
        } else {
          Object.assign(left, right);
        }
      }
    }
  }
}
function defaultOnError(left, right) {
  if (left) {
    throw new Error("Cannot close `" + left.type + "` (" + stringifyPosition({
      start: left.start,
      end: left.end
    }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
      start: right.start,
      end: right.end
    }) + ") is open");
  } else {
    throw new Error("Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
      start: right.start,
      end: right.end
    }) + ") is still open");
  }
}
var import_decode_named_character_reference3, own2, fromMarkdown;
var init_lib2 = __esm({
  "node_modules/mdast-util-from-markdown/lib/index.js"() {
    init_react();
    init_mdast_util_to_string();
    init_parse();
    init_preprocess();
    init_postprocess();
    init_micromark_util_decode_numeric_character_reference();
    init_micromark_util_decode_string();
    init_micromark_util_normalize_identifier();
    import_decode_named_character_reference3 = require("decode-named-character-reference");
    init_unist_util_stringify_position();
    own2 = {}.hasOwnProperty;
    fromMarkdown = function(value, encoding, options) {
      if (typeof encoding !== "string") {
        options = encoding;
        encoding = void 0;
      }
      return compiler(options)(postprocess(parse(options).document().write(preprocess()(value, encoding, true))));
    };
  }
});

// node_modules/mdast-util-from-markdown/index.js
var init_mdast_util_from_markdown = __esm({
  "node_modules/mdast-util-from-markdown/index.js"() {
    init_react();
    init_lib2();
  }
});

// node_modules/remark-parse/lib/index.js
function remarkParse(options) {
  const parser = (doc2) => {
    const settings = this.data("settings");
    return fromMarkdown(doc2, Object.assign({}, settings, options, {
      extensions: this.data("micromarkExtensions") || [],
      mdastExtensions: this.data("fromMarkdownExtensions") || []
    }));
  };
  Object.assign(this, { Parser: parser });
}
var init_lib3 = __esm({
  "node_modules/remark-parse/lib/index.js"() {
    init_react();
    init_mdast_util_from_markdown();
  }
});

// node_modules/remark-parse/index.js
var remark_parse_exports = {};
__export(remark_parse_exports, {
  default: () => remark_parse_default
});
var remark_parse_default;
var init_remark_parse = __esm({
  "node_modules/remark-parse/index.js"() {
    init_react();
    init_lib3();
    remark_parse_default = remarkParse;
  }
});

// node_modules/micromark-extension-gfm-autolink-literal/lib/syntax.js
function tokenizeEmailAutolink(effects, ok2, nok) {
  const self = this;
  let hasDot;
  let hasDigitInLastSegment;
  return start;
  function start(code3) {
    if (!gfmAtext(code3) || !previousEmail(self.previous) || previousUnbalanced(self.events)) {
      return nok(code3);
    }
    effects.enter("literalAutolink");
    effects.enter("literalAutolinkEmail");
    return atext(code3);
  }
  function atext(code3) {
    if (gfmAtext(code3)) {
      effects.consume(code3);
      return atext;
    }
    if (code3 === 64) {
      effects.consume(code3);
      return label;
    }
    return nok(code3);
  }
  function label(code3) {
    if (code3 === 46) {
      return effects.check(punctuation, done, dotContinuation)(code3);
    }
    if (code3 === 45 || code3 === 95) {
      return effects.check(punctuation, nok, dashOrUnderscoreContinuation)(code3);
    }
    if (asciiAlphanumeric(code3)) {
      if (!hasDigitInLastSegment && asciiDigit(code3)) {
        hasDigitInLastSegment = true;
      }
      effects.consume(code3);
      return label;
    }
    return done(code3);
  }
  function dotContinuation(code3) {
    effects.consume(code3);
    hasDot = true;
    hasDigitInLastSegment = void 0;
    return label;
  }
  function dashOrUnderscoreContinuation(code3) {
    effects.consume(code3);
    return afterDashOrUnderscore;
  }
  function afterDashOrUnderscore(code3) {
    if (code3 === 46) {
      return effects.check(punctuation, nok, dotContinuation)(code3);
    }
    return label(code3);
  }
  function done(code3) {
    if (hasDot && !hasDigitInLastSegment) {
      effects.exit("literalAutolinkEmail");
      effects.exit("literalAutolink");
      return ok2(code3);
    }
    return nok(code3);
  }
}
function tokenizeWwwAutolink(effects, ok2, nok) {
  const self = this;
  return start;
  function start(code3) {
    if (code3 !== 87 && code3 !== 119 || !previousWww(self.previous) || previousUnbalanced(self.events)) {
      return nok(code3);
    }
    effects.enter("literalAutolink");
    effects.enter("literalAutolinkWww");
    return effects.check(www, effects.attempt(domain, effects.attempt(path, done), nok), nok)(code3);
  }
  function done(code3) {
    effects.exit("literalAutolinkWww");
    effects.exit("literalAutolink");
    return ok2(code3);
  }
}
function tokenizeHttpAutolink(effects, ok2, nok) {
  const self = this;
  return start;
  function start(code3) {
    if (code3 !== 72 && code3 !== 104 || !previousHttp(self.previous) || previousUnbalanced(self.events)) {
      return nok(code3);
    }
    effects.enter("literalAutolink");
    effects.enter("literalAutolinkHttp");
    effects.consume(code3);
    return t1;
  }
  function t1(code3) {
    if (code3 === 84 || code3 === 116) {
      effects.consume(code3);
      return t2;
    }
    return nok(code3);
  }
  function t2(code3) {
    if (code3 === 84 || code3 === 116) {
      effects.consume(code3);
      return p2;
    }
    return nok(code3);
  }
  function p2(code3) {
    if (code3 === 80 || code3 === 112) {
      effects.consume(code3);
      return s2;
    }
    return nok(code3);
  }
  function s2(code3) {
    if (code3 === 83 || code3 === 115) {
      effects.consume(code3);
      return colon;
    }
    return colon(code3);
  }
  function colon(code3) {
    if (code3 === 58) {
      effects.consume(code3);
      return slash1;
    }
    return nok(code3);
  }
  function slash1(code3) {
    if (code3 === 47) {
      effects.consume(code3);
      return slash2;
    }
    return nok(code3);
  }
  function slash2(code3) {
    if (code3 === 47) {
      effects.consume(code3);
      return after;
    }
    return nok(code3);
  }
  function after(code3) {
    return code3 === null || asciiControl(code3) || unicodeWhitespace(code3) || unicodePunctuation(code3) ? nok(code3) : effects.attempt(domain, effects.attempt(path, done), nok)(code3);
  }
  function done(code3) {
    effects.exit("literalAutolinkHttp");
    effects.exit("literalAutolink");
    return ok2(code3);
  }
}
function tokenizeWww(effects, ok2, nok) {
  return start;
  function start(code3) {
    effects.consume(code3);
    return w2;
  }
  function w2(code3) {
    if (code3 === 87 || code3 === 119) {
      effects.consume(code3);
      return w3;
    }
    return nok(code3);
  }
  function w3(code3) {
    if (code3 === 87 || code3 === 119) {
      effects.consume(code3);
      return dot;
    }
    return nok(code3);
  }
  function dot(code3) {
    if (code3 === 46) {
      effects.consume(code3);
      return after;
    }
    return nok(code3);
  }
  function after(code3) {
    return code3 === null || markdownLineEnding(code3) ? nok(code3) : ok2(code3);
  }
}
function tokenizeDomain(effects, ok2, nok) {
  let hasUnderscoreInLastSegment;
  let hasUnderscoreInLastLastSegment;
  return domain2;
  function domain2(code3) {
    if (code3 === 38) {
      return effects.check(namedCharacterReference, done, punctuationContinuation)(code3);
    }
    if (code3 === 46 || code3 === 95) {
      return effects.check(punctuation, done, punctuationContinuation)(code3);
    }
    if (code3 === null || asciiControl(code3) || unicodeWhitespace(code3) || code3 !== 45 && unicodePunctuation(code3)) {
      return done(code3);
    }
    effects.consume(code3);
    return domain2;
  }
  function punctuationContinuation(code3) {
    if (code3 === 46) {
      hasUnderscoreInLastLastSegment = hasUnderscoreInLastSegment;
      hasUnderscoreInLastSegment = void 0;
      effects.consume(code3);
      return domain2;
    }
    if (code3 === 95)
      hasUnderscoreInLastSegment = true;
    effects.consume(code3);
    return domain2;
  }
  function done(code3) {
    if (!hasUnderscoreInLastLastSegment && !hasUnderscoreInLastSegment) {
      return ok2(code3);
    }
    return nok(code3);
  }
}
function tokenizePath(effects, ok2) {
  let balance = 0;
  return inPath;
  function inPath(code3) {
    if (code3 === 38) {
      return effects.check(namedCharacterReference, ok2, continuedPunctuation)(code3);
    }
    if (code3 === 40) {
      balance++;
    }
    if (code3 === 41) {
      return effects.check(punctuation, parenAtPathEnd, continuedPunctuation)(code3);
    }
    if (pathEnd(code3)) {
      return ok2(code3);
    }
    if (trailingPunctuation(code3)) {
      return effects.check(punctuation, ok2, continuedPunctuation)(code3);
    }
    effects.consume(code3);
    return inPath;
  }
  function continuedPunctuation(code3) {
    effects.consume(code3);
    return inPath;
  }
  function parenAtPathEnd(code3) {
    balance--;
    return balance < 0 ? ok2(code3) : continuedPunctuation(code3);
  }
}
function tokenizeNamedCharacterReference(effects, ok2, nok) {
  return start;
  function start(code3) {
    effects.consume(code3);
    return inside;
  }
  function inside(code3) {
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      return inside;
    }
    if (code3 === 59) {
      effects.consume(code3);
      return after;
    }
    return nok(code3);
  }
  function after(code3) {
    return pathEnd(code3) ? ok2(code3) : nok(code3);
  }
}
function tokenizePunctuation(effects, ok2, nok) {
  return start;
  function start(code3) {
    effects.consume(code3);
    return after;
  }
  function after(code3) {
    if (trailingPunctuation(code3)) {
      effects.consume(code3);
      return after;
    }
    return pathEnd(code3) ? ok2(code3) : nok(code3);
  }
}
function trailingPunctuation(code3) {
  return code3 === 33 || code3 === 34 || code3 === 39 || code3 === 41 || code3 === 42 || code3 === 44 || code3 === 46 || code3 === 58 || code3 === 59 || code3 === 60 || code3 === 63 || code3 === 95 || code3 === 126;
}
function pathEnd(code3) {
  return code3 === null || code3 === 60 || markdownLineEndingOrSpace(code3);
}
function gfmAtext(code3) {
  return code3 === 43 || code3 === 45 || code3 === 46 || code3 === 95 || asciiAlphanumeric(code3);
}
function previousWww(code3) {
  return code3 === null || code3 === 40 || code3 === 42 || code3 === 95 || code3 === 126 || markdownLineEndingOrSpace(code3);
}
function previousHttp(code3) {
  return code3 === null || !asciiAlpha(code3);
}
function previousEmail(code3) {
  return code3 !== 47 && previousHttp(code3);
}
function previousUnbalanced(events) {
  let index2 = events.length;
  let result = false;
  while (index2--) {
    const token = events[index2][1];
    if ((token.type === "labelLink" || token.type === "labelImage") && !token._balanced) {
      result = true;
      break;
    }
    if (token._gfmAutolinkLiteralWalkedInto) {
      result = false;
      break;
    }
  }
  if (events.length > 0 && !result) {
    events[events.length - 1][1]._gfmAutolinkLiteralWalkedInto = true;
  }
  return result;
}
var www, domain, path, punctuation, namedCharacterReference, wwwAutolink, httpAutolink, emailAutolink, text3, gfmAutolinkLiteral, code;
var init_syntax = __esm({
  "node_modules/micromark-extension-gfm-autolink-literal/lib/syntax.js"() {
    init_react();
    init_micromark_util_character();
    www = {
      tokenize: tokenizeWww,
      partial: true
    };
    domain = {
      tokenize: tokenizeDomain,
      partial: true
    };
    path = {
      tokenize: tokenizePath,
      partial: true
    };
    punctuation = {
      tokenize: tokenizePunctuation,
      partial: true
    };
    namedCharacterReference = {
      tokenize: tokenizeNamedCharacterReference,
      partial: true
    };
    wwwAutolink = {
      tokenize: tokenizeWwwAutolink,
      previous: previousWww
    };
    httpAutolink = {
      tokenize: tokenizeHttpAutolink,
      previous: previousHttp
    };
    emailAutolink = {
      tokenize: tokenizeEmailAutolink,
      previous: previousEmail
    };
    text3 = {};
    gfmAutolinkLiteral = {
      text: text3
    };
    code = 48;
    while (code < 123) {
      text3[code] = emailAutolink;
      code++;
      if (code === 58)
        code = 65;
      else if (code === 91)
        code = 97;
    }
    text3[43] = emailAutolink;
    text3[45] = emailAutolink;
    text3[46] = emailAutolink;
    text3[95] = emailAutolink;
    text3[72] = [emailAutolink, httpAutolink];
    text3[104] = [emailAutolink, httpAutolink];
    text3[87] = [emailAutolink, wwwAutolink];
    text3[119] = [emailAutolink, wwwAutolink];
  }
});

// node_modules/micromark-util-encode/index.js
function encode(value) {
  return value.replace(/["&<>]/g, replace2);
  function replace2(value2) {
    return "&" + characterReferences[value2] + ";";
  }
}
var characterReferences;
var init_micromark_util_encode = __esm({
  "node_modules/micromark-util-encode/index.js"() {
    init_react();
    characterReferences = { '"': "quot", "&": "amp", "<": "lt", ">": "gt" };
  }
});

// node_modules/micromark-util-sanitize-uri/index.js
function sanitizeUri(url, protocol) {
  const value = encode(normalizeUri(url || ""));
  if (!protocol) {
    return value;
  }
  const colon = value.indexOf(":");
  const questionMark = value.indexOf("?");
  const numberSign = value.indexOf("#");
  const slash = value.indexOf("/");
  if (colon < 0 || slash > -1 && colon > slash || questionMark > -1 && colon > questionMark || numberSign > -1 && colon > numberSign || protocol.test(value.slice(0, colon))) {
    return value;
  }
  return "";
}
function normalizeUri(value) {
  const result = [];
  let index2 = -1;
  let start = 0;
  let skip = 0;
  while (++index2 < value.length) {
    const code3 = value.charCodeAt(index2);
    let replace2 = "";
    if (code3 === 37 && asciiAlphanumeric(value.charCodeAt(index2 + 1)) && asciiAlphanumeric(value.charCodeAt(index2 + 2))) {
      skip = 2;
    } else if (code3 < 128) {
      if (!/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(code3))) {
        replace2 = String.fromCharCode(code3);
      }
    } else if (code3 > 55295 && code3 < 57344) {
      const next = value.charCodeAt(index2 + 1);
      if (code3 < 56320 && next > 56319 && next < 57344) {
        replace2 = String.fromCharCode(code3, next);
        skip = 1;
      } else {
        replace2 = "\uFFFD";
      }
    } else {
      replace2 = String.fromCharCode(code3);
    }
    if (replace2) {
      result.push(value.slice(start, index2), encodeURIComponent(replace2));
      start = index2 + skip + 1;
      replace2 = "";
    }
    if (skip) {
      index2 += skip;
      skip = 0;
    }
  }
  return result.join("") + value.slice(start);
}
var init_micromark_util_sanitize_uri = __esm({
  "node_modules/micromark-util-sanitize-uri/index.js"() {
    init_react();
    init_micromark_util_character();
    init_micromark_util_encode();
  }
});

// node_modules/micromark-extension-gfm-autolink-literal/index.js
var init_micromark_extension_gfm_autolink_literal = __esm({
  "node_modules/micromark-extension-gfm-autolink-literal/index.js"() {
    init_react();
    init_syntax();
  }
});

// node_modules/micromark-extension-gfm-footnote/lib/syntax.js
function gfmFootnote() {
  return {
    document: {
      [91]: {
        tokenize: tokenizeDefinitionStart,
        continuation: {
          tokenize: tokenizeDefinitionContinuation
        },
        exit: gfmFootnoteDefinitionEnd
      }
    },
    text: {
      [91]: {
        tokenize: tokenizeGfmFootnoteCall
      },
      [93]: {
        add: "after",
        tokenize: tokenizePotentialGfmFootnoteCall,
        resolveTo: resolveToPotentialGfmFootnoteCall
      }
    }
  };
}
function tokenizePotentialGfmFootnoteCall(effects, ok2, nok) {
  const self = this;
  let index2 = self.events.length;
  const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
  let labelStart;
  while (index2--) {
    const token = self.events[index2][1];
    if (token.type === "labelImage") {
      labelStart = token;
      break;
    }
    if (token.type === "gfmFootnoteCall" || token.type === "labelLink" || token.type === "label" || token.type === "image" || token.type === "link") {
      break;
    }
  }
  return start;
  function start(code3) {
    if (!labelStart || !labelStart._balanced) {
      return nok(code3);
    }
    const id = normalizeIdentifier(self.sliceSerialize({
      start: labelStart.end,
      end: self.now()
    }));
    if (id.charCodeAt(0) !== 94 || !defined.includes(id.slice(1))) {
      return nok(code3);
    }
    effects.enter("gfmFootnoteCallLabelMarker");
    effects.consume(code3);
    effects.exit("gfmFootnoteCallLabelMarker");
    return ok2(code3);
  }
}
function resolveToPotentialGfmFootnoteCall(events, context) {
  let index2 = events.length;
  let labelStart;
  while (index2--) {
    if (events[index2][1].type === "labelImage" && events[index2][0] === "enter") {
      labelStart = events[index2][1];
      break;
    }
  }
  events[index2 + 1][1].type = "data";
  events[index2 + 3][1].type = "gfmFootnoteCallLabelMarker";
  const call = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, events[index2 + 3][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  const marker = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, events[index2 + 3][1].end),
    end: Object.assign({}, events[index2 + 3][1].end)
  };
  marker.end.column++;
  marker.end.offset++;
  marker.end._bufferIndex++;
  const string3 = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, marker.end),
    end: Object.assign({}, events[events.length - 1][1].start)
  };
  const chunk = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, string3.start),
    end: Object.assign({}, string3.end)
  };
  const replacement = [
    events[index2 + 1],
    events[index2 + 2],
    ["enter", call, context],
    events[index2 + 3],
    events[index2 + 4],
    ["enter", marker, context],
    ["exit", marker, context],
    ["enter", string3, context],
    ["enter", chunk, context],
    ["exit", chunk, context],
    ["exit", string3, context],
    events[events.length - 2],
    events[events.length - 1],
    ["exit", call, context]
  ];
  events.splice(index2, events.length - index2 + 1, ...replacement);
  return events;
}
function tokenizeGfmFootnoteCall(effects, ok2, nok) {
  const self = this;
  const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
  let size = 0;
  let data;
  return start;
  function start(code3) {
    effects.enter("gfmFootnoteCall");
    effects.enter("gfmFootnoteCallLabelMarker");
    effects.consume(code3);
    effects.exit("gfmFootnoteCallLabelMarker");
    return callStart;
  }
  function callStart(code3) {
    if (code3 !== 94)
      return nok(code3);
    effects.enter("gfmFootnoteCallMarker");
    effects.consume(code3);
    effects.exit("gfmFootnoteCallMarker");
    effects.enter("gfmFootnoteCallString");
    effects.enter("chunkString").contentType = "string";
    return callData;
  }
  function callData(code3) {
    let token;
    if (code3 === null || code3 === 91 || size++ > 999) {
      return nok(code3);
    }
    if (code3 === 93) {
      if (!data) {
        return nok(code3);
      }
      effects.exit("chunkString");
      token = effects.exit("gfmFootnoteCallString");
      return defined.includes(normalizeIdentifier(self.sliceSerialize(token))) ? end(code3) : nok(code3);
    }
    effects.consume(code3);
    if (!markdownLineEndingOrSpace(code3)) {
      data = true;
    }
    return code3 === 92 ? callEscape : callData;
  }
  function callEscape(code3) {
    if (code3 === 91 || code3 === 92 || code3 === 93) {
      effects.consume(code3);
      size++;
      return callData;
    }
    return callData(code3);
  }
  function end(code3) {
    effects.enter("gfmFootnoteCallLabelMarker");
    effects.consume(code3);
    effects.exit("gfmFootnoteCallLabelMarker");
    effects.exit("gfmFootnoteCall");
    return ok2;
  }
}
function tokenizeDefinitionStart(effects, ok2, nok) {
  const self = this;
  const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
  let identifier;
  let size = 0;
  let data;
  return start;
  function start(code3) {
    effects.enter("gfmFootnoteDefinition")._container = true;
    effects.enter("gfmFootnoteDefinitionLabel");
    effects.enter("gfmFootnoteDefinitionLabelMarker");
    effects.consume(code3);
    effects.exit("gfmFootnoteDefinitionLabelMarker");
    return labelStart;
  }
  function labelStart(code3) {
    if (code3 === 94) {
      effects.enter("gfmFootnoteDefinitionMarker");
      effects.consume(code3);
      effects.exit("gfmFootnoteDefinitionMarker");
      effects.enter("gfmFootnoteDefinitionLabelString");
      return atBreak;
    }
    return nok(code3);
  }
  function atBreak(code3) {
    let token;
    if (code3 === null || code3 === 91 || size > 999) {
      return nok(code3);
    }
    if (code3 === 93) {
      if (!data) {
        return nok(code3);
      }
      token = effects.exit("gfmFootnoteDefinitionLabelString");
      identifier = normalizeIdentifier(self.sliceSerialize(token));
      effects.enter("gfmFootnoteDefinitionLabelMarker");
      effects.consume(code3);
      effects.exit("gfmFootnoteDefinitionLabelMarker");
      effects.exit("gfmFootnoteDefinitionLabel");
      return labelAfter;
    }
    if (markdownLineEnding(code3)) {
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      size++;
      return atBreak;
    }
    effects.enter("chunkString").contentType = "string";
    return label(code3);
  }
  function label(code3) {
    if (code3 === null || markdownLineEnding(code3) || code3 === 91 || code3 === 93 || size > 999) {
      effects.exit("chunkString");
      return atBreak(code3);
    }
    if (!markdownLineEndingOrSpace(code3)) {
      data = true;
    }
    size++;
    effects.consume(code3);
    return code3 === 92 ? labelEscape : label;
  }
  function labelEscape(code3) {
    if (code3 === 91 || code3 === 92 || code3 === 93) {
      effects.consume(code3);
      size++;
      return label;
    }
    return label(code3);
  }
  function labelAfter(code3) {
    if (code3 === 58) {
      effects.enter("definitionMarker");
      effects.consume(code3);
      effects.exit("definitionMarker");
      return factorySpace(effects, done, "gfmFootnoteDefinitionWhitespace");
    }
    return nok(code3);
  }
  function done(code3) {
    if (!defined.includes(identifier)) {
      defined.push(identifier);
    }
    return ok2(code3);
  }
}
function tokenizeDefinitionContinuation(effects, ok2, nok) {
  return effects.check(blankLine, ok2, effects.attempt(indent, ok2, nok));
}
function gfmFootnoteDefinitionEnd(effects) {
  effects.exit("gfmFootnoteDefinition");
}
function tokenizeIndent2(effects, ok2, nok) {
  const self = this;
  return factorySpace(effects, afterPrefix, "gfmFootnoteDefinitionIndent", 4 + 1);
  function afterPrefix(code3) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "gfmFootnoteDefinitionIndent" && tail[2].sliceSerialize(tail[1], true).length === 4 ? ok2(code3) : nok(code3);
  }
}
var indent;
var init_syntax2 = __esm({
  "node_modules/micromark-extension-gfm-footnote/lib/syntax.js"() {
    init_react();
    init_micromark_core_commonmark();
    init_micromark_factory_space();
    init_micromark_util_character();
    init_micromark_util_normalize_identifier();
    indent = {
      tokenize: tokenizeIndent2,
      partial: true
    };
  }
});

// node_modules/micromark-extension-gfm-footnote/index.js
var init_micromark_extension_gfm_footnote = __esm({
  "node_modules/micromark-extension-gfm-footnote/index.js"() {
    init_react();
    init_syntax2();
  }
});

// node_modules/micromark-extension-gfm-strikethrough/lib/syntax.js
function gfmStrikethrough(options = {}) {
  let single = options.singleTilde;
  const tokenizer = {
    tokenize: tokenizeStrikethrough,
    resolveAll: resolveAllStrikethrough
  };
  if (single === null || single === void 0) {
    single = true;
  }
  return {
    text: {
      [126]: tokenizer
    },
    insideSpan: {
      null: [tokenizer]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function resolveAllStrikethrough(events, context) {
    let index2 = -1;
    while (++index2 < events.length) {
      if (events[index2][0] === "enter" && events[index2][1].type === "strikethroughSequenceTemporary" && events[index2][1]._close) {
        let open = index2;
        while (open--) {
          if (events[open][0] === "exit" && events[open][1].type === "strikethroughSequenceTemporary" && events[open][1]._open && events[index2][1].end.offset - events[index2][1].start.offset === events[open][1].end.offset - events[open][1].start.offset) {
            events[index2][1].type = "strikethroughSequence";
            events[open][1].type = "strikethroughSequence";
            const strikethrough2 = {
              type: "strikethrough",
              start: Object.assign({}, events[open][1].start),
              end: Object.assign({}, events[index2][1].end)
            };
            const text9 = {
              type: "strikethroughText",
              start: Object.assign({}, events[open][1].end),
              end: Object.assign({}, events[index2][1].start)
            };
            const nextEvents = [
              ["enter", strikethrough2, context],
              ["enter", events[open][1], context],
              ["exit", events[open][1], context],
              ["enter", text9, context]
            ];
            splice(nextEvents, nextEvents.length, 0, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + 1, index2), context));
            splice(nextEvents, nextEvents.length, 0, [
              ["exit", text9, context],
              ["enter", events[index2][1], context],
              ["exit", events[index2][1], context],
              ["exit", strikethrough2, context]
            ]);
            splice(events, open - 1, index2 - open + 3, nextEvents);
            index2 = open + nextEvents.length - 2;
            break;
          }
        }
      }
    }
    index2 = -1;
    while (++index2 < events.length) {
      if (events[index2][1].type === "strikethroughSequenceTemporary") {
        events[index2][1].type = "data";
      }
    }
    return events;
  }
  function tokenizeStrikethrough(effects, ok2, nok) {
    const previous3 = this.previous;
    const events = this.events;
    let size = 0;
    return start;
    function start(code3) {
      if (previous3 === 126 && events[events.length - 1][1].type !== "characterEscape") {
        return nok(code3);
      }
      effects.enter("strikethroughSequenceTemporary");
      return more(code3);
    }
    function more(code3) {
      const before = classifyCharacter(previous3);
      if (code3 === 126) {
        if (size > 1)
          return nok(code3);
        effects.consume(code3);
        size++;
        return more;
      }
      if (size < 2 && !single)
        return nok(code3);
      const token = effects.exit("strikethroughSequenceTemporary");
      const after = classifyCharacter(code3);
      token._open = !after || after === 2 && Boolean(before);
      token._close = !before || before === 2 && Boolean(after);
      return ok2(code3);
    }
  }
}
var init_syntax3 = __esm({
  "node_modules/micromark-extension-gfm-strikethrough/lib/syntax.js"() {
    init_react();
    init_micromark_util_chunked();
    init_micromark_util_classify_character();
    init_micromark_util_resolve_all();
  }
});

// node_modules/micromark-extension-gfm-strikethrough/index.js
var init_micromark_extension_gfm_strikethrough = __esm({
  "node_modules/micromark-extension-gfm-strikethrough/index.js"() {
    init_react();
    init_syntax3();
  }
});

// node_modules/micromark-extension-gfm-table/lib/syntax.js
function resolveTable(events, context) {
  let index2 = -1;
  let inHead;
  let inDelimiterRow;
  let inRow;
  let contentStart;
  let contentEnd;
  let cellStart;
  let seenCellInRow;
  while (++index2 < events.length) {
    const token = events[index2][1];
    if (inRow) {
      if (token.type === "temporaryTableCellContent") {
        contentStart = contentStart || index2;
        contentEnd = index2;
      }
      if ((token.type === "tableCellDivider" || token.type === "tableRow") && contentEnd) {
        const content5 = {
          type: "tableContent",
          start: events[contentStart][1].start,
          end: events[contentEnd][1].end
        };
        const text9 = {
          type: "chunkText",
          start: content5.start,
          end: content5.end,
          contentType: "text"
        };
        events.splice(contentStart, contentEnd - contentStart + 1, ["enter", content5, context], ["enter", text9, context], ["exit", text9, context], ["exit", content5, context]);
        index2 -= contentEnd - contentStart - 3;
        contentStart = void 0;
        contentEnd = void 0;
      }
    }
    if (events[index2][0] === "exit" && cellStart !== void 0 && cellStart + (seenCellInRow ? 0 : 1) < index2 && (token.type === "tableCellDivider" || token.type === "tableRow" && (cellStart + 3 < index2 || events[cellStart][1].type !== "whitespace"))) {
      const cell = {
        type: inDelimiterRow ? "tableDelimiter" : inHead ? "tableHeader" : "tableData",
        start: events[cellStart][1].start,
        end: events[index2][1].end
      };
      events.splice(index2 + (token.type === "tableCellDivider" ? 1 : 0), 0, [
        "exit",
        cell,
        context
      ]);
      events.splice(cellStart, 0, ["enter", cell, context]);
      index2 += 2;
      cellStart = index2 + 1;
      seenCellInRow = true;
    }
    if (token.type === "tableRow") {
      inRow = events[index2][0] === "enter";
      if (inRow) {
        cellStart = index2 + 1;
        seenCellInRow = false;
      }
    }
    if (token.type === "tableDelimiterRow") {
      inDelimiterRow = events[index2][0] === "enter";
      if (inDelimiterRow) {
        cellStart = index2 + 1;
        seenCellInRow = false;
      }
    }
    if (token.type === "tableHead") {
      inHead = events[index2][0] === "enter";
    }
  }
  return events;
}
function tokenizeTable(effects, ok2, nok) {
  const self = this;
  const align = [];
  let tableHeaderCount = 0;
  let seenDelimiter;
  let hasDash;
  return start;
  function start(code3) {
    effects.enter("table")._align = align;
    effects.enter("tableHead");
    effects.enter("tableRow");
    if (code3 === 124) {
      return cellDividerHead(code3);
    }
    tableHeaderCount++;
    effects.enter("temporaryTableCellContent");
    return inCellContentHead(code3);
  }
  function cellDividerHead(code3) {
    effects.enter("tableCellDivider");
    effects.consume(code3);
    effects.exit("tableCellDivider");
    seenDelimiter = true;
    return cellBreakHead;
  }
  function cellBreakHead(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      return atRowEndHead(code3);
    }
    if (markdownSpace(code3)) {
      effects.enter("whitespace");
      effects.consume(code3);
      return inWhitespaceHead;
    }
    if (seenDelimiter) {
      seenDelimiter = void 0;
      tableHeaderCount++;
    }
    if (code3 === 124) {
      return cellDividerHead(code3);
    }
    effects.enter("temporaryTableCellContent");
    return inCellContentHead(code3);
  }
  function inWhitespaceHead(code3) {
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return inWhitespaceHead;
    }
    effects.exit("whitespace");
    return cellBreakHead(code3);
  }
  function inCellContentHead(code3) {
    if (code3 === null || code3 === 124 || markdownLineEndingOrSpace(code3)) {
      effects.exit("temporaryTableCellContent");
      return cellBreakHead(code3);
    }
    effects.consume(code3);
    return code3 === 92 ? inCellContentEscapeHead : inCellContentHead;
  }
  function inCellContentEscapeHead(code3) {
    if (code3 === 92 || code3 === 124) {
      effects.consume(code3);
      return inCellContentHead;
    }
    return inCellContentHead(code3);
  }
  function atRowEndHead(code3) {
    if (code3 === null) {
      return nok(code3);
    }
    effects.exit("tableRow");
    effects.exit("tableHead");
    const originalInterrupt = self.interrupt;
    self.interrupt = true;
    return effects.attempt({
      tokenize: tokenizeRowEnd,
      partial: true
    }, function(code4) {
      self.interrupt = originalInterrupt;
      effects.enter("tableDelimiterRow");
      return atDelimiterRowBreak(code4);
    }, function(code4) {
      self.interrupt = originalInterrupt;
      return nok(code4);
    })(code3);
  }
  function atDelimiterRowBreak(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      return rowEndDelimiter(code3);
    }
    if (markdownSpace(code3)) {
      effects.enter("whitespace");
      effects.consume(code3);
      return inWhitespaceDelimiter;
    }
    if (code3 === 45) {
      effects.enter("tableDelimiterFiller");
      effects.consume(code3);
      hasDash = true;
      align.push("none");
      return inFillerDelimiter;
    }
    if (code3 === 58) {
      effects.enter("tableDelimiterAlignment");
      effects.consume(code3);
      effects.exit("tableDelimiterAlignment");
      align.push("left");
      return afterLeftAlignment;
    }
    if (code3 === 124) {
      effects.enter("tableCellDivider");
      effects.consume(code3);
      effects.exit("tableCellDivider");
      return atDelimiterRowBreak;
    }
    return nok(code3);
  }
  function inWhitespaceDelimiter(code3) {
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return inWhitespaceDelimiter;
    }
    effects.exit("whitespace");
    return atDelimiterRowBreak(code3);
  }
  function inFillerDelimiter(code3) {
    if (code3 === 45) {
      effects.consume(code3);
      return inFillerDelimiter;
    }
    effects.exit("tableDelimiterFiller");
    if (code3 === 58) {
      effects.enter("tableDelimiterAlignment");
      effects.consume(code3);
      effects.exit("tableDelimiterAlignment");
      align[align.length - 1] = align[align.length - 1] === "left" ? "center" : "right";
      return afterRightAlignment;
    }
    return atDelimiterRowBreak(code3);
  }
  function afterLeftAlignment(code3) {
    if (code3 === 45) {
      effects.enter("tableDelimiterFiller");
      effects.consume(code3);
      hasDash = true;
      return inFillerDelimiter;
    }
    return nok(code3);
  }
  function afterRightAlignment(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      return rowEndDelimiter(code3);
    }
    if (markdownSpace(code3)) {
      effects.enter("whitespace");
      effects.consume(code3);
      return inWhitespaceDelimiter;
    }
    if (code3 === 124) {
      effects.enter("tableCellDivider");
      effects.consume(code3);
      effects.exit("tableCellDivider");
      return atDelimiterRowBreak;
    }
    return nok(code3);
  }
  function rowEndDelimiter(code3) {
    effects.exit("tableDelimiterRow");
    if (!hasDash || tableHeaderCount !== align.length) {
      return nok(code3);
    }
    if (code3 === null) {
      return tableClose(code3);
    }
    return effects.check(nextPrefixedOrBlank, tableClose, effects.attempt({
      tokenize: tokenizeRowEnd,
      partial: true
    }, factorySpace(effects, bodyStart, "linePrefix", 4), tableClose))(code3);
  }
  function tableClose(code3) {
    effects.exit("table");
    return ok2(code3);
  }
  function bodyStart(code3) {
    effects.enter("tableBody");
    return rowStartBody(code3);
  }
  function rowStartBody(code3) {
    effects.enter("tableRow");
    if (code3 === 124) {
      return cellDividerBody(code3);
    }
    effects.enter("temporaryTableCellContent");
    return inCellContentBody(code3);
  }
  function cellDividerBody(code3) {
    effects.enter("tableCellDivider");
    effects.consume(code3);
    effects.exit("tableCellDivider");
    return cellBreakBody;
  }
  function cellBreakBody(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      return atRowEndBody(code3);
    }
    if (markdownSpace(code3)) {
      effects.enter("whitespace");
      effects.consume(code3);
      return inWhitespaceBody;
    }
    if (code3 === 124) {
      return cellDividerBody(code3);
    }
    effects.enter("temporaryTableCellContent");
    return inCellContentBody(code3);
  }
  function inWhitespaceBody(code3) {
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return inWhitespaceBody;
    }
    effects.exit("whitespace");
    return cellBreakBody(code3);
  }
  function inCellContentBody(code3) {
    if (code3 === null || code3 === 124 || markdownLineEndingOrSpace(code3)) {
      effects.exit("temporaryTableCellContent");
      return cellBreakBody(code3);
    }
    effects.consume(code3);
    return code3 === 92 ? inCellContentEscapeBody : inCellContentBody;
  }
  function inCellContentEscapeBody(code3) {
    if (code3 === 92 || code3 === 124) {
      effects.consume(code3);
      return inCellContentBody;
    }
    return inCellContentBody(code3);
  }
  function atRowEndBody(code3) {
    effects.exit("tableRow");
    if (code3 === null) {
      return tableBodyClose(code3);
    }
    return effects.check(nextPrefixedOrBlank, tableBodyClose, effects.attempt({
      tokenize: tokenizeRowEnd,
      partial: true
    }, factorySpace(effects, rowStartBody, "linePrefix", 4), tableBodyClose))(code3);
  }
  function tableBodyClose(code3) {
    effects.exit("tableBody");
    return tableClose(code3);
  }
  function tokenizeRowEnd(effects2, ok3, nok2) {
    return start2;
    function start2(code3) {
      effects2.enter("lineEnding");
      effects2.consume(code3);
      effects2.exit("lineEnding");
      return factorySpace(effects2, prefixed, "linePrefix");
    }
    function prefixed(code3) {
      if (self.parser.lazy[self.now().line] || code3 === null || markdownLineEnding(code3)) {
        return nok2(code3);
      }
      const tail = self.events[self.events.length - 1];
      if (!self.parser.constructs.disable.null.includes("codeIndented") && tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4) {
        return nok2(code3);
      }
      self._gfmTableDynamicInterruptHack = true;
      return effects2.check(self.parser.constructs.flow, function(code4) {
        self._gfmTableDynamicInterruptHack = false;
        return nok2(code4);
      }, function(code4) {
        self._gfmTableDynamicInterruptHack = false;
        return ok3(code4);
      })(code3);
    }
  }
}
function tokenizeNextPrefixedOrBlank(effects, ok2, nok) {
  let size = 0;
  return start;
  function start(code3) {
    effects.enter("check");
    effects.consume(code3);
    return whitespace2;
  }
  function whitespace2(code3) {
    if (code3 === -1 || code3 === 32) {
      effects.consume(code3);
      size++;
      return size === 4 ? ok2 : whitespace2;
    }
    if (code3 === null || markdownLineEndingOrSpace(code3)) {
      return ok2(code3);
    }
    return nok(code3);
  }
}
var gfmTable, nextPrefixedOrBlank;
var init_syntax4 = __esm({
  "node_modules/micromark-extension-gfm-table/lib/syntax.js"() {
    init_react();
    init_micromark_factory_space();
    init_micromark_util_character();
    gfmTable = {
      flow: {
        null: {
          tokenize: tokenizeTable,
          resolve: resolveTable
        }
      }
    };
    nextPrefixedOrBlank = {
      tokenize: tokenizeNextPrefixedOrBlank,
      partial: true
    };
  }
});

// node_modules/micromark-extension-gfm-table/index.js
var init_micromark_extension_gfm_table = __esm({
  "node_modules/micromark-extension-gfm-table/index.js"() {
    init_react();
    init_syntax4();
  }
});

// node_modules/micromark-extension-gfm-task-list-item/lib/syntax.js
function tokenizeTasklistCheck(effects, ok2, nok) {
  const self = this;
  return open;
  function open(code3) {
    if (self.previous !== null || !self._gfmTasklistFirstContentOfListItem) {
      return nok(code3);
    }
    effects.enter("taskListCheck");
    effects.enter("taskListCheckMarker");
    effects.consume(code3);
    effects.exit("taskListCheckMarker");
    return inside;
  }
  function inside(code3) {
    if (markdownLineEndingOrSpace(code3)) {
      effects.enter("taskListCheckValueUnchecked");
      effects.consume(code3);
      effects.exit("taskListCheckValueUnchecked");
      return close;
    }
    if (code3 === 88 || code3 === 120) {
      effects.enter("taskListCheckValueChecked");
      effects.consume(code3);
      effects.exit("taskListCheckValueChecked");
      return close;
    }
    return nok(code3);
  }
  function close(code3) {
    if (code3 === 93) {
      effects.enter("taskListCheckMarker");
      effects.consume(code3);
      effects.exit("taskListCheckMarker");
      effects.exit("taskListCheck");
      return effects.check({
        tokenize: spaceThenNonSpace
      }, ok2, nok);
    }
    return nok(code3);
  }
}
function spaceThenNonSpace(effects, ok2, nok) {
  const self = this;
  return factorySpace(effects, after, "whitespace");
  function after(code3) {
    const tail = self.events[self.events.length - 1];
    return (tail && tail[1].type === "whitespace" || markdownLineEnding(code3)) && code3 !== null ? ok2(code3) : nok(code3);
  }
}
var tasklistCheck, gfmTaskListItem;
var init_syntax5 = __esm({
  "node_modules/micromark-extension-gfm-task-list-item/lib/syntax.js"() {
    init_react();
    init_micromark_factory_space();
    init_micromark_util_character();
    tasklistCheck = {
      tokenize: tokenizeTasklistCheck
    };
    gfmTaskListItem = {
      text: {
        [91]: tasklistCheck
      }
    };
  }
});

// node_modules/micromark-extension-gfm-task-list-item/index.js
var init_micromark_extension_gfm_task_list_item = __esm({
  "node_modules/micromark-extension-gfm-task-list-item/index.js"() {
    init_react();
    init_syntax5();
  }
});

// node_modules/micromark-extension-gfm/index.js
function gfm(options) {
  return combineExtensions([
    gfmAutolinkLiteral,
    gfmFootnote(),
    gfmStrikethrough(options),
    gfmTable,
    gfmTaskListItem
  ]);
}
var init_micromark_extension_gfm = __esm({
  "node_modules/micromark-extension-gfm/index.js"() {
    init_react();
    init_micromark_util_combine_extensions();
    init_micromark_extension_gfm_autolink_literal();
    init_micromark_extension_gfm_footnote();
    init_micromark_extension_gfm_strikethrough();
    init_micromark_extension_gfm_table();
    init_micromark_extension_gfm_task_list_item();
  }
});

// node_modules/unist-util-is/index.js
function anyFactory(tests) {
  const checks = [];
  let index2 = -1;
  while (++index2 < tests.length) {
    checks[index2] = convert(tests[index2]);
  }
  return castFactory(any);
  function any(...parameters) {
    let index3 = -1;
    while (++index3 < checks.length) {
      if (checks[index3].call(this, ...parameters))
        return true;
    }
    return false;
  }
}
function propsFactory(check) {
  return castFactory(all8);
  function all8(node) {
    let key;
    for (key in check) {
      if (node[key] !== check[key])
        return false;
    }
    return true;
  }
}
function typeFactory(check) {
  return castFactory(type);
  function type(node) {
    return node && node.type === check;
  }
}
function castFactory(check) {
  return assertion;
  function assertion(...parameters) {
    return Boolean(check.call(this, ...parameters));
  }
}
function ok() {
  return true;
}
var convert;
var init_unist_util_is = __esm({
  "node_modules/unist-util-is/index.js"() {
    init_react();
    convert = function(test) {
      if (test === void 0 || test === null) {
        return ok;
      }
      if (typeof test === "string") {
        return typeFactory(test);
      }
      if (typeof test === "object") {
        return Array.isArray(test) ? anyFactory(test) : propsFactory(test);
      }
      if (typeof test === "function") {
        return castFactory(test);
      }
      throw new Error("Expected function, string, or object as test");
    };
  }
});

// node_modules/mdast-util-find-and-replace/node_modules/unist-util-visit-parents/color.js
function color(d) {
  return "\x1B[33m" + d + "\x1B[39m";
}
var init_color = __esm({
  "node_modules/mdast-util-find-and-replace/node_modules/unist-util-visit-parents/color.js"() {
    init_react();
  }
});

// node_modules/mdast-util-find-and-replace/node_modules/unist-util-visit-parents/index.js
function toResult(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "number") {
    return [CONTINUE, value];
  }
  return [value];
}
var CONTINUE, SKIP, EXIT, visitParents;
var init_unist_util_visit_parents = __esm({
  "node_modules/mdast-util-find-and-replace/node_modules/unist-util-visit-parents/index.js"() {
    init_react();
    init_unist_util_is();
    init_color();
    CONTINUE = true;
    SKIP = "skip";
    EXIT = false;
    visitParents = function(tree, test, visitor, reverse) {
      if (typeof test === "function" && typeof visitor !== "function") {
        reverse = visitor;
        visitor = test;
        test = null;
      }
      var is = convert(test);
      var step = reverse ? -1 : 1;
      factory2(tree, null, [])();
      function factory2(node, index2, parents) {
        var value = typeof node === "object" && node !== null ? node : {};
        var name;
        if (typeof value.type === "string") {
          name = typeof value.tagName === "string" ? value.tagName : typeof value.name === "string" ? value.name : void 0;
          Object.defineProperty(visit6, "name", {
            value: "node (" + color(value.type + (name ? "<" + name + ">" : "")) + ")"
          });
        }
        return visit6;
        function visit6() {
          var result = [];
          var subresult;
          var offset;
          var grandparents;
          if (!test || is(node, index2, parents[parents.length - 1] || null)) {
            result = toResult(visitor(node, parents));
            if (result[0] === EXIT) {
              return result;
            }
          }
          if (node.children && result[0] !== SKIP) {
            offset = (reverse ? node.children.length : -1) + step;
            grandparents = parents.concat(node);
            while (offset > -1 && offset < node.children.length) {
              subresult = factory2(node.children[offset], offset, grandparents)();
              if (subresult[0] === EXIT) {
                return subresult;
              }
              offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
            }
          }
          return result;
        }
      }
    };
  }
});

// node_modules/mdast-util-find-and-replace/index.js
function toPairs(schema3) {
  const result = [];
  if (typeof schema3 !== "object") {
    throw new TypeError("Expected array or object as schema");
  }
  if (Array.isArray(schema3)) {
    let index2 = -1;
    while (++index2 < schema3.length) {
      result.push([
        toExpression(schema3[index2][0]),
        toFunction(schema3[index2][1])
      ]);
    }
  } else {
    let key;
    for (key in schema3) {
      if (own3.call(schema3, key)) {
        result.push([toExpression(key), toFunction(schema3[key])]);
      }
    }
  }
  return result;
}
function toExpression(find6) {
  return typeof find6 === "string" ? new RegExp((0, import_escape_string_regexp.default)(find6), "g") : find6;
}
function toFunction(replace2) {
  return typeof replace2 === "function" ? replace2 : () => replace2;
}
var import_escape_string_regexp, own3, findAndReplace;
var init_mdast_util_find_and_replace = __esm({
  "node_modules/mdast-util-find-and-replace/index.js"() {
    init_react();
    import_escape_string_regexp = __toESM(require("escape-string-regexp"), 1);
    init_unist_util_visit_parents();
    init_unist_util_is();
    own3 = {}.hasOwnProperty;
    findAndReplace = function(tree, find6, replace2, options) {
      let settings;
      let schema3;
      if (typeof find6 === "string" || find6 instanceof RegExp) {
        schema3 = [[find6, replace2]];
        settings = options;
      } else {
        schema3 = find6;
        settings = replace2;
      }
      if (!settings) {
        settings = {};
      }
      const ignored = convert(settings.ignore || []);
      const pairs = toPairs(schema3);
      let pairIndex = -1;
      while (++pairIndex < pairs.length) {
        visitParents(tree, "text", visitor);
      }
      return tree;
      function visitor(node, parents) {
        let index2 = -1;
        let grandparent;
        while (++index2 < parents.length) {
          const parent = parents[index2];
          if (ignored(parent, grandparent ? grandparent.children.indexOf(parent) : void 0, grandparent)) {
            return;
          }
          grandparent = parent;
        }
        if (grandparent) {
          return handler(node, grandparent);
        }
      }
      function handler(node, parent) {
        const find7 = pairs[pairIndex][0];
        const replace3 = pairs[pairIndex][1];
        let start = 0;
        let index2 = parent.children.indexOf(node);
        let nodes2 = [];
        let position3;
        find7.lastIndex = 0;
        let match = find7.exec(node.value);
        while (match) {
          position3 = match.index;
          let value = replace3(...match, {
            index: match.index,
            input: match.input
          });
          if (typeof value === "string") {
            value = value.length > 0 ? { type: "text", value } : void 0;
          }
          if (value !== false) {
            if (start !== position3) {
              nodes2.push({
                type: "text",
                value: node.value.slice(start, position3)
              });
            }
            if (Array.isArray(value)) {
              nodes2.push(...value);
            } else if (value) {
              nodes2.push(value);
            }
            start = position3 + match[0].length;
          }
          if (!find7.global) {
            break;
          }
          match = find7.exec(node.value);
        }
        if (position3 === void 0) {
          nodes2 = [node];
          index2--;
        } else {
          if (start < node.value.length) {
            nodes2.push({ type: "text", value: node.value.slice(start) });
          }
          parent.children.splice(index2, 1, ...nodes2);
        }
        return index2 + nodes2.length + 1;
      }
    };
  }
});

// node_modules/mdast-util-gfm-autolink-literal/index.js
function enterLiteralAutolink(token) {
  this.enter({ type: "link", title: null, url: "", children: [] }, token);
}
function enterLiteralAutolinkValue(token) {
  this.config.enter.autolinkProtocol.call(this, token);
}
function exitLiteralAutolinkHttp(token) {
  this.config.exit.autolinkProtocol.call(this, token);
}
function exitLiteralAutolinkWww(token) {
  this.config.exit.data.call(this, token);
  const node = this.stack[this.stack.length - 1];
  node.url = "http://" + this.sliceSerialize(token);
}
function exitLiteralAutolinkEmail(token) {
  this.config.exit.autolinkEmail.call(this, token);
}
function exitLiteralAutolink(token) {
  this.exit(token);
}
function transformGfmAutolinkLiterals(tree) {
  findAndReplace(tree, [
    [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, findUrl],
    [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, findEmail]
  ], { ignore: ["link", "linkReference"] });
}
function findUrl(_, protocol, domain2, path2, match) {
  let prefix = "";
  if (!previous2(match)) {
    return false;
  }
  if (/^w/i.test(protocol)) {
    domain2 = protocol + domain2;
    protocol = "";
    prefix = "http://";
  }
  if (!isCorrectDomain(domain2)) {
    return false;
  }
  const parts = splitUrl(domain2 + path2);
  if (!parts[0])
    return false;
  const result = {
    type: "link",
    title: null,
    url: prefix + protocol + parts[0],
    children: [{ type: "text", value: protocol + parts[0] }]
  };
  if (parts[1]) {
    return [result, { type: "text", value: parts[1] }];
  }
  return result;
}
function findEmail(_, atext, label, match) {
  if (!previous2(match, true) || /[_-\d]$/.test(label)) {
    return false;
  }
  return {
    type: "link",
    title: null,
    url: "mailto:" + atext + "@" + label,
    children: [{ type: "text", value: atext + "@" + label }]
  };
}
function isCorrectDomain(domain2) {
  const parts = domain2.split(".");
  if (parts.length < 2 || parts[parts.length - 1] && (/_/.test(parts[parts.length - 1]) || !/[a-zA-Z\d]/.test(parts[parts.length - 1])) || parts[parts.length - 2] && (/_/.test(parts[parts.length - 2]) || !/[a-zA-Z\d]/.test(parts[parts.length - 2]))) {
    return false;
  }
  return true;
}
function splitUrl(url) {
  const trailExec = /[!"&'),.:;<>?\]}]+$/.exec(url);
  let closingParenIndex;
  let openingParens;
  let closingParens;
  let trail;
  if (trailExec) {
    url = url.slice(0, trailExec.index);
    trail = trailExec[0];
    closingParenIndex = trail.indexOf(")");
    openingParens = (0, import_ccount.ccount)(url, "(");
    closingParens = (0, import_ccount.ccount)(url, ")");
    while (closingParenIndex !== -1 && openingParens > closingParens) {
      url += trail.slice(0, closingParenIndex + 1);
      trail = trail.slice(closingParenIndex + 1);
      closingParenIndex = trail.indexOf(")");
      closingParens++;
    }
  }
  return [url, trail];
}
function previous2(match, email) {
  const code3 = match.input.charCodeAt(match.index - 1);
  return (match.index === 0 || unicodeWhitespace(code3) || unicodePunctuation(code3)) && (!email || code3 !== 47);
}
var import_ccount, inConstruct, notInConstruct, gfmAutolinkLiteralFromMarkdown, gfmAutolinkLiteralToMarkdown;
var init_mdast_util_gfm_autolink_literal = __esm({
  "node_modules/mdast-util-gfm-autolink-literal/index.js"() {
    init_react();
    import_ccount = require("ccount");
    init_mdast_util_find_and_replace();
    init_micromark_util_character();
    inConstruct = "phrasing";
    notInConstruct = ["autolink", "link", "image", "label"];
    gfmAutolinkLiteralFromMarkdown = {
      transforms: [transformGfmAutolinkLiterals],
      enter: {
        literalAutolink: enterLiteralAutolink,
        literalAutolinkEmail: enterLiteralAutolinkValue,
        literalAutolinkHttp: enterLiteralAutolinkValue,
        literalAutolinkWww: enterLiteralAutolinkValue
      },
      exit: {
        literalAutolink: exitLiteralAutolink,
        literalAutolinkEmail: exitLiteralAutolinkEmail,
        literalAutolinkHttp: exitLiteralAutolinkHttp,
        literalAutolinkWww: exitLiteralAutolinkWww
      }
    };
    gfmAutolinkLiteralToMarkdown = {
      unsafe: [
        {
          character: "@",
          before: "[+\\-.\\w]",
          after: "[\\-.\\w]",
          inConstruct,
          notInConstruct
        },
        {
          character: ".",
          before: "[Ww]",
          after: "[\\-.\\w]",
          inConstruct,
          notInConstruct
        },
        { character: ":", before: "[ps]", after: "\\/", inConstruct, notInConstruct }
      ]
    };
  }
});

// node_modules/mdast-util-to-markdown/lib/util/association.js
function association(node) {
  if (node.label || !node.identifier) {
    return node.label || "";
  }
  return decodeString(node.identifier);
}
var init_association = __esm({
  "node_modules/mdast-util-to-markdown/lib/util/association.js"() {
    init_react();
    init_micromark_util_decode_string();
  }
});

// node_modules/mdast-util-to-markdown/lib/util/track.js
function track(options_) {
  const options = options_ || {};
  const now = options.now || {};
  let lineShift = options.lineShift || 0;
  let line = now.line || 1;
  let column = now.column || 1;
  return { move, current, shift };
  function current() {
    return { now: { line, column }, lineShift };
  }
  function shift(value) {
    lineShift += value;
  }
  function move(value = "") {
    const chunks = value.split(/\r?\n|\r/g);
    const tail = chunks[chunks.length - 1];
    line += chunks.length - 1;
    column = chunks.length === 1 ? column + tail.length : 1 + tail.length + lineShift;
    return value;
  }
}
var init_track = __esm({
  "node_modules/mdast-util-to-markdown/lib/util/track.js"() {
    init_react();
  }
});

// node_modules/mdast-util-to-markdown/lib/util/container-flow.js
function containerFlow(parent, context, safeOptions) {
  const indexStack = context.indexStack;
  const children = parent.children || [];
  const tracker = track(safeOptions);
  const results = [];
  let index2 = -1;
  indexStack.push(-1);
  while (++index2 < children.length) {
    const child = children[index2];
    indexStack[indexStack.length - 1] = index2;
    results.push(tracker.move(context.handle(child, parent, context, __spreadValues({
      before: "\n",
      after: "\n"
    }, tracker.current()))));
    if (child.type !== "list") {
      context.bulletLastUsed = void 0;
    }
    if (index2 < children.length - 1) {
      results.push(tracker.move(between(child, children[index2 + 1])));
    }
  }
  indexStack.pop();
  return results.join("");
  function between(left, right) {
    let index3 = context.join.length;
    while (index3--) {
      const result = context.join[index3](left, right, parent, context);
      if (result === true || result === 1) {
        break;
      }
      if (typeof result === "number") {
        return "\n".repeat(1 + result);
      }
      if (result === false) {
        return "\n\n<!---->\n\n";
      }
    }
    return "\n\n";
  }
}
var init_container_flow = __esm({
  "node_modules/mdast-util-to-markdown/lib/util/container-flow.js"() {
    init_react();
    init_track();
  }
});

// node_modules/mdast-util-to-markdown/lib/util/indent-lines.js
function indentLines(value, map2) {
  const result = [];
  let start = 0;
  let line = 0;
  let match;
  while (match = eol.exec(value)) {
    one7(value.slice(start, match.index));
    result.push(match[0]);
    start = match.index + match[0].length;
    line++;
  }
  one7(value.slice(start));
  return result.join("");
  function one7(value2) {
    result.push(map2(value2, line, !value2));
  }
}
var eol;
var init_indent_lines = __esm({
  "node_modules/mdast-util-to-markdown/lib/util/indent-lines.js"() {
    init_react();
    eol = /\r?\n|\r/g;
  }
});

// node_modules/mdast-util-to-markdown/lib/util/pattern-compile.js
function patternCompile(pattern) {
  if (!pattern._compiled) {
    const before = (pattern.atBreak ? "[\\r\\n][\\t ]*" : "") + (pattern.before ? "(?:" + pattern.before + ")" : "");
    pattern._compiled = new RegExp((before ? "(" + before + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(pattern.character) ? "\\" : "") + pattern.character + (pattern.after ? "(?:" + pattern.after + ")" : ""), "g");
  }
  return pattern._compiled;
}
var init_pattern_compile = __esm({
  "node_modules/mdast-util-to-markdown/lib/util/pattern-compile.js"() {
    init_react();
  }
});

// node_modules/mdast-util-to-markdown/lib/util/pattern-in-scope.js
function patternInScope(stack, pattern) {
  return listInScope(stack, pattern.inConstruct, true) && !listInScope(stack, pattern.notInConstruct, false);
}
function listInScope(stack, list3, none) {
  if (!list3) {
    return none;
  }
  if (typeof list3 === "string") {
    list3 = [list3];
  }
  let index2 = -1;
  while (++index2 < list3.length) {
    if (stack.includes(list3[index2])) {
      return true;
    }
  }
  return false;
}
var init_pattern_in_scope = __esm({
  "node_modules/mdast-util-to-markdown/lib/util/pattern-in-scope.js"() {
    init_react();
  }
});

// node_modules/mdast-util-to-markdown/lib/util/safe.js
function safe(context, input, config) {
  const value = (config.before || "") + (input || "") + (config.after || "");
  const positions = [];
  const result = [];
  const infos = {};
  let index2 = -1;
  while (++index2 < context.unsafe.length) {
    const pattern = context.unsafe[index2];
    if (!patternInScope(context.stack, pattern)) {
      continue;
    }
    const expression = patternCompile(pattern);
    let match;
    while (match = expression.exec(value)) {
      const before = "before" in pattern || Boolean(pattern.atBreak);
      const after = "after" in pattern;
      const position3 = match.index + (before ? match[1].length : 0);
      if (positions.includes(position3)) {
        if (infos[position3].before && !before) {
          infos[position3].before = false;
        }
        if (infos[position3].after && !after) {
          infos[position3].after = false;
        }
      } else {
        positions.push(position3);
        infos[position3] = { before, after };
      }
    }
  }
  positions.sort(numerical);
  let start = config.before ? config.before.length : 0;
  const end = value.length - (config.after ? config.after.length : 0);
  index2 = -1;
  while (++index2 < positions.length) {
    const position3 = positions[index2];
    if (position3 < start || position3 >= end) {
      continue;
    }
    if (position3 + 1 < end && positions[index2 + 1] === position3 + 1 && infos[position3].after && !infos[position3 + 1].before && !infos[position3 + 1].after || positions[index2 - 1] === position3 - 1 && infos[position3].before && !infos[position3 - 1].before && !infos[position3 - 1].after) {
      continue;
    }
    if (start !== position3) {
      result.push(escapeBackslashes(value.slice(start, position3), "\\"));
    }
    start = position3;
    if (/[!-/:-@[-`{-~]/.test(value.charAt(position3)) && (!config.encode || !config.encode.includes(value.charAt(position3)))) {
      result.push("\\");
    } else {
      result.push("&#x" + value.charCodeAt(position3).toString(16).toUpperCase() + ";");
      start++;
    }
  }
  result.push(escapeBackslashes(value.slice(start, end), config.after));
  return result.join("");
}
function numerical(a, b) {
  return a - b;
}
function escapeBackslashes(value, after) {
  const expression = /\\(?=[!-/:-@[-`{-~])/g;
  const positions = [];
  const results = [];
  const whole = value + after;
  let index2 = -1;
  let start = 0;
  let match;
  while (match = expression.exec(whole)) {
    positions.push(match.index);
  }
  while (++index2 < positions.length) {
    if (start !== positions[index2]) {
      results.push(value.slice(start, positions[index2]));
    }
    results.push("\\");
    start = positions[index2];
  }
  results.push(value.slice(start));
  return results.join("");
}
var init_safe = __esm({
  "node_modules/mdast-util-to-markdown/lib/util/safe.js"() {
    init_react();
    init_pattern_compile();
    init_pattern_in_scope();
  }
});

// node_modules/mdast-util-gfm-footnote/index.js
function gfmFootnoteFromMarkdown() {
  return {
    enter: {
      gfmFootnoteDefinition: enterFootnoteDefinition,
      gfmFootnoteDefinitionLabelString: enterFootnoteDefinitionLabelString,
      gfmFootnoteCall: enterFootnoteCall,
      gfmFootnoteCallString: enterFootnoteCallString
    },
    exit: {
      gfmFootnoteDefinition: exitFootnoteDefinition,
      gfmFootnoteDefinitionLabelString: exitFootnoteDefinitionLabelString,
      gfmFootnoteCall: exitFootnoteCall,
      gfmFootnoteCallString: exitFootnoteCallString
    }
  };
  function enterFootnoteDefinition(token) {
    this.enter({ type: "footnoteDefinition", identifier: "", label: "", children: [] }, token);
  }
  function enterFootnoteDefinitionLabelString() {
    this.buffer();
  }
  function exitFootnoteDefinitionLabelString(token) {
    const label = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.label = label;
    node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
  }
  function exitFootnoteDefinition(token) {
    this.exit(token);
  }
  function enterFootnoteCall(token) {
    this.enter({ type: "footnoteReference", identifier: "", label: "" }, token);
  }
  function enterFootnoteCallString() {
    this.buffer();
  }
  function exitFootnoteCallString(token) {
    const label = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.label = label;
    node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
  }
  function exitFootnoteCall(token) {
    this.exit(token);
  }
}
function gfmFootnoteToMarkdown() {
  footnoteReference2.peek = footnoteReferencePeek;
  return {
    unsafe: [{ character: "[", inConstruct: ["phrasing", "label", "reference"] }],
    handlers: { footnoteDefinition, footnoteReference: footnoteReference2 }
  };
  function footnoteReference2(node, _, context, safeOptions) {
    const tracker = track(safeOptions);
    let value = tracker.move("[^");
    const exit3 = context.enter("footnoteReference");
    const subexit = context.enter("reference");
    value += tracker.move(safe(context, association(node), __spreadProps(__spreadValues({}, tracker.current()), {
      before: value,
      after: "]"
    })));
    subexit();
    exit3();
    value += tracker.move("]");
    return value;
  }
  function footnoteReferencePeek() {
    return "[";
  }
  function footnoteDefinition(node, _, context, safeOptions) {
    const tracker = track(safeOptions);
    let value = tracker.move("[^");
    const exit3 = context.enter("footnoteDefinition");
    const subexit = context.enter("label");
    value += tracker.move(safe(context, association(node), __spreadProps(__spreadValues({}, tracker.current()), {
      before: value,
      after: "]"
    })));
    subexit();
    value += tracker.move("]:" + (node.children && node.children.length > 0 ? " " : ""));
    tracker.shift(4);
    value += tracker.move(indentLines(containerFlow(node, context, tracker.current()), map2));
    exit3();
    return value;
    function map2(line, index2, blank) {
      if (index2) {
        return (blank ? "" : "    ") + line;
      }
      return line;
    }
  }
}
var init_mdast_util_gfm_footnote = __esm({
  "node_modules/mdast-util-gfm-footnote/index.js"() {
    init_react();
    init_micromark_util_normalize_identifier();
    init_association();
    init_container_flow();
    init_indent_lines();
    init_safe();
    init_track();
  }
});

// node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js
function containerPhrasing(parent, context, safeOptions) {
  const indexStack = context.indexStack;
  const children = parent.children || [];
  const results = [];
  let index2 = -1;
  let before = safeOptions.before;
  indexStack.push(-1);
  let tracker = track(safeOptions);
  while (++index2 < children.length) {
    const child = children[index2];
    let after;
    indexStack[indexStack.length - 1] = index2;
    if (index2 + 1 < children.length) {
      let handle = context.handle.handlers[children[index2 + 1].type];
      if (handle && handle.peek)
        handle = handle.peek;
      after = handle ? handle(children[index2 + 1], parent, context, __spreadValues({
        before: "",
        after: ""
      }, tracker.current())).charAt(0) : "";
    } else {
      after = safeOptions.after;
    }
    if (results.length > 0 && (before === "\r" || before === "\n") && child.type === "html") {
      results[results.length - 1] = results[results.length - 1].replace(/(\r?\n|\r)$/, " ");
      before = " ";
      tracker = track(safeOptions);
      tracker.move(results.join(""));
    }
    results.push(tracker.move(context.handle(child, parent, context, __spreadProps(__spreadValues({}, tracker.current()), {
      before,
      after
    }))));
    before = results[results.length - 1].slice(-1);
  }
  indexStack.pop();
  return results.join("");
}
var init_container_phrasing = __esm({
  "node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js"() {
    init_react();
    init_track();
  }
});

// node_modules/mdast-util-gfm-strikethrough/index.js
function enterStrikethrough(token) {
  this.enter({ type: "delete", children: [] }, token);
}
function exitStrikethrough(token) {
  this.exit(token);
}
function handleDelete(node, _, context, safeOptions) {
  const tracker = track(safeOptions);
  const exit3 = context.enter("emphasis");
  let value = tracker.move("~~");
  value += containerPhrasing(node, context, __spreadProps(__spreadValues({}, tracker.current()), {
    before: value,
    after: "~"
  }));
  value += tracker.move("~~");
  exit3();
  return value;
}
function peekDelete() {
  return "~";
}
var gfmStrikethroughFromMarkdown, gfmStrikethroughToMarkdown;
var init_mdast_util_gfm_strikethrough = __esm({
  "node_modules/mdast-util-gfm-strikethrough/index.js"() {
    init_react();
    init_container_phrasing();
    init_track();
    gfmStrikethroughFromMarkdown = {
      canContainEols: ["delete"],
      enter: { strikethrough: enterStrikethrough },
      exit: { strikethrough: exitStrikethrough }
    };
    gfmStrikethroughToMarkdown = {
      unsafe: [{ character: "~", inConstruct: "phrasing" }],
      handlers: { delete: handleDelete }
    };
    handleDelete.peek = peekDelete;
  }
});

// node_modules/mdast-util-to-markdown/lib/handle/inline-code.js
function inlineCode(node, _, context) {
  let value = node.value || "";
  let sequence = "`";
  let index2 = -1;
  while (new RegExp("(^|[^`])" + sequence + "([^`]|$)").test(value)) {
    sequence += "`";
  }
  if (/[^ \r\n]/.test(value) && (/^[ \r\n]/.test(value) && /[ \r\n]$/.test(value) || /^`|`$/.test(value))) {
    value = " " + value + " ";
  }
  while (++index2 < context.unsafe.length) {
    const pattern = context.unsafe[index2];
    const expression = patternCompile(pattern);
    let match;
    if (!pattern.atBreak)
      continue;
    while (match = expression.exec(value)) {
      let position3 = match.index;
      if (value.charCodeAt(position3) === 10 && value.charCodeAt(position3 - 1) === 13) {
        position3--;
      }
      value = value.slice(0, position3) + " " + value.slice(match.index + 1);
    }
  }
  return sequence + value + sequence;
}
function inlineCodePeek() {
  return "`";
}
var init_inline_code = __esm({
  "node_modules/mdast-util-to-markdown/lib/handle/inline-code.js"() {
    init_react();
    init_pattern_compile();
    inlineCode.peek = inlineCodePeek;
  }
});

// node_modules/mdast-util-gfm-table/lib/index.js
function enterTable(token) {
  const align = token._align;
  this.enter({
    type: "table",
    align: align.map((d) => d === "none" ? null : d),
    children: []
  }, token);
  this.setData("inTable", true);
}
function exitTable(token) {
  this.exit(token);
  this.setData("inTable");
}
function enterRow(token) {
  this.enter({ type: "tableRow", children: [] }, token);
}
function exit2(token) {
  this.exit(token);
}
function enterCell(token) {
  this.enter({ type: "tableCell", children: [] }, token);
}
function exitCodeText(token) {
  let value = this.resume();
  if (this.getData("inTable")) {
    value = value.replace(/\\([\\|])/g, replace);
  }
  const node = this.stack[this.stack.length - 1];
  node.value = value;
  this.exit(token);
}
function replace($0, $1) {
  return $1 === "|" ? $1 : $0;
}
function gfmTableToMarkdown(options) {
  const settings = options || {};
  const padding2 = settings.tableCellPadding;
  const alignDelimiters = settings.tablePipeAlign;
  const stringLength = settings.stringLength;
  const around = padding2 ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: "\n", inConstruct: "tableCell" },
      { atBreak: true, character: "|", after: "[	 :-]" },
      { character: "|", inConstruct: "tableCell" },
      { atBreak: true, character: ":", after: "-" },
      { atBreak: true, character: "-", after: "[:|-]" }
    ],
    handlers: {
      table: handleTable,
      tableRow: handleTableRow,
      tableCell: handleTableCell,
      inlineCode: inlineCodeWithTable
    }
  };
  function handleTable(node, _, context, safeOptions) {
    return serializeData(handleTableAsData(node, context, safeOptions), node.align);
  }
  function handleTableRow(node, _, context, safeOptions) {
    const row = handleTableRowAsData(node, context, safeOptions);
    const value = serializeData([row]);
    return value.slice(0, value.indexOf("\n"));
  }
  function handleTableCell(node, _, context, safeOptions) {
    const exit3 = context.enter("tableCell");
    const subexit = context.enter("phrasing");
    const value = containerPhrasing(node, context, __spreadProps(__spreadValues({}, safeOptions), {
      before: around,
      after: around
    }));
    subexit();
    exit3();
    return value;
  }
  function serializeData(matrix, align) {
    return (0, import_markdown_table.markdownTable)(matrix, {
      align,
      alignDelimiters,
      padding: padding2,
      stringLength
    });
  }
  function handleTableAsData(node, context, safeOptions) {
    const children = node.children;
    let index2 = -1;
    const result = [];
    const subexit = context.enter("table");
    while (++index2 < children.length) {
      result[index2] = handleTableRowAsData(children[index2], context, safeOptions);
    }
    subexit();
    return result;
  }
  function handleTableRowAsData(node, context, safeOptions) {
    const children = node.children;
    let index2 = -1;
    const result = [];
    const subexit = context.enter("tableRow");
    while (++index2 < children.length) {
      result[index2] = handleTableCell(children[index2], node, context, safeOptions);
    }
    subexit();
    return result;
  }
  function inlineCodeWithTable(node, parent, context) {
    let value = inlineCode(node, parent, context);
    if (context.stack.includes("tableCell")) {
      value = value.replace(/\|/g, "\\$&");
    }
    return value;
  }
}
var import_markdown_table, gfmTableFromMarkdown;
var init_lib4 = __esm({
  "node_modules/mdast-util-gfm-table/lib/index.js"() {
    init_react();
    init_container_phrasing();
    init_inline_code();
    import_markdown_table = require("markdown-table");
    gfmTableFromMarkdown = {
      enter: {
        table: enterTable,
        tableData: enterCell,
        tableHeader: enterCell,
        tableRow: enterRow
      },
      exit: {
        codeText: exitCodeText,
        table: exitTable,
        tableData: exit2,
        tableHeader: exit2,
        tableRow: exit2
      }
    };
  }
});

// node_modules/mdast-util-gfm-table/index.js
var init_mdast_util_gfm_table = __esm({
  "node_modules/mdast-util-gfm-table/index.js"() {
    init_react();
    init_lib4();
  }
});

// node_modules/mdast-util-to-markdown/lib/util/check-bullet.js
function checkBullet(context) {
  const marker = context.options.bullet || "*";
  if (marker !== "*" && marker !== "+" && marker !== "-") {
    throw new Error("Cannot serialize items with `" + marker + "` for `options.bullet`, expected `*`, `+`, or `-`");
  }
  return marker;
}
var init_check_bullet = __esm({
  "node_modules/mdast-util-to-markdown/lib/util/check-bullet.js"() {
    init_react();
  }
});

// node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js
function checkListItemIndent(context) {
  const style3 = context.options.listItemIndent || "tab";
  if (style3 === 1 || style3 === "1") {
    return "one";
  }
  if (style3 !== "tab" && style3 !== "one" && style3 !== "mixed") {
    throw new Error("Cannot serialize items with `" + style3 + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
  }
  return style3;
}
var init_check_list_item_indent = __esm({
  "node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js"() {
    init_react();
  }
});

// node_modules/mdast-util-to-markdown/lib/handle/list-item.js
function listItem(node, parent, context, safeOptions) {
  const listItemIndent = checkListItemIndent(context);
  let bullet = context.bulletCurrent || checkBullet(context);
  if (parent && parent.type === "list" && parent.ordered) {
    bullet = (typeof parent.start === "number" && parent.start > -1 ? parent.start : 1) + (context.options.incrementListMarker === false ? 0 : parent.children.indexOf(node)) + bullet;
  }
  let size = bullet.length + 1;
  if (listItemIndent === "tab" || listItemIndent === "mixed" && (parent && parent.type === "list" && parent.spread || node.spread)) {
    size = Math.ceil(size / 4) * 4;
  }
  const tracker = track(safeOptions);
  tracker.move(bullet + " ".repeat(size - bullet.length));
  tracker.shift(size);
  const exit3 = context.enter("listItem");
  const value = indentLines(containerFlow(node, context, tracker.current()), map2);
  exit3();
  return value;
  function map2(line, index2, blank) {
    if (index2) {
      return (blank ? "" : " ".repeat(size)) + line;
    }
    return (blank ? bullet : bullet + " ".repeat(size - bullet.length)) + line;
  }
}
var init_list_item = __esm({
  "node_modules/mdast-util-to-markdown/lib/handle/list-item.js"() {
    init_react();
    init_check_bullet();
    init_check_list_item_indent();
    init_container_flow();
    init_indent_lines();
    init_track();
  }
});

// node_modules/mdast-util-gfm-task-list-item/index.js
function exitCheck(token) {
  const node = this.stack[this.stack.length - 2];
  node.checked = token.type === "taskListCheckValueChecked";
}
function exitParagraphWithTaskListItem(token) {
  const parent = this.stack[this.stack.length - 2];
  const node = this.stack[this.stack.length - 1];
  const siblings2 = parent.children;
  const head2 = node.children[0];
  let index2 = -1;
  let firstParaghraph;
  if (parent && parent.type === "listItem" && typeof parent.checked === "boolean" && head2 && head2.type === "text") {
    while (++index2 < siblings2.length) {
      const sibling = siblings2[index2];
      if (sibling.type === "paragraph") {
        firstParaghraph = sibling;
        break;
      }
    }
    if (firstParaghraph === node) {
      head2.value = head2.value.slice(1);
      if (head2.value.length === 0) {
        node.children.shift();
      } else if (node.position && head2.position && typeof head2.position.start.offset === "number") {
        head2.position.start.column++;
        head2.position.start.offset++;
        node.position.start = Object.assign({}, head2.position.start);
      }
    }
  }
  this.exit(token);
}
function listItemWithTaskListItem(node, parent, context, safeOptions) {
  const head2 = node.children[0];
  const checkable = typeof node.checked === "boolean" && head2 && head2.type === "paragraph";
  const checkbox = "[" + (node.checked ? "x" : " ") + "] ";
  const tracker = track(safeOptions);
  if (checkable) {
    tracker.move(checkbox);
  }
  let value = listItem(node, parent, context, __spreadValues(__spreadValues({}, safeOptions), tracker.current()));
  if (checkable) {
    value = value.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, check);
  }
  return value;
  function check($0) {
    return $0 + checkbox;
  }
}
var gfmTaskListItemFromMarkdown, gfmTaskListItemToMarkdown;
var init_mdast_util_gfm_task_list_item = __esm({
  "node_modules/mdast-util-gfm-task-list-item/index.js"() {
    init_react();
    init_list_item();
    init_track();
    gfmTaskListItemFromMarkdown = {
      exit: {
        taskListCheckValueChecked: exitCheck,
        taskListCheckValueUnchecked: exitCheck,
        paragraph: exitParagraphWithTaskListItem
      }
    };
    gfmTaskListItemToMarkdown = {
      unsafe: [{ atBreak: true, character: "-", after: "[:|-]" }],
      handlers: { listItem: listItemWithTaskListItem }
    };
  }
});

// node_modules/mdast-util-gfm/lib/index.js
function gfmFromMarkdown() {
  return [
    gfmAutolinkLiteralFromMarkdown,
    gfmFootnoteFromMarkdown(),
    gfmStrikethroughFromMarkdown,
    gfmTableFromMarkdown,
    gfmTaskListItemFromMarkdown
  ];
}
function gfmToMarkdown(options) {
  return {
    extensions: [
      gfmAutolinkLiteralToMarkdown,
      gfmFootnoteToMarkdown(),
      gfmStrikethroughToMarkdown,
      gfmTableToMarkdown(options),
      gfmTaskListItemToMarkdown
    ]
  };
}
var init_lib5 = __esm({
  "node_modules/mdast-util-gfm/lib/index.js"() {
    init_react();
    init_mdast_util_gfm_autolink_literal();
    init_mdast_util_gfm_footnote();
    init_mdast_util_gfm_strikethrough();
    init_mdast_util_gfm_table();
    init_mdast_util_gfm_task_list_item();
  }
});

// node_modules/mdast-util-gfm/index.js
var init_mdast_util_gfm = __esm({
  "node_modules/mdast-util-gfm/index.js"() {
    init_react();
    init_lib5();
  }
});

// node_modules/remark-gfm/index.js
var remark_gfm_exports = {};
__export(remark_gfm_exports, {
  default: () => remarkGfm
});
function remarkGfm(options = {}) {
  const data = this.data();
  add3("micromarkExtensions", gfm(options));
  add3("fromMarkdownExtensions", gfmFromMarkdown());
  add3("toMarkdownExtensions", gfmToMarkdown(options));
  function add3(field, value) {
    const list3 = data[field] ? data[field] : data[field] = [];
    list3.push(value);
  }
}
var init_remark_gfm = __esm({
  "node_modules/remark-gfm/index.js"() {
    init_react();
    init_micromark_extension_gfm();
    init_mdast_util_gfm();
  }
});

// node_modules/unist-builder/index.js
var u;
var init_unist_builder = __esm({
  "node_modules/unist-builder/index.js"() {
    init_react();
    u = function(type, props, value) {
      var node = { type: String(type) };
      if ((value === void 0 || value === null) && (typeof props === "string" || Array.isArray(props))) {
        value = props;
      } else {
        Object.assign(node, props);
      }
      if (Array.isArray(value)) {
        node.children = value;
      } else if (value !== void 0 && value !== null) {
        node.value = String(value);
      }
      return node;
    };
  }
});

// node_modules/mdast-util-to-hast/lib/traverse.js
function unknown(h2, node) {
  const data = node.data || {};
  if ("value" in node && !(own4.call(data, "hName") || own4.call(data, "hProperties") || own4.call(data, "hChildren"))) {
    return h2.augment(node, u("text", node.value));
  }
  return h2(node, "div", all2(h2, node));
}
function one2(h2, node, parent) {
  const type = node && node.type;
  let fn;
  if (!type) {
    throw new Error("Expected node, got `" + node + "`");
  }
  if (own4.call(h2.handlers, type)) {
    fn = h2.handlers[type];
  } else if (h2.passThrough && h2.passThrough.includes(type)) {
    fn = returnNode;
  } else {
    fn = h2.unknownHandler;
  }
  return (typeof fn === "function" ? fn : unknown)(h2, node, parent);
}
function returnNode(h2, node) {
  return "children" in node ? __spreadProps(__spreadValues({}, node), { children: all2(h2, node) }) : node;
}
function all2(h2, parent) {
  const values = [];
  if ("children" in parent) {
    const nodes2 = parent.children;
    let index2 = -1;
    while (++index2 < nodes2.length) {
      const result = one2(h2, nodes2[index2], parent);
      if (result) {
        if (index2 && nodes2[index2 - 1].type === "break") {
          if (!Array.isArray(result) && result.type === "text") {
            result.value = result.value.replace(/^\s+/, "");
          }
          if (!Array.isArray(result) && result.type === "element") {
            const head2 = result.children[0];
            if (head2 && head2.type === "text") {
              head2.value = head2.value.replace(/^\s+/, "");
            }
          }
        }
        if (Array.isArray(result)) {
          values.push(...result);
        } else {
          values.push(result);
        }
      }
    }
  }
  return values;
}
var own4;
var init_traverse = __esm({
  "node_modules/mdast-util-to-hast/lib/traverse.js"() {
    init_react();
    init_unist_builder();
    own4 = {}.hasOwnProperty;
  }
});

// node_modules/unist-util-visit-parents/color.js
function color2(d) {
  return "\x1B[33m" + d + "\x1B[39m";
}
var init_color2 = __esm({
  "node_modules/unist-util-visit-parents/color.js"() {
    init_react();
  }
});

// node_modules/unist-util-visit-parents/index.js
function toResult2(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "number") {
    return [CONTINUE2, value];
  }
  return [value];
}
var CONTINUE2, SKIP2, EXIT2, visitParents2;
var init_unist_util_visit_parents2 = __esm({
  "node_modules/unist-util-visit-parents/index.js"() {
    init_react();
    init_unist_util_is();
    init_color2();
    CONTINUE2 = true;
    SKIP2 = "skip";
    EXIT2 = false;
    visitParents2 = function(tree, test, visitor, reverse) {
      if (typeof test === "function" && typeof visitor !== "function") {
        reverse = visitor;
        visitor = test;
        test = null;
      }
      const is = convert(test);
      const step = reverse ? -1 : 1;
      factory2(tree, null, [])();
      function factory2(node, index2, parents) {
        const value = typeof node === "object" && node !== null ? node : {};
        let name;
        if (typeof value.type === "string") {
          name = typeof value.tagName === "string" ? value.tagName : typeof value.name === "string" ? value.name : void 0;
          Object.defineProperty(visit6, "name", {
            value: "node (" + color2(value.type + (name ? "<" + name + ">" : "")) + ")"
          });
        }
        return visit6;
        function visit6() {
          let result = [];
          let subresult;
          let offset;
          let grandparents;
          if (!test || is(node, index2, parents[parents.length - 1] || null)) {
            result = toResult2(visitor(node, parents));
            if (result[0] === EXIT2) {
              return result;
            }
          }
          if (node.children && result[0] !== SKIP2) {
            offset = (reverse ? node.children.length : -1) + step;
            grandparents = parents.concat(node);
            while (offset > -1 && offset < node.children.length) {
              subresult = factory2(node.children[offset], offset, grandparents)();
              if (subresult[0] === EXIT2) {
                return subresult;
              }
              offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
            }
          }
          return result;
        }
      }
    };
  }
});

// node_modules/mdast-util-to-hast/node_modules/unist-util-visit/index.js
var visit;
var init_unist_util_visit = __esm({
  "node_modules/mdast-util-to-hast/node_modules/unist-util-visit/index.js"() {
    init_react();
    init_unist_util_visit_parents2();
    visit = function(tree, test, visitor, reverse) {
      if (typeof test === "function" && typeof visitor !== "function") {
        reverse = visitor;
        visitor = test;
        test = null;
      }
      visitParents2(tree, test, overload, reverse);
      function overload(node, parents) {
        const parent = parents[parents.length - 1];
        return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
      }
    };
  }
});

// node_modules/unist-util-position/index.js
function point2(type) {
  return point4;
  function point4(node) {
    const point5 = node && node.position && node.position[type] || {};
    return {
      line: point5.line || null,
      column: point5.column || null,
      offset: point5.offset > -1 ? point5.offset : null
    };
  }
}
var pointStart, pointEnd;
var init_unist_util_position = __esm({
  "node_modules/unist-util-position/index.js"() {
    init_react();
    pointStart = point2("start");
    pointEnd = point2("end");
  }
});

// node_modules/unist-util-generated/index.js
function generated(node) {
  return !node || !node.position || !node.position.start || !node.position.start.line || !node.position.start.column || !node.position.end || !node.position.end.line || !node.position.end.column;
}
var init_unist_util_generated = __esm({
  "node_modules/unist-util-generated/index.js"() {
    init_react();
  }
});

// node_modules/unist-util-visit/node_modules/unist-util-visit-parents/color.js
function color3(d) {
  return "\x1B[33m" + d + "\x1B[39m";
}
var init_color3 = __esm({
  "node_modules/unist-util-visit/node_modules/unist-util-visit-parents/color.js"() {
    init_react();
  }
});

// node_modules/unist-util-visit/node_modules/unist-util-visit-parents/index.js
function toResult3(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "number") {
    return [CONTINUE3, value];
  }
  return [value];
}
var CONTINUE3, SKIP3, EXIT3, visitParents3;
var init_unist_util_visit_parents3 = __esm({
  "node_modules/unist-util-visit/node_modules/unist-util-visit-parents/index.js"() {
    init_react();
    init_unist_util_is();
    init_color3();
    CONTINUE3 = true;
    SKIP3 = "skip";
    EXIT3 = false;
    visitParents3 = function(tree, test, visitor, reverse) {
      if (typeof test === "function" && typeof visitor !== "function") {
        reverse = visitor;
        visitor = test;
        test = null;
      }
      var is = convert(test);
      var step = reverse ? -1 : 1;
      factory2(tree, null, [])();
      function factory2(node, index2, parents) {
        var value = typeof node === "object" && node !== null ? node : {};
        var name;
        if (typeof value.type === "string") {
          name = typeof value.tagName === "string" ? value.tagName : typeof value.name === "string" ? value.name : void 0;
          Object.defineProperty(visit6, "name", {
            value: "node (" + color3(value.type + (name ? "<" + name + ">" : "")) + ")"
          });
        }
        return visit6;
        function visit6() {
          var result = [];
          var subresult;
          var offset;
          var grandparents;
          if (!test || is(node, index2, parents[parents.length - 1] || null)) {
            result = toResult3(visitor(node, parents));
            if (result[0] === EXIT3) {
              return result;
            }
          }
          if (node.children && result[0] !== SKIP3) {
            offset = (reverse ? node.children.length : -1) + step;
            grandparents = parents.concat(node);
            while (offset > -1 && offset < node.children.length) {
              subresult = factory2(node.children[offset], offset, grandparents)();
              if (subresult[0] === EXIT3) {
                return subresult;
              }
              offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
            }
          }
          return result;
        }
      }
    };
  }
});

// node_modules/unist-util-visit/index.js
var visit2;
var init_unist_util_visit2 = __esm({
  "node_modules/unist-util-visit/index.js"() {
    init_react();
    init_unist_util_visit_parents3();
    visit2 = function(tree, test, visitor, reverse) {
      if (typeof test === "function" && typeof visitor !== "function") {
        reverse = visitor;
        visitor = test;
        test = null;
      }
      visitParents3(tree, test, overload, reverse);
      function overload(node, parents) {
        var parent = parents[parents.length - 1];
        return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
      }
    };
  }
});

// node_modules/mdast-util-definitions/index.js
function definitions(node) {
  const cache = /* @__PURE__ */ Object.create(null);
  if (!node || !node.type) {
    throw new Error("mdast-util-definitions expected node");
  }
  visit2(node, "definition", ondefinition);
  return getDefinition;
  function ondefinition(definition2) {
    const id = clean(definition2.identifier);
    if (id && !own5.call(cache, id)) {
      cache[id] = definition2;
    }
  }
  function getDefinition(identifier) {
    const id = clean(identifier);
    return id && own5.call(cache, id) ? cache[id] : null;
  }
}
function clean(value) {
  return String(value || "").toUpperCase();
}
var own5;
var init_mdast_util_definitions = __esm({
  "node_modules/mdast-util-definitions/index.js"() {
    init_react();
    init_unist_util_visit2();
    own5 = {}.hasOwnProperty;
  }
});

// node_modules/mdast-util-to-hast/lib/wrap.js
function wrap(nodes2, loose) {
  const result = [];
  let index2 = -1;
  if (loose) {
    result.push(u("text", "\n"));
  }
  while (++index2 < nodes2.length) {
    if (index2)
      result.push(u("text", "\n"));
    result.push(nodes2[index2]);
  }
  if (loose && nodes2.length > 0) {
    result.push(u("text", "\n"));
  }
  return result;
}
var init_wrap = __esm({
  "node_modules/mdast-util-to-hast/lib/wrap.js"() {
    init_react();
    init_unist_builder();
  }
});

// node_modules/mdast-util-to-hast/lib/footer.js
function footer(h2) {
  let index2 = -1;
  const listItems = [];
  while (++index2 < h2.footnoteOrder.length) {
    const def = h2.footnoteById[h2.footnoteOrder[index2].toUpperCase()];
    if (!def) {
      continue;
    }
    const content5 = all2(h2, def);
    const id = String(def.identifier);
    const safeId = sanitizeUri(id.toLowerCase());
    let referenceIndex = 0;
    const backReferences = [];
    while (++referenceIndex <= h2.footnoteCounts[id]) {
      const backReference = {
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + h2.clobberPrefix + "fnref-" + safeId + (referenceIndex > 1 ? "-" + referenceIndex : ""),
          dataFootnoteBackref: true,
          className: ["data-footnote-backref"],
          ariaLabel: h2.footnoteBackLabel
        },
        children: [{ type: "text", value: "\u21A9" }]
      };
      if (referenceIndex > 1) {
        backReference.children.push({
          type: "element",
          tagName: "sup",
          children: [{ type: "text", value: String(referenceIndex) }]
        });
      }
      if (backReferences.length > 0) {
        backReferences.push({ type: "text", value: " " });
      }
      backReferences.push(backReference);
    }
    const tail = content5[content5.length - 1];
    if (tail && tail.type === "element" && tail.tagName === "p") {
      const tailTail = tail.children[tail.children.length - 1];
      if (tailTail && tailTail.type === "text") {
        tailTail.value += " ";
      } else {
        tail.children.push({ type: "text", value: " " });
      }
      tail.children.push(...backReferences);
    } else {
      content5.push(...backReferences);
    }
    const listItem3 = {
      type: "element",
      tagName: "li",
      properties: { id: h2.clobberPrefix + "fn-" + safeId },
      children: wrap(content5, true)
    };
    if (def.position) {
      listItem3.position = def.position;
    }
    listItems.push(listItem3);
  }
  if (listItems.length === 0) {
    return null;
  }
  return {
    type: "element",
    tagName: "section",
    properties: { dataFootnotes: true, className: ["footnotes"] },
    children: [
      {
        type: "element",
        tagName: "h2",
        properties: { id: "footnote-label", className: ["sr-only"] },
        children: [u("text", h2.footnoteLabel)]
      },
      { type: "text", value: "\n" },
      {
        type: "element",
        tagName: "ol",
        properties: {},
        children: wrap(listItems, true)
      },
      { type: "text", value: "\n" }
    ]
  };
}
var init_footer = __esm({
  "node_modules/mdast-util-to-hast/lib/footer.js"() {
    init_react();
    init_micromark_util_sanitize_uri();
    init_unist_builder();
    init_traverse();
    init_wrap();
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/blockquote.js
function blockquote(h2, node) {
  return h2(node, "blockquote", wrap(all2(h2, node), true));
}
var init_blockquote = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/blockquote.js"() {
    init_react();
    init_wrap();
    init_traverse();
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/break.js
function hardBreak(h2, node) {
  return [h2(node, "br"), u("text", "\n")];
}
var init_break = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/break.js"() {
    init_react();
    init_unist_builder();
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/code.js
function code2(h2, node) {
  const value = node.value ? node.value + "\n" : "";
  const lang = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/);
  const props = {};
  if (lang) {
    props.className = ["language-" + lang];
  }
  const code3 = h2(node, "code", props, [u("text", value)]);
  if (node.meta) {
    code3.data = { meta: node.meta };
  }
  return h2(node.position, "pre", [code3]);
}
var init_code = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/code.js"() {
    init_react();
    init_unist_builder();
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/delete.js
function strikethrough(h2, node) {
  return h2(node, "del", all2(h2, node));
}
var init_delete = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/delete.js"() {
    init_react();
    init_traverse();
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/emphasis.js
function emphasis(h2, node) {
  return h2(node, "em", all2(h2, node));
}
var init_emphasis = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/emphasis.js"() {
    init_react();
    init_traverse();
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js
function footnoteReference(h2, node) {
  const id = String(node.identifier);
  const safeId = sanitizeUri(id.toLowerCase());
  const index2 = h2.footnoteOrder.indexOf(id);
  let counter;
  if (index2 === -1) {
    h2.footnoteOrder.push(id);
    h2.footnoteCounts[id] = 1;
    counter = h2.footnoteOrder.length;
  } else {
    h2.footnoteCounts[id]++;
    counter = index2 + 1;
  }
  const reuseCounter = h2.footnoteCounts[id];
  return h2(node, "sup", [
    h2(node.position, "a", {
      href: "#" + h2.clobberPrefix + "fn-" + safeId,
      id: h2.clobberPrefix + "fnref-" + safeId + (reuseCounter > 1 ? "-" + reuseCounter : ""),
      dataFootnoteRef: true,
      ariaDescribedBy: "footnote-label"
    }, [u("text", String(counter))])
  ]);
}
var init_footnote_reference = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js"() {
    init_react();
    init_micromark_util_sanitize_uri();
    init_unist_builder();
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/footnote.js
function footnote(h2, node) {
  const footnoteById = h2.footnoteById;
  let no = 1;
  while (no in footnoteById)
    no++;
  const identifier = String(no);
  footnoteById[identifier] = {
    type: "footnoteDefinition",
    identifier,
    children: [{ type: "paragraph", children: node.children }],
    position: node.position
  };
  return footnoteReference(h2, {
    type: "footnoteReference",
    identifier,
    position: node.position
  });
}
var init_footnote = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/footnote.js"() {
    init_react();
    init_footnote_reference();
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/heading.js
function heading(h2, node) {
  return h2(node, "h" + node.depth, all2(h2, node));
}
var init_heading = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/heading.js"() {
    init_react();
    init_traverse();
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/html.js
function html(h2, node) {
  return h2.dangerous ? h2.augment(node, u("raw", node.value)) : null;
}
var init_html = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/html.js"() {
    init_react();
    init_unist_builder();
  }
});

// node_modules/mdast-util-to-hast/lib/revert.js
function revert(h2, node) {
  const subtype = node.referenceType;
  let suffix = "]";
  if (subtype === "collapsed") {
    suffix += "[]";
  } else if (subtype === "full") {
    suffix += "[" + (node.label || node.identifier) + "]";
  }
  if (node.type === "imageReference") {
    return u("text", "![" + node.alt + suffix);
  }
  const contents2 = all2(h2, node);
  const head2 = contents2[0];
  if (head2 && head2.type === "text") {
    head2.value = "[" + head2.value;
  } else {
    contents2.unshift(u("text", "["));
  }
  const tail = contents2[contents2.length - 1];
  if (tail && tail.type === "text") {
    tail.value += suffix;
  } else {
    contents2.push(u("text", suffix));
  }
  return contents2;
}
var init_revert = __esm({
  "node_modules/mdast-util-to-hast/lib/revert.js"() {
    init_react();
    init_unist_builder();
    init_traverse();
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/image-reference.js
function imageReference(h2, node) {
  const def = h2.definition(node.identifier);
  if (!def) {
    return revert(h2, node);
  }
  const props = { src: (0, import_encode.default)(def.url || ""), alt: node.alt };
  if (def.title !== null && def.title !== void 0) {
    props.title = def.title;
  }
  return h2(node, "img", props);
}
var import_encode;
var init_image_reference = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/image-reference.js"() {
    init_react();
    import_encode = __toESM(require("mdurl/encode.js"), 1);
    init_revert();
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/image.js
function image(h2, node) {
  const props = { src: (0, import_encode2.default)(node.url), alt: node.alt };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h2(node, "img", props);
}
var import_encode2;
var init_image = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/image.js"() {
    init_react();
    import_encode2 = __toESM(require("mdurl/encode.js"), 1);
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/inline-code.js
function inlineCode2(h2, node) {
  return h2(node, "code", [u("text", node.value.replace(/\r?\n|\r/g, " "))]);
}
var init_inline_code2 = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/inline-code.js"() {
    init_react();
    init_unist_builder();
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/link-reference.js
function linkReference(h2, node) {
  const def = h2.definition(node.identifier);
  if (!def) {
    return revert(h2, node);
  }
  const props = { href: (0, import_encode3.default)(def.url || "") };
  if (def.title !== null && def.title !== void 0) {
    props.title = def.title;
  }
  return h2(node, "a", props, all2(h2, node));
}
var import_encode3;
var init_link_reference = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/link-reference.js"() {
    init_react();
    import_encode3 = __toESM(require("mdurl/encode.js"), 1);
    init_revert();
    init_traverse();
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/link.js
function link(h2, node) {
  const props = { href: (0, import_encode4.default)(node.url) };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h2(node, "a", props, all2(h2, node));
}
var import_encode4;
var init_link = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/link.js"() {
    init_react();
    import_encode4 = __toESM(require("mdurl/encode.js"), 1);
    init_traverse();
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/list-item.js
function listItem2(h2, node, parent) {
  const result = all2(h2, node);
  const loose = parent ? listLoose(parent) : listItemLoose(node);
  const props = {};
  const wrapped = [];
  if (typeof node.checked === "boolean") {
    let paragraph2;
    if (result[0] && result[0].type === "element" && result[0].tagName === "p") {
      paragraph2 = result[0];
    } else {
      paragraph2 = h2(null, "p", []);
      result.unshift(paragraph2);
    }
    if (paragraph2.children.length > 0) {
      paragraph2.children.unshift(u("text", " "));
    }
    paragraph2.children.unshift(h2(null, "input", {
      type: "checkbox",
      checked: node.checked,
      disabled: true
    }));
    props.className = ["task-list-item"];
  }
  let index2 = -1;
  while (++index2 < result.length) {
    const child = result[index2];
    if (loose || index2 !== 0 || child.type !== "element" || child.tagName !== "p") {
      wrapped.push(u("text", "\n"));
    }
    if (child.type === "element" && child.tagName === "p" && !loose) {
      wrapped.push(...child.children);
    } else {
      wrapped.push(child);
    }
  }
  const tail = result[result.length - 1];
  if (tail && (loose || !("tagName" in tail) || tail.tagName !== "p")) {
    wrapped.push(u("text", "\n"));
  }
  return h2(node, "li", props, wrapped);
}
function listLoose(node) {
  let loose = node.spread;
  const children = node.children;
  let index2 = -1;
  while (!loose && ++index2 < children.length) {
    loose = listItemLoose(children[index2]);
  }
  return Boolean(loose);
}
function listItemLoose(node) {
  const spread = node.spread;
  return spread === void 0 || spread === null ? node.children.length > 1 : spread;
}
var init_list_item2 = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/list-item.js"() {
    init_react();
    init_unist_builder();
    init_traverse();
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/list.js
function list2(h2, node) {
  const props = {};
  const name = node.ordered ? "ol" : "ul";
  const items = all2(h2, node);
  let index2 = -1;
  if (typeof node.start === "number" && node.start !== 1) {
    props.start = node.start;
  }
  while (++index2 < items.length) {
    const item = items[index2];
    if (item.type === "element" && item.tagName === "li" && item.properties && Array.isArray(item.properties.className) && item.properties.className.includes("task-list-item")) {
      props.className = ["contains-task-list"];
      break;
    }
  }
  return h2(node, name, props, wrap(items, true));
}
var init_list2 = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/list.js"() {
    init_react();
    init_wrap();
    init_traverse();
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/paragraph.js
function paragraph(h2, node) {
  return h2(node, "p", all2(h2, node));
}
var init_paragraph = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/paragraph.js"() {
    init_react();
    init_traverse();
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/root.js
function root(h2, node) {
  return h2.augment(node, u("root", wrap(all2(h2, node))));
}
var init_root = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/root.js"() {
    init_react();
    init_unist_builder();
    init_traverse();
    init_wrap();
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/strong.js
function strong(h2, node) {
  return h2(node, "strong", all2(h2, node));
}
var init_strong = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/strong.js"() {
    init_react();
    init_traverse();
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/table.js
function table(h2, node) {
  const rows = node.children;
  let index2 = -1;
  const align = node.align || [];
  const result = [];
  while (++index2 < rows.length) {
    const row = rows[index2].children;
    const name = index2 === 0 ? "th" : "td";
    const out = [];
    let cellIndex = -1;
    const length = node.align ? align.length : row.length;
    while (++cellIndex < length) {
      const cell = row[cellIndex];
      out.push(h2(cell, name, { align: align[cellIndex] }, cell ? all2(h2, cell) : []));
    }
    result[index2] = h2(rows[index2], "tr", wrap(out, true));
  }
  return h2(node, "table", wrap([h2(result[0].position, "thead", wrap([result[0]], true))].concat(result[1] ? h2({
    start: pointStart(result[1]),
    end: pointEnd(result[result.length - 1])
  }, "tbody", wrap(result.slice(1), true)) : []), true));
}
var init_table = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/table.js"() {
    init_react();
    init_unist_util_position();
    init_wrap();
    init_traverse();
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/text.js
function text4(h2, node) {
  return h2.augment(node, u("text", String(node.value).replace(/[ \t]*(\r?\n|\r)[ \t]*/g, "$1")));
}
var init_text2 = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/text.js"() {
    init_react();
    init_unist_builder();
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js
function thematicBreak2(h2, node) {
  return h2(node, "hr");
}
var init_thematic_break2 = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js"() {
    init_react();
  }
});

// node_modules/mdast-util-to-hast/lib/handlers/index.js
function ignore() {
  return null;
}
var handlers;
var init_handlers = __esm({
  "node_modules/mdast-util-to-hast/lib/handlers/index.js"() {
    init_react();
    init_blockquote();
    init_break();
    init_code();
    init_delete();
    init_emphasis();
    init_footnote_reference();
    init_footnote();
    init_heading();
    init_html();
    init_image_reference();
    init_image();
    init_inline_code2();
    init_link_reference();
    init_link();
    init_list_item2();
    init_list2();
    init_paragraph();
    init_root();
    init_strong();
    init_table();
    init_text2();
    init_thematic_break2();
    handlers = {
      blockquote,
      break: hardBreak,
      code: code2,
      delete: strikethrough,
      emphasis,
      footnoteReference,
      footnote,
      heading,
      html,
      imageReference,
      image,
      inlineCode: inlineCode2,
      linkReference,
      link,
      listItem: listItem2,
      list: list2,
      paragraph,
      root,
      strong,
      table,
      text: text4,
      thematicBreak: thematicBreak2,
      toml: ignore,
      yaml: ignore,
      definition: ignore,
      footnoteDefinition: ignore
    };
  }
});

// node_modules/mdast-util-to-hast/lib/index.js
function factory(tree, options) {
  const settings = options || {};
  const dangerous = settings.allowDangerousHtml || false;
  const footnoteById = {};
  h2.dangerous = dangerous;
  h2.clobberPrefix = settings.clobberPrefix === void 0 || settings.clobberPrefix === null ? "user-content-" : settings.clobberPrefix;
  h2.footnoteLabel = settings.footnoteLabel || "Footnotes";
  h2.footnoteBackLabel = settings.footnoteBackLabel || "Back to content";
  h2.definition = definitions(tree);
  h2.footnoteById = footnoteById;
  h2.footnoteOrder = [];
  h2.footnoteCounts = {};
  h2.augment = augment;
  h2.handlers = __spreadValues(__spreadValues({}, handlers), settings.handlers);
  h2.unknownHandler = settings.unknownHandler;
  h2.passThrough = settings.passThrough;
  visit(tree, "footnoteDefinition", (definition2) => {
    const id = String(definition2.identifier).toUpperCase();
    if (!own6.call(footnoteById, id)) {
      footnoteById[id] = definition2;
    }
  });
  return h2;
  function augment(left, right) {
    if (left && "data" in left && left.data) {
      const data = left.data;
      if (data.hName) {
        if (right.type !== "element") {
          right = {
            type: "element",
            tagName: "",
            properties: {},
            children: []
          };
        }
        right.tagName = data.hName;
      }
      if (right.type === "element" && data.hProperties) {
        right.properties = __spreadValues(__spreadValues({}, right.properties), data.hProperties);
      }
      if ("children" in right && right.children && data.hChildren) {
        right.children = data.hChildren;
      }
    }
    if (left) {
      const ctx = "type" in left ? left : { position: left };
      if (!generated(ctx)) {
        right.position = { start: pointStart(ctx), end: pointEnd(ctx) };
      }
    }
    return right;
  }
  function h2(node, tagName, props, children) {
    if (Array.isArray(props)) {
      children = props;
      props = {};
    }
    return augment(node, {
      type: "element",
      tagName,
      properties: props || {},
      children: children || []
    });
  }
}
function toHast(tree, options) {
  const h2 = factory(tree, options);
  const node = one2(h2, tree, null);
  const foot = footer(h2);
  if (foot) {
    node.children.push(u("text", "\n"), foot);
  }
  return Array.isArray(node) ? { type: "root", children: node } : node;
}
var own6;
var init_lib6 = __esm({
  "node_modules/mdast-util-to-hast/lib/index.js"() {
    init_react();
    init_unist_builder();
    init_unist_util_visit();
    init_unist_util_position();
    init_unist_util_generated();
    init_mdast_util_definitions();
    init_traverse();
    init_footer();
    init_handlers();
    init_handlers();
    own6 = {}.hasOwnProperty;
  }
});

// node_modules/mdast-util-to-hast/index.js
var init_mdast_util_to_hast = __esm({
  "node_modules/mdast-util-to-hast/index.js"() {
    init_react();
    init_traverse();
    init_lib6();
  }
});

// node_modules/remark-rehype/lib/index.js
function bridge(destination, options) {
  return (node, file, next) => {
    destination.run(toHast(node, options), file, (error) => {
      next(error);
    });
  };
}
function mutate(options) {
  return (node) => toHast(node, options);
}
var remarkRehype, lib_default;
var init_lib7 = __esm({
  "node_modules/remark-rehype/lib/index.js"() {
    init_react();
    init_mdast_util_to_hast();
    remarkRehype = function(destination, options) {
      return destination && "run" in destination ? bridge(destination, options) : mutate(destination || options);
    };
    lib_default = remarkRehype;
  }
});

// node_modules/remark-rehype/index.js
var remark_rehype_exports = {};
__export(remark_rehype_exports, {
  all: () => all2,
  default: () => lib_default,
  defaultHandlers: () => handlers,
  one: () => one2
});
var init_remark_rehype = __esm({
  "node_modules/remark-rehype/index.js"() {
    init_react();
    init_mdast_util_to_hast();
    init_lib7();
  }
});

// node_modules/hast-util-raw/node_modules/unist-util-visit/index.js
var visit3;
var init_unist_util_visit3 = __esm({
  "node_modules/hast-util-raw/node_modules/unist-util-visit/index.js"() {
    init_react();
    init_unist_util_visit_parents2();
    visit3 = function(tree, test, visitor, reverse) {
      if (typeof test === "function" && typeof visitor !== "function") {
        reverse = visitor;
        visitor = test;
        test = null;
      }
      visitParents2(tree, test, overload, reverse);
      function overload(node, parents) {
        const parent = parents[parents.length - 1];
        return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
      }
    };
  }
});

// node_modules/hast-util-parse-selector/index.js
var search2, parseSelector;
var init_hast_util_parse_selector = __esm({
  "node_modules/hast-util-parse-selector/index.js"() {
    init_react();
    search2 = /[#.]/g;
    parseSelector = function(selector, defaultTagName = "div") {
      var value = selector || "";
      var props = {};
      var start = 0;
      var subvalue;
      var previous3;
      var match;
      while (start < value.length) {
        search2.lastIndex = start;
        match = search2.exec(value);
        subvalue = value.slice(start, match ? match.index : value.length);
        if (subvalue) {
          if (!previous3) {
            defaultTagName = subvalue;
          } else if (previous3 === "#") {
            props.id = subvalue;
          } else if (Array.isArray(props.className)) {
            props.className.push(subvalue);
          } else {
            props.className = [subvalue];
          }
          start += subvalue.length;
        }
        if (match) {
          previous3 = match[0];
          start++;
        }
      }
      return {
        type: "element",
        tagName: defaultTagName,
        properties: props,
        children: []
      };
    };
  }
});

// node_modules/hastscript/lib/core.js
function core(schema3, defaultTagName, caseSensitive) {
  const adjust = caseSensitive && createAdjustMap(caseSensitive);
  const h2 = function(selector, properties, ...children) {
    let index2 = -1;
    let node;
    if (selector === void 0 || selector === null) {
      node = { type: "root", children: [] };
      children.unshift(properties);
    } else {
      node = parseSelector(selector, defaultTagName);
      node.tagName = node.tagName.toLowerCase();
      if (adjust && own7.call(adjust, node.tagName)) {
        node.tagName = adjust[node.tagName];
      }
      if (isProperties(properties, node.tagName)) {
        let key;
        for (key in properties) {
          if (own7.call(properties, key)) {
            addProperty(schema3, node.properties, key, properties[key]);
          }
        }
      } else {
        children.unshift(properties);
      }
    }
    while (++index2 < children.length) {
      addChild(node.children, children[index2]);
    }
    if (node.type === "element" && node.tagName === "template") {
      node.content = { type: "root", children: node.children };
      node.children = [];
    }
    return node;
  };
  return h2;
}
function isProperties(value, name) {
  if (value === null || value === void 0 || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }
  if (name === "input" || !value.type || typeof value.type !== "string") {
    return true;
  }
  if ("children" in value && Array.isArray(value.children)) {
    return false;
  }
  if (name === "button") {
    return buttonTypes.has(value.type.toLowerCase());
  }
  return !("value" in value);
}
function addProperty(schema3, properties, key, value) {
  const info = (0, import_property_information.find)(schema3, key);
  let index2 = -1;
  let result;
  if (value === void 0 || value === null)
    return;
  if (typeof value === "number") {
    if (Number.isNaN(value))
      return;
    result = value;
  } else if (typeof value === "boolean") {
    result = value;
  } else if (typeof value === "string") {
    if (info.spaceSeparated) {
      result = (0, import_space_separated_tokens.parse)(value);
    } else if (info.commaSeparated) {
      result = (0, import_comma_separated_tokens.parse)(value);
    } else if (info.commaOrSpaceSeparated) {
      result = (0, import_space_separated_tokens.parse)((0, import_comma_separated_tokens.parse)(value).join(" "));
    } else {
      result = parsePrimitive(info, info.property, value);
    }
  } else if (Array.isArray(value)) {
    result = value.concat();
  } else {
    result = info.property === "style" ? style(value) : String(value);
  }
  if (Array.isArray(result)) {
    const finalResult = [];
    while (++index2 < result.length) {
      finalResult[index2] = parsePrimitive(info, info.property, result[index2]);
    }
    result = finalResult;
  }
  if (info.property === "className" && Array.isArray(properties.className)) {
    result = properties.className.concat(result);
  }
  properties[info.property] = result;
}
function addChild(nodes2, value) {
  let index2 = -1;
  if (value === void 0 || value === null) {
  } else if (typeof value === "string" || typeof value === "number") {
    nodes2.push({ type: "text", value: String(value) });
  } else if (Array.isArray(value)) {
    while (++index2 < value.length) {
      addChild(nodes2, value[index2]);
    }
  } else if (typeof value === "object" && "type" in value) {
    if (value.type === "root") {
      addChild(nodes2, value.children);
    } else {
      nodes2.push(value);
    }
  } else {
    throw new Error("Expected node, nodes, or string, got `" + value + "`");
  }
}
function parsePrimitive(info, name, value) {
  if (typeof value === "string") {
    if (info.number && value && !Number.isNaN(Number(value))) {
      return Number(value);
    }
    if ((info.boolean || info.overloadedBoolean) && (value === "" || (0, import_property_information.normalize)(value) === (0, import_property_information.normalize)(name))) {
      return true;
    }
  }
  return value;
}
function style(value) {
  const result = [];
  let key;
  for (key in value) {
    if (own7.call(value, key)) {
      result.push([key, value[key]].join(": "));
    }
  }
  return result.join("; ");
}
function createAdjustMap(values) {
  const result = {};
  let index2 = -1;
  while (++index2 < values.length) {
    result[values[index2].toLowerCase()] = values[index2];
  }
  return result;
}
var import_property_information, import_space_separated_tokens, import_comma_separated_tokens, buttonTypes, own7;
var init_core = __esm({
  "node_modules/hastscript/lib/core.js"() {
    init_react();
    import_property_information = require("property-information");
    init_hast_util_parse_selector();
    import_space_separated_tokens = require("space-separated-tokens");
    import_comma_separated_tokens = require("comma-separated-tokens");
    buttonTypes = /* @__PURE__ */ new Set(["menu", "submit", "reset", "button"]);
    own7 = {}.hasOwnProperty;
  }
});

// node_modules/hastscript/lib/html.js
var import_property_information2, h;
var init_html2 = __esm({
  "node_modules/hastscript/lib/html.js"() {
    init_react();
    import_property_information2 = require("property-information");
    init_core();
    h = core(import_property_information2.html, "div");
  }
});

// node_modules/hastscript/lib/svg-case-sensitive-tag-names.js
var svgCaseSensitiveTagNames;
var init_svg_case_sensitive_tag_names = __esm({
  "node_modules/hastscript/lib/svg-case-sensitive-tag-names.js"() {
    init_react();
    svgCaseSensitiveTagNames = [
      "altGlyph",
      "altGlyphDef",
      "altGlyphItem",
      "animateColor",
      "animateMotion",
      "animateTransform",
      "clipPath",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feDropShadow",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
      "foreignObject",
      "glyphRef",
      "linearGradient",
      "radialGradient",
      "solidColor",
      "textArea",
      "textPath"
    ];
  }
});

// node_modules/hastscript/lib/svg.js
var import_property_information3, s;
var init_svg = __esm({
  "node_modules/hastscript/lib/svg.js"() {
    init_react();
    import_property_information3 = require("property-information");
    init_core();
    init_svg_case_sensitive_tag_names();
    s = core(import_property_information3.svg, "g", svgCaseSensitiveTagNames);
  }
});

// node_modules/hastscript/lib/index.js
var init_lib8 = __esm({
  "node_modules/hastscript/lib/index.js"() {
    init_react();
    init_html2();
    init_svg();
  }
});

// node_modules/hastscript/index.js
var init_hastscript = __esm({
  "node_modules/hastscript/index.js"() {
    init_react();
    init_lib8();
  }
});

// node_modules/hast-util-from-parse5/lib/index.js
function fromParse5(ast, options = {}) {
  let settings;
  let file;
  if (isFile(options)) {
    file = options;
    settings = {};
  } else {
    file = options.file;
    settings = options;
  }
  return transform({
    schema: settings.space === "svg" ? import_property_information4.svg : import_property_information4.html,
    file,
    verbose: settings.verbose,
    location: false
  }, ast);
}
function transform(ctx, ast) {
  const schema3 = ctx.schema;
  const fn = own8.call(map, ast.nodeName) ? map[ast.nodeName] : element;
  let children;
  if ("tagName" in ast) {
    ctx.schema = ast.namespaceURI === import_web_namespaces.webNamespaces.svg ? import_property_information4.svg : import_property_information4.html;
  }
  if ("childNodes" in ast) {
    children = nodes(ctx, ast.childNodes);
  }
  const result = fn(ctx, ast, children);
  if ("sourceCodeLocation" in ast && ast.sourceCodeLocation && ctx.file) {
    const position3 = createLocation(ctx, result, ast.sourceCodeLocation);
    if (position3) {
      ctx.location = true;
      result.position = position3;
    }
  }
  ctx.schema = schema3;
  return result;
}
function nodes(ctx, children) {
  let index2 = -1;
  const result = [];
  while (++index2 < children.length) {
    result[index2] = transform(ctx, children[index2]);
  }
  return result;
}
function root2(ctx, ast, children) {
  const result = {
    type: "root",
    children,
    data: { quirksMode: ast.mode === "quirks" || ast.mode === "limited-quirks" }
  };
  if (ctx.file && ctx.location) {
    const doc2 = String(ctx.file);
    const loc = (0, import_vfile_location.location)(doc2);
    result.position = {
      start: loc.toPoint(0),
      end: loc.toPoint(doc2.length)
    };
  }
  return result;
}
function doctype() {
  return { type: "doctype" };
}
function text5(_, ast) {
  return { type: "text", value: ast.value };
}
function comment(_, ast) {
  return { type: "comment", value: ast.data };
}
function element(ctx, ast, children) {
  const fn = ctx.schema.space === "svg" ? s : h;
  let index2 = -1;
  const props = {};
  while (++index2 < ast.attrs.length) {
    const attribute = ast.attrs[index2];
    props[(attribute.prefix ? attribute.prefix + ":" : "") + attribute.name] = attribute.value;
  }
  const result = fn(ast.tagName, props, children);
  if (result.tagName === "template" && "content" in ast) {
    const pos = ast.sourceCodeLocation;
    const startTag2 = pos && pos.startTag && position2(pos.startTag);
    const endTag2 = pos && pos.endTag && position2(pos.endTag);
    const content5 = transform(ctx, ast.content);
    if (startTag2 && endTag2 && ctx.file) {
      content5.position = { start: startTag2.end, end: endTag2.start };
    }
    result.content = content5;
  }
  return result;
}
function createLocation(ctx, node, location2) {
  const result = position2(location2);
  if (node.type === "element") {
    const tail = node.children[node.children.length - 1];
    if (result && !location2.endTag && tail && tail.position && tail.position.end) {
      result.end = Object.assign({}, tail.position.end);
    }
    if (ctx.verbose) {
      const props = {};
      let key;
      for (key in location2.attrs) {
        if (own8.call(location2.attrs, key)) {
          props[(0, import_property_information4.find)(ctx.schema, key).property] = position2(location2.attrs[key]);
        }
      }
      node.data = {
        position: {
          opening: position2(location2.startTag),
          closing: location2.endTag ? position2(location2.endTag) : null,
          properties: props
        }
      };
    }
  }
  return result;
}
function position2(loc) {
  const start = point3({
    line: loc.startLine,
    column: loc.startCol,
    offset: loc.startOffset
  });
  const end = point3({
    line: loc.endLine,
    column: loc.endCol,
    offset: loc.endOffset
  });
  return start || end ? { start, end } : null;
}
function point3(point4) {
  return point4.line && point4.column ? point4 : null;
}
function isFile(value) {
  return "messages" in value;
}
var import_property_information4, import_vfile_location, import_web_namespaces, own8, map;
var init_lib9 = __esm({
  "node_modules/hast-util-from-parse5/lib/index.js"() {
    init_react();
    init_hastscript();
    import_property_information4 = require("property-information");
    import_vfile_location = require("vfile-location");
    import_web_namespaces = require("web-namespaces");
    own8 = {}.hasOwnProperty;
    map = {
      "#document": root2,
      "#document-fragment": root2,
      "#text": text5,
      "#comment": comment,
      "#documentType": doctype
    };
  }
});

// node_modules/hast-util-from-parse5/index.js
var init_hast_util_from_parse5 = __esm({
  "node_modules/hast-util-from-parse5/index.js"() {
    init_react();
    init_lib9();
  }
});

// node_modules/hast-to-hyperscript/index.js
function toH(h2, tree, options) {
  if (typeof h2 !== "function") {
    throw new TypeError("h is not a function");
  }
  const r = react(h2);
  const v = vue(h2);
  const vd = vdom(h2);
  let prefix;
  let node;
  if (typeof options === "string" || typeof options === "boolean") {
    prefix = options;
    options = {};
  } else {
    if (!options)
      options = {};
    prefix = options.prefix;
  }
  if (root3(tree)) {
    node = tree.children.length === 1 && element2(tree.children[0]) ? tree.children[0] : {
      type: "element",
      tagName: "div",
      properties: {},
      children: tree.children
    };
  } else if (element2(tree)) {
    node = tree;
  } else {
    throw new Error("Expected root or element, not `" + (tree && tree.type || tree) + "`");
  }
  return transform2(h2, node, {
    schema: options.space === "svg" ? import_property_information5.svg : import_property_information5.html,
    prefix: prefix === void 0 || prefix === null ? r || v || vd ? "h-" : null : typeof prefix === "string" ? prefix : prefix ? "h-" : null,
    key: 0,
    react: r,
    vue: v,
    vdom: vd,
    hyperscript: hyperscript(h2)
  });
}
function transform2(h2, node, ctx) {
  const parentSchema = ctx.schema;
  let schema3 = parentSchema;
  let name = node.tagName;
  const attributes2 = {};
  const nodes2 = [];
  let index2 = -1;
  let key;
  if (parentSchema.space === "html" && name.toLowerCase() === "svg") {
    schema3 = import_property_information5.svg;
    ctx.schema = schema3;
  }
  for (key in node.properties) {
    if (node.properties && own9.call(node.properties, key)) {
      addAttribute(attributes2, key, node.properties[key], ctx, name);
    }
  }
  if (ctx.vdom) {
    if (schema3.space === "html") {
      name = name.toUpperCase();
    } else if (schema3.space) {
      attributes2.namespace = ns[schema3.space];
    }
  }
  if (ctx.prefix) {
    ctx.key++;
    attributes2.key = ctx.prefix + ctx.key;
  }
  if (node.children) {
    while (++index2 < node.children.length) {
      const value = node.children[index2];
      if (element2(value)) {
        nodes2.push(transform2(h2, value, ctx));
      } else if (text6(value)) {
        nodes2.push(value.value);
      }
    }
  }
  ctx.schema = parentSchema;
  return nodes2.length > 0 ? h2.call(node, name, attributes2, nodes2) : h2.call(node, name, attributes2);
}
function addAttribute(props, prop, value, ctx, name) {
  const info = (0, import_property_information5.find)(ctx.schema, prop);
  let subprop;
  if (value === void 0 || value === null || typeof value === "number" && Number.isNaN(value) || value === false && (ctx.vue || ctx.vdom || ctx.hyperscript) || !value && info.boolean && (ctx.vue || ctx.vdom || ctx.hyperscript)) {
    return;
  }
  if (Array.isArray(value)) {
    value = info.commaSeparated ? (0, import_comma_separated_tokens2.stringify)(value) : (0, import_space_separated_tokens2.stringify)(value);
  }
  if (info.boolean && ctx.hyperscript) {
    value = "";
  }
  if (info.property === "style" && typeof value === "string" && (ctx.react || ctx.vue || ctx.vdom)) {
    value = parseStyle(value, name);
  }
  if (ctx.vue) {
    if (info.property !== "style")
      subprop = "attrs";
  } else if (!info.mustUseProperty) {
    if (ctx.vdom) {
      if (info.property !== "style")
        subprop = "attributes";
    } else if (ctx.hyperscript) {
      subprop = "attrs";
    }
  }
  if (subprop) {
    props[subprop] = Object.assign(props[subprop] || {}, {
      [info.attribute]: value
    });
  } else if (info.space && ctx.react) {
    props[toReact[info.property] || info.property] = value;
  } else {
    props[info.attribute] = value;
  }
}
function react(h2) {
  const node = h2("div", {});
  return Boolean(node && ("_owner" in node || "_store" in node) && (node.key === void 0 || node.key === null));
}
function hyperscript(h2) {
  return "context" in h2 && "cleanup" in h2;
}
function vdom(h2) {
  const node = h2("div", {});
  return node.type === "VirtualNode";
}
function vue(h2) {
  const node = h2("div", {});
  return Boolean(node && node.context && node.context._isVue);
}
function parseStyle(value, tagName) {
  const result = {};
  try {
    (0, import_style_to_object.default)(value, (name, value2) => {
      if (name.slice(0, 4) === "-ms-")
        name = "ms-" + name.slice(4);
      result[name.replace(/-([a-z])/g, (_, $1) => $1.toUpperCase())] = value2;
    });
  } catch (error) {
    error.message = tagName + "[style]" + error.message.slice("undefined".length);
    throw error;
  }
  return result;
}
var import_property_information5, import_space_separated_tokens2, import_comma_separated_tokens2, import_style_to_object, import_web_namespaces2, ns, toReact, own9, root3, element2, text6;
var init_hast_to_hyperscript = __esm({
  "node_modules/hast-to-hyperscript/index.js"() {
    init_react();
    import_property_information5 = require("property-information");
    import_space_separated_tokens2 = require("space-separated-tokens");
    import_comma_separated_tokens2 = require("comma-separated-tokens");
    import_style_to_object = __toESM(require("style-to-object"), 1);
    import_web_namespaces2 = require("web-namespaces");
    init_unist_util_is();
    ns = import_web_namespaces2.webNamespaces;
    toReact = import_property_information5.hastToReact;
    own9 = {}.hasOwnProperty;
    root3 = convert("root");
    element2 = convert("element");
    text6 = convert("text");
  }
});

// node_modules/hast-util-to-parse5/lib/index.js
function toParse5(tree, space) {
  return one3(tree, space === "svg" ? import_property_information6.svg : import_property_information6.html);
}
function root4(node, schema3) {
  var p5 = {
    nodeName: "#document",
    mode: (node.data || {}).quirksMode ? "quirks" : "no-quirks",
    childNodes: []
  };
  p5.childNodes = all3(node.children, p5, schema3);
  return patch(node, p5);
}
function fragment(node, schema3) {
  var p5 = { nodeName: "#document-fragment", childNodes: [] };
  p5.childNodes = all3(node.children, p5, schema3);
  return patch(node, p5);
}
function doctype2(node) {
  return patch(node, {
    nodeName: "#documentType",
    name: "html",
    publicId: "",
    systemId: "",
    parentNode: void 0
  });
}
function text7(node) {
  return patch(node, {
    nodeName: "#text",
    value: node.value,
    parentNode: void 0
  });
}
function comment2(node) {
  return patch(node, {
    nodeName: "#comment",
    data: node.value,
    parentNode: void 0
  });
}
function element3(node, schema3) {
  var space = schema3.space;
  return toH(h2, Object.assign({}, node, { children: [] }), { space });
  function h2(name, attrs) {
    var values = [];
    var info;
    var value;
    var key;
    var index2;
    var p5;
    for (key in attrs) {
      if (!own10.call(attrs, key) || attrs[key] === false) {
        continue;
      }
      info = (0, import_property_information6.find)(schema3, key);
      if (info.boolean && !attrs[key]) {
        continue;
      }
      value = { name: key, value: attrs[key] === true ? "" : String(attrs[key]) };
      if (info.space && info.space !== "html" && info.space !== "svg") {
        index2 = key.indexOf(":");
        if (index2 < 0) {
          value.prefix = "";
        } else {
          value.name = key.slice(index2 + 1);
          value.prefix = key.slice(0, index2);
        }
        value.namespace = import_web_namespaces3.webNamespaces[info.space];
      }
      values.push(value);
    }
    if (schema3.space === "html" && node.tagName === "svg")
      schema3 = import_property_information6.svg;
    p5 = patch(node, {
      nodeName: name,
      tagName: name,
      attrs: values,
      namespaceURI: import_web_namespaces3.webNamespaces[schema3.space],
      childNodes: [],
      parentNode: void 0
    });
    p5.childNodes = all3(node.children, p5, schema3);
    if (name === "template")
      p5.content = fragment(node.content, schema3);
    return p5;
  }
}
function all3(children, p5, schema3) {
  var index2 = -1;
  var result = [];
  var child;
  if (children) {
    while (++index2 < children.length) {
      child = one3(children[index2], schema3);
      child.parentNode = p5;
      result.push(child);
    }
  }
  return result;
}
function patch(node, p5) {
  var position3 = node.position;
  if (position3 && position3.start && position3.end) {
    p5.sourceCodeLocation = {
      startLine: position3.start.line,
      startCol: position3.start.column,
      startOffset: position3.start.offset,
      endLine: position3.end.line,
      endCol: position3.end.column,
      endOffset: position3.end.offset
    };
  }
  return p5;
}
var import_property_information6, import_web_namespaces3, import_zwitch, own10, one3;
var init_lib10 = __esm({
  "node_modules/hast-util-to-parse5/lib/index.js"() {
    init_react();
    import_property_information6 = require("property-information");
    init_hast_to_hyperscript();
    import_web_namespaces3 = require("web-namespaces");
    import_zwitch = require("zwitch");
    own10 = {}.hasOwnProperty;
    one3 = (0, import_zwitch.zwitch)("type", { handlers: { root: root4, element: element3, text: text7, comment: comment2, doctype: doctype2 } });
  }
});

// node_modules/hast-util-to-parse5/index.js
var init_hast_util_to_parse5 = __esm({
  "node_modules/hast-util-to-parse5/index.js"() {
    init_react();
    init_lib10();
  }
});

// node_modules/hast-util-raw/lib/index.js
function startTag(node) {
  const location2 = Object.assign(createParse5Location(node));
  location2.startTag = Object.assign({}, location2);
  return {
    type: startTagToken,
    tagName: node.tagName,
    selfClosing: false,
    attrs: attributes(node),
    location: location2
  };
}
function attributes(node) {
  return toParse5({
    tagName: node.tagName,
    type: "element",
    properties: node.properties,
    children: []
  }).attrs;
}
function endTag(node) {
  const location2 = Object.assign(createParse5Location(node));
  location2.startTag = Object.assign({}, location2);
  return {
    type: endTagToken,
    tagName: node.tagName,
    attrs: [],
    location: location2
  };
}
function unknown2(node) {
  throw new Error("Cannot compile `" + node.type + "` node");
}
function documentMode(node) {
  const head2 = node.type === "root" ? node.children[0] : node;
  return Boolean(head2 && (head2.type === "doctype" || head2.type === "element" && head2.tagName === "html"));
}
function createParse5Location(node) {
  const start = pointStart(node);
  const end = pointEnd(node);
  return {
    startLine: start.line,
    startCol: start.column,
    startOffset: start.offset,
    endLine: end.line,
    endCol: end.column,
    endOffset: end.offset
  };
}
function isOptions(value) {
  return Boolean(value && !("message" in value && "messages" in value));
}
var import_parser, import_html_void_elements, import_web_namespaces4, import_zwitch2, inTemplateMode, dataState, characterToken, startTagToken, endTagToken, commentToken, doctypeToken, parseOptions, raw;
var init_lib11 = __esm({
  "node_modules/hast-util-raw/lib/index.js"() {
    init_react();
    import_parser = __toESM(require("parse5/lib/parser/index.js"), 1);
    init_unist_util_position();
    init_unist_util_visit3();
    init_hast_util_from_parse5();
    init_hast_util_to_parse5();
    import_html_void_elements = require("html-void-elements");
    import_web_namespaces4 = require("web-namespaces");
    import_zwitch2 = require("zwitch");
    inTemplateMode = "IN_TEMPLATE_MODE";
    dataState = "DATA_STATE";
    characterToken = "CHARACTER_TOKEN";
    startTagToken = "START_TAG_TOKEN";
    endTagToken = "END_TAG_TOKEN";
    commentToken = "COMMENT_TOKEN";
    doctypeToken = "DOCTYPE_TOKEN";
    parseOptions = { sourceCodeLocationInfo: true, scriptingEnabled: false };
    raw = function(tree, file, options) {
      let index2 = -1;
      const parser = new import_parser.default(parseOptions);
      const one7 = (0, import_zwitch2.zwitch)("type", {
        handlers: { root: root5, element: element6, text: text9, comment: comment5, doctype: doctype4, raw: handleRaw },
        unknown: unknown2
      });
      let stitches;
      let tokenizer;
      let preprocessor;
      let posTracker;
      let locationTracker;
      if (isOptions(file)) {
        options = file;
        file = void 0;
      }
      if (options && options.passThrough) {
        while (++index2 < options.passThrough.length) {
          one7.handlers[options.passThrough[index2]] = stitch;
        }
      }
      const result = fromParse5(documentMode(tree) ? document4() : fragment2(), file);
      if (stitches) {
        visit3(result, "comment", (node, index3, parent) => {
          const stitch2 = node;
          if (stitch2.value.stitch && parent !== null && index3 !== null) {
            parent.children[index3] = stitch2.value.stitch;
            return index3;
          }
        });
      }
      if (tree.type !== "root" && result.type === "root" && result.children.length === 1) {
        return result.children[0];
      }
      return result;
      function fragment2() {
        const context = {
          nodeName: "template",
          tagName: "template",
          attrs: [],
          namespaceURI: import_web_namespaces4.webNamespaces.html,
          childNodes: []
        };
        const mock = {
          nodeName: "documentmock",
          tagName: "documentmock",
          attrs: [],
          namespaceURI: import_web_namespaces4.webNamespaces.html,
          childNodes: []
        };
        const doc2 = { nodeName: "#document-fragment", childNodes: [] };
        parser._bootstrap(mock, context);
        parser._pushTmplInsertionMode(inTemplateMode);
        parser._initTokenizerForFragmentParsing();
        parser._insertFakeRootElement();
        parser._resetInsertionMode();
        parser._findFormInFragmentContext();
        tokenizer = parser.tokenizer;
        if (!tokenizer)
          throw new Error("Expected `tokenizer`");
        preprocessor = tokenizer.preprocessor;
        locationTracker = tokenizer.__mixins[0];
        posTracker = locationTracker.posTracker;
        one7(tree);
        parser._adoptNodes(mock.childNodes[0], doc2);
        return doc2;
      }
      function document4() {
        const doc2 = parser.treeAdapter.createDocument();
        parser._bootstrap(doc2, void 0);
        tokenizer = parser.tokenizer;
        if (!tokenizer)
          throw new Error("Expected `tokenizer`");
        preprocessor = tokenizer.preprocessor;
        locationTracker = tokenizer.__mixins[0];
        posTracker = locationTracker.posTracker;
        one7(tree);
        return doc2;
      }
      function all8(nodes2) {
        let index3 = -1;
        if (nodes2) {
          while (++index3 < nodes2.length) {
            one7(nodes2[index3]);
          }
        }
      }
      function root5(node) {
        all8(node.children);
      }
      function element6(node) {
        resetTokenizer();
        parser._processToken(startTag(node), import_web_namespaces4.webNamespaces.html);
        all8(node.children);
        if (!import_html_void_elements.htmlVoidElements.includes(node.tagName)) {
          resetTokenizer();
          parser._processToken(endTag(node));
        }
      }
      function text9(node) {
        resetTokenizer();
        parser._processToken({
          type: characterToken,
          chars: node.value,
          location: createParse5Location(node)
        });
      }
      function doctype4(node) {
        resetTokenizer();
        parser._processToken({
          type: doctypeToken,
          name: "html",
          forceQuirks: false,
          publicId: "",
          systemId: "",
          location: createParse5Location(node)
        });
      }
      function comment5(node) {
        resetTokenizer();
        parser._processToken({
          type: commentToken,
          data: node.value,
          location: createParse5Location(node)
        });
      }
      function handleRaw(node) {
        const start = pointStart(node);
        const line = start.line || 1;
        const column = start.column || 1;
        const offset = start.offset || 0;
        if (!preprocessor)
          throw new Error("Expected `preprocessor`");
        if (!tokenizer)
          throw new Error("Expected `tokenizer`");
        if (!posTracker)
          throw new Error("Expected `posTracker`");
        if (!locationTracker)
          throw new Error("Expected `locationTracker`");
        preprocessor.html = void 0;
        preprocessor.pos = -1;
        preprocessor.lastGapPos = -1;
        preprocessor.lastCharPos = -1;
        preprocessor.gapStack = [];
        preprocessor.skipNextNewLine = false;
        preprocessor.lastChunkWritten = false;
        preprocessor.endOfChunkHit = false;
        posTracker.isEol = false;
        posTracker.lineStartPos = -column + 1;
        posTracker.droppedBufferSize = offset;
        posTracker.offset = 0;
        posTracker.col = 1;
        posTracker.line = line;
        locationTracker.currentAttrLocation = void 0;
        locationTracker.ctLoc = createParse5Location(node);
        tokenizer.write(node.value);
        parser._runParsingLoop(null);
        if (tokenizer.state === "NAMED_CHARACTER_REFERENCE_STATE" || tokenizer.state === "NUMERIC_CHARACTER_REFERENCE_END_STATE") {
          preprocessor.lastChunkWritten = true;
          tokenizer[tokenizer.state](tokenizer._consume());
        }
        const token = tokenizer.currentCharacterToken;
        if (token) {
          token.location.endLine = posTracker.line;
          token.location.endCol = posTracker.col + 1;
          token.location.endOffset = posTracker.offset + 1;
          parser._processToken(token);
        }
      }
      function stitch(node) {
        stitches = true;
        let clone;
        if ("children" in node) {
          clone = __spreadProps(__spreadValues({}, node), {
            children: raw({ type: "root", children: node.children }, file, options).children
          });
        } else {
          clone = __spreadValues({}, node);
        }
        comment5({ type: "comment", value: { stitch: clone } });
      }
      function resetTokenizer() {
        if (!tokenizer)
          throw new Error("Expected `tokenizer`");
        tokenizer.tokenQueue = [];
        tokenizer.state = dataState;
        tokenizer.returnState = "";
        tokenizer.charRefCode = -1;
        tokenizer.tempBuff = [];
        tokenizer.lastStartTagName = "";
        tokenizer.consumedAfterSnapshot = -1;
        tokenizer.active = false;
        tokenizer.currentCharacterToken = void 0;
        tokenizer.currentToken = void 0;
        tokenizer.currentAttr = void 0;
      }
    };
  }
});

// node_modules/hast-util-raw/index.js
var init_hast_util_raw = __esm({
  "node_modules/hast-util-raw/index.js"() {
    init_react();
    init_lib11();
  }
});

// node_modules/rehype-raw/index.js
var rehype_raw_exports = {};
__export(rehype_raw_exports, {
  default: () => rehypeRaw
});
function rehypeRaw(options = {}) {
  return (tree, file) => {
    const result = raw(tree, file, options);
    return result;
  };
}
var init_rehype_raw = __esm({
  "node_modules/rehype-raw/index.js"() {
    init_react();
    init_hast_util_raw();
  }
});

// node_modules/hast-util-is-element/index.js
function anyFactory2(tests) {
  const checks = [];
  let index2 = -1;
  while (++index2 < tests.length) {
    checks[index2] = convertElement(tests[index2]);
  }
  return castFactory2(any);
  function any(...parameters) {
    let index3 = -1;
    while (++index3 < checks.length) {
      if (checks[index3].call(this, ...parameters)) {
        return true;
      }
    }
    return false;
  }
}
function tagNameFactory(check) {
  return tagName;
  function tagName(node) {
    return element4(node) && node.tagName === check;
  }
}
function castFactory2(check) {
  return assertion;
  function assertion(node, ...parameters) {
    return element4(node) && Boolean(check.call(this, node, ...parameters));
  }
}
function element4(node) {
  return Boolean(node && typeof node === "object" && node.type === "element" && typeof node.tagName === "string");
}
var isElement, convertElement;
var init_hast_util_is_element = __esm({
  "node_modules/hast-util-is-element/index.js"() {
    init_react();
    isElement = function(node, test, index2, parent, context) {
      const check = convertElement(test);
      if (index2 !== void 0 && index2 !== null && (typeof index2 !== "number" || index2 < 0 || index2 === Number.POSITIVE_INFINITY)) {
        throw new Error("Expected positive finite index for child node");
      }
      if (parent !== void 0 && parent !== null && (!parent.type || !parent.children)) {
        throw new Error("Expected parent node");
      }
      if (!node || !node.type || typeof node.type !== "string") {
        return false;
      }
      if ((parent === void 0 || parent === null) !== (index2 === void 0 || index2 === null)) {
        throw new Error("Expected both parent and index");
      }
      return check.call(context, node, index2, parent);
    };
    convertElement = function(test) {
      if (test === void 0 || test === null) {
        return element4;
      }
      if (typeof test === "string") {
        return tagNameFactory(test);
      }
      if (typeof test === "object") {
        return anyFactory2(test);
      }
      if (typeof test === "function") {
        return castFactory2(test);
      }
      throw new Error("Expected function, string, or array as test");
    };
  }
});

// node_modules/hast-util-to-html/lib/omission/util/comment.js
var comment3;
var init_comment = __esm({
  "node_modules/hast-util-to-html/lib/omission/util/comment.js"() {
    init_react();
    init_unist_util_is();
    comment3 = convert("comment");
  }
});

// node_modules/hast-util-whitespace/index.js
function whitespace(thing) {
  var value = thing && typeof thing === "object" && thing.type === "text" ? thing.value || "" : thing;
  return typeof value === "string" && value.replace(/[ \t\n\f\r]/g, "") === "";
}
var init_hast_util_whitespace = __esm({
  "node_modules/hast-util-whitespace/index.js"() {
    init_react();
  }
});

// node_modules/hast-util-to-html/lib/omission/util/siblings.js
function siblings(increment) {
  return sibling;
  function sibling(parent, index2, includeWhitespace) {
    const siblings2 = parent && parent.children;
    let offset = index2 + increment;
    let next = siblings2 && siblings2[offset];
    if (!includeWhitespace) {
      while (next && whitespace(next)) {
        offset += increment;
        next = siblings2[offset];
      }
    }
    return next;
  }
}
var siblingAfter, siblingBefore;
var init_siblings = __esm({
  "node_modules/hast-util-to-html/lib/omission/util/siblings.js"() {
    init_react();
    init_hast_util_whitespace();
    siblingAfter = siblings(1);
    siblingBefore = siblings(-1);
  }
});

// node_modules/hast-util-to-html/lib/omission/util/whitespace-start.js
function whitespaceStart(node) {
  return isText(node) && whitespace(node.value.charAt(0));
}
var isText;
var init_whitespace_start = __esm({
  "node_modules/hast-util-to-html/lib/omission/util/whitespace-start.js"() {
    init_react();
    init_unist_util_is();
    init_hast_util_whitespace();
    isText = convert("text");
  }
});

// node_modules/hast-util-to-html/lib/omission/omission.js
function omission(handlers3) {
  return omit;
  function omit(node, index2, parent) {
    return own11.call(handlers3, node.tagName) && handlers3[node.tagName](node, index2, parent);
  }
}
var own11;
var init_omission = __esm({
  "node_modules/hast-util-to-html/lib/omission/omission.js"() {
    init_react();
    own11 = {}.hasOwnProperty;
  }
});

// node_modules/hast-util-to-html/lib/omission/closing.js
function headOrColgroupOrCaption(_, index2, parent) {
  const next = siblingAfter(parent, index2, true);
  return !next || !comment3(next) && !whitespaceStart(next);
}
function html6(_, index2, parent) {
  const next = siblingAfter(parent, index2);
  return !next || !comment3(next);
}
function body(_, index2, parent) {
  const next = siblingAfter(parent, index2);
  return !next || !comment3(next);
}
function p(_, index2, parent) {
  const next = siblingAfter(parent, index2);
  return next ? isElement(next, [
    "address",
    "article",
    "aside",
    "blockquote",
    "details",
    "div",
    "dl",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "main",
    "menu",
    "nav",
    "ol",
    "p",
    "pre",
    "section",
    "table",
    "ul"
  ]) : !parent || !isElement(parent, [
    "a",
    "audio",
    "del",
    "ins",
    "map",
    "noscript",
    "video"
  ]);
}
function li(_, index2, parent) {
  const next = siblingAfter(parent, index2);
  return !next || isElement(next, "li");
}
function dt(_, index2, parent) {
  const next = siblingAfter(parent, index2);
  return next && isElement(next, ["dt", "dd"]);
}
function dd(_, index2, parent) {
  const next = siblingAfter(parent, index2);
  return !next || isElement(next, ["dt", "dd"]);
}
function rubyElement(_, index2, parent) {
  const next = siblingAfter(parent, index2);
  return !next || isElement(next, ["rp", "rt"]);
}
function optgroup(_, index2, parent) {
  const next = siblingAfter(parent, index2);
  return !next || isElement(next, "optgroup");
}
function option(_, index2, parent) {
  const next = siblingAfter(parent, index2);
  return !next || isElement(next, ["option", "optgroup"]);
}
function menuitem(_, index2, parent) {
  const next = siblingAfter(parent, index2);
  return !next || isElement(next, ["menuitem", "hr", "menu"]);
}
function thead(_, index2, parent) {
  const next = siblingAfter(parent, index2);
  return next && isElement(next, ["tbody", "tfoot"]);
}
function tbody(_, index2, parent) {
  const next = siblingAfter(parent, index2);
  return !next || isElement(next, ["tbody", "tfoot"]);
}
function tfoot(_, index2, parent) {
  return !siblingAfter(parent, index2);
}
function tr(_, index2, parent) {
  const next = siblingAfter(parent, index2);
  return !next || isElement(next, "tr");
}
function cells(_, index2, parent) {
  const next = siblingAfter(parent, index2);
  return !next || isElement(next, ["td", "th"]);
}
var closing;
var init_closing = __esm({
  "node_modules/hast-util-to-html/lib/omission/closing.js"() {
    init_react();
    init_hast_util_is_element();
    init_comment();
    init_siblings();
    init_whitespace_start();
    init_omission();
    closing = omission({
      html: html6,
      head: headOrColgroupOrCaption,
      body,
      p,
      li,
      dt,
      dd,
      rt: rubyElement,
      rp: rubyElement,
      optgroup,
      option,
      menuitem,
      colgroup: headOrColgroupOrCaption,
      caption: headOrColgroupOrCaption,
      thead,
      tbody,
      tfoot,
      tr,
      td: cells,
      th: cells
    });
  }
});

// node_modules/hast-util-to-html/lib/omission/opening.js
function html7(node) {
  const head2 = siblingAfter(node, -1);
  return !head2 || !comment3(head2);
}
function head(node) {
  const children = node.children;
  const seen = [];
  let index2 = -1;
  let child;
  while (++index2 < children.length) {
    child = children[index2];
    if (isElement(child, ["title", "base"])) {
      if (seen.includes(child.tagName))
        return false;
      seen.push(child.tagName);
    }
  }
  return children.length > 0;
}
function body2(node) {
  const head2 = siblingAfter(node, -1, true);
  return !head2 || !comment3(head2) && !whitespaceStart(head2) && !isElement(head2, ["meta", "link", "script", "style", "template"]);
}
function colgroup(node, index2, parent) {
  const previous3 = siblingBefore(parent, index2);
  const head2 = siblingAfter(node, -1, true);
  if (isElement(previous3, "colgroup") && closing(previous3, parent.children.indexOf(previous3), parent)) {
    return false;
  }
  return head2 && isElement(head2, "col");
}
function tbody2(node, index2, parent) {
  const previous3 = siblingBefore(parent, index2);
  const head2 = siblingAfter(node, -1);
  if (isElement(previous3, ["thead", "tbody"]) && closing(previous3, parent.children.indexOf(previous3), parent)) {
    return false;
  }
  return head2 && isElement(head2, "tr");
}
var opening;
var init_opening = __esm({
  "node_modules/hast-util-to-html/lib/omission/opening.js"() {
    init_react();
    init_hast_util_is_element();
    init_comment();
    init_siblings();
    init_whitespace_start();
    init_closing();
    init_omission();
    opening = omission({
      html: html7,
      head,
      body: body2,
      colgroup,
      tbody: tbody2
    });
  }
});

// node_modules/hast-util-to-html/lib/omission/index.js
var omission2;
var init_omission2 = __esm({
  "node_modules/hast-util-to-html/lib/omission/index.js"() {
    init_react();
    init_opening();
    init_closing();
    omission2 = { opening, closing };
  }
});

// node_modules/hast-util-to-html/lib/constants.js
var constants;
var init_constants = __esm({
  "node_modules/hast-util-to-html/lib/constants.js"() {
    init_react();
    constants = {
      name: [
        ["	\n\f\r &/=>".split(""), "	\n\f\r \"&'/=>`".split("")],
        [`\0	
\f\r "&'/<=>`.split(""), "\0	\n\f\r \"&'/<=>`".split("")]
      ],
      unquoted: [
        ["	\n\f\r &>".split(""), "\0	\n\f\r \"&'<=>`".split("")],
        ["\0	\n\f\r \"&'<=>`".split(""), "\0	\n\f\r \"&'<=>`".split("")]
      ],
      single: [
        ["&'".split(""), "\"&'`".split("")],
        ["\0&'".split(""), "\0\"&'`".split("")]
      ],
      double: [
        ['"&'.split(""), "\"&'`".split("")],
        ['\0"&'.split(""), "\0\"&'`".split("")]
      ]
    };
  }
});

// node_modules/hast-util-to-html/lib/comment.js
function comment4(ctx, node) {
  return ctx.bogusComments ? "<?" + (0, import_stringify_entities.stringifyEntities)(node.value, Object.assign({}, ctx.entities, { subset: [">"] })) + ">" : "<!--" + node.value.replace(/^>|^->|<!--|-->|--!>|<!-$/g, encode2) + "-->";
  function encode2($0) {
    return (0, import_stringify_entities.stringifyEntities)($0, Object.assign({}, ctx.entities, { subset: ["<", ">"] }));
  }
}
var import_stringify_entities;
var init_comment2 = __esm({
  "node_modules/hast-util-to-html/lib/comment.js"() {
    init_react();
    import_stringify_entities = require("stringify-entities");
  }
});

// node_modules/hast-util-to-html/lib/doctype.js
function doctype3(ctx) {
  return "<!" + (ctx.upperDoctype ? "DOCTYPE" : "doctype") + (ctx.tightDoctype ? "" : " ") + "html>";
}
var init_doctype = __esm({
  "node_modules/hast-util-to-html/lib/doctype.js"() {
    init_react();
  }
});

// node_modules/hast-util-to-html/lib/text.js
function text8(ctx, node, _, parent) {
  return parent && parent.type === "element" && (parent.tagName === "script" || parent.tagName === "style") ? node.value : (0, import_stringify_entities2.stringifyEntities)(node.value, Object.assign({}, ctx.entities, { subset: ["<", "&"] }));
}
var import_stringify_entities2;
var init_text3 = __esm({
  "node_modules/hast-util-to-html/lib/text.js"() {
    init_react();
    import_stringify_entities2 = require("stringify-entities");
  }
});

// node_modules/hast-util-to-html/lib/raw.js
function raw2(ctx, node, index2, parent) {
  return ctx.dangerous ? node.value : text8(ctx, node, index2, parent);
}
var init_raw = __esm({
  "node_modules/hast-util-to-html/lib/raw.js"() {
    init_react();
    init_text3();
  }
});

// node_modules/hast-util-to-html/lib/tree.js
function one4(ctx, node, index2, parent) {
  if (!node || !node.type) {
    throw new Error("Expected node, not `" + node + "`");
  }
  if (!own12.call(handlers2, node.type)) {
    throw new Error("Cannot compile unknown node `" + node.type + "`");
  }
  return handlers2[node.type](ctx, node, index2, parent);
}
function all4(ctx, parent) {
  const results = [];
  const children = parent && parent.children || [];
  let index2 = -1;
  while (++index2 < children.length) {
    results[index2] = one4(ctx, children[index2], index2, parent);
  }
  return results.join("");
}
function element5(ctx, node, index2, parent) {
  const schema3 = ctx.schema;
  const omit = schema3.space === "svg" ? void 0 : ctx.omit;
  let selfClosing = schema3.space === "svg" ? ctx.closeEmpty : ctx.voids.includes(node.tagName.toLowerCase());
  const parts = [];
  let last;
  if (schema3.space === "html" && node.tagName === "svg") {
    ctx.schema = import_property_information7.svg;
  }
  const attrs = serializeAttributes(ctx, node.properties);
  const content5 = all4(ctx, schema3.space === "html" && node.tagName === "template" ? node.content : node);
  ctx.schema = schema3;
  if (content5)
    selfClosing = false;
  if (attrs || !omit || !omit.opening(node, index2, parent)) {
    parts.push("<", node.tagName, attrs ? " " + attrs : "");
    if (selfClosing && (schema3.space === "svg" || ctx.close)) {
      last = attrs.charAt(attrs.length - 1);
      if (!ctx.tightClose || last === "/" || last && last !== '"' && last !== "'") {
        parts.push(" ");
      }
      parts.push("/");
    }
    parts.push(">");
  }
  parts.push(content5);
  if (!selfClosing && (!omit || !omit.closing(node, index2, parent))) {
    parts.push("</" + node.tagName + ">");
  }
  return parts.join("");
}
function serializeAttributes(ctx, props) {
  const values = [];
  let index2 = -1;
  let key;
  let value;
  let last;
  for (key in props) {
    if (props[key] !== void 0 && props[key] !== null) {
      value = serializeAttribute(ctx, key, props[key]);
      if (value)
        values.push(value);
    }
  }
  while (++index2 < values.length) {
    last = ctx.tight ? values[index2].charAt(values[index2].length - 1) : null;
    if (index2 !== values.length - 1 && last !== '"' && last !== "'") {
      values[index2] += " ";
    }
  }
  return values.join("");
}
function serializeAttribute(ctx, key, value) {
  const info = (0, import_property_information7.find)(ctx.schema, key);
  let quote = ctx.quote;
  let result;
  if (info.overloadedBoolean && (value === info.attribute || value === "")) {
    value = true;
  } else if (info.boolean || info.overloadedBoolean && typeof value !== "string") {
    value = Boolean(value);
  }
  if (value === void 0 || value === null || value === false || typeof value === "number" && Number.isNaN(value)) {
    return "";
  }
  const name = (0, import_stringify_entities3.stringifyEntities)(info.attribute, Object.assign({}, ctx.entities, {
    subset: constants.name[ctx.schema.space === "html" ? ctx.valid : 1][ctx.safe]
  }));
  if (value === true)
    return name;
  value = typeof value === "object" && "length" in value ? (info.commaSeparated ? import_comma_separated_tokens3.stringify : import_space_separated_tokens3.stringify)(value, {
    padLeft: !ctx.tightLists
  }) : String(value);
  if (ctx.collapseEmpty && !value)
    return name;
  if (ctx.unquoted) {
    result = (0, import_stringify_entities3.stringifyEntities)(value, Object.assign({}, ctx.entities, {
      subset: constants.unquoted[ctx.valid][ctx.safe],
      attribute: true
    }));
  }
  if (result !== value) {
    if (ctx.smart && (0, import_ccount2.ccount)(value, quote) > (0, import_ccount2.ccount)(value, ctx.alternative)) {
      quote = ctx.alternative;
    }
    result = quote + (0, import_stringify_entities3.stringifyEntities)(value, Object.assign({}, ctx.entities, {
      subset: (quote === "'" ? constants.single : constants.double)[ctx.schema.space === "html" ? ctx.valid : 1][ctx.safe],
      attribute: true
    })) + quote;
  }
  return name + (result ? "=" + result : result);
}
var import_property_information7, import_space_separated_tokens3, import_comma_separated_tokens3, import_stringify_entities3, import_ccount2, handlers2, own12;
var init_tree = __esm({
  "node_modules/hast-util-to-html/lib/tree.js"() {
    init_react();
    import_property_information7 = require("property-information");
    import_space_separated_tokens3 = require("space-separated-tokens");
    import_comma_separated_tokens3 = require("comma-separated-tokens");
    import_stringify_entities3 = require("stringify-entities");
    import_ccount2 = require("ccount");
    init_constants();
    init_comment2();
    init_doctype();
    init_raw();
    init_text3();
    handlers2 = {
      comment: comment4,
      doctype: doctype3,
      element: element5,
      raw: raw2,
      root: all4,
      text: text8
    };
    own12 = {}.hasOwnProperty;
  }
});

// node_modules/hast-util-to-html/lib/index.js
function toHtml(node, options = {}) {
  const quote = options.quote || '"';
  const alternative = quote === '"' ? "'" : '"';
  if (quote !== '"' && quote !== "'") {
    throw new Error("Invalid quote `" + quote + "`, expected `'` or `\"`");
  }
  const context = {
    valid: options.allowParseErrors ? 0 : 1,
    safe: options.allowDangerousCharacters ? 0 : 1,
    schema: options.space === "svg" ? import_property_information8.svg : import_property_information8.html,
    omit: options.omitOptionalTags ? omission2 : void 0,
    quote,
    alternative,
    smart: options.quoteSmart,
    unquoted: options.preferUnquoted,
    tight: options.tightAttributes,
    upperDoctype: options.upperDoctype,
    tightDoctype: options.tightDoctype,
    bogusComments: options.bogusComments,
    tightLists: options.tightCommaSeparatedLists,
    tightClose: options.tightSelfClosing,
    collapseEmpty: options.collapseEmptyAttributes,
    dangerous: options.allowDangerousHtml,
    voids: options.voids || import_html_void_elements2.htmlVoidElements.concat(),
    entities: options.entities || {},
    close: options.closeSelfClosing,
    closeEmpty: options.closeEmptyElements
  };
  return one4(context, Array.isArray(node) ? { type: "root", children: node } : node, null, null);
}
var import_property_information8, import_html_void_elements2;
var init_lib12 = __esm({
  "node_modules/hast-util-to-html/lib/index.js"() {
    init_react();
    import_property_information8 = require("property-information");
    import_html_void_elements2 = require("html-void-elements");
    init_omission2();
    init_tree();
  }
});

// node_modules/hast-util-to-html/index.js
var init_hast_util_to_html = __esm({
  "node_modules/hast-util-to-html/index.js"() {
    init_react();
    init_lib12();
  }
});

// node_modules/rehype-stringify/lib/index.js
function rehypeStringify(config) {
  const processorSettings = this.data("settings");
  const settings = Object.assign({}, processorSettings, config);
  Object.assign(this, { Compiler: compiler2 });
  function compiler2(tree) {
    return toHtml(tree, settings);
  }
}
var init_lib13 = __esm({
  "node_modules/rehype-stringify/lib/index.js"() {
    init_react();
    init_hast_util_to_html();
  }
});

// node_modules/rehype-stringify/index.js
var rehype_stringify_exports = {};
__export(rehype_stringify_exports, {
  default: () => rehypeStringify
});
var init_rehype_stringify = __esm({
  "node_modules/rehype-stringify/index.js"() {
    init_react();
    init_lib13();
  }
});

// node_modules/hast-util-embedded/index.js
var embedded;
var init_hast_util_embedded = __esm({
  "node_modules/hast-util-embedded/index.js"() {
    init_react();
    init_hast_util_is_element();
    embedded = convertElement([
      "audio",
      "canvas",
      "embed",
      "iframe",
      "img",
      "math",
      "object",
      "picture",
      "svg",
      "video"
    ]);
  }
});

// node_modules/rehype-minify-whitespace/block.js
var blocks;
var init_block = __esm({
  "node_modules/rehype-minify-whitespace/block.js"() {
    init_react();
    blocks = [
      "address",
      "article",
      "aside",
      "blockquote",
      "body",
      "br",
      "caption",
      "center",
      "col",
      "colgroup",
      "dd",
      "dialog",
      "dir",
      "div",
      "dl",
      "dt",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hgroup",
      "hr",
      "html",
      "legend",
      "li",
      "li",
      "listing",
      "main",
      "menu",
      "nav",
      "ol",
      "optgroup",
      "option",
      "p",
      "plaintext",
      "pre",
      "section",
      "summary",
      "table",
      "tbody",
      "td",
      "td",
      "tfoot",
      "th",
      "th",
      "thead",
      "tr",
      "ul",
      "wbr",
      "xmp"
    ];
  }
});

// node_modules/rehype-minify-whitespace/content.js
var content3;
var init_content3 = __esm({
  "node_modules/rehype-minify-whitespace/content.js"() {
    init_react();
    content3 = [
      "button",
      "input",
      "select",
      "textarea"
    ];
  }
});

// node_modules/rehype-minify-whitespace/skippable.js
var skippable;
var init_skippable = __esm({
  "node_modules/rehype-minify-whitespace/skippable.js"() {
    init_react();
    skippable = [
      "area",
      "base",
      "basefont",
      "dialog",
      "datalist",
      "head",
      "link",
      "meta",
      "noembed",
      "noframes",
      "param",
      "rp",
      "script",
      "source",
      "style",
      "template",
      "track",
      "title"
    ];
  }
});

// node_modules/rehype-minify-whitespace/index.js
function rehypeMinifyWhitespace(options = {}) {
  const collapse = collapseFactory(options.newlines ? replaceNewlines : replaceWhitespace);
  return (tree) => {
    minify(tree, { collapse, whitespace: "normal" });
  };
}
function minify(node, context) {
  if ("children" in node) {
    const settings = Object.assign({}, context);
    if (node.type === "root" || blocklike(node)) {
      settings.before = true;
      settings.after = true;
    }
    settings.whitespace = inferWhiteSpace(node, context);
    return all5(node, settings);
  }
  if (node.type === "text") {
    if (context.whitespace === "normal") {
      return minifyText(node, context);
    }
    if (context.whitespace === "nowrap") {
      node.value = context.collapse(node.value);
    }
  }
  return { remove: false, ignore: ignorableNode(node), stripAtStart: false };
}
function minifyText(node, context) {
  const value = context.collapse(node.value);
  const result = { remove: false, ignore: false, stripAtStart: false };
  let start = 0;
  let end = value.length;
  if (context.before && removable(value.charAt(0))) {
    start++;
  }
  if (start !== end && removable(value.charAt(end - 1))) {
    if (context.after) {
      end--;
    } else {
      result.stripAtStart = true;
    }
  }
  if (start === end) {
    result.remove = true;
  } else {
    node.value = value.slice(start, end);
  }
  return result;
}
function all5(parent, context) {
  let before = context.before;
  const after = context.after;
  const children = parent.children;
  let length = children.length;
  let index2 = -1;
  while (++index2 < length) {
    const result = minify(children[index2], Object.assign({}, context, {
      before,
      after: collapsableAfter(children, index2, after)
    }));
    if (result.remove) {
      children.splice(index2, 1);
      index2--;
      length--;
    } else if (!result.ignore) {
      before = result.stripAtStart;
    }
    if (content4(children[index2])) {
      before = false;
    }
  }
  return { remove: false, ignore: false, stripAtStart: Boolean(before || after) };
}
function collapsableAfter(nodes2, index2, after) {
  while (++index2 < nodes2.length) {
    const node = nodes2[index2];
    let result = inferBoundary(node);
    if (result === void 0 && "children" in node && !skippable2(node)) {
      result = collapsableAfter(node.children, -1);
    }
    if (typeof result === "boolean") {
      return result;
    }
  }
  return after;
}
function inferBoundary(node) {
  if (node.type === "element") {
    if (content4(node)) {
      return false;
    }
    if (blocklike(node)) {
      return true;
    }
  } else if (node.type === "text") {
    if (!whitespace(node)) {
      return false;
    }
  } else if (!ignorableNode(node)) {
    return false;
  }
}
function content4(node) {
  return embedded(node) || isElement(node, content3);
}
function blocklike(node) {
  return isElement(node, blocks);
}
function skippable2(node) {
  return Boolean("properties" in node && node.properties && node.properties.hidden) || ignorableNode(node) || isElement(node, skippable);
}
function removable(character) {
  return character === " " || character === "\n";
}
function replaceNewlines(value) {
  const match = /\r?\n|\r/.exec(value);
  return match ? match[0] : " ";
}
function replaceWhitespace() {
  return " ";
}
function collapseFactory(replace2) {
  return collapse;
  function collapse(value) {
    return String(value).replace(/[\t\n\v\f\r ]+/g, replace2);
  }
}
function inferWhiteSpace(node, context) {
  if ("tagName" in node && node.properties) {
    switch (node.tagName) {
      case "listing":
      case "plaintext":
      case "script":
      case "style":
      case "xmp":
        return "pre";
      case "nobr":
        return "nowrap";
      case "pre":
        return node.properties.wrap ? "pre-wrap" : "pre";
      case "td":
      case "th":
        return node.properties.noWrap ? "nowrap" : context.whitespace;
      case "textarea":
        return "pre-wrap";
      default:
    }
  }
  return context.whitespace;
}
var ignorableNode;
var init_rehype_minify_whitespace = __esm({
  "node_modules/rehype-minify-whitespace/index.js"() {
    init_react();
    init_hast_util_is_element();
    init_hast_util_embedded();
    init_unist_util_is();
    init_hast_util_whitespace();
    init_block();
    init_content3();
    init_skippable();
    ignorableNode = convert(["doctype", "comment"]);
  }
});

// node_modules/hast-util-has-property/index.js
function hasProperty(node, name) {
  var value = name && node && typeof node === "object" && node.type === "element" && node.properties && own13.call(node.properties, name) && node.properties[name];
  return value !== null && value !== void 0 && value !== false;
}
var own13;
var init_hast_util_has_property = __esm({
  "node_modules/hast-util-has-property/index.js"() {
    init_react();
    own13 = {}.hasOwnProperty;
  }
});

// node_modules/hast-util-is-body-ok-link/node_modules/hast-util-is-element/convert.js
var require_convert = __commonJS({
  "node_modules/hast-util-is-body-ok-link/node_modules/hast-util-is-element/convert.js"(exports, module2) {
    "use strict";
    init_react();
    module2.exports = convert2;
    function convert2(test) {
      if (typeof test === "string") {
        return tagNameFactory2(test);
      }
      if (test === null || test === void 0) {
        return element6;
      }
      if (typeof test === "object") {
        return any(test);
      }
      if (typeof test === "function") {
        return callFactory(test);
      }
      throw new Error("Expected function, string, or array as test");
    }
    function convertAll(tests) {
      var length = tests.length;
      var index2 = -1;
      var results = [];
      while (++index2 < length) {
        results[index2] = convert2(tests[index2]);
      }
      return results;
    }
    function any(tests) {
      var checks = convertAll(tests);
      var length = checks.length;
      return matches;
      function matches() {
        var index2 = -1;
        while (++index2 < length) {
          if (checks[index2].apply(this, arguments)) {
            return true;
          }
        }
        return false;
      }
    }
    function tagNameFactory2(test) {
      return tagName;
      function tagName(node) {
        return element6(node) && node.tagName === test;
      }
    }
    function callFactory(test) {
      return call;
      function call(node) {
        return element6(node) && Boolean(test.apply(this, arguments));
      }
    }
    function element6(node) {
      return node && typeof node === "object" && node.type === "element" && typeof node.tagName === "string";
    }
  }
});

// node_modules/hast-util-is-body-ok-link/node_modules/hast-util-is-element/index.js
var require_hast_util_is_element = __commonJS({
  "node_modules/hast-util-is-body-ok-link/node_modules/hast-util-is-element/index.js"(exports, module2) {
    "use strict";
    init_react();
    var convert2 = require_convert();
    module2.exports = isElement2;
    isElement2.convert = convert2;
    function isElement2(node, test, index2, parent, context) {
      var hasParent = parent !== null && parent !== void 0;
      var hasIndex = index2 !== null && index2 !== void 0;
      var check = convert2(test);
      if (hasIndex && (typeof index2 !== "number" || index2 < 0 || index2 === Infinity)) {
        throw new Error("Expected positive finite index for child node");
      }
      if (hasParent && (!parent.type || !parent.children)) {
        throw new Error("Expected parent node");
      }
      if (!node || !node.type || typeof node.type !== "string") {
        return false;
      }
      if (hasParent !== hasIndex) {
        throw new Error("Expected both parent and index");
      }
      return check.call(context, node, index2, parent);
    }
  }
});

// node_modules/hast-util-is-body-ok-link/node_modules/hast-util-has-property/index.js
var require_hast_util_has_property = __commonJS({
  "node_modules/hast-util-is-body-ok-link/node_modules/hast-util-has-property/index.js"(exports, module2) {
    "use strict";
    init_react();
    var own14 = {}.hasOwnProperty;
    module2.exports = hasProperty2;
    function hasProperty2(node, name) {
      var props;
      var value;
      if (!node || !name || typeof node !== "object" || node.type !== "element") {
        return false;
      }
      props = node.properties;
      value = props && own14.call(props, name) && props[name];
      return value !== null && value !== void 0 && value !== false;
    }
  }
});

// node_modules/hast-util-is-body-ok-link/index.js
var require_hast_util_is_body_ok_link = __commonJS({
  "node_modules/hast-util-is-body-ok-link/index.js"(exports, module2) {
    "use strict";
    init_react();
    var is = require_hast_util_is_element();
    var has = require_hast_util_has_property();
    module2.exports = ok2;
    var list3 = ["pingback", "prefetch", "stylesheet"];
    function ok2(node) {
      var length;
      var index2;
      var rel;
      if (!is(node, "link")) {
        return false;
      }
      if (has(node, "itemProp")) {
        return true;
      }
      rel = (node.properties || {}).rel || [];
      length = rel.length;
      index2 = -1;
      if (rel.length === 0) {
        return false;
      }
      while (++index2 < length) {
        if (list3.indexOf(rel[index2]) === -1) {
          return false;
        }
      }
      return true;
    }
  }
});

// node_modules/hast-util-phrasing/index.js
function phrasing(node) {
  return node && node.type === "text" || basic(node) || embedded(node) || (0, import_hast_util_is_body_ok_link.default)(node) || meta2(node) && hasProperty(node, "itemProp");
}
var import_hast_util_is_body_ok_link, basic, meta2;
var init_hast_util_phrasing = __esm({
  "node_modules/hast-util-phrasing/index.js"() {
    init_react();
    init_hast_util_is_element();
    init_hast_util_has_property();
    init_hast_util_embedded();
    import_hast_util_is_body_ok_link = __toESM(require_hast_util_is_body_ok_link(), 1);
    basic = convertElement([
      "a",
      "abbr",
      "area",
      "b",
      "bdi",
      "bdo",
      "br",
      "button",
      "cite",
      "code",
      "data",
      "datalist",
      "del",
      "dfn",
      "em",
      "i",
      "input",
      "ins",
      "kbd",
      "keygen",
      "label",
      "map",
      "mark",
      "meter",
      "noscript",
      "output",
      "progress",
      "q",
      "ruby",
      "s",
      "samp",
      "script",
      "select",
      "small",
      "span",
      "strong",
      "sub",
      "sup",
      "template",
      "textarea",
      "time",
      "u",
      "var",
      "wbr"
    ]);
    meta2 = convertElement("meta");
  }
});

// node_modules/rehype-format/index.js
var rehype_format_exports = {};
__export(rehype_format_exports, {
  default: () => rehypeFormat
});
function rehypeFormat(options = {}) {
  let indent2 = options.indent || 2;
  let indentInitial = options.indentInitial;
  if (typeof indent2 === "number") {
    indent2 = " ".repeat(indent2);
  }
  if (indentInitial === null || indentInitial === void 0) {
    indentInitial = true;
  }
  return (tree) => {
    let head2;
    minify2(tree);
    visitParents2(tree, (node, parents) => {
      let index2 = -1;
      if (!("children" in node)) {
        return;
      }
      if (isElement(node, "head")) {
        head2 = true;
      }
      if (head2 && isElement(node, "body")) {
        head2 = void 0;
      }
      if (isElement(node, import_html_whitespace_sensitive_tag_names.whitespaceSensitiveTagNames)) {
        return SKIP2;
      }
      const children = node.children;
      let level = parents.length;
      if (children.length === 0 || !padding(node, head2)) {
        return;
      }
      if (!indentInitial) {
        level--;
      }
      let eol2;
      while (++index2 < children.length) {
        const child = children[index2];
        if (child.type === "text" || child.type === "comment") {
          if (child.value.includes("\n")) {
            eol2 = true;
          }
          child.value = child.value.replace(/ *\n/g, "$&" + String(indent2).repeat(level));
        }
      }
      const result = [];
      let previous3;
      index2 = -1;
      while (++index2 < children.length) {
        const child = children[index2];
        if (padding(child, head2) || eol2 && !index2) {
          addBreak(result, level, child);
          eol2 = true;
        }
        previous3 = child;
        result.push(child);
      }
      if (previous3 && (eol2 || padding(previous3, head2))) {
        if (whitespace(previous3)) {
          result.pop();
          previous3 = result[result.length - 1];
        }
        addBreak(result, level - 1);
      }
      node.children = result;
    });
  };
  function addBreak(list3, level, next) {
    const tail = list3[list3.length - 1];
    const previous3 = whitespace(tail) ? list3[list3.length - 2] : tail;
    const replace2 = (blank(previous3) && blank(next) ? "\n\n" : "\n") + String(indent2).repeat(Math.max(level, 0));
    if (tail && tail.type === "text") {
      tail.value = whitespace(tail) ? replace2 : tail.value + replace2;
    } else {
      list3.push({ type: "text", value: replace2 });
    }
  }
  function blank(node) {
    return Boolean(node && node.type === "element" && options.blanks && options.blanks.length > 0 && options.blanks.includes(node.tagName));
  }
}
function padding(node, head2) {
  return node.type === "root" || (node.type === "element" ? head2 || isElement(node, "script") || embedded(node) || !phrasing(node) : false);
}
var import_html_whitespace_sensitive_tag_names, minify2;
var init_rehype_format = __esm({
  "node_modules/rehype-format/index.js"() {
    init_react();
    init_rehype_minify_whitespace();
    init_unist_util_visit_parents2();
    init_hast_util_embedded();
    init_hast_util_phrasing();
    init_hast_util_whitespace();
    init_hast_util_is_element();
    import_html_whitespace_sensitive_tag_names = require("html-whitespace-sensitive-tag-names");
    minify2 = rehypeMinifyWhitespace({ newlines: true });
  }
});

// node_modules/mdast-util-toc/lib/to-expression.js
function toExpression2(value) {
  return new RegExp("^(" + value + ")$", "i");
}
var init_to_expression = __esm({
  "node_modules/mdast-util-toc/lib/to-expression.js"() {
    init_react();
  }
});

// node_modules/mdast-util-toc/lib/search.js
function search3(root5, expression, settings) {
  const skip = settings.skip && toExpression2(settings.skip);
  const parents = convert(settings.parents || ((d) => d === root5));
  const map2 = [];
  let index2;
  let endIndex;
  let opening2;
  slugs.reset();
  visit2(root5, "heading", onheading);
  return {
    index: index2 || -1,
    endIndex: index2 ? endIndex || root5.children.length : -1,
    map: map2
  };
  function onheading(node, position3, parent) {
    const value = toString(node, { includeImageAlt: false });
    const id = node.data && node.data.hProperties && node.data.hProperties.id;
    const slug = slugs.slug(id || value);
    if (!parents(parent)) {
      return;
    }
    if (position3 !== null && expression && !index2 && expression.test(value)) {
      index2 = position3 + 1;
      opening2 = node;
      return;
    }
    if (position3 !== null && opening2 && !endIndex && node.depth <= opening2.depth) {
      endIndex = position3;
    }
    if ((endIndex || !expression) && (!settings.maxDepth || node.depth <= settings.maxDepth) && (!skip || !skip.test(value))) {
      map2.push({ depth: node.depth, children: node.children, id: slug });
    }
  }
}
var import_github_slugger, slugs;
var init_search = __esm({
  "node_modules/mdast-util-toc/lib/search.js"() {
    init_react();
    import_github_slugger = __toESM(require("github-slugger"), 1);
    init_mdast_util_to_string();
    init_unist_util_visit2();
    init_unist_util_is();
    init_to_expression();
    slugs = new import_github_slugger.default();
  }
});

// node_modules/mdast-util-toc/lib/contents.js
function contents(map2, settings) {
  const { ordered = false, tight = false, prefix = null } = settings;
  const table2 = { type: "list", ordered, spread: false, children: [] };
  let minDepth = Number.POSITIVE_INFINITY;
  let index2 = -1;
  while (++index2 < map2.length) {
    if (map2[index2].depth < minDepth) {
      minDepth = map2[index2].depth;
    }
  }
  index2 = -1;
  while (++index2 < map2.length) {
    map2[index2].depth -= minDepth - 1;
  }
  index2 = -1;
  while (++index2 < map2.length) {
    insert(map2[index2], table2, { ordered, tight, prefix });
  }
  return table2;
}
function insert(entry2, parent, settings) {
  let index2 = -1;
  if (parent.type === "list") {
    if (entry2.depth === 1) {
      parent.children.push({
        type: "listItem",
        spread: false,
        children: [
          {
            type: "paragraph",
            children: [
              {
                type: "link",
                title: null,
                url: "#" + (settings.prefix || "") + entry2.id,
                children: all6(entry2.children)
              }
            ]
          }
        ]
      });
    } else if (parent.children.length > 0) {
      insert(entry2, parent.children[parent.children.length - 1], settings);
    } else {
      const item = { type: "listItem", spread: false, children: [] };
      parent.children.push(item);
      insert(entry2, item, settings);
    }
  } else if (parent.children[parent.children.length - 1] && parent.children[parent.children.length - 1].type === "list") {
    entry2.depth--;
    insert(entry2, parent.children[parent.children.length - 1], settings);
  } else {
    const item = {
      type: "list",
      ordered: settings.ordered,
      spread: false,
      children: []
    };
    parent.children.push(item);
    entry2.depth--;
    insert(entry2, item, settings);
  }
  if (parent.type === "list" && !settings.tight) {
    parent.spread = false;
    while (++index2 < parent.children.length) {
      if (parent.children[index2].children.length > 1) {
        parent.spread = true;
        break;
      }
    }
  } else {
    parent.spread = !settings.tight;
  }
}
function all6(nodes2) {
  let result = [];
  let index2 = -1;
  if (nodes2) {
    while (++index2 < nodes2.length) {
      result = result.concat(one5(nodes2[index2]));
    }
  }
  return result;
}
function one5(node) {
  if (node.type === "link" || node.type === "linkReference" || node.type === "footnote" || node.type === "footnoteReference") {
    return all6(node.children);
  }
  if ("children" in node) {
    const _a = node, { children, position: position4 } = _a, copy2 = __objRest(_a, ["children", "position"]);
    return Object.assign((0, import_extend2.default)(true, {}, copy2), { children: all6(node.children) });
  }
  const _b = node, { position: position3 } = _b, copy = __objRest(_b, ["position"]);
  return (0, import_extend2.default)(true, {}, copy);
}
var import_extend2;
var init_contents = __esm({
  "node_modules/mdast-util-toc/lib/contents.js"() {
    init_react();
    import_extend2 = __toESM(require("extend"), 1);
  }
});

// node_modules/mdast-util-toc/lib/index.js
function toc(node, options) {
  const settings = options || {};
  const heading2 = settings.heading ? toExpression2(settings.heading) : null;
  const result = search3(node, heading2, settings);
  return {
    index: heading2 ? result.index : null,
    endIndex: heading2 ? result.endIndex : null,
    map: result.map.length > 0 ? contents(result.map, settings) : null
  };
}
var init_lib14 = __esm({
  "node_modules/mdast-util-toc/lib/index.js"() {
    init_react();
    init_search();
    init_contents();
    init_to_expression();
  }
});

// node_modules/mdast-util-toc/index.js
var mdast_util_toc_exports = {};
__export(mdast_util_toc_exports, {
  toc: () => toc
});
var init_mdast_util_toc = __esm({
  "node_modules/mdast-util-toc/index.js"() {
    init_react();
    init_lib14();
  }
});

// node_modules/hast-util-heading-rank/index.js
function headingRank(node) {
  var name = node && node.type === "element" && node.tagName.toLowerCase() || "";
  var code3 = name.length === 2 && name.charCodeAt(0) === 104 ? name.charCodeAt(1) : 0;
  return code3 > 48 && code3 < 55 ? code3 - 48 : null;
}
var init_hast_util_heading_rank = __esm({
  "node_modules/hast-util-heading-rank/index.js"() {
    init_react();
  }
});

// node_modules/hast-util-to-string/index.js
function toString2(node) {
  if ("children" in node) {
    return all7(node);
  }
  return "value" in node ? node.value : "";
}
function one6(node) {
  if (node.type === "text") {
    return node.value;
  }
  return "children" in node ? all7(node) : "";
}
function all7(node) {
  let index2 = -1;
  const result = [];
  while (++index2 < node.children.length) {
    result[index2] = one6(node.children[index2]);
  }
  return result.join("");
}
var init_hast_util_to_string = __esm({
  "node_modules/hast-util-to-string/index.js"() {
    init_react();
  }
});

// node_modules/rehype-slug/node_modules/unist-util-visit/index.js
var visit4;
var init_unist_util_visit4 = __esm({
  "node_modules/rehype-slug/node_modules/unist-util-visit/index.js"() {
    init_react();
    init_unist_util_visit_parents2();
    visit4 = function(tree, test, visitor, reverse) {
      if (typeof test === "function" && typeof visitor !== "function") {
        reverse = visitor;
        visitor = test;
        test = null;
      }
      visitParents2(tree, test, overload, reverse);
      function overload(node, parents) {
        const parent = parents[parents.length - 1];
        return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
      }
    };
  }
});

// node_modules/rehype-slug/index.js
var rehype_slug_exports = {};
__export(rehype_slug_exports, {
  default: () => rehypeSlug
});
function rehypeSlug() {
  return (tree) => {
    slugs2.reset();
    visit4(tree, "element", (node) => {
      if (headingRank(node) && node.properties && !hasProperty(node, "id")) {
        node.properties.id = slugs2.slug(toString2(node));
      }
    });
  };
}
var import_github_slugger2, slugs2;
var init_rehype_slug = __esm({
  "node_modules/rehype-slug/index.js"() {
    init_react();
    import_github_slugger2 = __toESM(require("github-slugger"), 1);
    init_hast_util_has_property();
    init_hast_util_heading_rank();
    init_hast_util_to_string();
    init_unist_util_visit4();
    slugs2 = new import_github_slugger2.default();
  }
});

// node_modules/rehype-autolink-headings/node_modules/unist-util-visit/index.js
var visit5;
var init_unist_util_visit5 = __esm({
  "node_modules/rehype-autolink-headings/node_modules/unist-util-visit/index.js"() {
    init_react();
    init_unist_util_visit_parents2();
    visit5 = function(tree, test, visitor, reverse) {
      if (typeof test === "function" && typeof visitor !== "function") {
        reverse = visitor;
        visitor = test;
        test = null;
      }
      visitParents2(tree, test, overload, reverse);
      function overload(node, parents) {
        const parent = parents[parents.length - 1];
        return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
      }
    };
  }
});

// node_modules/rehype-autolink-headings/lib/index.js
function rehypeAutolinkHeadings(options = {}) {
  let props = options.properties;
  const behavior = options.behaviour || options.behavior || "prepend";
  const content5 = options.content || contentDefaults;
  const group = options.group;
  const is = convertElement(options.test);
  let method;
  if (behavior === "wrap") {
    method = wrap2;
  } else if (behavior === "before" || behavior === "after") {
    method = around;
  } else {
    if (!props) {
      props = { ariaHidden: "true", tabIndex: -1 };
    }
    method = inject;
  }
  return (tree) => {
    visit5(tree, "element", (node, index2, parent) => {
      if (headingRank(node) && hasProperty(node, "id") && is(node, index2, parent)) {
        return method(node, index2, parent);
      }
    });
  };
  function inject(node) {
    node.children[behavior === "prepend" ? "unshift" : "push"](create(node, (0, import_extend3.default)(true, {}, props), toChildren(content5, node)));
    return [SKIP2];
  }
  function around(node, index2, parent) {
    if (typeof index2 !== "number" || !parent)
      return;
    const link2 = create(node, (0, import_extend3.default)(true, {}, props), toChildren(content5, node));
    let nodes2 = behavior === "before" ? [link2, node] : [node, link2];
    if (group) {
      const grouping = toNode(group, node);
      if (grouping && !Array.isArray(grouping) && grouping.type === "element") {
        grouping.children = nodes2;
        nodes2 = [grouping];
      }
    }
    parent.children.splice(index2, 1, ...nodes2);
    return [SKIP2, index2 + nodes2.length];
  }
  function wrap2(node) {
    node.children = [create(node, (0, import_extend3.default)(true, {}, props), node.children)];
    return [SKIP2];
  }
  function toChildren(value, node) {
    const result = toNode(value, node);
    return Array.isArray(result) ? result : [result];
  }
  function toNode(value, node) {
    if (typeof value === "function")
      return value(node);
    return (0, import_extend3.default)(true, Array.isArray(value) ? [] : {}, value);
  }
  function create(node, props2, children) {
    return {
      type: "element",
      tagName: "a",
      properties: Object.assign({}, props2, {
        href: "#" + (node.properties || {}).id
      }),
      children
    };
  }
}
var import_extend3, contentDefaults;
var init_lib15 = __esm({
  "node_modules/rehype-autolink-headings/lib/index.js"() {
    init_react();
    import_extend3 = __toESM(require("extend"), 1);
    init_hast_util_has_property();
    init_hast_util_heading_rank();
    init_hast_util_is_element();
    init_unist_util_visit5();
    contentDefaults = {
      type: "element",
      tagName: "span",
      properties: { className: ["icon", "icon-link"] },
      children: []
    };
  }
});

// node_modules/rehype-autolink-headings/index.js
var rehype_autolink_headings_exports = {};
__export(rehype_autolink_headings_exports, {
  default: () => rehypeAutolinkHeadings
});
var init_rehype_autolink_headings = __esm({
  "node_modules/rehype-autolink-headings/index.js"() {
    init_react();
    init_lib15();
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
function removeTrailingSlash(s2) {
  return s2.endsWith("/") ? s2.slice(0, -1) : s2;
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
    let path2;
    if (manifestEntry.path) {
      path2 = removeTrailingSlash(manifestEntry.path);
    } else if (manifestEntry.index) {
      path2 = "";
    } else {
      return;
    }
    while (parent) {
      const parentPath = parent.path ? removeTrailingSlash(parent.path) : "";
      path2 = `${parentPath}/${path2}`;
      parentId = parent.parentId;
      parent = parentId ? remixContext.manifest.routes[parentId] : null;
    }
    if (path2.includes(":"))
      return;
    if (id === "root")
      return;
    const entry2 = { route: removeTrailingSlash(path2) };
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
  image: image2 = getMetaImage({
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
    image: image2,
    "og:url": url,
    "og:title": title,
    "og:description": description,
    "og:image": image2,
    "twitter:card": image2 ? "summary_large_image" : "summary",
    "twitter:creator": "@6plusjp",
    "twitter:site": "@6plusjp",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image2,
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
function clearMeta(meta9) {
  const entries = Object.entries(meta9).filter(([key, value]) => typeof value !== "undefined" && value.trim() !== "");
  return Object.fromEntries(entries);
}
var enhanceMeta = createMetaEnhancer({
  siteName: "6plus.tech",
  baseURL: "https://6plus.tech",
  author: "Shoma Yamamoto",
  type: "website",
  twitterCard: "summary",
  twitterSite: "@6plusjp"
});
function createMetaEnhancer(defaultOptions) {
  return (meta9, options = {}) => {
    const {
      siteName,
      baseURL,
      pathname,
      author,
      type,
      twitterCard,
      twitterSite
    } = __spreadValues(__spreadValues({}, defaultOptions), options);
    const title = meta9.title ? `${meta9.title} - ${siteName}` : siteName;
    const url = pathname === "/" ? baseURL : `${baseURL}${pathname}`;
    return clearMeta(__spreadProps(__spreadValues({}, meta9), {
      title,
      author: meta9.author ?? author,
      "og:title": title,
      "og:description": meta9.description,
      "og:image": meta9.image,
      "og:type": type,
      "og:site_name": siteName,
      "og:url": url,
      "twitter:card": twitterCard,
      "twitter:site": twitterSite,
      "twitter:title": title,
      "twitter:description": meta9.description,
      "twitter:image": meta9.image
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
  ...Object.entries(pathedRoutes).map(([path2, handler]) => {
    return (request, remixContext) => {
      if (new URL(request.url).pathname !== path2)
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
  const html9 = `<!DOCTYPE html>${markup}`;
  responseHeaders.set("Content-Type", "text/html");
  responseHeaders.set("Content-Length", String(Buffer.byteLength(html9)));
  return new Response(html9, {
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
var global_default = "/build/_assets/global-4LPW2ZWD.css";

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
  const root5 = document.documentElement;
  const cl = root5.classList;
  const isThemeApplied = cl.contains(themes[0]) || cl.contains(themes[1]);
  if (isThemeApplied) {
    console.warn("Theme is already applied!?");
  } else {
    cl.add(theme);
  }
  const meta9 = document.querySelector("meta[name=color-scheme]");
  if (meta9) {
    if (theme === themes[1]) {
      meta9.content = "dark light";
    } else if (theme === themes[0]) {
      meta9.content = "light dark";
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
  const html9 = `(${String(setScriptCode)})`;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("meta", {
    name: "color-scheme",
    content: theme === themes[1] ? "dark light" : "light dark"
  }), ssrTheme ? null : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("script", {
    dangerouslySetInnerHTML: { __html: html9 }
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
  const html9 = `(${String(setElsCode)})`;
  return ssrTheme ? null : /* @__PURE__ */ React.createElement("script", {
    dangerouslySetInnerHTML: { __html: html9 }
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
  meta: () => meta3
});
init_react();
var React10 = __toESM(require("react"));
var import_remix8 = __toESM(require_remix());
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
  const { unified: unified2 } = await Promise.resolve().then(() => (init_unified(), unified_exports));
  const { default: remarkParse2 } = await Promise.resolve().then(() => (init_remark_parse(), remark_parse_exports));
  const { default: remarkGfm2 } = await Promise.resolve().then(() => (init_remark_gfm(), remark_gfm_exports));
  const { default: remark2rehype } = await Promise.resolve().then(() => (init_remark_rehype(), remark_rehype_exports));
  const { default: rehypeRaw2 } = await Promise.resolve().then(() => (init_rehype_raw(), rehype_raw_exports));
  const { default: rehypeStringify2 } = await Promise.resolve().then(() => (init_rehype_stringify(), rehype_stringify_exports));
  const { default: rehypeFormat2 } = await Promise.resolve().then(() => (init_rehype_format(), rehype_format_exports));
  const ksEncoded = encodeKS(md);
  const processor = unified2().use(remarkParse2).use(remarkGfm2).use(mdast2toc).use(remark2rehype, {
    allowDangerousHtml: true
  }).use(rehypeRaw2).use(rehypeStringify2, { allowDangerousHtml: true }).use(rehypeFormat2);
  const file = await processor.process(ksEncoded);
  return decodeKS(String(file));
}
function mdast2toc() {
  const findExistingToc = (root5) => {
    let addToToc = false;
    let toc2 = null;
    root5.children.forEach((node) => {
      var _a;
      if (node.type === "heading" && ((_a = node.data) == null ? void 0 : _a.id) === "table-of-contents") {
        addToToc = true;
        toc2 = [];
      } else if (addToToc) {
        if (node.type !== "heading") {
          toc2.push(node);
        } else {
          addToToc = false;
        }
      }
    });
    return toc2;
  };
  return async function transformer(node) {
    const { toc: toc2 } = await Promise.resolve().then(() => (init_mdast_util_toc(), mdast_util_toc_exports));
    const existingToc = findExistingToc(node);
    if (existingToc) {
      node.children = existingToc;
    } else {
      const result = toc2(node, {
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
function encodeKS(raw3) {
  return raw3.replace(KS_RE, (_, ks) => `{{${Buffer.from(ks).toString("base64")}}}`);
}
function decodeKS(raw3) {
  return raw3.replace(KS_RE, (_, ks) => `{{${Buffer.from(ks, "base64").toString()}}}`);
}

// app/utils/fs.server.ts
init_react();
var import_promises = __toESM(require("fs/promises"));
var CONTENT = `${__dirname}/../app/content`;
var readContentDir = async (contentDir) => {
  const content5 = `${CONTENT}/${contentDir}`;
  return import_promises.default.readdir(content5);
};
var readContentFile = async (contentDir, file) => {
  const content5 = `${CONTENT}/${contentDir}/${file}`;
  return import_promises.default.readFile(content5, "utf-8");
};

// app/utils/post.server.ts
async function getBlogPost(slug) {
  const [remarkGfm2, rehypeSlug2, rehypeAutolinkHeadings2] = await Promise.all([
    Promise.resolve().then(() => (init_remark_gfm(), remark_gfm_exports)).then((mod) => mod.default),
    Promise.resolve().then(() => (init_rehype_slug(), rehype_slug_exports)).then((mod) => mod.default),
    Promise.resolve().then(() => (init_rehype_autolink_headings(), rehype_autolink_headings_exports)).then((mod) => mod.default)
  ]);
  const source = await readContentFile("blog", `${slug}\\/index.mdx?$`);
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
    const { frontmatter, code: code3 } = await (0, import_mdx_bundler.bundleMDX)({
      source,
      mdxOptions: (options) => {
        options.remarkPlugins = [...options.remarkPlugins ?? [], remarkGfm2];
        options.rehypePlugins = [
          ...options.rehypePlugins ?? [],
          rehypeSlug2,
          [rehypeAutolinkHeadings2, rehypeAutolinkHeadingsOptions]
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
    const toc2 = await m2toc(matter.default(source).content);
    return { frontmatter, code: code3, toc: toc2 };
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
var import_remix7 = __toESM(require_remix());

// app/components/toggle.tsx
init_react();
var import_clsx3 = __toESM(require("clsx"));
var import_outline = require("@heroicons/react/outline");
function ThemeToggle({
  className,
  size = "md"
}) {
  const [theme, setTheme] = useTheme();
  return /* @__PURE__ */ React.createElement("button", {
    onClick: () => setTheme(theme === themes[1] ? themes[0] : themes[1]),
    className: (0, import_clsx3.default)(className, "inline-flex items-center justify-center overflow-hidden rounded-sm border-2 border-slate-400 outline-none transition hover:border-hp focus:border-hp", { "h-14 w-14": size === "md", "h-12 w-12": size === "sm" })
  }, /* @__PURE__ */ React.createElement("div", {
    className: (0, import_clsx3.default)("relative ", {
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

// app/components/icons/github-icon.tsx
init_react();
var import_clsx4 = __toESM(require("clsx"));
function GitHubIcon({ size = 24, className }) {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: (0, import_clsx4.default)(className),
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
var import_clsx5 = __toESM(require("clsx"));
function RssIcon({ size = 24, className }) {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: (0, import_clsx5.default)(className),
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
var import_clsx6 = __toESM(require("clsx"));
function TwitterIcon({ size = 24, className }) {
  return /* @__PURE__ */ React.createElement("svg", {
    className: (0, import_clsx6.default)(className),
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
  }, NAV_LIST.map((link2) => {
    return /* @__PURE__ */ React3.createElement("li", {
      key: link2.name,
      className: "py-1 pl-2 text-sm"
    }, /* @__PURE__ */ React3.createElement(import_remix7.NavLink, {
      to: link2.to,
      prefetch: "intent",
      className: ({ isActive }) => isActive ? "w-auto text-slate-500 focus:text-hp focus:outline-none dark:text-slate-400 dark:focus:text-hp" : "w-auto hover:text-hp focus:text-hp focus:outline-none"
    }, link2.name));
  }))), /* @__PURE__ */ React3.createElement("nav", {
    className: "mb-12 text-tp"
  }, /* @__PURE__ */ React3.createElement("h4", {
    className: "mb-2 py-1 pt-0 text-base font-medium uppercase"
  }, "Legal"), /* @__PURE__ */ React3.createElement("ul", {
    className: "mb-3"
  }, LEGAL_LIST.map((link2) => {
    return /* @__PURE__ */ React3.createElement("li", {
      key: link2.name,
      className: "py-1 pl-2 text-sm"
    }, /* @__PURE__ */ React3.createElement(import_remix7.NavLink, {
      to: link2.to,
      prefetch: "intent",
      className: "w-auto hover:text-hp focus:text-hp focus:outline-none"
    }, link2.name));
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
  })), /* @__PURE__ */ React3.createElement(import_remix7.Link, {
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
  const averageSize = Math.ceil(widths.reduce((a, s2) => a + s2) / widths.length);
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
var import_react4 = require("@remix-run/react");
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
  }, /* @__PURE__ */ React9.createElement(import_react4.NavLink, {
    to: "/",
    className: ({ isActive }) => isActive ? "text-ts" : "hover:text-hp"
  }, "6+")), /* @__PURE__ */ React9.createElement("ul", {
    className: "hidden lg:flex"
  }, LINKS.map((link2) => {
    return /* @__PURE__ */ React9.createElement("li", {
      key: link2.name,
      className: " whitespace-nowrap px-5 py-2 text-lg font-medium"
    }, /* @__PURE__ */ React9.createElement(import_react4.NavLink, {
      to: link2.to,
      prefetch: "intent",
      className: ({ isActive }) => isActive ? "text-slate-500 focus:text-hp focus:outline-none dark:text-slate-400 dark:focus:text-hp" : "underline-animation text-tp focus:outline-none"
    }, link2.name));
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
  }, LINKS.map((link2) => /* @__PURE__ */ React9.createElement(import_menu_button.MenuLink, {
    key: link2.to,
    as: import_react4.NavLink,
    to: link2.to,
    prefetch: "intent",
    className: ({ isActive }) => isActive ? "py-3 text-lg text-slate-500 focus:outline-none dark:text-slate-300" : "py-3 text-lg text-tp hover:text-hp focus:outline-none"
  }, link2.name)), /* @__PURE__ */ React9.createElement("div", {
    className: "noscript-hidden py-6"
  }, /* @__PURE__ */ React9.createElement(ThemeToggle, null))))) : null);
}

// route:/home/shoma/src/www_vercel/app/routes/blog.$slug.tsx
var loader3 = async ({ request, params }) => {
  const slug = params.slug || "index";
  if (slug === "rss[.]xml") {
    let cdata = function(s2) {
      return `<![CDATA[${s2}]]>`;
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
  const { frontmatter, code: code3, toc: toc2 } = await getBlogPost(slug);
  const headers = {
    "Cache-Control": "private, max-age=3600",
    Vary: "Cookie"
  };
  const data = {
    frontmatter,
    code: code3,
    toc: toc2
  };
  return (0, import_remix8.json)(data, { status: 200, headers });
};
var meta3 = ({ data, parentsData }) => {
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
  const { frontmatter, code: code3, toc: toc2 } = (0, import_remix8.useLoaderData)();
  const { slug } = (0, import_remix8.useParams)();
  const isDraft = Boolean(frontmatter.draft);
  const Component = React10.useMemo(() => (0, import_client.getMDXComponent)(code3), [code3]);
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
  }, /* @__PURE__ */ React10.createElement(Sidebar, null, toc2 ? /* @__PURE__ */ React10.createElement("nav", {
    className: "mb-8 text-tp"
  }, /* @__PURE__ */ React10.createElement("h4", {
    className: "mb-2 py-1 pt-0 text-base font-medium uppercase"
  }, "Contents"), /* @__PURE__ */ React10.createElement("div", {
    className: "toc",
    dangerouslySetInnerHTML: { __html: toc2 }
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
  }, /* @__PURE__ */ React10.createElement(import_remix8.Link, {
    className: "group flex gap-2 text-black dark:text-white",
    prefetch: "intent",
    to: "/blog"
  }, /* @__PURE__ */ React10.createElement(import_outline2.ArrowLeftIcon, {
    className: "h-6 w-6 transition-transform duration-300 group-hover:-translate-x-1"
  }), /* @__PURE__ */ React10.createElement("span", {
    className: "text-base"
  }, "Back to blog")))), /* @__PURE__ */ React10.createElement(import_framer_motion2.motion.article, {
    variants: motionVariants.code
  }, toc2 ? /* @__PURE__ */ React10.createElement("nav", {
    className: "mb-8 text-tp lg:hidden"
  }, /* @__PURE__ */ React10.createElement("h2", {
    className: "mb-2"
  }, "Contents"), /* @__PURE__ */ React10.createElement("div", {
    className: "toc",
    dangerouslySetInnerHTML: { __html: toc2 }
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
  const caught = (0, import_remix8.useCatch)();
  console.error("CatchBoundary", caught);
  throw new Error(`Unhandled error: ${caught.status}`);
}

// route:/home/shoma/src/www_vercel/app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  action: () => action3,
  default: () => Contact,
  meta: () => meta4
});
init_react();
var React14 = __toESM(require("react"));
var import_remix9 = __toESM(require_remix());
var import_remix10 = __toESM(require_remix());
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
var import_react5 = require("@remix-run/react");
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
  }, "NAVIGATION"), NAV_LIST2.map((link2) => {
    return /* @__PURE__ */ React12.createElement(import_react5.NavLink, {
      to: link2.to,
      key: link2.name,
      prefetch: "intent",
      className: ({ isActive }) => isActive ? "pl-2 text-slate-500 focus:text-hp focus:outline-none dark:text-slate-400 dark:focus:text-hp" : "pl-2 hover:text-hp focus:text-hp focus:outline-none"
    }, link2.name);
  })), /* @__PURE__ */ React12.createElement("nav", {
    className: "flex flex-col whitespace-nowrap text-base text-tp"
  }, /* @__PURE__ */ React12.createElement("h2", {
    className: "mb-3"
  }, "LEGAL"), LEGAL_LIST2.map((link2) => {
    return /* @__PURE__ */ React12.createElement(import_react5.NavLink, {
      to: link2.to,
      key: link2.name,
      prefetch: "intent",
      className: ({ isActive }) => isActive ? "pl-2 text-slate-500 dark:text-slate-400" : "pl-2 hover:text-hp focus:text-hp focus:outline-none"
    }, link2.name);
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
  })), /* @__PURE__ */ React12.createElement(import_react5.Link, {
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
var import_react6 = require("react");
var hydrating = true;
function useHydrated() {
  const [hydrated, setHydrated] = (0, import_react6.useState)(() => !hydrating);
  (0, import_react6.useEffect)(function hydrate() {
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
  const { name, email, subject, text: text9 } = data;
  const textContent = `
  ${name} \u69D8
  \u304A\u554F\u3044\u5408\u308F\u305B\u3044\u305F\u3060\u304D\u8AA0\u306B\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002
  \u4E0B\u8A18\u306E\u5185\u5BB9\u3067\u78BA\u304B\u306B\u627F\u308A\u307E\u3057\u305F\u3002

  \u3010\u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9\u3011
  \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501

  \u25A0\u4EF6\u540D : ${subject}
  \u25A0\u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9 : ${text9}

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
      <p style="padding: 1rem; color: #63A18F; font-size: 1.1rem; overflow-wrap:break-word;">${text9}</p>
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
  const body3 = {
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
    body: body3 && JSON.stringify(body3),
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
  const { name, email, subject, text: text9 } = data;
  const textContent = `
  \u3010\u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9\u3011
  \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501

  \u25A0\u304A\u540D\u524D/\u4F1A\u793E\u540D : ${name}
  \u25A0\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9 : ${email}
  \u25A0\u4EF6\u540D : ${subject}
  \u25A0\u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9 : ${text9}

  \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
  `.trim();
  const body3 = {
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
    body: body3 && JSON.stringify(body3),
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
var meta4 = ({ parentsData }) => {
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
      return (0, import_remix10.json)({
        status: "success",
        fields: result.data
      });
    } else {
      return (0, import_remix10.json)({
        status: "error",
        fields: result.data
      });
    }
  } else {
    return (0, import_remix10.json)({
      status: "error",
      fields: result.data
    });
  }
};
function Contact() {
  const data = (0, import_remix9.useActionData)();
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
  meta: () => meta5
});
init_react();
var meta5 = ({ parentsData }) => {
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
  meta: () => meta6
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
  }, LINKS2.map((link2, index2) => /* @__PURE__ */ React16.createElement("div", {
    className: "rounded bg-bp px-8 py-10 ring-2 ring-hp ring-offset-4 ring-offset-bs",
    key: index2
  }, /* @__PURE__ */ React16.createElement("h3", {
    className: "mb-4 flex gap-4 text-xl text-tp"
  }, link2.svg, link2.title), /* @__PURE__ */ React16.createElement("ul", {
    className: "list-inside list-disc space-y-2 px-2 text-base text-ts"
  }, link2.paragraphs.map((paragraph2, index3) => /* @__PURE__ */ React16.createElement("li", {
    key: index3
  }, paragraph2))))));
}
function Mobile() {
  const [activeItem, setActiveItem] = React16.useState(0);
  return /* @__PURE__ */ React16.createElement(import_accordion.Accordion, {
    index: activeItem,
    onChange: (index2) => setActiveItem(index2),
    className: "flex flex-col space-y-6 sm:hidden"
  }, LINKS2.map((link2, index2) => /* @__PURE__ */ React16.createElement(import_accordion.AccordionItem, {
    className: "space-y-4",
    key: index2
  }, /* @__PURE__ */ React16.createElement(ArrowButton, {
    active: activeItem === index2
  }, link2.svg, link2.title), /* @__PURE__ */ React16.createElement(import_accordion.AccordionPanel, {
    as: "ul",
    className: "list-inside list-disc space-y-2 p-2 text-base text-ts"
  }, link2.paragraphs.map((paragraph2, index3) => /* @__PURE__ */ React16.createElement("li", {
    key: index3
  }, paragraph2))))));
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
  }, TAB_DATA.map((tab, index2) => /* @__PURE__ */ React17.createElement(import_tabs.Tab, {
    className: "flex w-36 items-center justify-center gap-1 rounded-2xl bg-transparent py-2 text-lg text-tp ring-tp hover:bg-bp focus:outline-none focus:ring-2",
    key: index2
  }, tab.svg, tab.label))), /* @__PURE__ */ React17.createElement(import_tabs.TabPanels, {
    className: "w-full text-ts"
  }, TAB_DATA.map((tab, index2) => /* @__PURE__ */ React17.createElement(import_tabs.TabPanel, {
    key: index2,
    className: "rounded bg-bs ring-hp ring-offset-4 ring-offset-bp duration-300 focus:outline-none focus:ring-2"
  }, /* @__PURE__ */ React17.createElement(import_framer_motion3.motion.div, {
    animate: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 20 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.15 },
    className: "flex items-center justify-center"
  }, tab.tool.map((tool, index3) => /* @__PURE__ */ React17.createElement("div", {
    key: index3,
    className: "p-6"
  }, tool.svg, /* @__PURE__ */ React17.createElement("h4", {
    className: "text-center"
  }, tool.name))))))));
}
function Mobile2() {
  const [activeItem, setActiveItem] = React17.useState(0);
  return /* @__PURE__ */ React17.createElement(import_accordion2.Accordion, {
    index: activeItem,
    onChange: (index2) => setActiveItem(index2),
    className: "flex flex-col space-y-6 sm:hidden"
  }, TAB_DATA.map((tab, index2) => /* @__PURE__ */ React17.createElement(import_accordion2.AccordionItem, {
    className: "space-y-4",
    key: index2
  }, /* @__PURE__ */ React17.createElement(ArrowButton2, {
    active: activeItem === index2
  }, tab.svg, tab.label), /* @__PURE__ */ React17.createElement(import_accordion2.AccordionPanel, {
    as: "ul",
    className: "list-inside list-disc space-y-2 p-2 text-base text-ts"
  }, tab.tool.map((tool, index3) => /* @__PURE__ */ React17.createElement(ExternalLink, {
    href: tool.link,
    key: index3,
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
var import_remix11 = __toESM(require_remix());
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
  }, "\u3054\u8CEA\u554F\u3060\u3051\u3067\u3082\u69CB\u3044\u307E\u305B\u3093\u3002\u9023\u7D61\u3092\u304A\u5F85\u3061\u3057\u3066\u3044\u307E\u3059\u3002"), /* @__PURE__ */ React18.createElement(import_remix11.Link, {
    className: "btn my-8 mx-auto bg-hp text-base text-tp shadow transition duration-300 hover:-translate-y-0.5 hover:border hover:bg-transparent hover:text-hp hover:shadow-inner focus:-translate-y-0.5 focus:border focus:bg-transparent focus:text-hp focus:shadow-inner focus:outline-none sm:text-lg",
    to: "/contact"
  }, "\u304A\u554F\u3044\u5408\u308F\u305B"))));
}

// route:/home/shoma/src/www_vercel/app/routes/index.tsx
var meta6 = ({ parentsData }) => {
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
  meta: () => meta7
});
init_react();
var React20 = __toESM(require("react"));
var meta7 = ({ parentsData }) => {
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
  meta: () => meta8
});
init_react();
var React23 = __toESM(require("react"));
var import_remix12 = __toESM(require_remix());
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
var import_react7 = require("@remix-run/react");
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
  }, /* @__PURE__ */ React21.createElement(import_react7.Link, {
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
var meta8 = () => {
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
  return (0, import_remix12.json)(data, {
    headers: {
      "Cache-Control": "private, max-age=3600",
      Vary: "Cookie"
    }
  });
};
function Blog() {
  const PAGE_SIZE = 6;
  const queryKey = "q";
  const [searchParams] = (0, import_remix12.useSearchParams)();
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
  const data = (0, import_remix12.useLoaderData)();
  const regularQuery = query;
  const matchingPosts = React23.useMemo(() => {
    const filteredPosts = data.posts;
    return filterPosts(filteredPosts, regularQuery);
  }, [data.posts, regularQuery]);
  const initialIndexToShow = PAGE_SIZE;
  const [indexToShow, setIndexToShow] = React23.useState(initialIndexToShow);
  React23.useEffect(() => {
    setIndexToShow(initialIndexToShow);
  }, [initialIndexToShow]);
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
var assets_manifest_default = { "version": "d11440f0", "entry": { "module": "/build/entry.client-QND7VH6N.js", "imports": ["/build/_shared/chunk-7CZMI56X.js", "/build/_shared/chunk-5GZEI4AI.js", "/build/_shared/chunk-XV23MX66.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-ETS6GHUG.js", "imports": ["/build/_shared/chunk-26JACRKD.js", "/build/_shared/chunk-VCT23PCD.js", "/build/_shared/chunk-BAHDNUPA.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/action/form-validation": { "id": "routes/action/form-validation", "parentId": "root", "path": "action/form-validation", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/action/form-validation-QNPAQHIQ.js", "imports": ["/build/_shared/chunk-64HUUNDY.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/action/set-theme": { "id": "routes/action/set-theme", "parentId": "root", "path": "action/set-theme", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/action/set-theme-BMPIHMFJ.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/admin": { "id": "routes/admin", "parentId": "root", "path": "admin", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/admin-A33VDPUW.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog": { "id": "routes/blog", "parentId": "root", "path": "blog", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog-7JQBBO4X.js", "imports": ["/build/_shared/chunk-C7QQLDDT.js", "/build/_shared/chunk-LGUOWHYT.js", "/build/_shared/chunk-QY777K5K.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog.$slug": { "id": "routes/blog.$slug", "parentId": "root", "path": "blog/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog.$slug-H6BBGTHS.js", "imports": ["/build/_shared/chunk-C7QQLDDT.js", "/build/_shared/chunk-RP6GYJCK.js", "/build/_shared/chunk-LGUOWHYT.js", "/build/_shared/chunk-QY777K5K.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/contact-NKGRD4JZ.js", "imports": ["/build/_shared/chunk-64HUUNDY.js", "/build/_shared/chunk-RP6GYJCK.js", "/build/_shared/chunk-B6V5TAMQ.js", "/build/_shared/chunk-LGUOWHYT.js", "/build/_shared/chunk-QY777K5K.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-MSANO2OS.js", "imports": ["/build/_shared/chunk-B6V5TAMQ.js", "/build/_shared/chunk-LGUOWHYT.js", "/build/_shared/chunk-QY777K5K.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/policy": { "id": "routes/policy", "parentId": "root", "path": "policy", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/policy-OSGUBWQP.js", "imports": ["/build/_shared/chunk-B6V5TAMQ.js", "/build/_shared/chunk-LGUOWHYT.js", "/build/_shared/chunk-QY777K5K.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/works": { "id": "routes/works", "parentId": "root", "path": "works", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/works-3DEAIBTD.js", "imports": ["/build/_shared/chunk-QY777K5K.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-D11440F0.js" };

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
