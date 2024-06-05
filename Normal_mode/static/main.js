import { io } from './libs/socket.io.js'
import lcd from './libs/lcd.js'

let screen = new lcd(4, 20);

class lcd_screen_handler { 

    static init(route){
        lcd_screen_handler.socket = io(route);
        lcd_screen_handler.socket.on('update_char',    (data) => {lcd_screen_handler.update_char(data)}); 
        lcd_screen_handler.socket.on('update_line',    (data) => {lcd_screen_handler.update_line(data)});
        lcd_screen_handler.socket.on('clear_screen',   (data) => {screen.clear_screen()});
        lcd_screen_handler.socket.on('back_light_off', (data) => {screen.back_light_off()});
        lcd_screen_handler.socket.on('back_light_on',  (data) => {screen.back_light_on()});
    }

    static update_char(data){
        screen.update_char(data.row, data.column, data.char);
    }

    static update_line(data){
        screen.update_line(data.row, data.line);
    }
    
}

class Inputs {
    static ids =    ["keypad_enter", "keypad_up", "keypad_down", 
                            "keypad_left", "keypad_right", "keypad_esc", "keypad_edit", 
                            "keypad_1", "keypad_2", "keypad_3", 
                            "keypad_4", "keypad_5", "keypad_6", 
                            "keypad_7", "keypad_8", "keypad_9", 
                            "keypad_func","keypad_0", "keypad_sym"];
    static elements = [];

    static init(route){
        Inputs.socket = io(route)
        Inputs.ids.forEach(function(_id){
            let ele = document.getElementById(_id);
            ele.addEventListener("click", function(){
                Inputs.socket.emit('no_comb',_id);
                console.log(_id)
            });
            Inputs.elements.push(ele);
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('lcd_screen').appendChild(screen.screen);
    lcd_screen_handler.init('/lcd_screen');
    Inputs.init('/inputs');
});