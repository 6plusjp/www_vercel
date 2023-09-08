import type { Root } from "mdast";
// @ts-expect-error
import type { Options } from "mdast-util-toc";
// @ts-expect-error
import { toc } from "mdast-util-toc";
// @ts-expect-error
import { unified } from "unified";
// @ts-expect-error
import remarkGfm from "remark-gfm";
// @ts-expect-error
import rehypeRaw from "rehype-raw";
// @ts-expect-error
import format from "rehype-format";
// @ts-expect-error
import stringify from "rehype-stringify";
// @ts-expect-error
import markdown from "remark-parse";
// @ts-expect-error
import rehype from "remark-rehype";

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
    // @ts-expect-error
    .use(markdown)
    // @ts-expect-error
    .use(remarkGfm)
    // @ts-expect-error
    .use(rehype, {
      allowDangerousHtml: true,
    })
    .use(rehypeRaw)
    .use(format)
    .use(stringify, {
      allowDangerousCharacters: true,
      allowDangerousHtml: true,
    });

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
    // @ts-expect-error
    .use(markdown)
    // @ts-expect-error
    .use(remarkGfm)
    .use(remarkExtractToc)
    // @ts-expect-error
    .use(rehype, {
      allowDangerousHtml: true,
    })
    .use(rehypeRaw)
    .use(format)
    .use(stringify, {
      allowDangerousCharacters: true,
      allowDangerousHtml: true,
    });

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
