let argv = process.argv
let command = ''
let subprocess = []

for (let i = 0; i < argv.length; i++) {
    if (i === 2) {
        command = process.argv[i]
    } else if (i > 2) {
        subprocess.push(process.argv[i])
    }
}
subprocess = subprocess.toString().replace(/,/g, ' ')

module.exports = {
    command,
    subprocess
}