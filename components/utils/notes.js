import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkCodeFrontmatter from "remark-code-frontmatter";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";

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

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(remarkCodeFrontmatter)
    .use(rehypeDocument)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeHighlight)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
