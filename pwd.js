function pwd (cmd) {
  if (cmd === 'pwd'){
    process.stdout.write(`${process.cwd()}\n`);
  }
}

module.exports = pwd;
