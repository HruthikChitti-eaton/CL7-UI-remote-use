// import {io} from '../libs/socketIO.js';
// import { io } from "socket.io-client";
import { io } from "https://cdn.socket.io/4.7.5/socket.io.esm.min.js";

export class tst_05 {
    constructor(url) {
        this.socket = io(url);   
        this.sender_init();
        this.receiver_init();
    }

    receiver_init() {
        // sc - server to client
        this.socket.on('led_status_sc', (_id) => {
            if (_id === "all_off"){
                this.prev_led.style.cssText =  '--border-top-color: white';
                this.id_ce.all_off.element.style.cssText = '--border-top-color: rgb(0, 255, 242)';
            } else {
                this.id_ce.all_off.element.style.cssText = '--border-top-color: white';
                this.prev_led.style.cssText =  '--border-top-color: white';
                this.id_ce[_id].element.style.cssText = '--border-top-color: ' + this.id_ce[_id].code;
                this.prev_led = this.id_ce[_id].element;
            }
        });
    }

    sender_init() {

        let color_code = {"orange" : "orange", "green" : "#b9e402", "red" : "red", "blue" : "rgb(0, 255, 242)"};

        // id color element
        this.id_ce = {
            "vr_1"              : {"code": color_code.orange, "element": null},
            "vr_2"              : {"code": color_code.orange, "element": null},
            "vr_3"              : {"code": color_code.orange, "element": null},
            "volt_limitter_high": {"code": color_code.orange, "element": null},
            "out_of_band_high"  : {"code": color_code.orange, "element": null},
            "out_of_band_low"   : {"code": color_code.orange, "element": null},
            "volt_limitter_low" : {"code": color_code.orange, "element": null},
            "auto_tap_blocked"  : {"code": color_code.orange, "element": null},
            "reverse_power"     : {"code": color_code.orange, "element": null},
            "volt_reduction"    : {"code": color_code.orange, "element": null},
            "ud_1"              : {"code": color_code.orange, "element": null},
            "ud_2"              : {"code": color_code.orange, "element": null},
            "ud_3"              : {"code": color_code.orange, "element": null},
            "warning"           : {"code": color_code.orange, "element": null},

            "data_ports"        : {"code": color_code.green,  "element": null},
            "com_1_rx"          : {"code": color_code.green,  "element": null},
            "com_2_rx"          : {"code": color_code.green,  "element": null},

            "alarm"             : {"code": color_code.red,    "element": null},
            "diag_error"        : {"code": color_code.red,    "element": null},
            "com_1_tx"          : {"code": color_code.red,    "element": null},
            "com_2_tx"          : {"code": color_code.red,    "element": null},
            "drag_hand_reset"   : {"code": color_code.red,    "element": null},
            "super_visory_off"  : {"code": color_code.red,    "element": null},

            "all_off"           : {"code": color_code.blue,   "element": null},
            "all_on"            : {"code": color_code.blue,   "element": null}
        }
        

        const _ids = Object.keys(this.id_ce);
        for (const _id of _ids){
            const element = document.getElementById(_id);
            element.socket = this.socket;
            this.id_ce[_id].element = element;
            this.id_ce[_id].element.addEventListener("click", function(){
                this.socket.emit('led_status_cs',_id);
            });
        }

        this.prev_led = this.id_ce.all_off.element;
    }

    // emit(_id){
    //     this.socket.emit('led_status_cs',_id)
    // }
}
