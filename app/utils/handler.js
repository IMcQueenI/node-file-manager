import { rl } from '../../index.js';
import { add } from '../operations/add.js';
import { cd } from '../operations/cd.js';
import { hash } from '../operations/hash.js';
import { remove } from '../operations/rm.js';
import { up } from '../operations/up.js';

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
        // case 'ls':
        //   ls();
        //   break;
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
        case 'rm':
          remove(args);
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
