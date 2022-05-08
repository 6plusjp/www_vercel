/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildDirectory: "api/_build",
  server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
  ignoredRouteFiles: ["**/.*"],
  serverBuildTarget: "vercel",
  serverDependenciesToBundle: [
    /^rehype.*/,
    /^remark.*/,
    /^unified.*/,
    /^hast.*/,
    /^unist.*/,
    /^mdast.*/,
  ],
};
