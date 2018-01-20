var util = require('util')
var exec = require('child_process').exec;
let fs = require('fs')

function cmd() {
    let search = fs.readFile('./random.txt', 'utf8', (err, data) => {
        if (err) console.log(err)
        data = data.split('\r\n').toString().replace(/,/g, ' ')

        exec(`node liri.js ${data}`, (error, stdout, stderr) => {
            console.log(stdout)
        }); 
    })
}

module.exports = {
    cmd
}