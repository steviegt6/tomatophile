import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

const notesDir = join(process.cwd(), "submodules", "notes", "documentation");

export function getAllNoteIds() {
  const fileNames = fs.readdirSync(notesDir);

  return fileNames.map((x) => {
    return {
      params: {
        id: x.replace(/\.md$/, "").toLowerCase(),
      },
    };
  });
}

export async function getNoteData(id) {
  const fullPath = join(notesDir, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .use(gfm)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
