


function Microfone(color = "black") {
    this.color = color;
    this.isOn = true;
}
Microfone.prototype.toggle = function() {
    if (this.isOn) {
        console.log("desligar");
        this.isOn = false;
    } else {
        console.log("ligar");
        this.isOn = true;
    }
}

const microfone1 = new Microfone();
const microfone2 = new Microfone("white");
console.log(microfone1);
console.log(microfone2);