let leds = {
    "orange" : {
        "ids" : ["vr_1", "vr_2", "vr_3", "volt_limitter_high", "out_of_band_high", "out_of_band_low", "volt_limitter_low", "auto_tap_blocked", "reverse_power", "volt_reduction", "ud_1","ud_2","ud_3", "warning"],
        "elements" : [],
        "code" : "orange" 
    },
    "green" : {
        "ids" : ["data_ports", "com_1_rx", "com_2_rx"],
        "elements" : [],
        "code" : "#b9e402"
    },
    "red" : {
        "ids" : ["alarm","diag_error","com_1_tx","com_2_tx", "drag_hand_reset","super_visory_off"],
        "elements" : [],
        "code" : "red"
    },
    "blue" : {
        "ids" : ["all_off", "all_on"],
        "elements" : [],
        "code" : "rgb(0, 255, 242)"
    },
}

let prev_led = '';
let all_off_led = '';

document.addEventListener("DOMContentLoaded", function() {
    all_off_led = document.getElementById("all_off");
    prev_led = all_off_led;
    const colors = Object.keys(leds);
    for (let color of colors){
        let elements = [];
        const ids = leds[color]["ids"];
        for (let id of ids)
            elements.push(document.getElementById(id));
        leds[color]["elements"] = elements;
        led_front_panel(leds[color]["elements"], leds[color]["code"]);
    }
});


function led_front_panel(led_elements_arr, color){
    for (let element of led_elements_arr){
        element.addEventListener("click", function() {
            // console.log(element.id);
            fetch('/led_front_panel', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(element.id)
            })
            .then(response => response.json())
            .then(data => {
                if (data.led === "all_off"){
                    prev_led.style.cssText =  '--border-top-color: white';
                    all_off_led.style.cssText = '--border-top-color: rgb(0, 255, 242)';
                } else {
                    all_off_led.style.cssText = '--border-top-color: white';
                    prev_led.style.cssText =  '--border-top-color: white';
                    element.style.cssText = '--border-top-color: '+color;
                    prev_led = element;
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        })
    }
}


