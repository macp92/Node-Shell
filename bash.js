process.stdout.write('prompt > ');

//The stdin 'data' event fires after a user types in a new line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); // remove the newline
  if (cmd === 'pwd'){
    process.stdout.write(`${process.cwd()}\n`);
  }
  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
});
