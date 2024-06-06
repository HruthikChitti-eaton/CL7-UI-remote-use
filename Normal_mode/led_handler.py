from flask_socketio import Namespace 

class led_handler(Namespace) :

    cur_states = {
        "vr_1"               : False ,
        "vr_2"               : False ,
        "vr_3"               : False ,
        "volt_limitter_high" : False ,
        "out_of_band_high"   : False ,
        "out_of_band_low"    : False ,
        "volt_limitter_low"  : False ,
        "auto_tap_blocked"   : False ,
        "reverse_power"      : False ,
        "volt_reduction"     : False ,
        "data_ports"         : False ,
        "super_visory_off"   : False ,
        "drag_hand_reset"    : False ,
        "alarm"              : False ,
        "warning"            : False ,
        "diag_error"         : False ,
        "ud_1"               : False ,
        "ud_2"               : False ,
        "ud_3"               : False ,
        "com_1_tx"           : False ,
        "com_1_rx"           : False ,
        "com_2_tx"           : False ,
        "com_2_rx"           : False ,
    }

    @staticmethod
    def init(route, socket) :
        led_handler.socket = socket
        led_handler.route = route 
        socket.on_namespace(led_handler(route))

    @staticmethod
    def set_led_state(id, state) :
        if (led_handler.cur_states.get(id, None) != None):
            led_handler.cur_states[id] = state
            led_handler.emit('led_state_update', {id:state})

    def on_get_cur_states(self, data) :
        print("Called")
        led_handler.emit('led_state_update', led_handler.cur_states)

    @staticmethod
    def emit(event, data) :
        led_handler.socket.emit(event, data, namespace=led_handler.route)