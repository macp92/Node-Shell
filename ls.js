// `files` will be an array of filenames like ['bash.js', 'pwd.js']
const fs = require('fs')
function ls (cmd) {
  if (cmd === 'ls'){
    fs.readdir('./', 'utf8', (err, files) => {
      if (err) {
        throw err;
      } else {
        process.stdout.write(`\n${files.join('\n')}`)
        process.stdout.write("\nprompt > ")
      }
    })
  }
}

module.exports = ls;
