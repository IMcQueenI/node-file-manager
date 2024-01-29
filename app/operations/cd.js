import { workingDirectory } from "../utils/helpers.js";

// only works with an absolute path

const cd = async (path) => {
    try {
      process.chdir(path)
      workingDirectory();
    } catch (error) {
      console.error ('Operation failed\n')
    }
};

export { cd }