// pra executar:
// node .\server\assincrono\2_promises_2.js

// https://www.youtube.com/watch?v=DHvZLI7Db8E

let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve("Success");
    } else {
        reject("Failed");
    }
})

console.log("oi 1");

p.then((message) => {
    console.log("Success: " + message)
}).catch((message) => {
    console.log("Failed: " + message)
})

console.log("oi 2");