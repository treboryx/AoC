const fs = require('fs');

const fuel = mass => {
    let f = Math.floor(mass / 3) - 2;
    return f > 0 ? f + fuel(f) : 0;
}

fs.readFile('input.txt', { encoding: 'utf-8' }, (err, data) => {
    if (err) throw err;
    const arr = data.split("\n");
    console.log(arr.reduce((a, b) => fuel(b) + a, 0))
});
