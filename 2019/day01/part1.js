const fs = require('fs');

fs.readFile('input.txt', { encoding: 'utf-8' }, (err, data) => {
    if (err) throw err;
    const arr = data.split("\n");
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Math.floor(arr[i] / 3) - 2;
    }
    console.log(sum)
});

// or

fs.readFile('input.txt', { encoding: 'utf-8' }, (err, data) => {
    if (err) throw err;
    const arr = data.split("\n");
    console.log(arr.reduce((a, b) => Math.floor(b / 3) - 2 + a, 0))
});

// 94794

console.log(Math.floor(94794 / 3) - 2)

