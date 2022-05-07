import fs from "fs/promises";
// import path from "path";

const CONTENT = `${__dirname}/../app/content`;
// path.join(__dirname, "..", "app/content")

// export const readContentDir = async () => fs.readdir(CONTENT);

// export const readContentFile = async (file: string) =>
//   fs.readFile(path.join(CONTENT, file), "utf-8");

export const readContentDir = async (contentDir: string) => {
  // const content = path.join(CONTENT, contentDir);
  const content = `${CONTENT}/${contentDir}`;
  return fs.readdir(content);
};

export const readContentFile = async (contentDir: string, file: string) => {
  // const content = path.join(CONTENT, contentDir, file);
  const content = `${CONTENT}/${contentDir}/${file}`;
  return fs.readFile(content, "utf-8");
};
