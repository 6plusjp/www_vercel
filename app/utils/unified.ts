import type { Root } from "remark-gfm";

const KS_RE = /{{([^}]*)}}/g;

async function makeProcessor() {
  const { unified } = await import("unified");
  const { default: remarkParse } = await import("remark-parse");
  const { default: remarkGfm } = await import("remark-gfm");
  const { default: remark2rehype } = await import("remark-rehype");
  const { default: rehypeRaw } = await import("rehype-raw");
  const { default: rehypeStringify } = await import("rehype-stringify");
  const { default: rehypeFormat } = await import("rehype-format");

  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remark2rehype, {
      // handlers: localizedHandlers,
      allowDangerousHtml: true,
    })
    .use(rehypeRaw)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .use(rehypeFormat);

  return processor;
}

// function makeProcessor() {
//   const processor = unified()
//     .use(remarkParse)
//     .use(remarkGfm)
//     .use(remark2rehype, {
//       // handlers: localizedHandlers,
//       allowDangerousHtml: true,
//     })
//     .use(rehypeRaw)
//     .use(rehypeStringify, { allowDangerousHtml: true })
//     .use(rehypeFormat)

//   return processor
// }

async function m2h(md: string) {
  const ksEncoded = encodeKS(md);
  const processor = await makeProcessor();

  const file = await processor.process(ksEncoded);
  return decodeKS(String(file));
}

async function m2toc(md: string) {
  const { unified } = await import("unified");
  const { default: remarkParse } = await import("remark-parse");
  const { default: remarkGfm } = await import("remark-gfm");
  const { default: remark2rehype } = await import("remark-rehype");
  const { default: rehypeRaw } = await import("rehype-raw");
  const { default: rehypeStringify } = await import("rehype-stringify");
  const { default: rehypeFormat } = await import("rehype-format");

  const ksEncoded = encodeKS(md);
  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(mdast2toc)
    .use(remark2rehype, {
      // handlers: localizedHandlers,
      allowDangerousHtml: true,
    })
    .use(rehypeRaw)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .use(rehypeFormat);

  const file = await processor.process(ksEncoded);
  return decodeKS(String(file));
}

function mdast2toc() {
  const findExistingToc = (root: Root) => {
    let addToToc = false;
    let toc = null;

    root.children.forEach((node) => {
      // FIXME - after changing the first line
      if (node.type === "heading" && node.data?.id === "table-of-contents") {
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

  return async function transformer(node: Root) {
    const { toc } = await import("mdast-util-toc");
    const existingToc = findExistingToc(node);
    if (existingToc) {
      node.children = existingToc;
    } else {
      const result = toc(node, {
        maxDepth: 3,
        tight: true,
      });
      if (result.map) {
        node.children = [result.map];
      } else {
        node.children = [];
      }
    }
  };
}

function encodeKS(raw: string) {
  return raw.replace(
    KS_RE,
    (_, ks) => `{{${Buffer.from(ks).toString("base64")}}}`
  );
}

function decodeKS(raw: string) {
  return raw.replace(
    KS_RE,
    (_, ks) => `{{${Buffer.from(ks, "base64").toString()}}}`
  );
}

async function formatHtml(html: string) {
  const ksEncoded = encodeKS(html);

  const { unified } = await import("unified");
  const { default: rehypeParse } = await import("rehype-parse");
  const { default: rehypeStringify } = await import("rehype-stringify");
  const { default: rehypeFormat } = await import("rehype-format");

  const processor = unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .use(rehypeFormat);

  const file = processor.processSync(ksEncoded);
  return decodeKS(String(file));
}

// const prettyAST = (node, depth = 0) => {
//   if (!node) {
//     return ''
//   }
//   if (typeof node == 'string') {
//     return '  '.repeat(depth) + `${JSON.stringify(node)}`
//   }
//   return Object.entries(node)
//     .filter(([key]) => key != 'position')
//     .map(
//       ([key, value]) =>
//         '  '.repeat(depth) +
//         key +
//         ': ' +
//         (Array.isArray(value)
//           ? '\n' + value.map(node => prettyAST(node, depth + 1)).join('\n')
//           : typeof value == 'object'
//           ? '\n' + prettyAST(value, depth + 1)
//           : JSON.stringify(value))
//     )
//     .join('\n')
// }

// const rehypeShiki = async () => {
//   const shiki = await import("shiki");
//   shiki
//     .getHighlighter({
//       theme: "nord",
//     })
//     .then((highlighter) => {
//       const md = markdown({
//         html: true,
//         highlight: (code, lang) => {
//           return highlighter.codeToHtml(code, { lang });
//         },
//       });

//       const html = md.render(fs.readFileSync("index.md", "utf-8"));
//       const out = `
//     <title>Shiki</title>
//     <link rel="stylesheet" href="style.css">
//     ${html}
//     <script src="index.js"></script>
//   `;
//       fs.writeFileSync("index.html", out);

//       console.log("done: index.html");
//     });
// };

export {
  m2h,
  m2toc,
  formatHtml,
  // rehypeShiki
};
