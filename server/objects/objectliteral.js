const microfone = {
    color: 'black'
    , isOn: true
    , toggle: function() {
        if (this.isOn) {
            console.log("desligar");
            this.isOn = false;
        } else {
            console.log("ligar");
            this.isOn = true;
        }
    }
}

console.log(microfone.color);
microfone.toggle();
microfone.toggle();