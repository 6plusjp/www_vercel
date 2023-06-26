import { renderToString } from "react-dom/server";
import type { EntryContext } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";

import { otherRoutes } from "./other-routes.server";

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  for (const handler of otherRoutes) {
    const otherRouteResponse = await handler(request, remixContext);
    if (otherRouteResponse) return otherRouteResponse;
  }

  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  const html = `<!DOCTYPE html>${markup}`;

  responseHeaders.set("Content-Type", "text/html");
  responseHeaders.set("Content-Length", String(Buffer.byteLength(html)));

  return new Response(html, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}

// TODO - add isbot & update react
// import type { EntryContext } from "@remix-run/node";
// import { RemixServer } from "@remix-run/react";
// import { renderToPipeableStream } from "react-dom/server";

// import isbot from "isbot";
// import { PassThrough } from "stream";

// import { otherRoutes } from "./other-routes.server";

// const ABORT_DELAY = 5000;

// export default async function handleRequest(
//   request: Request,
//   responseStatusCode: number,
//   responseHeaders: Headers,
//   remixContext: EntryContext
// ) {
//   for (const handler of otherRoutes) {
//     const otherRouteResponse = await handler(request, remixContext);
//     if (otherRouteResponse) return otherRouteResponse;
//   }

//   return isbot(request.headers.get("user-agent"))
//     ? handleBotRequest(
//         request,
//         responseStatusCode,
//         responseHeaders,
//         remixContext
//       )
//     : handleBrowserRequest(
//         request,
//         responseStatusCode,
//         responseHeaders,
//         remixContext
//       );
// }

// function handleBotRequest(
//   request: Request,
//   responseStatusCode: number,
//   responseHeaders: Headers,
//   remixContext: EntryContext
// ) {
//   return new Promise((resolve, reject) => {
//     const { pipe, abort } = renderToPipeableStream(
//       <RemixServer
//         context={remixContext}
//         url={request.url}
//         abortDelay={ABORT_DELAY}
//       />,
//       {
//         onAllReady() {
//           const body = new PassThrough();

//           responseHeaders.set("Content-Type", "text/html");

//           resolve(
//             // FIXME: type error
//             new Response(body, {
//               headers: responseHeaders,
//               status: responseStatusCode,
//             })
//           );

//           pipe(body);
//         },
//         onShellError(err: unknown) {
//           reject(err);
//         },
//         onError(err: unknown) {
//           console.error(err);
//           responseStatusCode = 500;
//         },
//       }
//     );
//     setTimeout(abort, ABORT_DELAY);
//   });
// }

// function handleBrowserRequest(
//   request: Request,
//   responseStatusCode: number,
//   responseHeaders: Headers,
//   remixContext: EntryContext
// ) {
//   return new Promise((resolve, reject) => {
//     const { pipe, abort } = renderToPipeableStream(
//       <RemixServer
//         context={remixContext}
//         url={request.url}
//         abortDelay={ABORT_DELAY}
//       />,
//       {
//         onShellReady() {
//           const body = new PassThrough();

//           responseHeaders.set("Content-Type", "text/html");

//           resolve(
//             // FIXME: type error
//             new Response(body, {
//               headers: responseHeaders,
//               status: responseStatusCode,
//             })
//           );

//           pipe(body);
//         },
//         onShellError(err: unknown) {
//           reject(err);
//         },
//         onError(err: unknown) {
//           console.error(err);
//           responseStatusCode = 500;
//         },
//       }
//     );
//     setTimeout(abort, ABORT_DELAY);
//   });
// }
