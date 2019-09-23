const pwd = require('./pwd');
const ls = require('./ls');
const fs = require('fs')

process.stdout.write('prompt > ');

//The stdin 'data' event fires after a user types in a new line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); // remove the newline
  pwd(cmd)
  ls(cmd)
  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
});
