import { rl } from '../../index.js';
import { add } from '../operations/add.js';
import { cd } from '../operations/cd.js';
import { hash } from '../operations/hash.js';
import { ls } from '../operations/ls.js';
import { remove } from '../operations/rm.js';
import { up } from '../operations/up.js';
import { rn } from '../operations/rn.js';
import { cp } from '../operations/cp.js';
import { cat } from '../operations/cat.js';
import { mv } from '../operations/mv.js';
import { compress } from '../operations/compress.js';
import { osInfo } from '../operations/os.js';
import { decompress } from '../operations/decompress.js';

function handler(command) {
  command = command.trim();
  let operation = command.split(' ');
  try {
    if (command === '') {
      return;
    } else if (operation.length === 1) {
      switch (command.toString()) {
        case 'up':
          up();
          break;
        case 'ls':
          ls();
          break;
        case '.exit':
          rl.close();
          break;
        default:
          throw new Error('Invalid input');
      }
    } else if (operation.length === 2) {
      let args = operation[1].toString();
      switch(operation[0].toString()) {
        case 'cd':
          cd(args);
          break;
        case 'add':
          add(args);
          break;
        case 'hash':
          hash(args);
          break;
        case 'cat':
          cat(args);
          break;
        case 'os':
          osInfo(args);
          break;
        case 'rm':
          remove(args);
          break;
        default:
          throw new Error('Invalid input');
      }
    } else if (operation.length === 3) {
      switch (operation[0].toString()) {
        case 'rn': 
          rn(operation[1], operation[2]);
          break;
        case 'cp': 
          cp(operation[1], operation[2]);
          break;
        case 'mv': 
          mv(operation[1], operation[2]);
          break;
        case 'compress': 
          compress(operation[1], operation[2]);
          break;
        case 'decompress': 
          decompress(operation[1], operation[2]);
          break;
        default:
          throw new Error('Invalid input');
      }
    }
  } catch (error) {
    console.error('Invalid input');
  }
}

export { handler }
