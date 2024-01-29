import readline from 'readline';
import { handler } from './app/utils/handler.js';
import { goodbye, greeting, workingDirectory } from './app/utils/helpers.js';

greeting();
workingDirectory();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (command) => handler(command, rl.input))
  .on('SIGINT', ()=> rl.close())
  .on('close', ()=> goodbye())

export { rl }