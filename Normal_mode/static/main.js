// import { io } from './libs/socket.io.js'
import { io } from "https://cdn.socket.io/4.7.5/socket.io.esm.min.js";
import lcd from './libs/lcd.js'

let screen = new lcd(4, 20);

class lcd_screen_handler {

    static init(route) {
        lcd_screen_handler.socket = io(route);
        lcd_screen_handler.socket.on('update_char', (data) => { lcd_screen_handler.update_char(data) });
        lcd_screen_handler.socket.on('update_line', (data) => { lcd_screen_handler.update_line(data) });
        lcd_screen_handler.socket.on('clear_screen', (data) => { screen.clear_screen() });
        lcd_screen_handler.socket.on('back_light_off', (data) => { screen.back_light_off() });
        lcd_screen_handler.socket.on('back_light_on', (data) => { screen.back_light_on() });
        lcd_screen_handler.socket.emit('get_cur_states', '');
    }

    static update_char(data) {
        screen.update_char(data.row, data.column, data.char);
    }

    static update_line(data) {
        screen.update_line(data.row, data.line);
    }
}

class led_handler {
    static color_code = {
        "orange": "orange",
        "green": "#b9e402",
        "red": "red"
    };


    static id_ce = {
        "vr_1": { "code": led_handler.color_code.orange, "element": null },
        "vr_2": { "code": led_handler.color_code.orange, "element": null },
        "vr_3": { "code": led_handler.color_code.orange, "element": null },
        "volt_limitter_high": { "code": led_handler.color_code.orange, "element": null },
        "out_of_band_high": { "code": led_handler.color_code.orange, "element": null },
        "out_of_band_low": { "code": led_handler.color_code.orange, "element": null },
        "volt_limitter_low": { "code": led_handler.color_code.orange, "element": null },
        "auto_tap_blocked": { "code": led_handler.color_code.orange, "element": null },
        "reverse_power": { "code": led_handler.color_code.orange, "element": null },
        "volt_reduction": { "code": led_handler.color_code.orange, "element": null },
        "ud_1": { "code": led_handler.color_code.orange, "element": null },
        "ud_2": { "code": led_handler.color_code.orange, "element": null },
        "ud_3": { "code": led_handler.color_code.orange, "element": null },
        "warning": { "code": led_handler.color_code.orange, "element": null },

        "data_ports": { "code": led_handler.color_code.green, "element": null },
        "com_1_rx": { "code": led_handler.color_code.green, "element": null },
        "com_2_rx": { "code": led_handler.color_code.green, "element": null },

        "alarm": { "code": led_handler.color_code.red, "element": null },
        "diag_error": { "code": led_handler.color_code.red, "element": null },
        "com_1_tx": { "code": led_handler.color_code.red, "element": null },
        "com_2_tx": { "code": led_handler.color_code.red, "element": null },
        "drag_hand_reset": { "code": led_handler.color_code.red, "element": null },
        "super_visory_off": { "code": led_handler.color_code.red, "element": null },
    }


    static init(route) {
        const _ids = Object.keys(led_handler.id_ce);
        for (const _id of _ids) {
            led_handler.id_ce[_id].element = document.getElementById(_id)
        }
        led_handler.socket = io(route);
        led_handler.socket.on('led_state_update', (data) => { led_handler.update_states(data) });
        led_handler.socket.emit('get_cur_states', '');
    }

    static update_states(data) {
        const _ids = Object.keys(data);
        for (const _id of _ids) {
            led_handler.id_ce[_id].element.style.cssText = data[_id] ? '--border-top-color: ' + led_handler.id_ce[_id].code : '--border-top-color: white';
        }
    }
}

class keypad_handler {

    static key_props = {

        "NumpadEnter": ["keypad_enter",null],
        "ArrowUp": ["keypad_up",null],
        "ArrowDown": ["keypad_down",null],
        "ArrowLeft": ["keypad_left",null],
        "ArrowRight": ["keypad_right",null],
        "NumpadDivide": ["keypad_esc",null],
        "NumpadMultiply": ["keypad_edit",null],

        "Numpad0": ["keypad_0",null],
        "Numpad1": ["keypad_1",null],
        "Numpad2": ["keypad_2",null],
        "Numpad3": ["keypad_3",null],
        "Numpad4": ["keypad_4",null],
        "Numpad5": ["keypad_5",null],
        "Numpad6": ["keypad_6",null],
        "Numpad7": ["keypad_7",null],
        "Numpad8": ["keypad_8",null],
        "Numpad9": ["keypad_9",null],

        "NumpadSubtract": ["keypad_sym",null],
        "ShiftRight": ["keypad_func",null],

        "__super_visory_off" : ["super_visory_off",null],
        "__drag_hand_reset" : ["drag_hand_reset",null],
    };


    static init(route) {
        keypad_handler.socket = io(route)
        let opacity_level = 0;
        const key_codes = Object.keys(keypad_handler.key_props);

        key_codes.forEach(function (key_code){
            const _id = keypad_handler.key_props[key_code][0];
            if (_id == "keypad_0") opacity_level = 1;
            const ele = document.getElementById(_id);
            ele.opacity_level = opacity_level;
            // Change this to mouse down, mouse up etc..
            ele.addEventListener("click", function()  { keypad_handler.key_pressed(this) })
            keypad_handler.key_props[key_code][1] = ele;
        })


        // keyboard shortcuts
        window.addEventListener("keydown", function(event){
            const data = keypad_handler.key_props[event.code]
            if (data !== undefined){
                // emit data[0]
            }
        })

        window.addEventListener("keyup", function(event){
            // console.log(event.code);
            const data = keypad_handler.key_props[event.code]
            if (data !== undefined){
                keypad_handler.key_pressed(data[1]);
            }
        })
    }

    static key_pressed(element) {
        keypad_handler.socket.emit("key_pressed",element.id);
        element.style.opacity = 0.5;
        setTimeout(() => {
            element.style.opacity = element.opacity_level;
        }, 150);
    }

}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('lcd_screen').appendChild(screen.screen);
    lcd_screen_handler.init('/lcd_screen');
    keypad_handler.init('/keypad');
});
