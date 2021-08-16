// node .\server\objects\factory.js

function createMicrofone(color = "black") {
    let isOn = true; // "privado"

    const checkIfOn = () => {
        return isOn
    }

    const toggle = () => {
        if (isOn) {
            console.log("desligar");
            isOn = false;
        } else {
            console.log("ligar");
            isOn = true;
        }
    }

    return { color , toggle , checkIfOn }
}

microfone1 = createMicrofone();
microfone2 = createMicrofone("white");

console.log("check if 1 is on", microfone1.checkIfOn())
microfone1.toggle();
console.log("check if 1 is on", microfone1.checkIfOn())

console.log("check if 2 is on", microfone2.checkIfOn())
microfone2.toggle();
console.log("check if 2 is on", microfone2.checkIfOn())
microfone2.toggle();
console.log("check if 2 is on", microfone2.checkIfOn())

console.log(microfone1);
console.log(microfone2);