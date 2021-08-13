class Microfone {
    constructor(color = 'black') {
        this.color = color;
        this.isOn = true;
    }

    toggle() {
        if (this.isOn) {
            console.log("desligar");
            this.isOn = false;
        } else {
            console.log("ligar");
            this.isOn = true;
        }
    }
}

let microfone1 = new Microfone();
let microfone2 = new Microfone("red");
console.log(microfone1);
console.log(microfone2);