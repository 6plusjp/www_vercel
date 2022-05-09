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
  // serverDependenciesToBundle: [
  //   /^rehype.*/,
  //   /^remark.*/,
  //   /^unified.*/,
  //   /^unist.*/,
  //   /^hast.*/,
  //   /^bail.*/,
  //   /^trough.*/,
  //   /^mdast.*/,
  //   /^micromark.*/,
  //   /^decode.*/,
  //   /^character.*/,
  //   /^property.*/,
  //   /^space.*/,
  //   /^comma.*/,
  //   /^react-markdown$/,
  //   /^vfile.*/,
  //   /^ccount*/,
  //   /^markdown-table*/,
  // ],
};
