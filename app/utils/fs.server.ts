import { readdirSync, readFileSync } from "fs-extra";
import path from "path";

const CONTENT = `${__dirname}/../app/content`; // path.join(__dirname, "..", "app/content")

export const readContentDir = (contentDir: string) => {
  // const content = path.join(CONTENT, contentDir);
  const content = `${CONTENT}/${contentDir}`;
  return readdirSync(content);
};

export const readContentFile = (contentDir: string, file: string) => {
  // const content = path.join(CONTENT, contentDir, file);
  const content = `${CONTENT}/${contentDir}/${file}`;
  return readFileSync(content, "utf-8");
};

export const joinPath = (dir: string) => path.join(__dirname, dir);
