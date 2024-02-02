import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { createBrotliDecompress } from 'zlib';
import { resolve } from 'path';
import { workingDirectory } from '../utils/helpers.js';

const decompress = async (pathToFile, pathToDestination) => {
  try {
    const pathToDecompressedFile = resolve(pathToFile);
    const extname = path.extname(pathToDecompressedFile);
    const baseName = path.basename(pathToDecompressedFile, extname);
    const destinationPath = resolve(pathToDestination, baseName);
    const readStream = createReadStream(pathToDecompressedFile);
    const writeStream = createWriteStream(destinationPath);

    readStream.pipe(createBrotliDecompress()).pipe(writeStream);
    workingDirectory();
  } catch (error) {
    console.error ('Operation failed\n', error);
  }
};

export { decompress }