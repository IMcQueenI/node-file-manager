import os from 'os';
import { workingDirectory } from '../utils/helpers.js';

const osInfo = async (arg) => {
  try {
    switch (arg) {
      case '--EOL':
        console.log(`EOL: ${os.EOL}`);
        break;
      case '--cpus':
        const cpus = os.cpus();
        console.log(`Total CPUs: ${cpus.length}`);
        cpus.forEach((cpu) => {
          console.log(`Model: ${cpu.model}`);
          console.log(`Speed: ${cpu.speed} GHz`);
        });
        break;
      case '--homedir':
        console.log(`Home Directory: ${os.homedir()}`);
        break;
      case '--username':
        console.log(`Current User: ${os.userInfo().username}`);
        break;
      case '--architecture':
        console.log(`Architecture: ${os.arch()}`);
        break;
    }
    workingDirectory();
  } catch (error) {
    console.error ('Operation failed\n');
  }
};

export { osInfo }