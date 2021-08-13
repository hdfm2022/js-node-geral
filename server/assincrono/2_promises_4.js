// pra executar:
// node .\server\assincrono\2_promises_4.js

// https://www.youtube.com/watch?v=DHvZLI7Db8E

const fs = require('fs')

const recordVideoOne = new Promise((resolve, reject) => {
    fs.readFile('./auxs/text2.txt', (err2, content2) => {
        console.log("Video 1 recorded (inside)")
        resolve('> Video 1 resolved')
    });
})

const recordVideoTwo = new Promise((resolve, reject) => {
    console.log("Video 2 recorded (inside)")
    resolve('> Video 2 resolved')
})

const recordVideoThree = new Promise((resolve, reject) => {
    console.log("Video 3 recorded (inside)")
    resolve('> Video 3 resolved')
})

// quando todos terminar, chama..
// Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then((messages) => {
//     console.log("All video")
//     console.log(messages)
// })

// o primeiro que terminar, ja chama...
Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then((message) => {
    console.log("All video")
    console.log(message)
})