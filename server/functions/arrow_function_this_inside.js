// pra executar:
// node .\server\functions\arrow_function_this_inside.js

class Person {
    constructor(name) {
        this.name = name 
    }

    printNameArrow() {
        setTimeout(() => {
            console.log("Arrow: " + this.name)
        }, 100)
    }

    printNameFunction() {
        setTimeout(function() {
            console.log("Function: " + this.name)
        }, 100)
    }
}

let person = new Person('Bob')
person.printNameArrow();    // Bob
person.printNameFunction(); // undefined