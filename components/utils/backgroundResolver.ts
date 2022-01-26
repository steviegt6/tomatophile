import { readdirSync, readFileSync } from "fs";
import { join } from "path";

const bgJsonDir = join(process.cwd(), "", "modules", "local", "backgrounds");

export function resolveBgJsons(): string[] {
  const bgJsons: string[] = [];

  readdirSync(bgJsonDir).map((x) => {
    if (x.startsWith("bg"))
      bgJsons.push(readFileSync(join(bgJsonDir, x), "utf-8"));

    return x;
  });

  return bgJsons;
}
