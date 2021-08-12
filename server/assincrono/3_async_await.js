// pra executar:
// node .\server\assincrono\3_async_await.js

const fs = require('fs')

const readFile = file => new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
        if (err) {
            reject(err)
        } else {
            console.log("resolvendo file" + file)
            resolve(contents)
        }
    })
})

const init = async() => {
    console.log("pedindo text1.txt")
    const contents1 = await readFile('./auxs/text1.txt')
    console.log("pedindo text2.txt")
    const contents2 = await readFile('./auxs/text2.txt')
    return String(contents1) + '\n' + String(contents2)
}

init().then(contents => {
    console.log(contents)
})
