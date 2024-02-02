import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { createBrotliCompress } from 'zlib';
import { resolve } from 'path';
import { workingDirectory } from '../utils/helpers.js';

const compress = async (pathToFile, pathToDestination) => {
  try {
    const pathToCompressedFile = resolve(pathToFile);
    const baseName = path.basename(pathToCompressedFile);
    const destinationPath = resolve(pathToDestination, `${baseName}.gz`);
    const readStream = createReadStream(pathToCompressedFile);
    const writeStream = createWriteStream(destinationPath);

    readStream.pipe(createBrotliCompress()).pipe(writeStream);
    workingDirectory();
  } catch (error) {
    console.error ('Operation failed\n', error);
  }
};

export { compress }