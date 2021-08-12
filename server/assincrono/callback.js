// pra executar:
// node .\server\assincrono\callback.js

console.log("callback.js");
console.log("--");

const fs = require('fs')
console.log('1')

fs.readFile('./auxs/text1.txt', (err, content) => {
    console.log('text1', String(content));
});

fs.readFile('./auxs/text2.txt', (err2, content2) => {
    console.log('text2', String(content2));
});

console.log('2')
console.log('3')

console.error(' > as vezes vai tratar o text2.txt antes do text1.txt')