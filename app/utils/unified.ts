import type { Root } from "mdast";
import type { Options } from "mdast-util-toc";
import { toc } from "mdast-util-toc";
import { unified } from "unified";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import format from "rehype-format";
import stringify from "rehype-stringify";
import markdown from "remark-parse";
import rehype from "remark-rehype";

const KS_RE = /{{([^}]*)}}/g;

export const md2html = async (md: string) => {
  const ksEncoded = encodeKS(md);
  const processor = makeProcessor();

  const file = await processor.process(ksEncoded);
  return decodeKS(file.toString());
};

function makeProcessor() {
  const processor = unified()
    .use(markdown)
    .use(remarkGfm)
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
    .use(markdown)
    .use(remarkGfm)
    .use(remarkExtractToc)
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
