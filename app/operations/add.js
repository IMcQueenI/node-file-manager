import { resolve } from 'path';
import { open } from 'fs/promises';
import { workingDirectory } from '../utils/helpers.js';

const add = async (fileName) => {
  try {
    const path = resolve(process.cwd(), fileName);
    (await open(path, 'w')).close();
    workingDirectory();
  } catch (error) {
    console.error ('Operation failed\n')
  }
}

export { add }