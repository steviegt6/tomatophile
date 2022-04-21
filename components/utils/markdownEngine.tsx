import { readdirSync, readFileSync, statSync } from "fs";
import matter from "gray-matter";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkCodeFrontmatter from "remark-code-frontmatter";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import { join } from "path";
import { unified } from "unified";

export function collectFiles(directory: string, files: string[]): string[] {
  const dirContents = readdirSync(directory);

  dirContents.forEach((x) => {
    if (statSync(join(directory, x)).isDirectory()) {
      files = collectFiles(join(directory, x), files);
    } else {
      files.push(join(directory, x));
    }
  });

  return files;
}

export function getAllPaths(directory: string): { params: { id: string[] } }[] {
  const fileNames = collectFiles(directory, []);

  return fileNames.map((x) => {
    const retVal: string[] = x
      .substring(directory.length + 1)
      .replaceAll("\\", "/")
      .replace(/\.md$/, "")
      .toLowerCase()
      .split("/");

    const locale = retVal[retVal.length - 1];

    if (locale.length == 2) {
      retVal.pop();
      retVal.unshift(locale);
    }

    return {
      params: {
        id: retVal,
      },
    };
  });
}

export async function getMarkdownData(directory: string, id: string[]) {
  const locale = id[0];

  if (locale.length == 2) {
    id.shift();
    id.push(locale);
  }

  const fullPath = join(directory, `${id.join("/")}.md`);
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
