import { pipeline } from 'stream/promises';
import { resolve, parse } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { workingDirectory } from '../utils/helpers.js';

const cp = async (pathToFile, newPath) => {
  try {
    const file = resolve(pathToFile);
    const { base } = parse(file);
    const newPathToFile = resolve(newPath, base);
    const readStream = createReadStream(file);
    const writeStream = createWriteStream(newPathToFile);
    await pipeline(readStream, writeStream);
    workingDirectory();
  } catch (error) {
    console.error ('Operation failed\n');
  }
};

export { cp }