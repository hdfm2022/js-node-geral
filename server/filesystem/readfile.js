// pra executar:
// node .\server\filesystem\readfile.js

console.log("readfile.js");
console.log("--");

const fs = require('fs')
console.log('1')

fs.readFile('./auxs/text1.txt', (err, content) => {
    if (err) {
        console.log('erro: ', err)
    } else {
        console.log('conteudo: ', String(content))
    }
});

fs.readFile('./auxs/error2.txt', (err2, content2) => {
    if (err2) {
        console.log('erro: ', err2)
    } else {
        console.log('conteudo: ', String(content2))
    }
});