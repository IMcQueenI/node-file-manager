import { rm } from 'fs/promises';
import { workingDirectory } from '../utils/helpers.js';

// only works with an absolute path

const remove = async (path) => {
  try {
    await rm(path);
    workingDirectory();
  } catch (error) {
    console.error ('Operation failed\n')
  }
}

export { remove }