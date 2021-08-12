// pra executar:
// node .\server\functions\arrow_functions.js

function sum(a, b) {
    return a + b
}

function isPositive(number) {
    return number >= 0
}

function randomNumber() {
    return Math.random()
}

const sum2 = (a,b) => a+b
const isPositive2 = number => number >= 0
const randomNumber2 = () => Math.random()

// console.log(randomNumber2())

console.log(function() {
    console.log('hei');
})

console.log(() => console.log("Hello World"))