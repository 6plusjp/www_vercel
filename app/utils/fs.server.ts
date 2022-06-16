import { readdir, readFile } from "fs-extra";
// import fs from "fs/promises";
import path from "./path.server";

const CONTENT = `${__dirname}/../app/content`; // path.join(__dirname, "..", "app/content")

export const readContentDir = async (contentDir: string) => {
  // const content = path.join(CONTENT, contentDir);
  const content = `${CONTENT}/${contentDir}`;
  return readdir(content);
};

export const readContentFile = async (contentDir: string, file: string) => {
  // const content = path.join(CONTENT, contentDir, file);
  const content = `${CONTENT}/${contentDir}/${file}`;
  return readFile(content, "utf-8");
};

export const joinPath = (dir: string) => path.join(__dirname, dir);

// export default fs;
