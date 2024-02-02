let username;

const greeting = () => {
  const argv = process.argv.slice(2).toString().split('=');
  username = argv[1] === 'username' || argv[1] === '' ? 'anonymised' : argv[1];
  console.log(`Welcome to the File Manager, ${username}!\n`);
};

const goodbye = () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!\n`);
};

const workingDirectory = () => {
  console.log(`You are currently in ${process.cwd()}\n`);
};

export {
  workingDirectory,
  goodbye,
  greeting
}