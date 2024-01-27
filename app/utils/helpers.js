let username;

const greeting = () => {
  const argv = process.argv.slice(2).toString().split('=');
  username = argv[1] === 'username' || argv[1] === '' ? 'anonymised' : argv[1];
  console.log(`Welcome to the File Manager, ${username}!`);
};

const goodbye = () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
};

const workingDirectory = () => {
  console.log(`You are currently in ${process.cwd()}`);
};

export {
  workingDirectory,
  goodbye,
  greeting
}