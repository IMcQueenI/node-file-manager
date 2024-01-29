import { createHash } from 'crypto'
import  { readFile } from 'fs/promises'
import { workingDirectory } from '../utils/helpers.js';

// only works with an absolute path

const hash = async (file) => {
  try {
    const hashFile = await readFile(file);
    const hash = createHash('sha256').update(hashFile).digest('hex');
    console.log(hash);
    workingDirectory();
  } catch (error) {
    console.error ('Operation failed\n')
  }
}

export { hash }