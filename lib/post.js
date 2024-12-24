import path from "path";
import fs from "fs";
import matter from "matter";

const postDirectory = path.join(process.cwd(), "posts");

export function getPostsData() {
  const fileName = fs.readdirSync(postDirectory);
  const allPostsData = fileName.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult,
    };
  });
}
