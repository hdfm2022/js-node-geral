// pra executar:
// node .\server\assincrono\promises.js

console.log("promises.js");
console.log("--");

const fs = require('fs')

console.log(1);

const readFile = file => new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
        if (err) {
            reject(err)
        } else {
            resolve(contents)
        }
    })
})

readFile("./auxs/text1.txt")
    .then( contents => {
        console.log(String(contents))
        return readFile('./auxs/text2.txt')
    })
    .then( contents => {
        console.log(String(contents))
    })

console.log(2);
console.log(3);
//"./auxs/text1.txt"