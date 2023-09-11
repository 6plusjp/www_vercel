export const separateMarkdown = (markdown: string) => {
  const frontmatterRegex = /---\r?\n([\s\S]+?)\r?\n---/;
  const matchingArray = frontmatterRegex.exec(markdown);
  if (!matchingArray) return { metadata: {}, body: markdown };

  const frontmatter = matchingArray[1];
  const body = markdown.slice(matchingArray[0].length);

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

export const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/&#39;/g, "")
    .replace(/&lt;/g, "")
    .replace(/&gt;/g, "")
    .replace(/[^a-z0-9-$]/g, "-")
    .replace(/-{2,}/g, "-")
    .replace(/^-/, "")
    .replace(/-$/, "");
