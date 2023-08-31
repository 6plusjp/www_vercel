import type { Root } from "mdast";
import type { Options } from "mdast-util-toc";
import { toc } from "mdast-util-toc";

import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";

import { unified } from "unified";

const KS_RE = /{{([^}]*)}}/g;

export const md2html = async (md: string) => {
  const ksEncoded = encodeKS(md);
  const processor = makeProcessor();

  const file = await processor.process(ksEncoded);
  return decodeKS(file.toString());
};

//FIXME - (https://github.com/unifiedjs/unified/issues/227)
function makeProcessor() {
  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, {
      allowDangerousHtml: true,
    })
    .use(rehypeRaw)
    .use(rehypeFormat)
    .use(rehypeStringify);

  return processor;
}

function encodeKS(raw: string) {
  return raw.replace(
    KS_RE,
    (_, ks) => `{{${Buffer.from(ks).toString("base64")}}}`,
  );
}

function decodeKS(raw: string) {
  return raw.replace(
    KS_RE,
    (_, ks) => `{{${Buffer.from(ks, "base64").toString()}}}`,
  );
}

export const md2toc = async (md: string) => {
  const ksEncoded = encodeKS(md);
  const processor = makeTocProcessor();

  const file = await processor.process(ksEncoded);
  return decodeKS(file.toString());
};

function makeTocProcessor() {
  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkExtractToc)
    .use(remarkRehype, {
      allowDangerousHtml: true,
    })
    .use(rehypeRaw)
    .use(rehypeFormat)
    .use(rehypeStringify);

  return processor;
}

function remarkExtractToc(
  options: Options = {
    maxDepth: 3,
    tight: true,
  },
) {
  return (node: Root) => {
    const { map } = toc(node as any, options);

    if (!map) return;
    node.children = [map];
  };
}
