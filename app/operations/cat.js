import { resolve } from 'path';
import { createReadStream } from 'fs'
import { workingDirectory } from '../utils/helpers.js';

const cat = async (path) => {
  try {
    const fileStream = createReadStream(resolve(path));
    fileStream.on('data', (chunk) => {
      console.log(chunk.toString());
    });
    workingDirectory();
  } catch (error) {
    console.error ('Operation failed\n');
  }
};

export { cat }