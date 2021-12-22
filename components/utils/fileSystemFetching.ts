import fs from "fs";
/** Data retrieval utilities. **/

export function getFilesFromDirectory(
  dir: fs.PathLike,
  map?: (value: string, index: number, array: string[]) => String,
  sort?: any
): String[] {
  const fileNames = fs.readdirSync(dir);
  var mappedFiles: String[];

  if (!map) {
    mappedFiles = fileNames;
  } else {
    mappedFiles = fileNames.map(map);
  }

  if (!sort) {
    return mappedFiles;
  } else {
    return mappedFiles.sort(sort);
  }
}
