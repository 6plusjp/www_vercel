import { readdir, readFile } from "fs-extra";
import path from "path";

const contentPath = "../content";

export const readContentDir = async (contentDir: string) => {
  const content = path.join(__dirname, contentPath, contentDir);
  const data = await readdir(content);

  return data;
};

export const readContentFile = async (contentDir: string, file: string) => {
  const content = path.join(__dirname, contentPath, contentDir, file);
  const data = await readFile(content, "utf8");

  return data.toString();
};
