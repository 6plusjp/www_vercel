export const extractFrontmatter = (markdown: string) => {
  const match = /---\r?\n([\s\S]+?)\r?\n---/.exec(markdown);
  if (!match) return { metadata: {}, body: markdown };

  const frontmatter = match[1];
  const body = markdown.slice(match[0].length);

  const metadata: Record<string, string> = {};
  frontmatter.split("\n").forEach((pair) => {
    const index = pair.indexOf(":");
    metadata[pair.slice(0, index).trim()] = pair
      .slice(index + 1)
      .replace(/(^["']|["']$)/g, "")
      .trim();
  });

  return { metadata, body };
};
