import fs from 'fs/promises';
import path from 'path';
import { workingDirectory } from '../utils/helpers.js';

const ls = async () => {
  try {
    const pathToFile = process.cwd();
    const directoryContents = await fs.readdir(pathToFile);
    directoryContents.sort();
    const directoryList = [];

    for (const item of directoryContents) {
      const fullPath = path.join(pathToFile, item);
      const isFile = (await fs.lstat(fullPath)).isFile();
      directoryList.push({
        name: item,
        type: isFile ? "File" : "Directory",
        sortKey: isFile ? 1 : 0,
      });
    }
    directoryList.sort((a, b) => a.sortKey - b.sortKey);
    console.table(directoryList, ['name', 'type'], { exclude: ['sortKey'] });
    workingDirectory();
  } catch (error) {
    console.error ('Operation failed\n');
  }
};

export { ls }