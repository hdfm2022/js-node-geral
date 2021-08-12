function* simpleGenerator() {
    // console.log("Before 1")
    yield 1
    // console.log("After 1")
    // console.log("Before 2")
    yield 2
    // console.log("After 2")
    // console.log("Before 3")
    yield 3
    // console.log("After 3")
}

const generatorObject = simpleGenerator()
console.log("simpleGenerator()")
console.log(1, generatorObject.next())
console.log(2, generatorObject.next())
console.log(3, generatorObject.next())
console.log(4, generatorObject.next())

console.log("generateId()")
function* generateId() {
    let id = 1;

    while(true) {
        yield id
        id++
    }
}

let generatorId;

generatorId = generateId()
console.log(1, generatorId.next())
console.log(2, generatorId.next())
console.log(3, generatorId.next())

generatorId = generateId()
console.log("reset", generatorId.next())


function* generatorFromArray(array) {
    for (let i = 0; i < array.length; i++) {
        yield array[i]
    }
}

const generatorObjectFromArray = generatorFromArray([11,33,55])
console.log(generatorObjectFromArray.next())
console.log(generatorObjectFromArray.next())
console.log(generatorObjectFromArray.next())