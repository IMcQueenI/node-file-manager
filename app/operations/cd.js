import { workingDirectory } from "../utils/helpers.js";

const cd = async (path) => {
    try {
      process.chdir(path)
      workingDirectory();
    } catch (error) {
      console.error ('Operation failed\n');
    }
};

export { cd }