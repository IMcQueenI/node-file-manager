import { rename } from 'fs/promises'
import { resolve, parse } from 'path';
import { workingDirectory } from '../utils/helpers.js';

const rn = async (path, newFileName) => {
    try {
      const file = resolve(path);
      const { dir } = parse(file);
      const newPath = resolve(dir, newFileName);
      await rename(file, newPath);
      workingDirectory();
    } catch (error) {
      console.error ('Operation failed\n');
    }
};

export { rn }