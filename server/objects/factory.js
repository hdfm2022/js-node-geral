function createMicrofone(color = "black") {
    let isOn = true; // "privado"

    function toggle() {
        if (isOn) {
            console.log("desligar");
            isOn = false;
        } else {
            console.log("ligar");
            isOn = true;
        }
    }

    return { color , toggle }
}

microfone1 = createMicrofone();
microfone2 = createMicrofone("white");

microfone1.toggle();
microfone2.toggle();
microfone2.toggle();
console.log(microfone1);
console.log(microfone2);