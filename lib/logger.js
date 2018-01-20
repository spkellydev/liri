const fs = require('fs')

function Logger(obj) {
    this.obj = JSON.stringify(obj)

    fs.appendFile('./logs/log.txt', this.obj + ',', (err) => {
        if (err) {
            err = JSON.stringify(err)
            fs.appendFile('./logs/errors.txt', err, (err) => {
                if (err) console.log(err)
            })
        }
    })
}

module.exports = {
    Logger
}