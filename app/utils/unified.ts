import type { Root } from "mdast";

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import rehypeFormat from "rehype-format";
import { toc } from "mdast-util-toc";

const KS_RE = /{{([^}]*)}}/g;

const makeProcessor = () => {
  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, {
      // handlers: localizedHandlers,
      allowDangerousHtml: true,
    })
    .use(rehypeRaw)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .use(rehypeFormat);

  return processor;
};

export const md2html = async (md: string) => {
  const ksEncoded = encodeKS(md);
  const processor = makeProcessor();

  const file = await processor.process(ksEncoded);
  return decodeKS(String(file));
};

// export const md2htmlSync = async (md: string) => {
//   const ksEncoded = encodeKS(md);
//   const processor = makeProcessor();

//   const file = await processor.processSync(ksEncoded);
//   return decodeKS(String(file));
// }

export const md2toc = async (md: string) => {
  const ksEncoded = encodeKS(md);
  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkExtractToc)
    .use(remarkRehype, {
      allowDangerousHtml: true,
    })
    .use(rehypeRaw)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .use(rehypeFormat);

  const file = await processor.process(ksEncoded);
  return decodeKS(String(file));
};

function remarkExtractToc() {
  return async function transformer(node: Root) {
    const { map } = toc(node, {
      maxDepth: 3,
      tight: true,
    });

    if (map) {
      node.children = [map];
    } else {
      node.children = [];
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

// export async function formatHtml(html: string) {
//   const ksEncoded = encodeKS(html);
//   const processor = unified()
//     .use(rehypeParse, { fragment: true })
//     .use(rehypeStringify, { allowDangerousHtml: true })
//     .use(rehypeFormat);

//   const file = processor.processSync(ksEncoded);
//   return decodeKS(String(file));
// }

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
