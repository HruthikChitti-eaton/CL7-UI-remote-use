from flask_socketio import Namespace
from .comm import Comm 

class keypad_handler(Namespace) :   

    # Can add more later ... (Refer to enum DioKeyCodes_t in DioLibrary.h)
    codes = {
        "keypad_0"          : 0,
        "keypad_1"          : 1,
        "keypad_2"          : 2,
        "keypad_3"          : 3,
        "keypad_4"          : 4,
        "keypad_5"          : 5,
        "keypad_6"          : 6,
        "keypad_7"          : 7,
        "keypad_8"          : 8,
        "keypad_9"          : 9,
        "keypad_right"      : 15,
        "keypad_left"       : 14,
        "keypad_down"       : 13,
        "keypad_up"         : 12,
        "keypad_enter"      : 16,
        "keypad_func"       : 10,
        "keypad_sym"        : 11,
        "keypad_esc"        : 17,
        "keypad_edit"       : 18,
        "super_visory_off"  : 30,
        "drag_hand_reset"   : 31
    }

    keyCodes = list(codes.values())

    def on_key_pressed(self, data) :
        code = keypad_handler.codes.get(data, None)
        if (code) :
            Comm.serial_write(f'key {code:03d}')

    @staticmethod
    def send_keyCode(code) :
        if code in keypad_handler.keyCodes :
            Comm.serial_write(f'key {code:03d}')
            return 1 
        else : return 0