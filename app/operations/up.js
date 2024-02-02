import { workingDirectory } from '../utils/helpers.js';

const up = async () => {
  try {
    process.chdir('..');
    workingDirectory();
  } catch (error) {
    console.error ('Operation failed\n');
  }
};

export { up }