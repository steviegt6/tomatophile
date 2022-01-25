import { readdirSync, readFileSync } from "fs";
import { unified } from "unified";
import matter from "gray-matter";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkCodeFrontmatter from "remark-code-frontmatter";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import { join } from "path";

export function getAllPaths(directory: string): { params: { id: string } }[] {
  const fileNames = readdirSync(directory);

  return fileNames.map((x) => {
    return {
      params: {
        id: x.replace(/\.md$/, "").toLowerCase(),
      },
    };
  });
}

export async function getMarkdownData(directory: string, id: string) {
  const fullPath = join(directory, `${id}.md`);
  const fileContents = readFileSync(fullPath, "utf8");
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
